# 🚀 Pune Explore – Full Stack Tourism Web Application

### 🌐 Live Web Application URL
👉 **[Click Here to Explore the Live Web Page](https://pune-explore-prajwal.netlify.app/)**

### 1. Overview 
Pune Explore is an interactive full-stack web application designed to guide travelers through Pune's iconic destinations. The project solves the problem of scattered tourist information by providing a comprehensive, structured guide for **Iconic Forts, Historical Places, Hill Stations and Spiritual Pune**. It features a modern, responsive user experience backed by dynamic routing and scalable backend tracking.

### 2. Features 
* **Interactive Dynamic UI:** Features a premium dark-themed interface optimized for both desktop and mobile layouts.
* **Component-Level Custom Styling:** Implements custom-built interactive location buttons with smooth animated transition effects.
* **Smart Navigation System:** Clean and structured multi-page routing allowing users to dive deep into specific location details seamlessly.
* **Full-Stack Integration:** Real-time communication between backend routes, API endpoints, and a cloud database schema.

### 3. Technology Used 
* **Frontend:** HTML5, CSS3 (Custom Grid/Flexbox Layouts, Premium Hover Animations), JavaScript (ES6+)
* **Backend Runtime:** Node.js
* **Backend Framework:** Express.js
* **Database:** MongoDB
* **Deployment & Hosting:** Netlify (Frontend Hosting)
* **Version Control:** Git & GitHub

### 4. Project Structure
```text
Travelling Enjoyment/
│
├── .vscode/
│   └── settings.json          # VS Code workspace settings
├── css/
│   └── style.css              # Global custom stylesheets & animations
├── img/                       # Local assets and images
├── node_modules/              # Managed npm packages
├── .env.txt                   # Environment configuration template
├── .gitignore                 # Files excluded from git tracking
├── package.json               # Project metadata & scripts
├── package-lock.json          # Strict dependency tree lock
├── server.js                  # Primary Express backend server entry point
├── script.js                  # Frontend interactivity & DOM manipulation
│
└── [Destination Pages]/      # Modular HTML files for location breakdowns
    ├── index.html             # Application landing page
    ├── sinhagad_details.html  # Iconic Forts location template
    ├── rajgad_details.html    # Iconic Forts location template
    ├── lohagad_details.html   # Iconic Forts location template
    ├── shaniwarwada_details.html # Historical location template
    ├── agakhan_palace.html    # Historical location template
    ├── lonavala_khandala.html # Hill station location template
    ├── mulshi_dam.html        # Hill station location template
    └── dagdusheth.html        # Spiritual location template
```

### 5. Module Explanation 
* **Frontend Core (HTML/CSS)**: Renders the static layouts and coordinates custom styling, modern typography and hover states for the visual elements.
* **Client-Side Logic (script.js)**: Handles user interactions, manages state transitions dynamically and connects UI hooks to specific data triggers.
* **Backend Engine (server.js)**: Serves as the central pipeline that establishes the Express server, intercepts network requests and securely bridges data workflows.
* **Modular Views (Destination Pages)**: Serves dedicated content wrappers dynamically structured for distinct landmark profiles across Pune.

### 7. Database Used 
* Database Management System: MongoDB
* Implementation Details: The application connects to a MongoDB cluster to store, update and dynamically retrieve essential structural data, route logs and location analytics seamlessly.

### 8. How to Run the Project 
* **Clone the repository**:
git clone [https://github.com/prajwald9220/Pune-Explore.git](https://github.com/prajwald9220/Pune-Explore.git)

* **Navigate into the project directory**:
cd "Travelling Enjoyment"

* **Install the necessary backend dependencies**:
npm install

* **Start the development server using Nodemon**:
npm start

### 💻 Developed by Prajwal Deshmukh
