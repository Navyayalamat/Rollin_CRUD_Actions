**📌 Node.js Task Manager**

A full-stack Task Management Application, modernized from Node.js 10 to Node.js 24, designed for maintainability, scalability, and future enhancements. It demonstrates CRUD operations, form validations, and engineering best practices including error handling and unit testing.

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

- **_Frontend:_** React, Context API, Bootstrap

- **_Backend:_** Node.js, Express

- **_Testing:_** Jest + React Testing Library (frontend), Mocha/Chai (backend)


**🚀 Getting Started:**

- **_Clone the repo_**

    git clone https://github.com/Navyayalamat/Rollin_CRUD_Actions.git
    cd Rollin_CRUD_Actions
  
-  **_Install dependencies_**

    npm install
  
 - **_Run the project_**
  
    npm run dev

**Unit Testing:**

-  **_Run tests:_**
  
    npm test
