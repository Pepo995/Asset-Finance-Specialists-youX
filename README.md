# Asset-Finance-Specialists-youX

## Tech Stack

- **Frontend**: Next.js, TypeScript, React Query, Tailwind CSS, Axios
- **Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, Passport.js (JWT authentication)
- **Testing**: Jest (for backend)
- **Other** Tools: dotenv, react-toastify, zod, react-hook-form

## Developer Diary

### Backend Development

1. **Project Initialization**

   - Set up a Node.js and TypeScript environment for the backend.
   - Configured the project structure and added necessary dependencies like Express, Mongoose (for MongoDB), and dotenv for environment variables.

2. **Database Setup**

   - Established a MongoDB connection using Mongoose.
   - Created a basic folder structure within the `src` directory to organize code effectively (`src/server.ts` for server setup, `db` for database connection, `routes` for API routing, and `services` for handling business logic).
   - Implemented database schemas for `User` and `Application` entities, defining fields and basic validation rules.

3. **API Development**

   - **CRUD Endpoints for Applications**:
     - Developed endpoints to create, read, update, and delete financial applications.
     - Included user-specific endpoints so that each application is associated with a user.
   - **Authentication**:
     - Integrated JWT-based authentication using Passport.js and `jsonwebtoken`.
     - Created middleware for secure access to endpoints, ensuring users can only interact with their own applications.
   - **Error Handling**:
     - Implemented centralized error handling using custom middleware (`errorLogger` and `errorResponder`) to log and respond to errors consistently.
   - **Testing**:
     - Set up Jest for backend testing and added unit tests for core services (using Jest for mocking and testing logic).
     - Validated the functionality of endpoints and authentication.

4. **Additional Backend Functionality**
   - Configured middleware for CORS to handle cross-origin requests.
   - Implemented a database seeding function to initialize test data and ensure the database is populated on server start.
   - Set up a logging and monitoring system to track requests, errors, and database queries.

### Frontend Development

1. **Project Initialization**

   - Initialized a Next.js project using TypeScript to create a modern, performant frontend.
   - Configured Tailwind CSS for styling, allowing for a responsive and streamlined design.
   - Structured the project to separate components (`atoms`, `molecules`, etc.) for reusability and better maintainability.

2. **User Interface Development**

   - **Authentication Interface**:
     - Developed a login form with validation using `react-hook-form` and integrated authentication with JWT.
     - Configured `next-router` to navigate the user post-login, with a conditional navbar update upon successful authentication.
   - **Application Form**:
     - Created a dynamic form to add and edit application details (income, expenses, assets, liabilities).
     - Added validation with `zod` schema for strict form handling and data accuracy.
   - **Toast Notifications**:
     - Integrated `react-toastify` for success and error notifications, enhancing user feedback on form submissions.

3. **API Integration**

   - Set up Axios to handle API requests to the backend.
   - Created API functions for CRUD operations (create, update, delete) on financial applications.
   - Configured Axios interceptors to automatically attach JWT tokens from local storage to each request.

4. **Enhanced Application Management**

   - **Edit Application Form**:
     - Implemented update functionality for applications, allowing users to submit form changes via PUT requests.
   - **Delete Application Button**:
     - Added a delete button in the application form, allowing users to remove applications.
     - Configured a toast message to confirm successful deletion and redirect the user back to the applications list.

5. **Additional Frontend Functionality**
   - Set up React Query for data caching and background syncing, improving responsiveness and reducing server load.
   - Improved routing and state management for seamless navigation across components.
   - Enhanced UI elements using Tailwind to create a clean, professional look for the user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Asset-Finance-Specialists-youX.git
   cd Asset-Finance-Specialists-youX

   ```

2. Install dependencies for backend and frontend:

   ```bash
   # Backend
    cd backend
    npm install
    # Frontend
    cd frontend
    npm install
   ```

3. Set up environment variables:

- Create .env files for both backend and frontend with necessary environment variables, such as DATABASE_URL, JWT_SECRET, and API URLs.

4. Start the development servers:

   ```bash
    # Backend
    npm run dev
    # Frontend
    npm run dev
   ```

## Nice to Haves

I couldn't get around to implementing the following features due to a busy schedule, but these additions would definitely enhance the project:

- **Unit Testing for the Backend**: Adding unit tests to verify individual functions and improve the reliability of backend logic.

- **Deployment**: Setting up a live environment to showcase the application’s features and functionality in a real-world scenario.

- **CI/CD Pipelines**: Configuring Continuous Integration and Continuous Deployment pipelines to automate testing and deployment, ensuring smooth updates with every change.

These improvements would contribute to making the application more robust, reliable, and user-friendly.
