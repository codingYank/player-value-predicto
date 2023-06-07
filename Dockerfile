FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /client/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm install
RUN npm run build

# Build step #2: build the API with the client as static files
FROM python:3.9
WORKDIR /app
COPY --from=build-step /app/build ./build

RUN mkdir ./api
COPY flask-server/requirements.txt flask-server/server.py flask-server/.env ./flask-server/
RUN pip install -r ./flask-server/requirements.txt
ENV env production

EXPOSE 3000
WORKDIR /app/api
CMD ["gunicorn", "-b", ":3000", "server:app"]