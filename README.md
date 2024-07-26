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
- **POST /auth/register** - Register a new user
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```
- **POST /auth/login** - Login and receive a token
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```

### ToDo Items
- **GET /todos** - Get all to-do items for the authenticated user
- **POST /todos** - Create a new to-do item
    ```json
    {
        "title": "New ToDo",
        "description": "ToDo description"
    }
    ```
- **GET /todos/:id** - Get a specific to-do item by ID
- **PUT /todos/:id** - Update a to-do item by ID
    ```json
    {
        "title": "Updated ToDo",
        "description": "Updated description"
    }
    ```
- **DELETE /todos/:id** - Delete a to-do item by ID
