# Prometheus Scraper 
Basic scraper to retrieve the forwarded bytes (in/out) on a given system. The scraper is a basic Node.js script that exposes the data on a given port (9000 by default) so that Prometheus can make API calls to get the data.
Uses the following packages:

* [ExpressJS](https://expressjs.com/es/) Minimal and flexible Node.js web application framework
* [node-proc](https://www.npmjs.com/package/node-proc) Module to access /proc data on Linux system

## Run in local
```
npm install && npm start
```

The API calls are secured with a secret token to avoid unauthorized access.

## Deploying on a Docker container

Move to the folder containing the Dockerfile (and be sure to have [docker installed](https://docs.docker.com/install/) )

```
docker build -t <any-name> .
docker run -p 9000:9000 -d <any-name>
```