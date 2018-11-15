# Prometheus Server 
Prometheus Dockerfile to start a standalone server in seconds. Once running, this server will make API calls to the           different nodes periodically to obtain the data that will be used to compute the rewards for these nodes.

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