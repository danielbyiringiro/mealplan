# MealPlan Portal

## Overview

The MealPlan Portal is a web-based application designed for students at Ashesi University to check their meal plan balance, daily spending limit, and transaction history. Users can enter their subscriber ID to retrieve and display their meal plan details in a user-friendly format.

## Features

- **Balance Inquiry**: Check current balance, daily spending limit, and total balance.
- **Transaction History**: View a detailed table of past transactions.
- **Responsive Design**: Optimized for different screen sizes and devices.
- **Interactive Input**: Submit subscriber ID via a text input with an integrated submit button.

## Technologies Used

- **HTML5**: Structure and layout of the web application.
- **CSS3**: Styling and layout adjustments.
- **JavaScript**: Client-side scripting for form submission and data fetching.
- **Async/Await**: Handle asynchronous operations for fetching balance and history data.

## Project Structure

MealPlanPortal/
│
├── index.html # Main HTML file
├── styles.css # Main CSS file
├── index.js # Main JavaScript file
├── search.jpg # Image used for submit button
└── README.md # Project README file


## Getting Started

To run this project locally, follow these steps:
**Clone the repository**:
   ```sh
   git clone https://github.com/danielbyiringiro/MealPlanPortal.git
   cd MealPlanPortal
   open index.html
   ```
## Usage

### Enter Subscriber ID:
1. Navigate to the MealPlan Portal in your web browser.
2. Enter your subscriber ID in the input field.

### Submit:
1. Click the search icon (submit button) to retrieve your meal plan details.

### View Results:
1. Your meal plan balance and transaction history will be displayed below the input field.

## Code Explanation

### HTML (index.html)

The main structure of the application, including:

- A form for inputting the subscriber ID.
- A container to display the balance and transaction history.

### CSS (styles.css)

Styling for the application, including:

- Flexbox layout for centering content.
- Styling for the input field and submit button.
- Table styling with alternating row colors.

### JavaScript (index.js)

Script to handle form submission and data fetching:

- Event listener for form submission.
- Functions to fetch balance and history data asynchronously.
- Dynamic creation of HTML elements to display fetched data.

## Footer

The footer includes a credit line:

```html
<footer>
    <p>Crafted by <a href="https://linkedin.com/in/dbyiri">Daniel Byiringiro</a></p>
</footer>
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or feedback, please contact:

- **Daniel Byiringiro**: [LinkedIn](https://linkedin.com/in/dbyiri)
- **Phone**: +233549034573


