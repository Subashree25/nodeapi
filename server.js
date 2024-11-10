const express = require('express');
const path = require('path');
const booksRouter = require('./routes/books'); // Importing the books route

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(express.json());

// Serve static CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL ('/')
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Book Store API</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the Book Store API!</h1>
        <p>Use <code>/api/books</code> to get all books or <code>/api/books/:id</code> to get a specific book.</p>
      </div>
    </body>
    </html>
  `);
});

// Use booksRouter for the '/api/books' endpoint
app.use('/api/books', booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
