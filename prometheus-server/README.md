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
docker run --rm -d --network=host <image-name>
```

* **-network=host** takes the network configuration from the host machine the container is running on instead of the own container network.

* **Important if you are using MacOS**. There are some issues with Docker in this OS, mostly with the `--network` option which is not working. There are two possible approaches to follow in order to avoid this problem:

1. You can expose only the 9090 port, because is the one being used:

```
docker run --rm -d -p 9090:9090 <image-name>
```

2. You can create a bridge network connection before hand and then use this network configuration as it is explained [in this post](https://stackoverflow.com/questions/52555007/docker-mac-alternative-to-net-host)

For prometheus you may have to change the targets it is pointing to (by default is taking ip "localhost:9000"). So for this task you should do the following. Once your Prometheus docker container is running:

```
docker exec -it <container-name> /bin/sh
```

You will be inside of the container and you have to go `/etc/prometheus/targets.json` file. You need to edit it using `vi`.
To add more targets, where you can see "localhost:9000", add the IPs you want to scan in the same way (between double quotes and separated by commas, all of them inside the squared brackets). And that's all, you don't need to restart, Prometheus will be updated automatically.
