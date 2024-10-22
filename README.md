# PWC-ASSIGNMENT

## Project Overview

The **PWC-ASSIGNMENT** project is a full-stack web application that enables users to submit data via a user-friendly form and view the submitted data in an admin dashboard. This project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and is designed to showcase modern web development practices. 

### Key Features
- User form for data submission.
- Admin dashboard to display submitted data.
- Integration with MongoDB Atlas for database management.
- Responsive design for better user experience.

## Technology Stack
- **Frontend:** React.js, Vite, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Deployment:** Vercel (Frontend), Render (Backend)

Usage
Fill out the user form on the frontend to submit data.
Visit the admin dashboard to view the submitted data.
Deployment
The frontend is deployed on Vercel and can be accessed at: [Frontend URL]
The backend is deployed on Render and can be accessed at: [Backend URL]
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thank you to Vercel and Render for providing hosting solutions.
Special thanks to the open-source community for the tools and resources.


## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v14 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for database hosting
- [Git](https://git-scm.com/) for version control

### Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/YOUR_USERNAME/PWC-ASSIGNMENT.git
cd PWC-ASSIGNMENT
cd backend
npm install
PORT=5000
MONGO_URI="your_mongo_db_connection_string"
node app.js

Setup Frontend
cd frontend
npm install
const apiUrl = 'http://localhost:5000/api/users'; // Update this as necessary
npm run dev


### Instructions for Use
- Replace `YOUR_USERNAME` with your GitHub username.
- Add the appropriate URLs for the frontend and backend in the "Deployment" section.
- Adjust any other information to better suit your project's specifics or any additional features you may have implemented. 

This README provides a comprehensive overview of your project, making it easy for others to understand how to run and utilize it.

