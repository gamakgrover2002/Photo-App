

# 📸 Photo App

A full-featured photo-sharing web application that allows users to:

* 📤 **Upload images**
* 🔍 **Search images by category**
* ⭐ **Rate images**

Built with a focus on simplicity, performance, and user experience.

---

## 🚀 Features

* **User Uploads**: Drag-and-drop or select images from your device to upload.
* **Search by Category**: Filter images easily using tags or categories (e.g., Nature, Travel, Portrait).
* **Ratings**: Users can rate images from 1 to 5 stars to promote quality content.
* **Responsive Design**: Works across desktops, tablets, and phones.

---

## 🧑‍💻 Tech Stack

**Frontend:**

* React.js (with TypeScript)
* Tailwind CSS (for UI)
* Axios / Fetch (for API communication)

**Backend:**

* Node.js with Express
* MongoDB (for image metadata, categories, ratings)
* Multer (for file uploads)
* Cloudinary / AWS S3 (for image storage) *(configurable)*

---

## 🛠️ Getting Started

### Prerequisites

* Node.js and npm
* MongoDB database (local or Atlas)
* Cloudinary / S3 account (optional if storing images externally)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/photo-app.git
cd photo-app
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in `server/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the App

```bash
# Start the backend
cd server
npm run dev

# Start the frontend
cd ../client
npm start
```

Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```
photo-app/
├── client/          # React frontend
│   ├── components/
│   ├── pages/
│   └── ...
├── server/          # Node.js backend
│   ├── controllers/
│   ├── routes/
│   └── ...
└── README.md
```

---

## 📦 API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/upload`           | Upload a new image      |
| GET    | `/images?category=` | Get images by category  |
| POST   | `/rate/:imageId`    | Submit or update rating |
| GET    | `/images/:id`       | Get image details       |

---

## 📈 Future Improvements

* 🔐 User authentication and profiles
* 💬 Comment system
* 📊 Popular image rankings
* 📦 Pagination and infinite scroll

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss your idea.

---
