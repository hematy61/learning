# Fundamentals of Kubernetes

## Terminology

**Operating System (OS):**
The operating system is software that serves as the interface between computer hardware and the user. It manages hardware resources, schedules tasks, and provides various services and utilities to enable software applications to run.

**Kernel:**
The kernel is the core part of the operating system that provides fundamental services such as process management, memory management, device management, and system calls handling. It operates in a privileged mode, meaning it has direct access to hardware and system resources.

**OS Kernel:**
This term simply combines the two above, emphasizing that the kernel is a part of the operating system. It's a way of referring to the kernel within the context of the operating system.

## Container orchestration

Container orchestration automates the deployment, scaling, management, and networking of containerized applications. It's essential for managing the lifecycle of containers in large, distributed systems.

### Key Functions

- **Deployment:** Automates the deployment of containers based on predefined configurations.
- **Scaling:** Automatically scales applications by adding or removing containers based on the load.
- **Health Monitoring:** Monitors the health of containers and replaces faulty instances to ensure reliability.
- **Networking:** Manages communication between containers across different hosts or clusters.
- **Load Balancing:** Distributes network traffic across many containers to ensure no single container becomes a bottleneck.
- **Service Discovery:** Allows containers to discover and communicate with each other in a dynamic environment.
- **Resource Allocation and Management:** Ensures optimal utilization of resources across the cluster.
- **Configuration and Secret Management:** Manages application configurations and sensitive information securely.

### Popular Orchestration Tools

- **Kubernetes:** An open-source platform that's become the industry standard for container orchestration.
- **Docker Swarm:** Docker's native orchestration solution which is integrated with Docker CLI and is easier to set up compared to Kubernetes.
- **Amazon ECS (Elastic Container Service):** A fully managed container orchestration service provided by Amazon Web Services.
- **Azure Kubernetes Service (AKS):** A managed Kubernetes service provided by Microsoft Azure.
- **Apache MESOS:** An open-source orchestration platform that can run Docker containers and other workloads.

### Benefits

- **Efficiency:** Increases operational efficiency by automating many manual processes.
- **Reliability:** Enhances reliability through self-healing mechanisms that maintain the desired state.
- **Scalability:** Facilitates both manual and automatic scaling to handle varying loads.
- **Consistency:** Ensures consistent environments from development through to production.

## Kubernetes Architecture and Components

Kubernetes architecture
An illustration of kubernetes architecture:
![kubernetes architecture](./assets/Kubernetes-Architecture.png)

### Control Plane (Master Node)

The Control Plane manages the state of the Kubernetes cluster and orchestrates container deployment and scaling.

**API Server (kube-apiserver):**
Serves as the gateway for REST commands used to control the cluster, processing and validating requests.

**Controller Manager (kube-controller-manager):**
Ensures the cluster's current state matches the desired state by controlling different entities within the cluster.

**Scheduler (kube-scheduler):**
Assigns work, in the form of pods, to worker nodes based on resource availability and other constraints.

**etcd:**
A key-value store for all cluster data, ensuring configuration and state data consistency across the cluster.

### Node Components (Worker Node)

Node components run on every node, maintaining running pods and providing the runtime environment.

**Kubelet:**
An agent that ensures containers are running in a pod as per the specifications.

**Container Runtime:**
The software responsible for running containers, such as Docker or containerd.

**Kube Proxy:**
Manages network communication to and from containers by maintaining network rules on nodes.

### Core Abstractions

**Pods:**
The smallest deployable units in Kubernetes that host one or more containers which work together.

**Services:**
Abstractions that define a logical set of Pods and enable external traffic exposure, load balancing, and service discovery.

**Volumes:**
Directories accessible to containers in a Pod, allowing data persistence across container restarts.

**Namespaces:**
Virtual clusters within a physical cluster, allowing for resource segregation among different users or teams.
