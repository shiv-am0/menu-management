# Menu Management API

## Overview
The Menu Management API is a Node.js backend server built using Express.js and MongoDB. It allows you to manage a hierarchical menu structure consisting of categories, subcategories, and items. This API supports CRUD operations on these entities, along with search functionality to retrieve items based on their names.

## Features
* **Category Management:** Create, retrieve, update, and delete categories.
* **Subcategory Management:** Create subcategories under categories, retrieve, update, and delete subcategories.
* **Item Management:** Create items under categories or subcategories, retrieve, update, and delete items.
* **Search Functionality:** Search items by their names.

## Project Setup

### Prerequisites
* Node.js (v14 or higher)
* MongoDB (local or cloud instance)
* Postman (for API testing)

### Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd menu-management-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root of the project.
    - Add the following environment variables:
        ```env
        MONGO_URI=<your-mongodb-connection-string>
        PORT=5000
        ```

4. **Run the server:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:5000`.