# Trip Mono Repo

Welcome to the Trip Mono Repo! This guide will help you set up and run the entire project, including all services and the database, from scratch.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (v8+ recommended)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

---

## 2. Install Dependencies

```bash
npm install
```
This will install dependencies for all packages and services using npm workspaces.

---

## 3. Environment Variables

Copy the example environment file and fill in any secrets as needed:

```bash
cp .env.example .env
```
> **Note:**  
> Each package/service may have its own `.env` file. Check the `README.md` in each subfolder or copy `.env.example` to `.env` in each as needed.

---

## 4. Start the Database and Infrastructure

Start all infrastructure (Postgres, Kafka, Elasticsearch, etc.) using Docker Compose:

```bash
docker compose up -d
```

This will:
- Start the Postgres database and initialize it with the schema.
- Start Kafka, Zookeeper, Elasticsearch, and other dependencies.

> **If you need to reset the database:**  
> ```bash
> docker compose down -v
> docker compose up -d
> ```

---

## 5. Build the Project

```bash
npm run build
```

---

## 6. Run All Services in Development

```bash
npm run dev
```
This will start all services (e.g., `trip-auth-service`) in development mode with auto-reload.

---

## 7. Running a Specific Service

To run a specific service (e.g., `trip-auth-service`):

```bash
cd services/trip-auth-service
npm run dev
```

---

## 8. Database Migrations & Schema

- The database schema is managed via SQL files in `services/trip-auth-service/db/schema.sql` (or similar).
- To apply schema changes, update the SQL file and re-run the database container as described above.

---

## 9. Useful Commands

| Command                        | Description                                 |
|--------------------------------|---------------------------------------------|
| `npm install`                  | Install all dependencies                    |
| `npm run build`                | Build all packages and services             |
| `npm run dev`                  | Run all services in development mode        |
| `docker compose up -d`         | Start all infrastructure containers         |
| `docker compose down -v`       | Stop and remove all containers and volumes  |

---

## 10. Troubleshooting

- **Database connection errors:**  
  Ensure your `.env` files have the correct DB host (use the Docker service name, e.g., `DB_HOST=trip-user-db`).
- **Schema not applied:**  
  Remove the database volume and restart Docker Compose.
- **Port conflicts:**  
  Make sure required ports (e.g., 5432 for Postgres) are free.

---

## 11. Project Structure

```
trip-mono/
├── packages/
│   └── shared-models/     # Shared TypeScript models and types
│   └── trip-shared/
│       └── src/
├── services/
│   └── trip-auth-service/
│       └── src/
├── docker-compose.yaml
└── package.json           # Root package.json with workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start all services in development mode:
```bash
npm run dev
```

To build all packages and services:
```bash
npm run build
```

### Services

#### Backend API
- Runs on http://localhost:3000
- API documentation available at http://localhost:3000/api-docs
- Health check endpoint: http://localhost:3000/health

## License

ISC

## 12. Contact

For questions or help, contact [your team lead/contact info].

---

**Welcome aboard! 🚀**