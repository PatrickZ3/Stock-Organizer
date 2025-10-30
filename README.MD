## Database Setup

### 1. Running the Schema

To create the database schema, run:

```bash
# Using default postgres user
psql -U postgres -d your_database_name -f database/models/schema.sql

# Using your custom user
psql -U pslay -d inventory_db -f schema.sql
```

### 2. Dropping Existing Tables

If you need to drop existing tables, run:

```bash
# Using default postgres user
psql -U postgres -d your_database_name -f database/models/drop.sql

# Using your custom user
psql -U pslay -d inventory_db -f drop.sql
```

### 3. Accessing the Database

To open a PostgreSQL session:

```bash
psql -U pslay -d inventory_db
```

Once connected, you can run SQL commands directly.
