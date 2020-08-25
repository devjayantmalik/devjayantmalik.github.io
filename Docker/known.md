# Basic Commands

| Command                                      | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `docker images`                              | Lists all the available images on host                       |
| `docker ps`                                  | Lists all the running containers                             |
| `docker ps -a`                               | Lists all the containers including exited and others types   |
| `docker logs container_name/container_id`    | View logs of a running container                             |
| `docker inspect container_name/container_id` | Prints detailed information about a container in json format |

# Starting or Stopping Containers

| Command                                             | Description                                                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `docker run -p host_port:container_port image_name` | Starts container and maps specified network port of container on the host port                                    |
| `docker run -e ENV=VALUE image_name`                | Sets the provided environment variable and starts the image.                                                      |
| `docker run -i image_name`                          | Starts the container in an interactive mode, means it allows the container to accept inputs via our terminal      |
| `docker run -it image_name`                         | Maps the current terminal to the container and starts it, means container uses your terminal for output and input |
| `docker run image_name --name app_name`             | Runs the app and provides custom name to it.                                                                      |
| `docker run image_name`                             | Runs a container based on provided image                                                                          |
| `docker start image_name`                           | Starts a stopped or exited docker container                                                                       |
| `docker run image_name:tag`                         | Runs a container based on provided image and tag                                                                  |
| `docker run -d image_name`                          | Runs a container in de-attached mode.                                                                             |
| `docker stop container_name/container_id`           | Stops a running container                                                                                         |
| `docker run --entrypoint command image_name`        | Starts the container with provided entrypoint command.                                                            |

# Removing or Downloading Images and Containers

| Command                                 | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| `docker rm container_name/container_id` | Removes a container with its data                          |
| `docker pull image_name`                | Downloads a images with provided image_name and latest tag |
| `docker pull image_name:tag`            | Downloads a images with provided image_name and tag        |
| `docker rmi image_name/image_id`        | Removes a image from base os                               |

# Creating Images

| Command                                               | Description                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `docker build -t image_name dockerfile_directory`     | Search for dockerfile in provided dockerfile_directory and creates a docker image with latest tag |
| `docker build -t sample-app .`                        | Creates docker image using dockerfile in current directory with latest tag                        |
| `docker build -t image_name:tag dockerfile_directory` | Creates docker image with provided tag name                                                       |

# Networkng Commands

| Command                                                                                   | Description                                                      |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `docker network ls`                                                                       | Lists all the networks                                           |
| `docker network --help`                                                                   | Prints help related to network operations                        |
| `docker network create network_name`                                                      | Create a network with provided name                              |
| `docker network rm network_name/network_id`                                               | Removes a network with provided network name or network id       |
| `docker inspect container_name`                                                           | Use this command to figure out network used by container.        |
| `docker network create --subnet=ip_address/range --gateway=ip_address/range network_name` | Creates and configures network with provided subnet and gateway. |
| `docker network inspect network_name`                                                     | Prints details about the network                                 |
| `docker run --network=network_name container_name`                                        | Starts a container with provided network name.                   |

# Volumes

| Command                                                                     | Description                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docker run -v host_volume_name:/path/on/container image_name`              | Starts the container with provided image name and mounts the volume on the host to the path on the container. This will store all the data on the host instead of container. (host_volume_name is created at: /var/lib/docker/volumes) |
| `docker run --mount type=bind,source=/opt/data,target=/var/lib/mysql mysql` | Starts a container and mounts `/var/lib/mysql` on the container to `/opt/data` on the docker host with the type bind.                                                                                                                  |
| `docker volume create volume_name`                                          | Creates a new volume in `/var/lib/docker/volumes`                                                                                                                                                                                      |

Bind and connects are:

- Bind connects the path on the docker host to the path on the container, whereas
- Volume mount connects the volume directory created at `/var/lib/docker/volumes` on the host to the provided path on the container.

The difference is:

- Bind Mount takes the full path to the host storage directory
- Volume Mount takes the name of the volume present in `/var/lib/docker/volumes` directory.

# Points

- Docker creates three networks by default on installation: bridge, host, none.

# Terms

<dl>
    <dt>Subnet</dt>
    <dd>A sub network is a network inside a network. Through subnetting network traffic can travel shorter distances. In docker it helps containers to communicate with one another internally.</dd>
    <dt>Gateway</dt>
    <dd>A network gateway is a virtual or physical device, that helps to transfer from one network to another network. In docker it helps to connect containers internal network to host network.</dd>
    
</dl>
