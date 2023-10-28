# Docker Fundamentals

## What is Docker?

Docker is a platform that utilizes OS-level virtualization to deliver software in packages called containers.

## Containers

Containers are lightweight, standalone, and executable packages of software that include everything needed to run a specific application: the code, runtime, libraries, environment variables, and config files. They aim to resolve the "it works on my machine" problem by creating consistent environments for applications.

**Characteristics:**

- **Portability:** Containers are portable across different systems and cloud environments.
- **Consistency:** They ensure that applications run the same regardless of where they are deployed.
- **Isolation:** Containers provide an isolated environment for applications, separating them from other containers and the host system.
- **Efficiency:** They are more resource-efficient compared to traditional virtual machines as they share the host system's OS kernel, rather than emulating an entire operating system.

## Docker vs. Virtual Machines

Docker and Virtual Machines (VMs) are both technologies used to create isolated environments for applications, but they operate at different levels of the system architecture and have different characteristics. Here's a comparison based on various factors:

### 1. **Level of Abstraction:**

- **Docker (Containers):** Docker operates at the OS-level, sharing the host system's OS kernel with other containers. Each container encapsulates the application and its dependencies, but not an entire OS.
- **Virtual Machines (VMs):** VMs operate at the hardware level, emulating a complete set of hardware resources. Each VM has its own full-fledged OS, independent from the host system.

### 2. **Performance:**

- **Docker:** Generally, containers are more lightweight and start faster since they share the host OS kernel and avoid the overhead of booting an entire OS.
- **VMs:** VMs have more overhead due to the emulation of hardware resources and the requirement to run a full OS, which can lead to slower startup times and higher resource consumption.

### 3. **Isolation:**

- **Docker:** Containers provide process and file system isolation, which is often sufficient for isolating applications and services from each other.
- **VMs:** VMs provide a higher level of isolation since they have their own OS, network interfaces, and virtual hardware.

### 4. **Portability:**

- **Docker:** Containers are highly portable as they encapsulate all the dependencies an application needs to run. This makes it easy to move applications across different environments.
- **VMs:** VMs are less portable due to the tight coupling with the underlying OS and hardware configurations.

### 5. **Management and Orchestration:**

- **Docker:** Docker can be used with orchestration tools like Kubernetes for managing and scaling containerized applications.
- **VMs:** VMs can be managed using hypervisor platforms like VMware or Hyper-V, which also provide some orchestration capabilities but are often more complex to manage compared to container orchestration platforms.

### 6. **Use Cases:**

- **Docker:** Ideal for microservices architectures, stateless applications, and scenarios where fast scaling and portability are important.
- **VMs:** Better suited for monolithic applications, legacy systems, or situations where full isolation or OS-level segregation is required.

### 7. **Security:**

- **Docker:** While containers provide a level of isolation, they might be less secure than VMs due to the shared OS kernel.
- **VMs:** VMs are often considered more secure due to the higher level of isolation and separation they provide.

Here's a comparison of Docker and Virtual Machines (VMs) in a tabular format:

| Feature                       | Docker (Containers)                                           | Virtual Machines (VMs)                                        |
|-------------------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| Level of Abstraction          | OS-level (Shares host OS kernel)                             | Hardware-level (Complete set of hardware resources emulated)  |
| Performance                   | Higher (Lightweight, faster startup)                         | Lower (More overhead, slower startup)                         |
| Isolation                     | Process and file system isolation                            | Full OS, network, and hardware-level isolation                |
| Portability                   | High (Encapsulates application and dependencies)            | Lower (Tied to underlying OS and hardware configurations)    |
| Management and Orchestration  | Easier with tools like Kubernetes                            | More complex, managed via hypervisors like VMware or Hyper-V |
| Use Cases                     | Microservices, stateless applications, fast scaling         | Monolithic applications, legacy systems, full isolation      |
| Security                      | Lower (Shared OS kernel might be a risk)                     | Higher (Better isolation and separation)                      |

## Docker Images

A Docker image is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software: the code, runtime, libraries, environment variables, and config files.

**Characteristics:**

- **Immutable:** Once created, images are unchangeable, and any changes lead to the creation of a new image.
- **Portability:** They are portable and can be shared across different environments.
- **Version Control:** Images can be versioned and stored in image registries like Docker Hub or private registries.

## Docker Container

A Docker container is a runnable instance of a Docker image. When you run an image, Docker creates a container from that image.

**Characteristics:**

- **Encapsulation:** Containers encapsulate the application and its dependencies, providing an isolated environment for running the application.
- **Transience:** Containers can be started, stopped, and destroyed dynamically, with changes inside a container being preserved only if explicitly committed back to an image.
- **Performance:** They are lightweight and fast, as they share the host system's kernel, rather than emulating the entire operating system.

**Lifecycle:** The lifecycle of a container is managed by Docker commands or container orchestration platforms like Kubernetes.

## Comparison of Docker Image and Container

| Feature          | Docker Image                                                   | Docker Container                                      |
|------------------|---------------------------------------------------------------|-------------------------------------------------------|
| Immutability     | Images are immutable.                                         | Containers are transient.                             |
| Template/Instance| An image serves as a template for creating containers.        | A container is a running instance of an image.        |
| Build/Run        | Images are built once and can be used to create multiple containers. | Containers are run, stopped, and destroyed dynamically. |
| Storage          | Images are stored in registries.                               | Containers exist on the host machine where they are run. |

## Docker Compose

Docker Compose is a tool designed to help users define and manage multi-container Docker applications. It simplifies the process of configuring and running multiple containers together in a coordinated fashion.

## Docker Hub

Docker Hub is a cloud-based registry service which allows you to link to code repositories, build your images and test them, store manually pushed images, and link to Docker Cloud so you can deploy images to your hosts.

## Architecture

Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

![Docker Architecture](./assets/docker-architecture.png)

### Docker Client

Docker Client is the primary user interface to Docker. It accepts commands from the user and communicates back and forth with a Docker daemon to carry out these commands.

### Docker Daemon

The Docker daemon (dockerd) is a persistent background process that manages Docker containers on a host system. It's crucial for executing Docker commands issued by the user or by automated scripts. It communicates with the Docker client through a REST API, a UNIX socket, or a network interface. The Docker client issues commands to the daemon, which then executes these commands.
