-- Postgres sql

-- Login
psql -U username -h localhost -p 5432

-- List Database
\l 

-- Konek ke database
\c select database

-- Diskonek
\q

-- Lihat Seluruh Table
\d (liat keseluruhan) \d nama_table (lihat secara spesifik)

-- Membuat Database Postgres
create database nama_database; membuat database

-- Membuat table
CREATE TABLE products(id INT, name VARCHAR(64), description VARCHAR(128), stock INT, price INT, created_at TIMESTAMP);

CREATE TABLE products(id INT, name VARCHAR(64) NOT NULL, description VARCHAR(128), stock INT NOT NULL DEFAULT 0, price INT NOT NULL, created_at TIMESTAMP);

-- Hapus table
DROP TABLE nama_table;

-- Untuk melihat data di table
SELECT * FROM nama_table;

-- Menambah data table
INSERT INTO products(id, name, description, stock, price) VALUES (1, 'Baju', 'Baju Baru', 2, 100000);

-- Ubah data table
UPDATE products SET name = 'sepatu', description = 'Sepatu baru' WHERE id=1; 

-- Select sorting 
SELECT * FROM products ORDER BY stock DESC;

-- Menghapus data record
DELETE FROM products WHERE id = 1;