

# URL Shortener Frontend

## Overview

This is a **React-based URL Shortener Web Application** developed for the **Afford Medical Technologies Campus Hiring Evaluation**.
The application allows users to shorten URLs, optionally set a custom shortcode and validity period, and view statistics. All user interactions are logged using a **custom Logging Middleware** integrated with the Affordmed evaluation API.

---

## Features

* Shorten up to **5 URLs concurrently**
* Optional **custom shortcode** for each URL
* Default validity: **30 minutes** (if not specified)
* Client-side validation for URLs and input formats
* View shortened URLs and click statistics
* Redirect functionality for short URLs
* Extensive **logging via middleware** (no console logs used)
* **Responsive design** using Material UI / CSS

---

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UrlShortenerForm.js
│   │   ├── StatisticsPage.js
│   │   └── Redirector.js
│   ├── utils/
│   │   ├── loggingMiddleware.js
│   │   └── validation.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── main.css
├── .gitignore
├── package.json
├── .env
└── README.md
```

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the root:

```env
REACT_APP_API_URL=http://20.244.56.144/evaluation-service
REACT_APP_CLIENT_ID=<your_client_id>
REACT_APP_CLIENT_SECRET=<your_client_secret>
REACT_APP_EMAIL=<your_email>
REACT_APP_NAME="Your Name"
REACT_APP_MOBILE=<your_mobile>
REACT_APP_GITHUB=<your_github>
REACT_APP_ROLLNO=<your_roll_number>
REACT_APP_ACCESS_CODE=<your_access_code>
REACT_APP_ACCESS_TOKEN=<your_access_token>
```

4. **Run the application**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Logging Middleware

* **File:** `src/utils/loggingMiddleware.js`
* Logs all actions to the **Affordmed Test Server API** using `POST /logs`.
* Also stores logs locally for displaying statistics in the app.

**Usage Example:**

```javascript
import { logAction } from "../utils/loggingMiddleware";

await logAction("Shortened URL: example.com -> short.ly/abc123", "info");
```

---

## URL Shortener Pages

1. **Main URL Shortener Page**

   * Enter up to 5 URLs
   * Optional: custom shortcode & validity (minutes)
   * Client-side validation ensures correct URL format

2. **Statistics Page**

   * Displays all shortened URLs from local storage
   * Shows creation/expiry times and logs

3. **Redirector Page**

   * Handles `/:shortId` routes
   * Redirects to the original URL (demo: currently redirects to Google)

---

## Notes

* **Material UI** or vanilla CSS used for styling
* Application runs exclusively on **localhost:3000**
* Logging middleware is **mandatory**; console logging is avoided
* All shortened URLs are unique per session

---

## License

This project is for **Affordmed Campus Hiring Evaluation** only. Unauthorized use or redistribution is prohibited.

---
