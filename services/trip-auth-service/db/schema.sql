CREATE TYPE status AS ENUM (); -- Fill in your statuses, e.g. ('ACTIVE', 'INACTIVE')
CREATE TYPE permissionenum AS ENUM (); -- Fill in your permissions, e.g. ('READ', 'WRITE')

CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    permission_name VARCHAR NOT NULL,
    permission_enum permissionenum
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR NOT NULL
);

CREATE TABLE role_permissions_permission (
    roleId INTEGER NOT NULL,
    permissionId INTEGER NOT NULL,
    PRIMARY KEY (roleId, permissionId),
    CONSTRAINT fk_role FOREIGN KEY (roleId) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_permission FOREIGN KEY (permissionId) REFERENCES permissions(id) ON DELETE CASCADE
);

CREATE TABLE file_entity (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    url VARCHAR
);

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    user_password VARCHAR NOT NULL,
    photoId uuid,
    fullName VARCHAR,
    lastName VARCHAR,
    firstName VARCHAR,
    previous_password VARCHAR,
    roleId integer,
     -- paymentInfoId integer,
    user_status status,
    hashed_password VARCHAR,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);

-- ALTER TABLE users
--   ADD CONSTRAINT fk_role FOREIGN KEY ("roleId") REFERENCES roles(id);

-- ALTER TABLE users
--   ADD CONSTRAINT fk_paymentInfo FOREIGN KEY ("paymentInfoId") REFERENCES payment_info(id);
  
-- ALTER TABLE users
--   ADD CONSTRAINT fk_photo FOREIGN KEY ("photoId") REFERENCES file_entity(id);
