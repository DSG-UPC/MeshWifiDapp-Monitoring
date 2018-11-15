# MeshWifi_Monitoring
This repository contain the monitoring part of the project. It is divided into two parts:

* A basic scraper to retrieve the forwarded bytes (in/out) of each node. This process will be executed as a daemon and will     expose the data over an API.
* Prometheus Dockerfile to start a standalone server in seconds. Once running, this server will make API calls to the           different nodes periodically to obtain the data that will be used to compute the rewards for these nodes.

Each folder contains its own README explaining the needed steps to execute the module.