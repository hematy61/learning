
# Cluster

A Kubernetes cluster is a set of machines, called nodes, that run containerized applications managed by Kubernetes. A cluster consists of at least one worker node and at least one master node.

## Master Node(s)

The Master Node (or sometimes just called the master) serves as the control plane that manages the state of the cluster. It's responsible for maintaining the desired state of the cluster, such as which applications should be running and which container images they should use.

- **Control Plane:** The master node hosts the control plane which manages the cluster.
- **API Server:** Serves the Kubernetes API and is the entry point for commands.
- **Scheduler:** Assigns work, in the form of pods, to worker nodes.
- **Controller Manager:** Regulates the state of the cluster to match the desired state.
- **etcd:** A consistent and highly-available key-value store for all cluster data.

## Worker Node(s)

- **Kubelet:** An agent that ensures containers are running in a Pod.
- **Kube Proxy:** Maintains network rules for Pod communication.
- **Container Runtime:** Software for running containers, e.g., Docker or containerd.

## Networking

Ensures a unique IP address for each Pod and establishes a process to name, discover, and connect with application services.

## Storage

Enables storage resources to be available to applications in a uniform manner, regardless of the underlying storage technology.

## Service Discovery and Load Balancing

Allows applications and services within the Kubernetes cluster to find and communicate with each other.

## Auto-Scaling and Self-Healing

Automatically adjusts the number of running instances based on traffic volume, and replaces failed instances to maintain the desired state.

## Configuration and Secret Management

Manages sensitive information and configurations for applications securely.

## Monitoring and Logging

Monitors the health and performance of nodes and applications, and collects and stores logs for analysis.

## Security

Provides authentication, authorization, and encryption features to ensure the security of the cluster and its applications.

In summary, a Kubernetes cluster is a system for orchestrating containerized applications across a set of nodes, ensuring they run as intended, and providing mechanisms for deployment, scaling, and managing the application life cycle.
