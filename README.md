# Library Management System

A full-stack library management application built with **Spring Boot, React, and PostgreSQL**.

The application provides a REST API and web interface for managing books in a library.

## Features

- View all books
- View a book by ID
- Add new books
- Edit existing books
- Delete books
- Dynamic UI updates after deletion
- Pre-filled edit forms with existing book data

Each book contains:

- ID
- Title
- Publication year

## Tech Stack

### Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Fetch API

## Architecture

The backend uses a layered architecture:

```text
React Frontend
      ↓
REST API
      ↓
Controller
      ↓
Service
      ↓
Repository
      ↓
JPA / Hibernate
      ↓
PostgreSQL
```

### Controller

Handles HTTP requests and REST API endpoints.

### Service

Contains application and business logic.

### Repository

Provides database access through Spring Data JPA.

### Entity

Defines the application's persistence model.

## REST API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/{id}` | Get a book by ID |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/{id}` | Update a book |
| DELETE | `/api/books/{id}` | Delete a book |

Example book:

```json
{
  "id": 3,
  "title": "Clean Code",
  "publicationYear": 2008
}
```

## Database Configuration

The application uses PostgreSQL.

Example `application.properties`:

```properties
spring.application.name=library-management-system

spring.datasource.url=jdbc:postgresql://localhost:5432/library_management
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

Set the PostgreSQL credentials using environment variables:

```bash
export DB_USERNAME=your_username
export DB_PASSWORD=your_password
```

## Running the Project

### Backend

Make sure PostgreSQL is running and create the database:

```text
library_management
```

Start the Spring Boot application:

```bash
./mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Frontend

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Project Structure

```text
library-management-system/
├── frontend/
│   └── src/
│       ├── components/
│       └── pages/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── net/procelyte/librarymanagementsystem/
│       │       ├── controller/
│       │       ├── entity/
│       │       ├── repository/
│       │       └── service/
│       │
│       └── resources/
│           └── application.properties
│
├── pom.xml
└── README.md
```

## Status

The core book management functionality is complete.
