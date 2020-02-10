from typing import List, Dict
from statistics import mean


class Results(object):

    def __init__(self, total_time: float, requests: List[Dict]):
        self.total_time = total_time
        self.requests = sorted(requests, key=lambda r: r["request_time"])

    def slowest(self) -> float:
        return self.requests[-1]["request_time"]

    def fastest(self) -> float:
        return self.requests[0]["request_time"]

    def average_time(self) -> float:
        return mean([r["request_time"] for r in self.requests])

    def requests_per_min(self) -> int:
        # 3 / 10.6 = x / 60
        # 60 * 3 / 10.6 = x
        return round(60 * len(self.requests) / self.total_time)

    def requests_per_sec(self) -> float:
        # 4 / 3.5 = x / 1
        return round(len(self.requests) / self.total_time)

    def successfull_requests(self) -> int:
        return len([r for r in self.requests if r["status_code"] in range(200, 299)])
