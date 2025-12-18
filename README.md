📺 VideoTube Backend

This is a backend REST API project built using Node.js, Express.js, and MongoDB as part of my backend learning journey.
The project was mimicked from a tutorial, and the entire codebase was written independently to understand real-world backend concepts such as authentication, API design, and media handling.

🛠 Tech Stack

Node.js

Express.js

MongoDB

JSON Web Tokens (JWT)

Cloudinary

dotenv

✨ Key Concepts Implemented

REST API development using Express

JWT-based user authentication

MongoDB integration using Mongoose

Media upload and storage using Cloudinary

Backend project structuring using controllers, routes, and models

📂 Project Structure
VideoTube-Backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── db/
│   ├── utils/
│   ├── app.js
│   ├── index.js
│   └── constants.js
├── public/
│   └── temp/
└── package.json

🚀 How to Run Locally
git clone https://github.com/Shivam-Gupta-dev/VideoTube-Backend.git
cd VideoTube-Backend
npm install
npm run dev


Create a .env file with:

PORT=5000
MONGODB_URI=your_mongodb_uri
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

🎯 Purpose of This Project

To learn backend development with Node.js

To understand authentication and authorization

To practice integrating third-party services like Cloudinary

To gain experience in structuring scalable backend applications

📌 Note

This project was created for learning purposes and does not aim to be a complete production-ready application.

📫 Contact

Shivam Gupta
GitHub: https://github.com/Shivam-Gupta-dev

LinkedIn: https://www.linkedin.com/in/shivam-gupta-078640329/
