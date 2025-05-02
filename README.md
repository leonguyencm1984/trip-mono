# TripBuilder Monorepo

A monorepo containing the TripBuilder application with shared packages and services.

## Project Structure

```
trip-mono/
├── packages/
│   └── shared-models/     # Shared TypeScript models and types
├── services/
│   ├── backend-api/       # Express.js backend API
│   └── frontend/          # Frontend application (to be implemented)
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