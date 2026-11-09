# GPA Calculator

**SGPI and CGPA calculator for K. J. Somaiya School of Engineering, using the university's actual credit
weightings so the number matches the official result.**

[![Live](https://img.shields.io/badge/live-gpa--calci-4BC8C0?style=flat-square)](https://gpa-calci-qymu.onrender.com)
[![React](https://img.shields.io/badge/React-create--react--app-8B7CF6?style=flat-square)](#running-it)

A generic GPA calculator gives students the wrong answer, because the result depends on the specific credit
weighting of each course in the semester scheme. This one encodes the real scheme, so the output is the number
that will actually appear on the result.

## What it does

- Grade entry per course, with the correct credit weighting applied.
- Computes SGPI for a semester and CGPA across semesters.
- Works on a phone, which is where students check marks.

## Running it

```bash
npm install
npm start           # http://localhost:3000
npm run build       # production bundle
```

Built with Create React App.

## Limits

- Weightings are hardcoded for a specific scheme, so a syllabus revision needs a code change.
- No account or persistence: entries are lost on reload.
- Unofficial. The institute's published result is authoritative.
