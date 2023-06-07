FROM node:18 as build-step
WORKDIR /app
# ENV PATH /client/node_modules/.bin:$PATH
COPY /client/package.json /client/package-lock.json ./
# COPY ./src ./src
# COPY ./public ./public
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000

# Build step #2: build the API with the client as static files
FROM python:3.9
WORKDIR /app
COPY --from=build-step /app/build ./build
COPY . /app
# RUN mkdir ./api
COPY flask-server/requirements.txt flask-server/server.py flask-server/.env ./flask-server/
RUN pip install -r ./flask-server/requirements.txt
ENV env production


# WORKDIR /app/api
CMD ["gunicorn", "-b", ":3000", "server:app"]