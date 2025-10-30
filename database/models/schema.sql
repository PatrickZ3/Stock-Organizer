-- ============================
-- SCHEMA: Inventory Tracker
-- ============================

-- Enable UUID support (lets postgreSQL create unique IDs)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS (represents a company)
CREATE TABLE users (
    -- uuid_generate_v1() / Generates a time-based UUID
    -- uuid_generate_v4 / Generates a random UUID
    -- uuid_nil() / Generates a NIL UUID (all zeroes)
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- PRODUCTS (ecah belongs to a single user/ company)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INTEGER NOT NULL DEFAULT 0,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- PRODUCT COMMENTS (each comment belongs to a product)
CREATE TABLE product_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_ID UUID REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- TRANSACTIONS / CHECKOUT LOG
-- Records inventory deductions

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity_deducted INTEGER NOT NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- TRIGGERS (auto update timestamps)

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN 
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_modtime
BEFORE UPDATE ON users
FOR EACH ROW 
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_products_modtime
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

--- SEEDING 


INSERT INTO users (company_name, email, password_hash)
VALUES
    ('Alpha Builders', 'contact@alphabuilders.com', 'hashed_pw_123'),
    ('Beta Manufacturing', 'info@betamfg.com', 'hashed_pw_456'),
    ('Gamma Retail', 'support@gammaretail.com', 'hashed_pw_789')
ON CONFLICT DO NOTHING;

-- Seed Products
INSERT INTO products (user_id, name, description, quantity, status)
VALUES
    ((SELECT id FROM users WHERE company_name = 'Alpha Builders'), 'Steel Beam', '16ft reinforced beam', 100, 'active'),
    ((SELECT id FROM users WHERE company_name = 'Alpha Builders'), 'Concrete Bag', '50kg industrial concrete', 250, 'active'),
    ((SELECT id FROM users WHERE company_name = 'Beta Manufacturing'), 'Aluminum Sheet', '2mm thickness sheets', 400, 'active'),
    ((SELECT id FROM users WHERE company_name = 'Gamma Retail'), 'Wood Plank', 'Pine wood plank 8ft', 120, 'paused')
ON CONFLICT DO NOTHING;

-- Seed Comments
INSERT INTO product_comments (product_id, user_id, comment)
VALUES
    ((SELECT p.id FROM products p JOIN users u ON p.user_id = u.id WHERE p.name = 'Steel Beam' AND u.company_name = 'Alpha Builders'), 
     (SELECT id FROM users WHERE company_name = 'Alpha Builders'),
     'Batch quality verified — ready for site use.'),
     
    ((SELECT p.id FROM products p JOIN users u ON p.user_id = u.id WHERE p.name = 'Wood Plank' AND u.company_name = 'Gamma Retail'), 
     (SELECT id FROM users WHERE company_name = 'Gamma Retail'),
     'Out of stock soon — need restock order.')
ON CONFLICT DO NOTHING;

-- Seed Transactions
INSERT INTO transactions (user_id, product_id, quantity_deducted, note)
VALUES
    ((SELECT id FROM users WHERE company_name = 'Alpha Builders'),
     (SELECT id FROM products WHERE name = 'Concrete Bag'),
     30,
     'Used for Project A foundation'),
     
    ((SELECT id FROM users WHERE company_name = 'Beta Manufacturing'),
     (SELECT id FROM products WHERE name = 'Aluminum Sheet'),
     50,
     'Order for custom machinery parts')
ON CONFLICT DO NOTHING;