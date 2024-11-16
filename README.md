# **Admin Assignment Management System**
##  Project Description
This project is a role-based assignment management system that allows users to upload assignments and lets admins view, accept, or reject assignments. The system also includes authentication for secure access and ensures only authorized users can perform specific tasks.

##  **Features**
###  User Functionality:

Register a new user or admin.
Login to receive an authentication token.
Upload assignments as a user.
Fetch the list of available admins to assign tasks.

###  Admin Functionality:

View all assignments tagged to them.
Accept or reject assignments.
Upload assignments for users.

###  Authentication:

Implements role-based access using JSON Web Tokens (JWT).
Supports secure endpoints with middleware for validation.

###  Optional:

OAuth2 can be implemented for external authentication.

##  **Technologies Used**
###  Backend:

Node.js
Express.js

###  Database:

MongoDB

###  Authentication:

JSON Web Tokens (JWT)

###  Other Tools:

Postman for API testing

##  **How It Works**

###  1. User Endpoints
POST /auth/register - Register a new user or admin.
POST /auth/login - Login to generate a JWT token.
POST /assignments/upload - Users can upload assignments.
GET /assignments/admins - Fetch a list of admins to assign tasks.

###  2. Admin Endpoints
GET /assignments - Admins can view all assignments tagged to them.
POST /assignments/:id/accept - Admins can accept assignments.
POST /assignments/:id/reject - Admins can reject assignments.

###  3. Middleware
Authorization Middleware:
Verifies the JWT token and validates user/admin roles.

##  **How to Run Locally**
Clone the repository: bash

Copy code - git clone https://github.com/your-username/your-repo-name.git

Navigate to the project directory: bash

Copy code - cd Admin_assignment_check

Install dependencies: bash

Copy code - npm install

Create a .env file with the following contents: env

Copy code - MONGO_URI=<"Your MongoDB Connection String">

JWT_SECRET=<Your "Secret Key">

Start the server: bash

Copy code - npm start

Use tools like Postman to test the endpoints.

## Future Enhancements
Implement OAuth2 for authentication via external providers (Google, GitHub, etc.).
Add frontend for a user-friendly interface.
