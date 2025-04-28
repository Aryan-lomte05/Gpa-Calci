// Import required modules
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins (so your frontend can connect)
app.use(cors()); // [2][3][4][5][6][7]
app.use(express.json()); // To parse JSON bodies

// Example route to test if your server works
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// GPA calculation endpoint
app.post('/calculate', (req, res) => {
  // Example: expects { marks: { subjectCode: marks, ... } }
  const { marks } = req.body;

  // Define subject credits (update as per your PDF)
  const subjectCredits = {
    '216U06C101': 3, // Applied Mathematics - I
    '216U06C102': 3, // Engineering Physics
    '216U06C104': 3, // Engineering Mechanics
    '216U06L101': 3, // Python Programming
    '216U06L102': 1, // Engineering Physics Lab
    '216U06L104': 1, // Engineering Mechanics Lab
    '216U06T101': 2, // Presentation and Communication Skills
    '216U06W101': 2, // Basic Workshop Practice - I
  };

  // Define grade table
  function getGradePoint(marks) {
    if (marks >= 80 && marks <= 100) return 10;
    if (marks >= 70 && marks < 80) return 9;
    if (marks >= 60 && marks < 70) return 8;
    if (marks >= 55 && marks < 60) return 7;
    if (marks >= 50 && marks < 55) return 6;
    if (marks >= 45 && marks < 50) return 5;
    if (marks >= 40 && marks < 45) return 4;
    return 0;
  }

  let totalCredits = 0;
  let totalWeightedPoints = 0;

  for (let code in subjectCredits) {
    const credit = subjectCredits[code];
    const mark = Number(marks[code] || 0);
    const gradePoint = getGradePoint(mark);
    totalCredits += credit;
    totalWeightedPoints += credit * gradePoint;
  }

  const sgpi = totalCredits ? (totalWeightedPoints / totalCredits).toFixed(2) : 0;

  res.json({ sgpi });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
