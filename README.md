# Menu Management API

## Overview

The Menu Management API is a Node.js backend server built using Express.js and MongoDB. It allows you to manage a hierarchical menu structure consisting of categories, subcategories, and items. This API supports CRUD operations on these entities, along with search functionality to retrieve items based on their names.

## Features

* **Category Management:** Create, retrieve, and update categories.
* **Subcategory Management:** Create, retrieve, and update subcategories.
* **Item Management:** Create, retrieve, and update items.
* **Search Functionality:** Search item by its name.

## Project Setup

### Prerequisites

* Node.js (v14 or higher)
* MongoDB (local or cloud instance)
* Postman (for API testing)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/shiv-am0/menu-management.git
    cd menu-management
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root of the project.
    - Add the following environment variables:
        ```env
        PORT=5000
        MONGO_URI=<your-mongodb-connection-string>
        HOST_URL=<your-server-host-url>
        ```

4. **Run the server:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:5000`.

## Run using Docker

1. **Run the following command to pull the Docker image:**
    ```bash
    docker pull shivam001/menu-management
    ```

2. **Run the container using the following command:**
    ```bash
    docker run -d -p 5000:5000 -e MONGO_URI=<your_mongodb_uri> -e HOST_URL=<your_server_host_url> shivam001/menu-management
    ```
    The server will start on `http://localhost:5000`.

## API Endpoints

### Categories

* **Create Category:** `POST /categories`
* **Get All Categories:** `GET /categories`
* **Get a Category by ID:** `GET /categories/:id`
* **Update a Category:** `PUT /categories/:id`

### Subcategories

* **Create a Subcategory:** `POST /subcategories/:categoryId`
* **Get All Subcategories:** `GET /subcategories`
* **Get All Subcategories Under a Category:** `GET /subcategories/category/:categoryId`
* **Get Subcategory by ID:** `GET /subcategories/:id`
* **Update a Subcategory:** `PUT /subcategories/:id`

### Items

* **Create an Item:** `POST /items/:subCategoryId`
* **Get All Items:** `GET /items`
* **Get All Items under a Subcategory:** `GET /items/subcategory/:subCategoryId`
* **Search an Item by Name:** `GET /items/search`
* **Get Item by ID:** `GET /items/:id`
* **Update an Item:** `PUT /items/:id`

## API Documentation

The support for API documentation is added using Swagger. The docs can be viewed and the endpoints can be tested on the following endpoint: `HOST_URL/api-docs`

## License

This project is licensed under the [MIT License](/LICENSE).