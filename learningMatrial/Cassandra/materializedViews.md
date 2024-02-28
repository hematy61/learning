# Materialized Views

Materialized Views in Apache Cassandra are a powerful feature that automatically maintains a view of data from a base table, but with a different primary key, potentially also filtering and transforming the data. This allows for more flexible query patterns without the need to manually manage data duplication and consistency. Materialized Views handle the synchronization between the view and the base table automatically, ensuring that changes in the base table (inserts, updates, deletes) are reflected in the Materialized View.

**Automatic Update**: Materialized views stay in sync with the base table, updating as data changes.
**Use Case**: Ideal for scenarios where you need to query the same data in different ways, based on different keys.

## How Materialized Views Work

When you create a Materialized View, Cassandra takes the data from a base table and populates the view based on the definition you provide. This definition includes the new primary key for the view (which must include all the columns of the base table's primary key) and can also specify a subset of columns and a filter condition.

Materialized Views are updated asynchronously from the base table. When data in the base table changes, these changes are eventually propagated to the Materialized View, ensuring the view remains an accurate representation of the specified data in the base table.

## Performance Considerations

**Write Performance**
There's an overhead associated with maintaining Materialized Views since updates to the base table require updates to the view. This can impact write performance.

**Read Performance**:
Queries against Materialized Views can be faster than equivalent queries against the base table using secondary indexes because the data in a Materialized View is stored in the same way as a regular table.

However, it's essential to monitor the performance and resource usage of Materialized Views, especially in write-heavy applications, as they can lead to increased latency and load.

## Example Scenario

Consider a `Users` table in an application that stores user data:

```sql
CREATE TABLE Users (
    user_id uuid PRIMARY KEY,
    name text,
    email text,
    city text
);
```

Suppose you frequently need to query users by their city. You could create a Materialized View to facilitate this:

```sql
CREATE MATERIALIZED VIEW UsersByCity AS
SELECT user_id, name, email, city
FROM Users
WHERE city IS NOT NULL AND user_id IS NOT NULL
PRIMARY KEY (city, user_id);
```

### Explanation of the Example

**Base Table**: `Users` with `user_id` as the primary key.
**Materialized View**: `UsersByCity`, which allows querying users based on their `city`.
**Primary Key in View**: The primary key of the Materialized View is `(city, user_id)`. This means users in the view will be partitioned by `city`, allowing efficient queries by city. The inclusion of `user_id` ensures that rows are unique within each city partition.

This Materialized View automatically updates whenever the `Users` table changes. If a new user is added or an existing user's city is updated, the view `UsersByCity` will reflect these changes.
