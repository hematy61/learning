# Node

A Kubernetes node is a machine, physical or virtual, where Kubernetes deploys containers. Each node contains the services necessary to run Pods (groups of containers), managed by the control plane. Nodes contain the container runtime, kubelet, and kube-proxy to manage and facilitate container operations, ensuring they align with the desired cluster state defined by the user.

## Components of a Kubernetes Node

- **Kubelet:** The primary agent running on each node that ensures the containers are running in a Pod.
- **Container Runtime:** The software responsible for running containers, such as Docker or containerd.
- **Kube Proxy:** A network proxy running on each node to handle network communication and load balancing across the containers and nodes.

## Types of Nodes

- **Worker Nodes:** These nodes run the applications and workloads. Each worker node runs the necessary services to manage the networking between the containers, communicate with the master node, and assign resources to the containers scheduled.
- **Control Planes (Master Nodes):** These nodes manage the Kubernetes cluster and control the worker nodes.

## Node Management

Nodes are managed by the Control Planes, which use the Kubernetes API to control and monitor them. Node status, workload scheduling, and workload orchestration are handled by components on the Control Plane.

## Node Selection

When deploying workloads, you can specify node selectors and affinities to dictate which nodes should host certain containers based on criteria like resources, labels, or taints and tolerations.

## Node Monitoring and Maintenance

Monitoring tools can provide insights into resource utilization, node health, and performance. Nodes can be maintained, upgraded, or decommissioned based on the needs of the environment.

## Resource Allocation

Resources like CPU, memory, and storage on each node are shared among the containers running on it. Kubernetes can enforce resource quotas and limits to ensure fair resource usage across all nodes and workloads.

In summary, a Kubernetes node is a machine, VM, or physical server that hosts containerized applications managed by Kubernetes. Nodes are where your workloads actually run, and they communicate with the master components to report status and receive instructions.
