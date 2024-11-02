
# To-Do Application API

## Overview
This is the backend API for the To-Do application, developed with Node.js and Express. The API provides endpoints for task management operations such as creating, retrieving, updating, and deleting tasks.

## Features
- RESTful API endpoints for task operations
- MongoDB integration for task storage
- Environment configuration through `.env` file
- Docker setup for easy deployment

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd todo-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```env
   MONGO_URI=<your_mongo_db_connection_string>
   PORT=3000
   ```

4. **Run the API Locally**
   ```bash
   npm start
   ```

5. **Docker Deployment**
   Use the provided `Dockerfile` for containerization:
   ```bash
   docker build -t todo-api .
   docker run -p 3000:3000 todo-api
   ```

## API Endpoints
- **GET /tasks** - Retrieve all tasks
- **POST /tasks** - Create a new task
- **PUT /tasks/:id** - Update a specific task
- **DELETE /tasks/:id** - Delete a specific task

## Additional Information
The `test` folder contains unit and integration tests for API endpoints.
