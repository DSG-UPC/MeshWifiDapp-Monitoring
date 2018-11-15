# Prometheus Server 
Basic scraper to retrieve the forwarded bytes (in/out) on a given system. The scraper is a basic Node.js script that exposes the data on a given port (9000 by default) so that Prometheus can make API calls to get the data.
Uses the following packages:

* [ExpressJS](https://expressjs.com/es/) Minimal and flexible Node.js web application framework
* [node-proc](https://www.npmjs.com/package/node-proc) Module to access /proc data on Linux system

## Building the image
Move to the folder containing the Dockerfile and execute the following command.

```
docker build -t <image-name> .
```

## Running on a container

Once the image is built, you can execute the server as follows.

```
docker run -p 9090:9090 -d <any-name>
```

* **-p** binds a port from our machine to a port on the docker container (machine-port:docker-port)