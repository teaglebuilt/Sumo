FROM node:alpine as builder
COPY . ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:production"]