FROM node:18 as build-step
WORKDIR /app
# ENV PATH /client/node_modules/.bin:$PATH
# COPY ./src ./src
# COPY ./public ./public
COPY ./client /app
COPY /client/package.json /client/package-lock.json /client/public/index.html ./
RUN npm install
RUN npm run build


# Build step #2: build the API with the client as static files
FROM python:3.9
WORKDIR /app
# COPY --from=build-step /app/build ./build
COPY ./flask/server /app
# RUN mkdir ./api
COPY flask-server/requirements.txt flask-server/server.py flask-server/.env ./flask-server/
RUN pip install -r ./flask-server/requirements.txt
ENV env production


# WORKDIR /app/api
# EXPOSE 3000
CMD ["gunicorn", "-b", "--host=0.0.0.0", "server:app"]