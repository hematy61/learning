# Introduction

Apache Cassandra is a highly scalable, high-performance distributed database designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. It is a type of NoSQL database.

Cassandra provides a structured key-value store with eventual consistency. "Eventual consistency" means that updates to a database will propagate to all nodes in a cluster, eventually.

Cassandra's distribution design is based on Amazon's Dynamo and its data model on Google's Bigtable. Created at Facebook, it differs from relational database management systems in many fundamental ways.

Key features of Cassandra include:

- **Distributed**: Every node in the cluster has the same role. There is no single point of failure. Data is distributed across the cluster (but can be replicated based on the application needs).
- **Scalable**: New nodes can be added to a running cluster easily for increasing capacity.
- **Fault-tolerant**: Data is automatically replicated to multiple nodes for fault-tolerance. Replication across multiple data centers is supported.
- **Tunable consistency**: Cassandra provides tunable data consistency. For example, you can choose between reading outdated data and waiting.
- **MapReduce support**: Cassandra has Hadoop integration, with MapReduce support. There is support also for Apache Pig and Apache Hive.
- **Query language**: Cassandra introduced CQL (Cassandra Query Language), a SQL-like language, to interact with the database.
- **Flexible schema**: Cassandra allows you to evolve your schema as your application evolves.

Cassandra is used by a number of organizations including Apple, Facebook, Twitter, Cisco, Rackspace, ebay, Twitter, Netflix, and more.

## Cassandra Instance

An **instance** typically refers to a single deployment of Cassandra running on a node (server). Each node in a cluster runs an instance of Cassandra. This instance is responsible for managing a portion of the data in the cluster, participating in the cluster's operations, handling client requests, and interacting with other instances (nodes) within the cluster to ensure data consistency, availability, and partition tolerance.

## Cluster

A **cluster** in Cassandra is the entire network of nodes (servers) that participate in a Cassandra instance. It's the highest-level container in the architecture of Cassandra that represents the whole database system. A cluster consists of one or more data centers, which can be physical or virtualized, and are typically structured to support replication and redundancy for fault tolerance, performance, and scalability.

Clusters manage the distribution of data across nodes through the use of a partitioning strategy, where data is partitioned and replicated across multiple nodes to ensure durability and high availability. Cassandra uses a peer-to-peer distributed system design, where each node in the cluster can serve read and write requests without the need for a master node, enabling linear scalability and robustness.

Cassandra clusters have several key features:

- **Distributed Architecture**: Data is distributed across all nodes in the cluster, with support for replicating data across multiple nodes for fault tolerance.
- **Decentralized**: Every node in a Cassandra cluster can serve read and write requests, without a master-slave hierarchy, which eliminates bottlenecks and single points of failure.
- **Scalability**: Cassandra clusters can scale horizontally, meaning you can increase capacity by adding more nodes to the cluster without downtime.
- **Replication**: Cassandra provides flexible options to configure how data is replicated among nodes in the cluster to ensure data availability and durability.

## Nodes

A **node** is a single machine (server) in a Cassandra cluster. Each node stores a portion of the cluster's data and participates in the cluster's operations. Nodes are where the data is actually stored, and they work together to provide the functionality of the database. The key characteristics of a node in Cassandra include:

- **Data Storage**: Each node contains a subset of the cluster's data, determined by the cluster's partitioning scheme. Cassandra uses a consistent hashing mechanism to distribute data across nodes.
- **Peer-to-Peer Architecture**: Nodes communicate with each other as peers, without any hierarchical master-slave relationships, making the system highly resilient and ensuring no single point of failure. Nodes communicate with one another through a protocol called **gossip**, which is a process of computer peer-to-peer communication.
- **Replication**: Nodes participate in data replication according to the defined replication strategy, which specifies how many copies of data should exist and how they are distributed across the cluster. This is critical for fault tolerance and data availability.
- **Request Handling**: Nodes can handle client requests for both reads and writes. In the event of a node failure, other nodes can take over its responsibilities, ensuring continuous availability of the service.

In summary, a cluster is the whole Cassandra database system, while nodes are the individual servers that store data and participate in the cluster's distributed operations. Together, they form the basis of Cassandra's architecture, enabling it to provide a highly available, scalable, and fault-tolerant data storage solution.