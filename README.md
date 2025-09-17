# 📦 Express.js REST API (MVC Architecture)

A simple, well-structured RESTful API built using **Express.js**, following the **MVC architecture** pattern. Ideal for beginners and intermediate developers looking for clean separation of concerns and scalability.

---

## 🏗️ Architecture

- **Model**: Handles data operations (`src/models/Item.js`)
- **Controller**: Business logic, routes handlers (`src/controllers/itemsController.js`)
- **Routes**: Defines endpoints and connects them to controllers (`src/routes/items.js`)
- **Middleware**: Custom error handling (`src/middleware/errorHandler.js`)

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- npm (comes with Node.js)

### 📥 Installation

1. **Clone or download this repository**

```bash
git clone https://github.com/harystyleseze/express-api-mvc
cd express-api-mvc
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

```bash
# Development (with auto-reload using nodemon)
npm run dev

# OR Production
npm start
```

4. **Server will run on**:
   [http://localhost:3000](http://localhost:3000)

---

## 📬 API Documentation

### 🧩 Base URL

```
http://localhost:3000
```

---

### 📚 Endpoints

| Method | Endpoint         | Description       | Request Body Required |
| ------ | ---------------- | ----------------- | --------------------- |
| GET    | `/`              | Welcome message   | ❌                     |
| GET    | `/api/items`     | Get all items     | ❌                     |
| GET    | `/api/items/:id` | Get item by ID    | ❌                     |
| POST   | `/api/items`     | Create a new item | ✅                     |
| PUT    | `/api/items/:id` | Update an item    | ✅                     |
| DELETE | `/api/items/:id` | Delete an item    | ❌                     |

---

### 📦 Data Structure

```json
{
  "id": 1,
  "name": "Item Name",
  "description": "Item Description"
}
```

---

## 📬 Example Requests & Expected Responses

---

### 🔍 1. Get all items

**Request**

```bash
curl http://localhost:3000/api/items
```

**Response**

```json
[
  {
    "id": 1,
    "name": "Sample Notebook",
    "description": "A simple notebook for your ideas"
  },
  {
    "id": 2,
    "name": "Starter Pen",
    "description": "A reliable writing instrument"
  },
  {
    "id": 3,
    "name": "Desk Lamp",
    "description": "Brightens up your workspace"
  },
]

```

---

### 🔍 2. Get an item by ID

**Request**

```bash
curl http://localhost:3000/api/items/1
```

**Response**

```json
{
  "id": 1,
  "name": "Sample Notebook",
  "description": "A simple notebook for your ideas"
}
```

**404 Not Found Example**

```json
{
  "error": "Item not found"
}
```

---

### ➕ 3. Create a new item

**Request**

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item", "description": "This is a new item"}'
```

**Response**

```json
{
  "id": 3,
  "name": "New Item",
  "description": "This is a new item"
}
```

**400 Bad Request Example**

```json
{
  "error": "Name and description are required"
}
```

---

### ✏️ 4. Update an item

**Request**

```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Notebook", "description": "Updated description"}'
```

**Response**

```json
{
  "id": 1,
  "name": "Updated Notebook",
  "description": "Updated description"
}
```

**404 Not Found Example**

```json
{
  "error": "Item not found"
}
```

---

### ❌ 5. Delete an item

**Request**

```bash
curl -X DELETE http://localhost:3000/api/items/2
```

**Response**

```
Status: 204 No Content
```

**404 Not Found Example**

```json
{
  "error": "Item not found"
}
```

---

## 🚨 Error Handling

This API uses a global error handler to catch and format errors.

| Status | Meaning                |
| ------ | ---------------------- |
| 200    | OK                     |
| 201    | Created                |
| 204    | No Content (on delete) |
| 400    | Bad Request            |
| 404    | Not Found              |
| 500    | Internal Server Error  |

---

## 📁 Project Structure

```
express-api-mvc/
├── server.js              # Entry point
├── package.json
├── README.md
└── src/
    ├── controllers/
    │   └── itemsController.js
    ├── models/
    │   └── Item.js
    ├── routes/
    │   └── items.js
    └── middleware/
        └── errorHandler.js
```

---

## 🔧 Next Steps

Enhance this project with:

* ✅ MongoDB or PostgreSQL integration
* ✅ JWT-based Authentication
* ✅ Swagger/OpenAPI documentation
* ✅ Request logging (e.g., `morgan`)
* ✅ Unit & Integration testing (e.g., `jest`, `supertest`)

---

## 🧠 Learning Outcomes

* MVC Architecture with Express.js
* RESTful API Design
* Middleware Usage
* Error Handling Best Practices
* Clean Code Organization

---

## 📝 License

This project is open-source and free to use.
