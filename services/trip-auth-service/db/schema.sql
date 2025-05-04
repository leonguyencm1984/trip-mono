CREATE TYPE user_status_enum AS ENUM ('ACTIVE', 'INACTIVE');
CREATE TYPE permission_enum AS ENUM ('CREATE_TRIP', 'EDIT_TRIP', 'DELETE_TRIP', 'VIEW_TRIP', 
    'CREATE_LOCATION', 'EDIT_LOCATION', 'DELETE_LOCATION', 'VIEW_LOCATION', 'CREATE_MERCHANT', 
    'EDIT_MERCHANT', 'DELETE_MERCHANT', 'VIEW_MERCHANT');
CREATE TYPE role_type_enum AS ENUM ('ADMIN', 'USER', 'TRIP_CREATOR', 'TRIP_VIEWER');
CREATE TYPE trip_status_enum AS ENUM ('PLANNED', 'COMPLETED', 'CANCELLED');
CREATE TYPE accommodation_type AS ENUM ('HOTEL', 'HOSTEL', 'AIRBNB', 'OTHER');
CREATE TYPE merchant_type AS ENUM ('HOTEL', 'RESTAURANT', 'PUB', 'OTHER');
CREATE TYPE payment_detail_type AS ENUM ('CREDIT_CARD', 'BANK_TRANSFER', 'CASH');

CREATE TABLE permissions (
    id uuid PRIMARY KEY,
    name VARCHAR NOT NULL,
    permission_enum permission_enum
);

CREATE TABLE roles (
    id uuid PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE role_permissions (
    role_id uuid NOT NULL,
    permission_id uuid NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_permission FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
);

CREATE TABLE file_entity (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    url VARCHAR
);

CREATE TABLE payment_infos (
    id uuid PRIMARY KEY
    -- Add more columns as needed
);

CREATE TABLE payment_details (
    id uuid PRIMARY KEY,
    type payment_detail_type,
    number VARCHAR NOT NULL,
    payment_info_id uuid REFERENCES payment_infos(id)
);

CREATE TABLE receipts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
    -- Add more columns as needed
);

CREATE TABLE orders (
    id uuid PRIMARY KEY
    -- Add more columns as needed
);

CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    field VARCHAR -- Replace with actual type if needed
);


CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    photo_id uuid,
    full_name VARCHAR,
    last_name VARCHAR,
    first_name VARCHAR,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    previous_password VARCHAR,
    role_id uuid,
    payment_info_id uuid,
    user_status user_status_enum,
    hash VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT fk_photo FOREIGN KEY (photo_id) REFERENCES file_entity(id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
    CONSTRAINT fk_payment_info FOREIGN KEY (payment_info_id) REFERENCES payment_infos(id)
);

CREATE TABLE locations (
    id uuid PRIMARY KEY,
    longitude VARCHAR NOT NULL,
    latitude VARCHAR NOT NULL,
    name VARCHAR NOT NULL
);

CREATE TABLE merchants (
    id uuid PRIMARY KEY,
    type merchant_type,
    name VARCHAR NOT NULL,
    location_id uuid REFERENCES locations(id)
);

CREATE TABLE accommodations (
    id uuid PRIMARY KEY,
    type accommodation_type,
    name VARCHAR NOT NULL,
    price INTEGER NOT NULL,
    number_of_bed INTEGER NOT NULL,
    location_id uuid REFERENCES locations(id),
    merchant_id uuid REFERENCES merchants(id)
);

CREATE TABLE trips (
    id uuid PRIMARY KEY,
    title VARCHAR NOT NULL,
    creator_id uuid REFERENCES users(id),
    start_date TIMESTAMP NOT NULL,
    completed_date TIMESTAMP,
    receipt_id uuid REFERENCES receipts(id),
    trip_status trip_status_enum
);

CREATE TABLE trip_friends (
    trip_id uuid NOT NULL REFERENCES trips(id),
    user_id uuid NOT NULL REFERENCES users(id),
    PRIMARY KEY (trip_id, user_id)
);

CREATE TABLE trip_locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trip_id uuid REFERENCES trips(id)
);

CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    receipt_id UUID REFERENCES receipts(id),
    to_location_id uuid REFERENCES locations(id),
    ticket VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    qr_code VARCHAR,
    payment_info_id uuid REFERENCES payment_infos(id),
    trip_id uuid REFERENCES trips(id)
);

CREATE TABLE flight_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    flight_number VARCHAR NOT NULL,
    departure_time TIMESTAMP NOT NULL,
    landing_date TIMESTAMP NOT NULL,
    from_location_id uuid REFERENCES locations(id),
    total_time INTEGER NOT NULL
);

CREATE TABLE activity_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
);

CREATE TABLE bus_express_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_location_id uuid REFERENCES locations(id)
);

CREATE TABLE accommodation_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rooms_id uuid REFERENCES accommodations(id),
    is_checked_in BOOLEAN NOT NULL,
    checkin_date TIMESTAMP NOT NULL,
    is_checkout BOOLEAN NOT NULL,
    checkout_date TIMESTAMP NOT NULL,
    place_id uuid REFERENCES locations(id)
);
