# MeshWifi_Monitoring
This repository contain the monitoring part of the project. It is divided into two parts:

* A basic scraper to retrieve the forwarded bytes (in/out) of each node. This process will be executed as a daemon and will     expose the data over an API.
* Prometheus Dockerfile to start a standalone server in seconds. Once running, this server will make API calls to the           different nodes periodically to obtain the data that will be used to compute the rewards for these nodes.
* CRUD app to edit the file targets.json. This file allows Prometheus to analyze dynamically targets (the targets may leave the net, new ones may appear, they may change, ...).

Each folder contains its own README explaining the needed steps to execute the module.

## Docker deployment

Both services are integrated with Docker, so make sure that if you want to use them (at least Prometheus server), you have [docker installed](https://docs.docker.com/install/))
