---
puppeteer:
  printBackground: true
export_on_save:
    puppeteer: true
---

# CQL (Cassandra Query Language)

CQL (Cassandra Query Language) is a query language for interacting with the Apache Cassandra database. It is similar to SQL in its syntax and provides a familiar way to create, read, update, and delete data in Cassandra. CQL is designed to work with Cassandra's distributed architecture and provides a simplified interface for developers and administrators.

## Key Concepts of CQL

- **Keyspaces**: A keyspace in Cassandra is similar to a database in SQL. It's the top-level container for data and defines replication and durability settings.
- **Tables**: Within keyspaces, data is stored in tables. Tables define columns and primary keys.
- **Primary Keys**: The primary key is a defining characteristic of how data is stored and accessed. It includes partition keys and optional clustering columns.
- **Columns**: Tables contain columns, each with a specified data type. Columns store the actual data values.

```nomnoml {kroki=true}
#spacing: 60
#direction: right
#fill: #f7f7f7; #e1e1e1
#stroke: #000000bd
[<frame> Cluster |
    [<frame>Node A1|
    [<database>Keyspace: social_media|
      [Table: users]
      [Table: posts]
    ]
  ] -- [<frame>Node B1|
    [<database>Keyspace: social_media|
      [Table: users]
      [Table: posts]
    ]
  ]

]
```

```nomnoml {kroki=true}
#spacing: 60
#direction: right
#fill: #f7f7f7; #e1e1e1
#stroke: #000000bd
[<frame> Cluster |
    [<frame>Node A1|
    [<database>Keyspace: social_media|
      [Table: users|
        [Row: ;user_id=1; name='Alice'; email='alice@example.com']
        [Row: ;user_id=2; name='Bob'; email='bob@example.com']
      ]
      [Table: posts|
        [Row: ;post_id=1 ;user_id=1; content='Hello World']
        [Row: ;post_id=2, ;user_id=2; content='My first post']
      ]
    ]
  ] -- [<frame>Node B1|
    [<database>Keyspace: social_media|
      [Table: users|
        [Row: ;user_id=3; name='Charlie'; email='charlie@example.com']
        [Row: ;user_id=4; name='Dana'; email='dana@example.com']
      ]
      [Table: posts|
        [Row: ;post_id=3 ;user_id=3; content='Another day in paradise']
        [Row: ;post_id=4 ;user_id=4; content='Cassandra is awesome']
      ]
    ]
  ]
]
```

## Basic CQL Operations

CQL supports a variety of operations for creating, reading, updating, and deleting data. Here are some common operations:

### Creating a Keyspace

```sql
CREATE KEYSPACE social_media WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
};
```

When creating a keyspace, you can specify replication settings to define how data is distributed and replicated across the cluster. This example creates a keyspace named `social_media` with a replication factor of 3, using the `SimpleStrategy` for replication. Other replication strategies are available, such as `NetworkTopologyStrategy` which allows for more fine-grained control over replication.

**Replication Factor**
The replication factor determines the number of copies of data that are stored across the cluster. A higher replication factor provides greater fault tolerance and availability but requires more storage and network resources.

### Creating a Table

```sql
CREATE TABLE social_media.users (
    user_id uuid PRIMARY KEY,
    name text,
    email text,
    created_at timestamp
);
```

This command creates a table named `users` within the `social_media` keyspace. The table has columns for user ID, name, email, and join date.

### Inserting Data

```sql
INSERT INTO social_media.users (user_id, name, email, join_date)
VALUES (uuid(), 'John Doe', 'john.doe@example.com', toTimestamp(now()));
```

Inserts a new user into the `users` table with a generated UUID, name, email, and the current timestamp as the join date.

### Querying Data

```sql
SELECT * FROM social_media.users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;
```

Retrieves all information for the user with the specified UUID.

### Updating Data

```sql
UPDATE social_media.users SET name = 'Jane Doe' WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;
```

Updates the name of the user with the given UUID.

### Deleting Data

```sql
DELETE FROM social_media.users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;
```

Deletes the user with the specified UUID from the `users` table.

## Considerations

### Operations to Use Sparingly

1. **Secondary Index Queries**: Queries on secondary indexes can be less efficient than queries on primary keys because they might not be evenly distributed across the cluster, leading to potential hotspots and increased latency.

2. **Allow Filtering**: Using `ALLOW FILTERING` allows queries to bypass the usual restrictions on querying non-primary key columns, but it can lead to full table scans, which are resource-intensive and slow, especially on large datasets.

3. **Updates and Deletes on Wide Rows**: Cassandra does not immediately remove data on updates and deletes; it marks the data with a tombstone. Performing many updates or deletes, especially on wide rows (rows with a large number of columns or a large amount of data), can lead to a buildup of tombstones, impacting read performance until compaction occurs.

4. **Lightweight Transactions (LWTs)**: LWTs offer serial consistency but at a high performance cost. They involve a more complex consensus mechanism and should be used only when necessary.

### Operations to Use More Freely

1. **Inserts and Appends**: Cassandra excels at write operations. It's designed to handle high write throughput efficiently, thanks to its log-structured merge-tree (LSM tree) storage engine. Inserts (including updates that are effectively inserts) and appends to lists or sets are generally fast operations.

2. **Reads by Partition Key**: Queries that specify the partition key are highly efficient because Cassandra can quickly locate the data on the appropriate node(s) without scanning unrelated data.

3. **Batch Writes**: Batch operations that insert or update data across multiple rows in the same partition can be efficient because they minimize the number of round trips. However, it's important to use them judiciously and not to batch operations across many partitions excessively, as this can lead to uneven load distribution.

4. **Use of Prepared Statements**: Prepared statements are pre-compiled CQL queries that save parsing and planning time, making subsequent executions of the same query faster and more efficient.