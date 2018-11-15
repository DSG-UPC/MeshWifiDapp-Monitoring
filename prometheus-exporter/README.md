# Prometheus Scraper 
Prometheus Dockerfile to start a standalone server in seconds. Once running, this server will make API calls to the           different nodes periodically to obtain the data that will be used to compute the rewards for these nodes.

## Recommended configuration to run
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