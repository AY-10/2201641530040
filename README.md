# URL Shortener Project

This project is a URL shortener application built with React. It allows users to input URLs they want to shorten and provides statistics on the usage of those URLs.

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/         # React components
│   │   ├── UrlShortenerForm.js  # Form for URL input
│   │   ├── StatisticsPage.js     # Displays URL statistics
│   │   └── Redirector.js         # Handles URL redirection
│   ├── utils/              # Utility functions
│   │   ├── loggingMiddleware.js  # Middleware for logging
│   │   └── validation.js        # URL validation functions
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── styles/             # CSS styles
│       └── main.css        # Main styles for the application
├── .gitignore              # Git ignore file
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- Navigate to the application in your web browser.
- Use the URL shortener form to input URLs you want to shorten.
- View statistics related to the shortened URLs on the statistics page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.
