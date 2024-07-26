# ToDo API

This is a simple ToDo API built with Node.js, Express, and MongoDB. The API allows users to manage their to-do items through a RESTful interface.

## Features
- User authentication with JWT
- CRUD operations for to-do items
- User-specific to-do lists
- MongoDB as the database

## Requirements
- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/todoapi
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```

The API will be running at `http://localhost:3000`.

## API Endpoints

### Authentication
- **POST api/auth/register** - Register a new user
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```
- **POST api/auth/login** - Login and receive a token
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```

### Tasks
- **GET api/tasks** - Get all tasks for the authenticated user
- **POST api/tasks** - Create a new task
    ```json
    {
        "title": "New task",
        "description": "Task description"
    }
    ```
- **GET api/tasks/:id** - Get a specific task by ID
- **PUT api/tasks/:id** - Update a task by ID
    ```json
    {
        "title": "Updated task",
        "description": "Updated description"
    }
    ```
- **DELETE api/tasks/:id** - Delete a task by ID
