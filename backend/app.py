from flask import Flask, render_template, session, request, jsonify
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
from random import randrange
import asyncio
import requests
import time
import os


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
app.config['DEBUG'] = True
socketio = SocketIO(app, cors_allowed_origins='*')
CORS(app)


# @socketio.on('connect')
# def connect():
#     print('connected')
# while True:
#     send_data = {
#         'e': randrange
#     }
#     emit('draw', send_data)
#     time.sleep(0.5)


@socketio.on('outgoing')
def execute(data):
    print(data)
    time, request_dict = entrypoint(data["host"], int(
        data["requests"]), int(data["concurrency"]))
    response = {
        "time": time,
        "requests": request_dict
    }
    emit('incoming', response, broadcast=True)


def entrypoint(url, requests, concurrency):
    results = []
    total_time = asyncio.run(distribute_work(
        url, requests, concurrency, results))
    return (total_time, results)


async def distribute_work(url, requests, concurrency, results):
    queue = asyncio.Queue()

    for _ in range(requests):
        queue.put_nowait(url)

    tasks = []  # create a list to hold our task instances/workers
    for i in range(concurrency):
        task = asyncio.create_task(worker(f"worker-{i+1}", queue, results))
        tasks.append(task)

    started_at = time.monotonic()
    await queue.join()
    total_time = time.monotonic() - started_at

    for task in tasks:
        task.cancel()

    return total_time


async def worker(name, queue, results):
    """ grabs request from queue and adds to to result list"""
    loop = asyncio.get_event_loop()
    while True:
        url = await queue.get()
        future_result = loop.run_in_executor(None, fetch, url)

        result = await future_result
        results.append(result)

        queue.task_done()


def fetch(url):
    started_at = time.monotonic()
    response = requests.get(url)
    request_time = time.monotonic() - started_at
    return {"status_code": response.status_code, "request_time": request_time}


if __name__ == '__main__':
    socketio.run(app, debug=True, host='localhost', port=8000)
