# To-Do List Project

## Overview
This is a simple To-Do List application designed to help users manage their tasks efficiently. This project is built using Node.js, Express, and Mongoose, providing a robust backend for handling tasks. This is version 1.0.0, featuring essential functionalities like creating tasks, tracking their status, and setting alarms to alert users.

## Features
### Version 1.0.0
1. **Creating Tasks**: Users can create new tasks, providing a title and description.
2. **Tracking Status**: Users can update and track the status of their tasks (e.g., To Do, In Progress, Completed).
3. **Set Alarm**: Users can set alarms to get alerted about their tasks.

## Installation
To get started with the To-Do List project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sambit-24/To-do_List.git
   cd todolist
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the application**:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

## Usage
### API Endpoints
- **Create a Task**
  - **Endpoint**: `/tasks`
  - **Method**: `POST`
  - **Request Body**:
    ```json
    {
      "title": "Task Title",
      "description": "Task Description"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Task created successfully",
      "data": {
        "id": "task_id",
        "title": "Task Title",
        "description": "Task Description",
        "status": "To Do",
        "alarm": null
      }
    }
    ```

- **Get All Tasks**
  - **Endpoint**: `/tasks`
  - **Method**: `GET`
  - **Response**:
    ```json
    {
      "success": true,
      "data": [
        {
          "id": "task_id",
          "title": "Task Title",
          "description": "Task Description",
          "status": "To Do",
          "alarm": null
        },
        ...
      ]
    }
    ```

- **Update Task Status**
  - **Endpoint**: `/tasks/:id`
  - **Method**: `PUT`
  - **Request Body**:
    ```json
    {
      "status": "In Progress"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Task status updated successfully",
      "data": {
        "id": "task_id",
        "status": "In Progress"
      }
    }
    ```

- **Set Alarm for a Task**
  - **Endpoint**: `/tasks/:id/alarm`
  - **Method**: `PUT`
  - **Request Body**:
    ```json
    {
      "alarm": "2024-06-18T10:30:00Z"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Alarm set successfully",
      "data": {
        "id": "task_id",
        "alarm": "2024-06-18T10:30:00Z"
      }
    }
    ```

## Technologies Used
- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **REST API**: API framework for express

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.


## Contact
For any questions or issues, please open an issue on the repository or contact me at sambitpanda025@gmail.com.

---

Thank you for using the To-Do List application! Happy task managing!