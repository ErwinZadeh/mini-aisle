-- Create a DATABASE and name it as “mini-aisle”,

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY ,
  "username" VARCHAR(25) NOT NULL ,
  "password" VARCHAR(50) NOT NULL
);

CREATE TABLE "amount" (
  "id" SERIAL PRIMARY KEY ,
  "amount_unit" VARCHAR(10) NOT NULL
);

CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY ,
  "category_type" VARCHAR(20) NOT NULL
);

CREATE TABLE "store" (
  "id" SERIAL PRIMARY KEY ,
  "store_name" VARCHAR(20) NOT NULL
);

CREATE TABLE "item" (
  "id" SERIAL PRIMARY KEY ,
  "item_name" VARCHAR(50) NOT NULL,
  "amount" INT,
  "price" INT,
  "user_id" INT REFERENCEs "user",
  "amount_id" INT REFERENCEs "amount",
  "category_id" INT REFERENCEs "category",
  "store_id" INT REFERENCEs "store"
);

INSERT INTO "amount" ("amount_unit")
VALUES ('pcs'),
('oz'),
('Ib'),
('gal'),
('qt');

INSERT INTO "category" ("category_type")
VALUES ('dairy'),
('meat'),
('tinned'),
('fruit'),
('drink'),
('frozen'),
('baked'),
('candy'),
('houseware'),
('other');

INSERT INTO "store" ("store_name")
VALUES ('aldi'),
('target'),
('walmart'),
('cub'),
('costco'),
('sams'),
('trader'),
('hyvee'),
('wholefoods'),
('kowalsky'),
('lund'),
('freshthyme'),
('other');

SELECT * FROM "item"
JOIN "user" ON "item"."user_id" = "user"."id";

SELECT * FROM "item"
JOIN "amount" ON "item"."amount_id" = "amount"."id";

SELECT * FROM "item"
JOIN "category" ON "item"."category_id" = "category"."id";

SELECT * FROM "item"
JOIN "store" ON "item"."store_id" = "store"."id";

