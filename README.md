**📌 Node.js Task Manager**

A full-stack Task Management Application demonstrating CRUD actions, form validations, and engineering best practices such as maintainable code structure, pragmatic design choices, error handling, and unit testing.

**✨ Features:**

➕ Create: Add tasks with title, description, created date, and due date.

📖 Read: View all tasks in a responsive table.

✏️ Update: Edit existing tasks and completion status.

🗑️ Delete: Remove tasks from the list.

**Validations & Error Handling:**

- Required fields: title, description, created date, due date.

- Due date cannot be before created date.

- Unique task title validation.

- Inline error messages displayed next to fields.

- Centralized error handling in Node.js backend.

**Engineering Best Practices:**


- **Code Readability & Maintainability:** Modular structure (React Context for state, separation of concerns).
  
- **Legacy Code Ready:** Can integrate with existing codebases due to simple and decoupled design.
  
- **Node.js Upgrades:** Written in modern JavaScript/TypeScript with ES modules and async/await.
  
- **Pragmatic Design Choices:** Lightweight dependencies, minimal boilerplate, easy to scale.
  
- **Validation & Error Handling** both on frontend (React form) and backend (Node.js API).
  
- **Unit Testing** for CRUD operations, form validation, and error handling.

**🛠️ Tech Stack:**

- Frontend: React, Context API, Bootstrap

- Backend: Node.js, Express

- Testing: Jest + React Testing Library (frontend), Mocha/Chai (backend)


**🚀 Getting Started:**

- Clone the repo

    git clone https://github.com/Navyayalamat/Rollin_CRUD_Actions.git
    cd Rollin_CRUD_Actions
  
-  Install dependencies

    npm install
  
 - Run the project
  
    npm run dev

**Unit Testing:**
Run tests:

Backend (Node.js)

Test CRUD APIs.

Validate error handling (e.g., invalid input, duplicate task title).

Ensure proper status codes (200, 400, 404, 500).

Run tests:

npm test
