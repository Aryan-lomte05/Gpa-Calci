// // // import React, { useState } from "react";
// // // import { TextField, Button, Typography, Grid, Paper } from "@mui/material";

// // // const subjectList = [
// // //   { code: "216U06C101", name: "Applied Mathematics - I", credits: 3 },
// // //   { code: "216U06C102", name: "Engineering Physics", credits: 3 },
// // //   { code: "216U06C104", name: "Engineering Mechanics", credits: 3 },
// // //   { code: "216U06L101", name: "Python Programming", credits: 3 },
// // //   { code: "216U06L102", name: "Engineering Physics Laboratory", credits: 1 },
// // //   { code: "216U06L104", name: "Engineering Mechanics Laboratory", credits: 1 },
// // //   { code: "216U06T101", name: "Presentation and Communication Skills", credits: 2 },
// // //   { code: "216U06W101", name: "Basic Workshop Practice - I", credits: 2 },
// // // ];

// // // export default function GpaCalculator() {
// // //   const [marks, setMarks] = useState({});
// // //   const [sgpi, setSgpi] = useState(null);

// // //   const handleChange = (code, value) => {
// // //     setMarks({ ...marks, [code]: value });
// // //   };

// // //   const handleCalculate = async () => {
// // //     // Send marks to backend for calculation
// // //     const response = await fetch("http://localhost:5000/calculate", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ marks }),
// // //     });
// // //     const data = await response.json();
// // //     setSgpi(data.sgpi);
// // //   };

// // //   return (
// // //     <Paper elevation={3} style={{ padding: 24, marginTop: 32 }}>
// // //       <Typography variant="h4" gutterBottom>
// // //         SGPI Calculator
// // //       </Typography>
// // //       <Grid container spacing={2}>
// // //         {subjectList.map((subj) => (
// // //           <Grid item xs={12} sm={6} md={4} key={subj.code}>
// // //             <TextField
// // //               label={`${subj.name} (${subj.credits} credits)`}
// // //               type="number"
// // //               inputProps={{ min: 0, max: 100 }}
// // //               value={marks[subj.code] || ""}
// // //               onChange={(e) => handleChange(subj.code, e.target.value)}
// // //               fullWidth
// // //             />
// // //           </Grid>
// // //         ))}
// // //       </Grid>
// // //       <Button
// // //         variant="contained"
// // //         color="primary"
// // //         style={{ marginTop: 24 }}
// // //         onClick={handleCalculate}
// // //       >
// // //         Calculate SGPI
// // //       </Button>
// // //       {sgpi && (
// // //         <Typography variant="h5" style={{ marginTop: 16 }}>
// // //           Your SGPI: {sgpi}
// // //         </Typography>
// // //       )}
// // //     </Paper>
// // //   );
// // // }
// // import React, { useState } from 'react';
// // import {
// //   Container, Typography, Paper, Grid, TextField, Button, Select,
// //   MenuItem, FormControl, InputLabel, Box, Card, CardContent,
// //   Slider, Table, TableBody, TableCell, TableContainer,
// //   TableHead, TableRow, Tabs, Tab, AppBar, Toolbar
// // } from '@mui/material';
// // import { ThemeProvider, createTheme } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';

// // // Define the theme
// // const theme = createTheme({
// //   palette: {
// //     primary: { main: '#2e7d32' },
// //     secondary: { main: '#d32f2f' },
// //     background: { default: '#f5f5f5' }
// //   },
// //   typography: {
// //     fontFamily: 'Poppins, Arial, sans-serif',
// //     h4: { fontWeight: 600 }
// //   },
// //   components: {
// //     MuiCard: {
// //       styleOverrides: {
// //         root: {
// //           transition: 'transform 0.3s, box-shadow 0.3s',
// //           '&:hover': {
// //             transform: 'translateY(-5px)',
// //             boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
// //           },
// //         },
// //       },
// //     },
// //     MuiButton: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: 8,
// //           textTransform: 'none',
// //           fontWeight: 600,
// //         },
// //       },
// //     },
// //   },
// // });

// // // Define program structures based on provided PDFs
// // const programStructure = {
// //   'CSBS': {
// //     name: 'Computer Science & Business Systems',
// //     subjects: [
// //       { 
// //         code: '216U06C101', 
// //         name: 'Applied Mathematics - I', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 100, passing: 40, calculated: true },
// //           { name: 'TuCA', max: 25, passing: 10, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06C102', 
// //         name: 'Engineering Physics', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 97, passing: 39, calculated: true }
// //         ]
// //       },
// //       { 
// //         code: '216U06C104', 
// //         name: 'Engineering Mechanics', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 94, passing: 38, calculated: true }
// //         ]
// //       },
// //       { 
// //         code: '216U06L101', 
// //         name: 'Python Programming', 
// //         credits: 3,
// //         components: [
// //           { name: 'LABCA', max: 72, passing: 29, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06L102', 
// //         name: 'Engineering Physics Laboratory', 
// //         credits: 1,
// //         components: [
// //           { name: 'LABCA', max: 49, passing: 20, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06L104', 
// //         name: 'Engineering Mechanics Laboratory', 
// //         credits: 1,
// //         components: [
// //           { name: 'LABCA', max: 48, passing: 19, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06T101', 
// //         name: 'Presentation and Communication Skills', 
// //         credits: 2,
// //         components: [
// //           { name: 'TuCA', max: 49, passing: 20, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06W101', 
// //         name: 'Basic Workshop Practice - I', 
// //         credits: 2,
// //         components: [
// //           { name: 'LABCA', max: 44, passing: 18, min: 0 }
// //         ]
// //       }
// //     ],
// //     totalCredits: 18
// //   },
// //   'Computer': {
// //     name: 'Computer Engineering',
// //     subjects: [
// //       { 
// //         code: '216U06C101', 
// //         name: 'Applied Mathematics - I', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 100, passing: 40, calculated: true },
// //           { name: 'TuCA', max: 25, passing: 10, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06L101', 
// //         name: 'Python Programming', 
// //         credits: 3,
// //         components: [
// //           { name: 'LABCA', max: 75, passing: 29, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06C103', 
// //         name: 'Engineering Chemistry', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 100, passing: 39, calculated: true }
// //         ]
// //       },
// //       { 
// //         code: '216U06L103', 
// //         name: 'Engineering Chemistry Laboratory', 
// //         credits: 1,
// //         components: [
// //           { name: 'LABCA', max: 49, passing: 20, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06C105', 
// //         name: 'Engineering Drawing', 
// //         credits: 3,
// //         components: [
// //           { name: 'ESE', max: 50, min: 0 },
// //           { name: 'CA', max: 50, min: 0 },
// //           { name: 'Tot1', max: 100, passing: 39, calculated: true }
// //         ]
// //       },
// //       { 
// //         code: '216U06C106', 
// //         name: 'Elements of Electrical and Electronics Engineering', 
// //         credits: 3,
// //         components: [
// //           { name: 'LABCA', max: 75, passing: 29, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06L105', 
// //         name: 'Engineering Drawing Laboratory', 
// //         credits: 1,
// //         components: [
// //           { name: 'LABCA', max: 49, passing: 20, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06L106', 
// //         name: 'Elements of Electrical and Electronics Engineering Laboratory', 
// //         credits: 2,
// //         components: [
// //           { name: 'LABCA', max: 47, passing: 19, min: 0 }
// //         ]
// //       },
// //       { 
// //         code: '216U06W101', 
// //         name: 'Basic Workshop Practice - I', 
// //         credits: 1,
// //         components: [
// //           { name: 'LABCA', max: 44, passing: 18, min: 0 }
// //         ]
// //       }
// //     ],
// //     totalCredits: 20
// //   }
// // };

// // // Grading system from your PDF
// // const gradeSystem = [
// //   { min: 80, max: 100, grade: 'O', points: 10 },
// //   { min: 70, max: 79.99, grade: 'A+', points: 9 },
// //   { min: 60, max: 69.99, grade: 'A', points: 8 },
// //   { min: 55, max: 59.99, grade: 'B+', points: 7 },
// //   { min: 50, max: 54.99, grade: 'B', points: 6 },
// //   { min: 45, max: 49.99, grade: 'C', points: 5 },
// //   { min: 40, max: 44.99, grade: 'D', points: 4 },
// //   { min: 0, max: 39.99, grade: 'FF', points: 0 }
// // ];

// // // Helper functions
// // const getGradePoints = (marks) => {
// //   if (marks === '' || isNaN(marks)) return 0;
// //   const grade = gradeSystem.find(g => marks >= g.min && marks <= g.max);
// //   return grade ? grade.points : 0;
// // };

// // const getGradeLabel = (marks) => {
// //   if (marks === '' || isNaN(marks)) return 'FF';
// //   const grade = gradeSystem.find(g => marks >= g.min && marks <= g.max);
// //   return grade ? grade.grade : 'FF';
// // };

// // function SGPICalculator() {
// //   const [program, setProgram] = useState('CSBS');
// //   const [marks, setMarks] = useState({});
// //   const [targetSGPI, setTargetSGPI] = useState(8.0);
// //   const [currentSGPI, setCurrentSGPI] = useState(null);
// //   const [requiredMarks, setRequiredMarks] = useState(null);
// //   const [activeTab, setActiveTab] = useState(0);

// //   const handleProgramChange = (event) => {
// //     setProgram(event.target.value);
// //     setMarks({});
// //     setCurrentSGPI(null);
// //     setRequiredMarks(null);
// //   };

// //   const handleMarkChange = (subjectCode, component, value) => {
// //     const numValue = value === '' ? '' : Number(value);
    
// //     setMarks(prevMarks => ({
// //       ...prevMarks,
// //       [subjectCode]: {
// //         ...prevMarks[subjectCode] || {},
// //         [component]: numValue
// //       }
// //     }));
// //   };

// //   const getSubjectTotal = (subjectCode, componentName) => {
// //     const subject = programStructure[program].subjects.find(s => s.code === subjectCode);
// //     if (!subject) return 0;
    
// //     const component = subject.components.find(c => c.name === componentName);
// //     if (!component) return 0;
    
// //     if (component.calculated && componentName === 'Tot1') {
// //       const ese = marks[subjectCode]?.['ESE'] || 0;
// //       const ca = marks[subjectCode]?.['CA'] || 0;
// //       return ese + ca;
// //     }
    
// //     return marks[subjectCode]?.[componentName] || 0;
// //   };

// //   const calculateSGPI = () => {
// //     let totalCredits = 0;
// //     let totalGradePoints = 0;
    
// //     const subjects = programStructure[program].subjects;
    
// //     subjects.forEach(subject => {
// //       // Find the main component to grade (usually Tot1 or LABCA)
// //       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
// //       // Get the mark for this component
// //       let markValue;
      
// //       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
// //         // For Tot1, we calculate from ESE and CA
// //         const ese = marks[subject.code]?.['ESE'] || 0;
// //         const ca = marks[subject.code]?.['CA'] || 0;
// //         markValue = ese + ca;
// //       } else {
// //         markValue = marks[subject.code]?.[mainComponent.name] || 0;
// //       }
      
// //       // Get grade points
// //       const gradePoints = getGradePoints(markValue);
      
// //       totalCredits += subject.credits;
// //       totalGradePoints += gradePoints * subject.credits;
// //     });
    
// //     return totalCredits > 0 ? (totalGradePoints / totalCredits) : 0;
// //   };

// //   const handleCalculate = () => {
// //     const sgpi = calculateSGPI();
// //     setCurrentSGPI(sgpi);
    
// //     if (targetSGPI > sgpi) {
// //       calculateRequiredMarks(sgpi);
// //     } else {
// //       setRequiredMarks(null);
// //     }
// //   };

// //   const calculateRequiredMarks = (currentSGPI) => {
// //     const subjects = programStructure[program].subjects;
// //     const totalCredits = programStructure[program].totalCredits;
    
// //     // Calculate how many grade points are needed
// //     const currentPoints = currentSGPI * totalCredits;
// //     const targetPoints = targetSGPI * totalCredits;
// //     const pointsNeeded = targetPoints - currentPoints;
    
// //     // Find subjects with missing or low marks
// //     const incompleteSubjects = subjects.filter(subject => {
// //       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
// //       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
// //         const ese = marks[subject.code]?.['ESE'] || 0;
// //         const ca = marks[subject.code]?.['CA'] || 0;
// //         return (ese + ca) < mainComponent.max;
// //       } else {
// //         return !marks[subject.code]?.[mainComponent.name] || 
// //                marks[subject.code]?.[mainComponent.name] < mainComponent.max;
// //       }
// //     });
    
// //     // Calculate remaining credits
// //     const remainingCredits = incompleteSubjects.reduce((sum, subj) => sum + subj.credits, 0);
    
// //     if (remainingCredits === 0) {
// //       setRequiredMarks({ message: "All subjects have maximum marks. Cannot calculate required marks." });
// //       return;
// //     }
    
// //     // Calculate required grade points per credit
// //     const requiredPointsPerCredit = pointsNeeded / remainingCredits;
    
// //     // Find required grades for each subject
// //     const required = {};
    
// //     incompleteSubjects.forEach(subject => {
// //       const requiredPoints = requiredPointsPerCredit * subject.credits;
      
// //       // Find suitable grade
// //       let minGrade = gradeSystem.find(g => g.points >= requiredPoints / subject.credits);
      
// //       // If no suitable grade (requires more than O grade), default to O
// //       if (!minGrade) minGrade = gradeSystem[0];
      
// //       required[subject.code] = {
// //         subject: subject.name,
// //         requiredGrade: minGrade.grade,
// //         requiredPoints: minGrade.points,
// //         minMarks: minGrade.min
// //       };
// //     });
    
// //     setRequiredMarks(required);
// //   };

// //   const handleTabChange = (event, newValue) => {
// //     setActiveTab(newValue);
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <AppBar position="static" color="primary">
// //         <Toolbar>
// //           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
// //             KJSCE SGPI Calculator
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
      
// //       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //         <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
// //           <Typography variant="h4" gutterBottom align="center" color="primary">
// //             Semester GPA Calculator
// //           </Typography>
          
// //           <Tabs 
// //             value={activeTab} 
// //             onChange={handleTabChange} 
// //             centered 
// //             sx={{ mb: 4 }}
// //             indicatorColor="primary"
// //             textColor="primary"
// //           >
// //             <Tab label="Calculate SGPI" />
// //             <Tab label="Target SGPI" />
// //             <Tab label="Grade Table" />
// //           </Tabs>
          
// //           {/* Program Selection */}
// //           <FormControl fullWidth sx={{ mb: 4 }}>
// //             <InputLabel id="program-select-label">Select Program</InputLabel>
// //             <Select
// //               labelId="program-select-label"
// //               id="program-select"
// //               value={program}
// //               onChange={handleProgramChange}
// //               label="Select Program"
// //             >
// //               <MenuItem value="CSBS">F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS</MenuItem>
// //               <MenuItem value="Computer">F.Y. B.TECH. COMPUTER ENGINEERING</MenuItem>
// //             </Select>
// //           </FormControl>
          
// //           {/* Calculate SGPI Tab */}
// //           {activeTab === 0 && (
// //             <>
// //               <Grid container spacing={3}>
// //                 {programStructure[program].subjects.map((subject) => (
// //                   <Grid item xs={12} md={6} key={subject.code}>
// //                     <Card variant="outlined" sx={{ height: '100%' }}>
// //                       <CardContent>
// //                         <Typography variant="subtitle1" gutterBottom fontWeight="bold">
// //                           {subject.name} ({subject.credits} credits)
// //                         </Typography>
// //                         <Typography variant="caption" color="textSecondary" display="block">
// //                           {subject.code}
// //                         </Typography>
// //                         <Grid container spacing={2} sx={{ mt: 1 }}>
// //                           {subject.components
// //                             .filter(comp => !comp.calculated)
// //                             .map((component) => (
// //                               <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
// //                                 <TextField
// //                                   label={`${component.name} (Max: ${component.max})`}
// //                                   type="number"
// //                                   size="small"
// //                                   fullWidth
// //                                   inputProps={{ 
// //                                     min: component.min, 
// //                                     max: component.max,
// //                                     step: 1
// //                                   }}
// //                                   value={marks[subject.code]?.[component.name] || ''}
// //                                   onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
// //                                 />
// //                               </Grid>
// //                             ))
// //                           }
                          
// //                           {/* Show calculated totals if applicable */}
// //                           {subject.components.filter(comp => comp.calculated).map((component) => (
// //                             <Grid item xs={12} key={`${subject.code}-${component.name}-calc`}>
// //                               <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
// //                                 <Typography variant="body2">
// //                                   {component.name}: {getSubjectTotal(subject.code, component.name)} / {component.max}
// //                                   {' '}
// //                                   (Grade: {getGradeLabel(getSubjectTotal(subject.code, component.name))})
// //                                 </Typography>
// //                               </Box>
// //                             </Grid>
// //                           ))}
// //                         </Grid>
// //                       </CardContent>
// //                     </Card>
// //                   </Grid>
// //                 ))}
// //               </Grid>
              
// //               <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
// //                 <Button 
// //                   variant="contained" 
// //                   color="primary" 
// //                   size="large"
// //                   onClick={handleCalculate}
// //                   sx={{ px: 4, py: 1 }}
// //                 >
// //                   Calculate SGPI
// //                 </Button>
// //               </Box>
              
// //               {currentSGPI !== null && (
// //                 <Box sx={{ mt: 4, textAlign: 'center' }}>
// //                   <Typography variant="h5">
// //                     Your SGPI: {currentSGPI.toFixed(2)}
// //                   </Typography>
// //                   <Typography variant="body1" color="textSecondary">
// //                     Grade: {getGradeLabel(currentSGPI * 10)}
// //                   </Typography>
// //                 </Box>
// //               )}
// //             </>
// //           )}
          
// //           {/* Target SGPI Tab */}
// //           {activeTab === 1 && (
// //             <>
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="h6" gutterBottom>
// //                   Target SGPI: {targetSGPI.toFixed(2)}
// //                 </Typography>
// //                 <Slider
// //                   value={targetSGPI}
// //                   min={4}
// //                   max={10}
// //                   step={0.1}
// //                   marks={[
// //                     { value: 4, label: '4.0' },
// //                     { value: 6, label: '6.0' },
// //                     { value: 8, label: '8.0' },
// //                     { value: 10, label: '10.0' },
// //                   ]}
// //                   onChange={(e, value) => setTargetSGPI(value)}
// //                 />
// //               </Box>
              
// //               <Typography variant="body1" gutterBottom>
// //                 Enter your current marks for the subjects you've completed:
// //               </Typography>
              
// //               <Grid container spacing={3}>
// //                 {programStructure[program].subjects.map((subject) => (
// //                   <Grid item xs={12} md={6} key={subject.code}>
// //                     <Card variant="outlined" sx={{ height: '100%' }}>
// //                       <CardContent>
// //                         <Typography variant="subtitle1" gutterBottom fontWeight="bold">
// //                           {subject.name} ({subject.credits} credits)
// //                         </Typography>
// //                         <Typography variant="caption" color="textSecondary" display="block">
// //                           {subject.code}
// //                         </Typography>
// //                         <Grid container spacing={2} sx={{ mt: 1 }}>
// //                           {subject.components
// //                             .filter(comp => !comp.calculated)
// //                             .map((component) => (
// //                               <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
// //                                 <TextField
// //                                   label={`${component.name} (Max: ${component.max})`}
// //                                   type="number"
// //                                   size="small"
// //                                   fullWidth
// //                                   inputProps={{ 
// //                                     min: component.min, 
// //                                     max: component.max,
// //                                     step: 1
// //                                   }}
// //                                   value={marks[subject.code]?.[component.name] || ''}
// //                                   onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
// //                                 />
// //                               </Grid>
// //                             ))
// //                           }
// //                         </Grid>
// //                       </CardContent>
// //                     </Card>
// //                   </Grid>
// //                 ))}
// //               </Grid>
              
// //               <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
// //                 <Button 
// //                   variant="contained" 
// //                   color="primary" 
// //                   size="large"
// //                   onClick={handleCalculate}
// //                   sx={{ px: 4, py: 1 }}
// //                 >
// //                   Calculate Required Marks
// //                 </Button>
// //               </Box>
              
// //               {currentSGPI !== null && (
// //                 <Box sx={{ mt: 4, textAlign: 'center' }}>
// //                   <Typography variant="h5">
// //                     Current SGPI: {currentSGPI.toFixed(2)}
// //                   </Typography>
// //                   <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
// //                     Target SGPI: {targetSGPI.toFixed(2)}
// //                   </Typography>
// //                 </Box>
// //               )}
              
// //               {requiredMarks && !requiredMarks.message && (
// //                 <Box sx={{ mt: 4 }}>
// //                   <Typography variant="h6" gutterBottom>
// //                     Required Marks for Remaining Subjects:
// //                   </Typography>
// //                   <TableContainer component={Paper} variant="outlined">
// //                     <Table>
// //                       <TableHead>
// //                         <TableRow>
// //                           <TableCell>Subject</TableCell>
// //                           <TableCell align="right">Required Grade</TableCell>
// //                           <TableCell align="right">Minimum Marks Needed</TableCell>
// //                         </TableRow>
// //                       </TableHead>
// //                       <TableBody>
// //                         {Object.keys(requiredMarks).map((subjectCode) => (
// //                           <TableRow key={subjectCode}>
// //                             <TableCell>{requiredMarks[subjectCode].subject}</TableCell>
// //                             <TableCell align="right">{requiredMarks[subjectCode].requiredGrade}</TableCell>
// //                             <TableCell align="right">{requiredMarks[subjectCode].minMarks}%</TableCell>
// //                           </TableRow>
// //                         ))}
// //                       </TableBody>
// //                     </Table>
// //                   </TableContainer>
// //                 </Box>
// //               )}
              
// //               {requiredMarks && requiredMarks.message && (
// //                 <Box sx={{ mt: 4, textAlign: 'center' }}>
// //                   <Typography variant="body1" color="error">
// //                     {requiredMarks.message}
// //                   </Typography>
// //                 </Box>
// //               )}
// //             </>
// //           )}
          
// //           {/* Grade Table Tab */}
// //           {activeTab === 2 && (
// //             <Box sx={{ mt: 2 }}>
// //               <Typography variant="h6" gutterBottom>
// //                 KJSCE Grading System
// //               </Typography>
// //               <TableContainer component={Paper} variant="outlined">
// //                 <Table>
// //                   <TableHead>
// //                     <TableRow>
// //                       <TableCell>Marks Range</TableCell>
// //                       <TableCell>Letter Grade</TableCell>
// //                       <TableCell>Grade Points</TableCell>
// //                     </TableRow>
// //                   </TableHead>
// //                   <TableBody>
// //                     {gradeSystem.map((grade) => (
// //                       <TableRow key={grade.grade}>
// //                         <TableCell>{grade.min} - {grade.max}</TableCell>
// //                         <TableCell>{grade.grade}</TableCell>
// //                         <TableCell>{grade.points}</TableCell>
// //                       </TableRow>
// //                     ))}
// //                   </TableBody>
// //                 </Table>
// //               </TableContainer>
              
// //               <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
// //                 SGPI Formula:
// //               </Typography>
// //               <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
// //                 <Typography>
// //                   SGPI = Sum(Grade Points × Credits) / Sum(Credits)
// //                 </Typography>
// //               </Box>
// //             </Box>
// //           )}
// //         </Paper>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default SGPICalculator;
// import React, { useState } from 'react';
// import { 
//   Container, Typography, Paper, Grid, TextField, Button, Select,
//   MenuItem, FormControl, InputLabel, Box, Card, CardContent,
//   Slider, Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Tabs, Tab, AppBar, Toolbar, Switch
// } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// // Define the subject structures for different groups and semesters
// const subjectData = {
//   'P': {
//     'Sem1': { // Semester 1
//       name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
//       subjects: [
//         {
//           code: "216U06C101",
//           name: "Applied Mathematics - I",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true },
//             { name: "TuCA", max: 25, passing: 10 }
//           ]
//         },
//         {
//           code: "216U06C102",
//           name: "Engineering Physics",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 97, passing: 40, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C104",
//           name: "Engineering Mechanics",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true }
//           ]
//         },
//         {
//           code: "216U06L101",
//           name: "Python Programming",
//           credits: 3,
//           components: [
//             { name: "LABCA", max: 75, passing: 30 }
//           ]
//         },
//         {
//           code: "216U06L102",
//           name: "Engineering Physics Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L104",
//           name: "Engineering Mechanics Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06T101",
//           name: "Presentation and Communication Skills",
//           credits: 2,
//           components: [
//             { name: "TuCA", max: 50, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06W101",
//           name: "Basic Workshop Practice - I",
//           credits: 2,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         }
//       ],
//       totalCredits: 18
//     },
//     'Sem2': { // Semester 2 (P Group gets COMPS subjects)
//       name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
//       subjects: [
//         {
//           code: "216U06C101",
//           name: "Applied Mathematics – II",
//           credits: 4,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true },
//             { name: "TuCA", max: 25, passing: 10 }
//           ]
//         },
//         {
//           code: "216U06C103",
//           name: "Engineering Chemistry",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C105",
//           name: "Engineering Drawing",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C106",
//           name: "Elements of Electrical and Electronics Engineering",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true }
//           ]
//         },
//         {
//           code: "216U06L101",
//           name: "C Programming", // Python changes to C
//           credits: 3,
//           components: [
//             { name: "LABCA", max: 75, passing: 30 }
//           ]
//         },
//         {
//           code: "216U06L103",
//           name: "Engineering Chemistry Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L105",
//           name: "Engineering Drawing Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L106",
//           name: "Elements of Electrical and Electronics Engineering Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06W101",
//           name: "Basic Workshop Practice - I",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         },
//         {
//           code: "PBL",
//           name: "Project Based Learning",
//           credits: 2,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         }
//       ],
//       totalCredits: 22
//     }
//   },
//   'C': { // C Group (reversed mapping)
//     'Sem1': { // Semester 1 (C Group gets COMPS subjects)
//       name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
//       subjects: [
//         {
//           code: "216U06C101",
//           name: "Applied Mathematics – I",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true },
//             { name: "TuCA", max: 25, passing: 10 }
//           ]
//         },
//         {
//           code: "216U06C103",
//           name: "Engineering Chemistry",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 98, passing: 39, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C105",
//           name: "Engineering Drawing",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 98, passing: 39, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C106",
//           name: "Elements of Electrical and Electronics Engineering",
//           credits: 3,
//           components: [
//             { name: "LABCA", max: 72, passing: 29 }
//           ]
//         },
//         {
//           code: "216U06L101",
//           name: "Python Programming",
//           credits: 3,
//           components: [
//             { name: "LABCA", max: 72, passing: 29 }
//           ]
//         },
//         {
//           code: "216U06L103",
//           name: "Engineering Chemistry Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L105",
//           name: "Engineering Drawing Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L106",
//           name: "Elements of Electrical and Electronics Engineering Laboratory",
//           credits: 2,
//           components: [
//             { name: "LABCA", max: 47, passing: 19 }
//           ]
//         },
//         {
//           code: "216U06W101",
//           name: "Basic Workshop Practice - I",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 44, passing: 18 }
//           ]
//         }
//       ],
//       totalCredits: 20
//     },
//     'Sem2': { // Semester 2 (C Group gets CSBS subjects)
//       name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
//       subjects: [
//         {
//           code: "216U06C101",
//           name: "Applied Mathematics - I",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 100, passing: 40, calculated: true },
//             { name: "TuCA", max: 25, passing: 10 }
//           ]
//         },
//         {
//           code: "216U06C102",
//           name: "Engineering Physics",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 97, passing: 39, calculated: true }
//           ]
//         },
//         {
//           code: "216U06C104",
//           name: "Engineering Mechanics",
//           credits: 3,
//           components: [
//             { name: "ESE", max: 50, passing: 0 },
//             { name: "CA", max: 50, passing: 0 },
//             { name: "Tot1", max: 94, passing: 38, calculated: true }
//           ]
//         },
//         {
//           code: "216U06L101",
//           name: "C Programming", // Python changes to C
//           credits: 3,
//           components: [
//             { name: "LABCA", max: 72, passing: 29 }
//           ]
//         },
//         {
//           code: "216U06L102",
//           name: "Engineering Physics Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06L104",
//           name: "Engineering Mechanics Laboratory",
//           credits: 1,
//           components: [
//             { name: "LABCA", max: 48, passing: 19 }
//           ]
//         },
//         {
//           code: "216U06T101",
//           name: "Presentation and Communication Skills",
//           credits: 2,
//           components: [
//             { name: "TuCA", max: 49, passing: 20 }
//           ]
//         },
//         {
//           code: "216U06W101",
//           name: "Basic Workshop Practice - I",
//           credits: 2,
//           components: [
//             { name: "LABCA", max: 44, passing: 18 }
//           ]
//         },
//         {
//           code: "PBL",
//           name: "Project Based Learning",
//           credits: 2,
//           components: [
//             { name: "LABCA", max: 50, passing: 20 }
//           ]
//         }
//       ],
//       totalCredits: 20
//     }
//   }
// };

// // Grading system
// const gradeSystem = [
//   { min: 80, max: 100, grade: 'O', points: 10 },
//   { min: 70, max: 79.99, grade: 'A+', points: 9 },
//   { min: 60, max: 69.99, grade: 'A', points: 8 },
//   { min: 55, max: 59.99, grade: 'B+', points: 7 },
//   { min: 50, max: 54.99, grade: 'B', points: 6 },
//   { min: 45, max: 49.99, grade: 'C', points: 5 },
//   { min: 40, max: 44.99, grade: 'D', points: 4 },
//   { min: 0, max: 39.99, grade: 'FF', points: 0 }
// ];

// // Helper function to get grade details
// const getGradeInfo = (marks) => {
//   if (marks === '' || isNaN(marks)) return { grade: 'FF', points: 0 };
//   const grade = gradeSystem.find(g => marks >= g.min && marks <= g.max);
//   return grade || { grade: 'FF', points: 0 };
// };

// function GpaCalculator() {
//   // State variables
//   const [darkMode, setDarkMode] = useState(true);
//   const [group, setGroup] = useState('P');
//   const [semester, setSemester] = useState('Sem1');
//   const [marks, setMarks] = useState({});
//   const [targetSGPI, setTargetSGPI] = useState(8.0);
//   const [currentSGPI, setCurrentSGPI] = useState(null);
//   const [requiredMarks, setRequiredMarks] = useState(null);
//   const [activeTab, setActiveTab] = useState(0);

//   // Create theme
//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: { main: darkMode ? '#4ecca3' : '#2e7d32' },
//       secondary: { main: darkMode ? '#e84a5f' : '#d32f2f' },
//       background: {
//         default: darkMode ? '#1a1a2e' : '#f5f5f5',
//         paper: darkMode ? '#16213e' : '#ffffff',
//       }
//     },
//     typography: {
//       fontFamily: 'Poppins, Arial, sans-serif',
//       h4: { fontWeight: 600 }
//     },
//     components: {
//       MuiCard: {
//         styleOverrides: {
//           root: {
//             transition: 'transform 0.3s, box-shadow 0.3s',
//             '&:hover': {
//               transform: 'translateY(-5px)',
//               boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
//             },
//           },
//         },
//       },
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             borderRadius: 8,
//             textTransform: 'none',
//             fontWeight: 600,
//           },
//         },
//       },
//     },
//   });

//   // Handle mark changes
//   const handleMarkChange = (subjectCode, component, value) => {
//     const numValue = value === '' ? '' : Number(value);
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [subjectCode]: {
//         ...prevMarks[subjectCode] || {},
//         [component]: numValue
//       }
//     }));
//   };

//   // Get subject total (for calculated fields like Tot1)
//   const getSubjectTotal = (subjectCode, componentName) => {
//     const subject = subjectData[group][semester].subjects.find(s => s.code === subjectCode);
//     if (!subject) return 0;
    
//     const component = subject.components.find(c => c.name === componentName);
//     if (!component) return 0;
    
//     if (component.calculated && componentName === 'Tot1') {
//       const ese = Number(marks[subjectCode]?.['ESE'] || 0);
//       const ca = Number(marks[subjectCode]?.['CA'] || 0);
//       return ese + ca;
//     }
    
//     return Number(marks[subjectCode]?.[componentName] || 0);
//   };

//   // Calculate SGPI
//   const calculateSGPI = () => {
//     let totalPoints = 0;
//     let totalCredits = 0;
    
//     const subjects = subjectData[group][semester].subjects;
    
//     subjects.forEach(subject => {
//       // Find the main component to grade (usually Tot1 or LABCA)
//       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
//       // Get the mark for this component
//       let markValue;
      
//       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
//         // For Tot1, we calculate from ESE and CA
//         const ese = Number(marks[subject.code]?.['ESE'] || 0);
//         const ca = Number(marks[subject.code]?.['CA'] || 0);
//         markValue = ese + ca;
//       } else {
//         markValue = Number(marks[subject.code]?.[mainComponent.name] || 0);
//       }
      
//       // Get grade points
//       const { points } = getGradeInfo(markValue);
      
//       totalCredits += subject.credits;
//       totalPoints += points * subject.credits;
//     });
    
//     return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
//   };

//   // Handle calculate button
//   const handleCalculate = () => {
//     const sgpi = calculateSGPI();
//     setCurrentSGPI(sgpi);
    
//     if (targetSGPI > sgpi) {
//       calculateRequiredMarks(sgpi);
//     } else {
//       setRequiredMarks(null);
//     }
//   };

//   // Calculate required marks to reach target SGPI
//   const calculateRequiredMarks = (currentSGPI) => {
//     const subjects = subjectData[group][semester].subjects;
//     const totalCredits = subjectData[group][semester].totalCredits;
    
//     // Calculate how many grade points are needed
//     const currentPoints = parseFloat(currentSGPI) * totalCredits;
//     const targetPoints = targetSGPI * totalCredits;
//     const pointsNeeded = targetPoints - currentPoints;
    
//     // Find subjects with missing or low marks
//     const incompleteSubjects = subjects.filter(subject => {
//       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
//       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
//         const ese = Number(marks[subject.code]?.['ESE'] || 0);
//         const ca = Number(marks[subject.code]?.['CA'] || 0);
//         return (ese + ca) < mainComponent.max;
//       } else {
//         return !marks[subject.code]?.[mainComponent.name] || 
//                marks[subject.code]?.[mainComponent.name] < mainComponent.max;
//       }
//     });
    
//     // Calculate remaining credits
//     const remainingCredits = incompleteSubjects.reduce((sum, subj) => sum + subj.credits, 0);
    
//     if (remainingCredits === 0) {
//       setRequiredMarks({ message: "All subjects have maximum marks. Cannot calculate required marks." });
//       return;
//     }
    
//     // Calculate required grade points per credit
//     const requiredPointsPerCredit = pointsNeeded / remainingCredits;
    
//     // Find required grades for each subject
//     const required = {};
    
//     incompleteSubjects.forEach(subject => {
//       const requiredPoints = requiredPointsPerCredit * subject.credits;
      
//       // Find suitable grade
//       let minGrade = gradeSystem.find(g => g.points >= requiredPoints / subject.credits);
      
//       // If no suitable grade (requires more than O grade), default to O
//       if (!minGrade) minGrade = gradeSystem[0];
      
//       required[subject.code] = {
//         subject: subject.name,
//         requiredGrade: minGrade.grade,
//         requiredPoints: minGrade.points,
//         minMarks: minGrade.min
//       };
//     });
    
//     setRequiredMarks(required);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ 
//         minHeight: '100vh', 
//         background: darkMode ? 
//           'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : 
//           'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
//         backgroundSize: 'cover',
//         backgroundAttachment: 'fixed'
//       }}>
//         <AppBar position="sticky" elevation={0} sx={{
//           backdropFilter: 'blur(8px)',
//           background: darkMode ? 'rgba(22, 33, 62, 0.8)' : 'rgba(255, 255, 255, 0.8)'
//         }}>
//           <Toolbar>
//             <Typography variant="h6" fontWeight="700" sx={{ flexGrow: 1 }}>
//               KJSCE SGPI Calculator
//             </Typography>
//             <Switch 
//               checked={darkMode}
//               onChange={() => setDarkMode(!darkMode)}
//               color="primary"
//             />
//           </Toolbar>
//         </AppBar>
        
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           <Paper elevation={3} sx={{ 
//             borderRadius: 3, 
//             overflow: 'hidden',
//             boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)'
//           }}>
//             <Box sx={{ p: 4 }}>
//               <Typography variant="h4" gutterBottom align="center" color="primary">
//                 Semester GPA Calculator
//               </Typography>
              
//               <Tabs 
//                 value={activeTab} 
//                 onChange={(e, value) => setActiveTab(value)} 
//                 centered 
//                 sx={{ mb: 4 }}
//                 indicatorColor="primary"
//                 textColor="primary"
//               >
//                 <Tab label="Calculate SGPI" />
//                 <Tab label="Target SGPI" />
//                 <Tab label="Grade Table" />
//               </Tabs>
              
//               {/* Group and Semester Selection */}
//               <Grid container spacing={3} sx={{ mb: 4 }}>
//                 <Grid item xs={12} sm={6}>
//                   <FormControl fullWidth>
//                     <InputLabel>Group</InputLabel>
//                     <Select
//                       value={group}
//                       label="Group"
//                       onChange={(e) => setGroup(e.target.value)}
//                     >
//                       <MenuItem value="P">Group P</MenuItem>
//                       <MenuItem value="C">Group C</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6}>
//                   <FormControl fullWidth>
//                     <InputLabel>Semester</InputLabel>
//                     <Select
//                       value={semester}
//                       label="Semester"
//                       onChange={(e) => setSemester(e.target.value)}
//                     >
//                       <MenuItem value="Sem1">Semester 1</MenuItem>
//                       <MenuItem value="Sem2">Semester 2</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//               </Grid>
              
//               {/* Calculate SGPI Tab */}
//               {activeTab === 0 && (
//                 <>
//                   <Grid container spacing={3}>
//                     {subjectData[group][semester].subjects.map((subject) => (
//                       <Grid item xs={12} md={6} key={subject.code}>
//                         <Card variant="outlined" sx={{ height: '100%' }}>
//                           <CardContent>
//                             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                               <Typography variant="subtitle1" fontWeight="bold">
//                                 {subject.name}
//                               </Typography>
//                               <Typography 
//                                 variant="body2" 
//                                 color="primary"
//                                 sx={{
//                                   border: '1px solid',
//                                   borderColor: 'primary.main',
//                                   borderRadius: 1,
//                                   px: 1,
//                                   py: 0.5
//                                 }}
//                               >
//                                 {subject.credits} credits
//                               </Typography>
//                             </Box>
                            
//                             <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 2 }}>
//                               {subject.code}
//                             </Typography>
                            
//                             <Grid container spacing={2}>
//                               {subject.components
//                                 .filter(comp => !comp.calculated)
//                                 .map((component) => (
//                                   <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
//                                     <TextField
//                                       label={`${component.name}`}
//                                       type="number"
//                                       size="small"
//                                       fullWidth
//                                       inputProps={{ min: 0, max: component.max }}
//                                       value={marks[subject.code]?.[component.name] || ''}
//                                       onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
//                                       helperText={`Max: ${component.max}`}
//                                     />
//                                   </Grid>
//                                 ))
//                               }
//                             </Grid>
                            
//                             {/* Show calculated totals if applicable */}
//                             {subject.components.filter(comp => comp.calculated).map((component) => {
//                               const total = getSubjectTotal(subject.code, component.name);
//                               const { grade, points } = getGradeInfo(total);
                              
//                               return (
//                                 <Box 
//                                   key={`${subject.code}-${component.name}`} 
//                                   sx={{ 
//                                     mt: 2, 
//                                     p: 1.5, 
//                                     bgcolor: 'background.default', 
//                                     borderRadius: 1,
//                                     border: '1px solid',
//                                     borderColor: 'divider',
//                                   }}
//                                 >
//                                   <Grid container alignItems="center">
//                                     <Grid item xs={5}>
//                                       <Typography variant="body2">
//                                         {component.name}: {total}/{component.max}
//                                       </Typography>
//                                     </Grid>
//                                     <Grid item xs={4}>
//                                       <Typography variant="body2">
//                                         Grade: {grade}
//                                       </Typography>
//                                     </Grid>
//                                     <Grid item xs={3}>
//                                       <Typography variant="body2">
//                                         Points: {points}
//                                       </Typography>
//                                     </Grid>
//                                   </Grid>
//                                 </Box>
//                               );
//                             })}
//                           </CardContent>
//                         </Card>
//                       </Grid>
//                     ))}
//                   </Grid>
                  
//                   <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
//                     <Button 
//                       variant="contained" 
//                       color="primary" 
//                       size="large"
//                       onClick={handleCalculate}
//                       sx={{ px: 4, py: 1 }}
//                     >
//                       Calculate SGPI
//                     </Button>
//                   </Box>
                  
//                   {currentSGPI !== null && (
//                     <Box sx={{ mt: 4, textAlign: 'center' }}>
//                       <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto', borderRadius: 2 }}>
//                         <Typography variant="h5" gutterBottom>
//                           Your SGPI: {currentSGPI}
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                           Grade: {getGradeInfo(currentSGPI * 10).grade}
//                         </Typography>
//                       </Paper>
//                     </Box>
//                   )}
//                 </>
//               )}
              
//               {/* Target SGPI Tab */}
//               {activeTab === 1 && (
//                 <>
//                   <Box sx={{ mb: 4 }}>
//                     <Typography variant="h6" gutterBottom>
//                       Target SGPI: {targetSGPI.toFixed(2)}
//                     </Typography>
//                     <Slider
//                       value={targetSGPI}
//                       min={4}
//                       max={10}
//                       step={0.1}
//                       marks={[
//                         { value: 4, label: '4.0' },
//                         { value: 6, label: '6.0' },
//                         { value: 8, label: '8.0' },
//                         { value: 10, label: '10.0' },
//                       ]}
//                       onChange={(e, value) => setTargetSGPI(value)}
//                     />
//                   </Box>
                  
//                   <Typography variant="body1" gutterBottom>
//                     Enter your current marks for the subjects you've completed:
//                   </Typography>
                  
//                   <Grid container spacing={3}>
//                     {subjectData[group][semester].subjects.map((subject) => (
//                       <Grid item xs={12} md={6} key={subject.code}>
//                         <Card variant="outlined" sx={{ height: '100%' }}>
//                           <CardContent>
//                             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                               <Typography variant="subtitle1" fontWeight="bold">
//                                 {subject.name}
//                               </Typography>
//                               <Typography 
//                                 variant="body2" 
//                                 color="primary"
//                                 sx={{
//                                   border: '1px solid',
//                                   borderColor: 'primary.main',
//                                   borderRadius: 1,
//                                   px: 1,
//                                   py: 0.5
//                                 }}
//                               >
//                                 {subject.credits} credits
//                               </Typography>
//                             </Box>
                            
//                             <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 2 }}>
//                               {subject.code}
//                             </Typography>
                            
//                             <Grid container spacing={2}>
//                               {subject.components
//                                 .filter(comp => !comp.calculated)
//                                 .map((component) => (
//                                   <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
//                                     <TextField
//                                       label={`${component.name}`}
//                                       type="number"
//                                       size="small"
//                                       fullWidth
//                                       inputProps={{ min: 0, max: component.max }}
//                                       value={marks[subject.code]?.[component.name] || ''}
//                                       onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
//                                       helperText={`Max: ${component.max}`}
//                                     />
//                                   </Grid>
//                                 ))
//                               }
//                             </Grid>
//                           </CardContent>
//                         </Card>
//                       </Grid>
//                     ))}
//                   </Grid>
                  
//                   <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
//                     <Button 
//                       variant="contained" 
//                       color="primary" 
//                       size="large"
//                       onClick={handleCalculate}
//                       sx={{ px: 4, py: 1 }}
//                     >
//                       Calculate Required Marks
//                     </Button>
//                   </Box>
                  
//                   {currentSGPI !== null && (
//                     <Box sx={{ mt: 4, textAlign: 'center' }}>
//                       <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto', borderRadius: 2 }}>
//                         <Typography variant="h5" gutterBottom>
//                           Current SGPI: {currentSGPI}
//                         </Typography>
//                         <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
//                           Target SGPI: {targetSGPI.toFixed(2)}
//                         </Typography>
                        
//                         {requiredMarks && !requiredMarks.message && Object.keys(requiredMarks).length > 0 && (
//                           <Box sx={{ mt: 3 }}>
//                             <Typography variant="body1" gutterBottom>
//                               To achieve your target SGPI, you need at least these grades:
//                             </Typography>
//                             <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
//                               <Table size="small">
//                                 <TableHead>
//                                   <TableRow>
//                                     <TableCell>Subject</TableCell>
//                                     <TableCell align="right">Required Grade</TableCell>
//                                     <TableCell align="right">Minimum Marks Needed</TableCell>
//                                   </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                   {Object.keys(requiredMarks).map((code) => (
//                                     <TableRow key={code}>
//                                       <TableCell>{requiredMarks[code].subject}</TableCell>
//                                       <TableCell align="right">{requiredMarks[code].requiredGrade}</TableCell>
//                                       <TableCell align="right">{requiredMarks[code].minMarks}</TableCell>
//                                     </TableRow>
//                                   ))}
//                                 </TableBody>
//                               </Table>
//                             </TableContainer>
//                           </Box>
//                         )}
                        
//                         {requiredMarks && requiredMarks.message && (
//                           <Typography variant="body1" color="error" sx={{ mt: 2 }}>
//                             {requiredMarks.message}
//                           </Typography>
//                         )}
//                       </Paper>
//                     </Box>
//                   )}
//                 </>
//               )}
              
//               {/* Grade Table Tab */}
//               {activeTab === 2 && (
//                 <Box sx={{ mt: 2 }}>
//                   <Typography variant="h6" gutterBottom>
//                     KJSCE Grading System
//                   </Typography>
//                   <TableContainer component={Paper} variant="outlined">
//                     <Table>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell>Marks Range</TableCell>
//                           <TableCell>Letter Grade</TableCell>
//                           <TableCell>Grade Points</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {gradeSystem.map((grade) => (
//                           <TableRow key={grade.grade}>
//                             <TableCell>{grade.min} - {grade.max}</TableCell>
//                             <TableCell>{grade.grade}</TableCell>
//                             <TableCell>{grade.points}</TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
                  
//                   <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
//                     SGPI Formula:
//                   </Typography>
//                   <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
//                     <Typography>
//                       SGPI = Sum(Grade Points × Credits) / Sum(Credits)
//                     </Typography>
//                   </Box>
//                 </Box>
//               )}
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default GpaCalculator;
import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Paper, Grid, TextField, Button, Select,
  MenuItem, FormControl, InputLabel, Box, Card, CardContent,
  Slider, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Tabs, Tab, AppBar, Toolbar, Switch
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define subject structures
const subjectData = {
  'P': {
    'Sem1': { // Semester 1
      name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics - I",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 100, passing: 40, calculated: true },
            { name: "TuCA", max: 25, passing: 10 }
          ]
        },
        {
          code: "216U06C102",
          name: "Engineering Physics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 97, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C104",
          name: "Engineering Mechanics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 94, passing: 38, calculated: true }
          ]
        },
        {
          code: "216U06L101",
          name: "Python Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 72, passing: 29 }
          ]
        },
        {
          code: "216U06L102",
          name: "Engineering Physics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L104",
          name: "Engineering Mechanics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 48, passing: 19 }
          ]
        },
        {
          code: "216U06T101",
          name: "Presentation and Communication Skills",
          credits: 2,
          components: [
            { name: "TuCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06W101",
          name: "Basic Workshop Practice - I",
          credits: 2,
          components: [
            { name: "LABCA", max: 44, passing: 18 }
          ]
        }
      ],
      totalCredits: 18
    },
    'Sem2': { // Semester 2 (P Group gets COMPS subjects)
      name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics – I",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 100, passing: 40, calculated: true },
            { name: "TuCA", max: 25, passing: 10 }
          ]
        },
        {
          code: "216U06C103",
          name: "Engineering Chemistry",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 98, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C105",
          name: "Engineering Drawing",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 98, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C106",
          name: "Elements of Electrical and Electronics Engineering",
          credits: 3,
          components: [
            { name: "LABCA", max: 75, passing: 29 }
          ]
        },
        {
          code: "216U06L101",
          name: "C Programming", // Python changes to C
          credits: 3,
          components: [
            { name: "LABCA", max: 72, passing: 29 }
          ]
        },
        {
          code: "216U06L103",
          name: "Engineering Chemistry Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L105",
          name: "Engineering Drawing Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L106",
          name: "Elements of Electrical and Electronics Engineering Laboratory",
          credits: 2,
          components: [
            { name: "LABCA", max: 47, passing: 19 }
          ]
        },
        {
          code: "216U06W101",
          name: "Basic Workshop Practice - I",
          credits: 1,
          components: [
            { name: "LABCA", max: 44, passing: 18 }
          ]
        },
        {
          code: "PBL",
          name: "Project Based Learning", 
          credits: 2,
          components: [
            { name: "LABCA", max: 50, passing: 20 }
          ]
        }
      ],
      totalCredits: 22
    }
  },
  'C': { // C Group (reversed mapping)
    'Sem1': { // Semester 1 (C Group gets COMPS subjects)
      name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics – I",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 100, passing: 40, calculated: true },
            { name: "TuCA", max: 25, passing: 10 }
          ]
        },
        {
          code: "216U06C103",
          name: "Engineering Chemistry",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 98, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C105",
          name: "Engineering Drawing",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 98, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C106",
          name: "Elements of Electrical and Electronics Engineering",
          credits: 3,
          components: [
            { name: "LABCA", max: 72, passing: 29 }
          ]
        },
        {
          code: "216U06L101",
          name: "Python Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 72, passing: 29 }
          ]
        },
        {
          code: "216U06L103",
          name: "Engineering Chemistry Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L105",
          name: "Engineering Drawing Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L106",
          name: "Elements of Electrical and Electronics Engineering Laboratory",
          credits: 2,
          components: [
            { name: "LABCA", max: 47, passing: 19 }
          ]
        },
        {
          code: "216U06W101",
          name: "Basic Workshop Practice - I",
          credits: 1,
          components: [
            { name: "LABCA", max: 44, passing: 18 }
          ]
        }
      ],
      totalCredits: 20
    },
    'Sem2': { // Semester 2 (C Group gets CSBS subjects)
      name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics - I",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 100, passing: 40, calculated: true },
            { name: "TuCA", max: 25, passing: 10 }
          ]
        },
        {
          code: "216U06C102",
          name: "Engineering Physics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 97, passing: 39, calculated: true }
          ]
        },
        {
          code: "216U06C104",
          name: "Engineering Mechanics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, passing: 0 },
            { name: "CA", max: 50, passing: 0 },
            { name: "Tot1", max: 94, passing: 38, calculated: true }
          ]
        },
        {
          code: "216U06L101",
          name: "C Programming", // Python changes to C
          credits: 3,
          components: [
            { name: "LABCA", max: 72, passing: 29 }
          ]
        },
        {
          code: "216U06L102",
          name: "Engineering Physics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06L104",
          name: "Engineering Mechanics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 48, passing: 19 }
          ]
        },
        {
          code: "216U06T101",
          name: "Presentation and Communication Skills",
          credits: 2,
          components: [
            { name: "TuCA", max: 49, passing: 20 }
          ]
        },
        {
          code: "216U06W101",
          name: "Basic Workshop Practice - I",
          credits: 2,
          components: [
            { name: "LABCA", max: 44, passing: 18 }
          ]
        },
        {
          code: "PBL",
          name: "Project Based Learning",
          credits: 2,
          components: [
            { name: "LABCA", max: 50, passing: 20 }
          ]
        }
      ],
      totalCredits: 20
    }
  }
};

// Grading system
const gradeSystem = [
  { min: 80, max: 100, grade: 'O', points: 10 },
  { min: 70, max: 79.99, grade: 'A+', points: 9 },
  { min: 60, max: 69.99, grade: 'A', points: 8 },
  { min: 55, max: 59.99, grade: 'B+', points: 7 },
  { min: 50, max: 54.99, grade: 'B', points: 6 },
  { min: 45, max: 49.99, grade: 'C', points: 5 },
  { min: 40, max: 44.99, grade: 'D', points: 4 },
  { min: 0, max: 39.99, grade: 'FF', points: 0 }
];

// Helper to get minimum marks for a grade point
const minMarksForPoints = (points) => {
  const grade = gradeSystem.find(g => g.points === points);
  return grade ? grade.min : 0;
};

// Helper to get grade info from marks
const getGradeInfo = (marks) => {
  if (marks === '' || isNaN(marks)) return { grade: 'FF', points: 0 };
  const grade = gradeSystem.find(g => marks >= g.min && marks <= g.max);
  return grade || { grade: 'FF', points: 0 };
};

// Helper to generate permutations for required mark totals
function getPermutationsForTotal(target, max1, max2, current1, current2) {
  const result = [];
  for (let additionalEse = 0; additionalEse <= Math.min(target, max1 - current1); additionalEse++) {
    const additionalCa = target - additionalEse;
    if (additionalCa >= 0 && current2 + additionalCa <= max2) {
      result.push({ 
        ESE: current1 + additionalEse, 
        CA: current2 + additionalCa
      });
    }
  }
  return result;
}

function GpaCalculator() {
  // State variables
  const [darkMode, setDarkMode] = useState(true);
  const [group, setGroup] = useState('P');
  const [semester, setSemester] = useState('Sem1');
  const [marks, setMarks] = useState({});
  const [targetSGPI, setTargetSGPI] = useState(8.0);
  const [currentSGPI, setCurrentSGPI] = useState(null);
  const [requiredMarks, setRequiredMarks] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // Reset marks when group/semester changes
  useEffect(() => {
    setMarks({});
    setCurrentSGPI(null);
    setRequiredMarks(null);
  }, [group, semester]);
  
  // Create theme based on dark/light mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#4ecca3' : '#2e7d32' },
      secondary: { main: darkMode ? '#e84a5f' : '#d32f2f' },
      background: {
        default: darkMode ? '#1a1a2e' : '#f5f5f5',
        paper: darkMode ? '#16213e' : '#ffffff',
      }
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
      h4: { fontWeight: 600 }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
    },
  });
  
  // Handle mark changes
  const handleMarkChange = (subjectCode, component, value) => {
    // Find the component max value
    const componentObj = subjectData[group][semester].subjects
      .find(s => s.code === subjectCode)
      ?.components.find(c => c.name === component);
    
    const maxValue = componentObj ? componentObj.max : 100;
    const numValue = value === '' ? '' : Math.min(Number(value), maxValue);
    
    setMarks(prevMarks => ({
      ...prevMarks,
      [subjectCode]: {
        ...prevMarks[subjectCode] || {},
        [component]: numValue
      }
    }));
  };
  
  // Get calculated total for a subject (like Tot1 from ESE + CA)
  const getSubjectTotal = (subjectCode, componentName) => {
    const subject = subjectData[group][semester].subjects.find(s => s.code === subjectCode);
    if (!subject) return 0;
    
    const component = subject.components.find(c => c.name === componentName);
    if (!component) return 0;
    
    if (component.calculated && componentName === 'Tot1') {
      const ese = Number(marks[subjectCode]?.['ESE'] || 0);
      const ca = Number(marks[subjectCode]?.['CA'] || 0);
      return ese + ca;
    }
    
    return Number(marks[subjectCode]?.[componentName] || 0);
  };
  
  // Calculate SGPI based on entered marks
  const calculateSGPI = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    const subjects = subjectData[group][semester].subjects;
    
    subjects.forEach(subject => {
      // Find the main component to grade (usually Tot1 or LABCA)
      const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
      // Get the mark for this component
      let markValue;
      
      if (mainComponent.calculated && mainComponent.name === 'Tot1') {
        // For Tot1, we calculate from ESE and CA
        const ese = Number(marks[subject.code]?.['ESE'] || 0);
        const ca = Number(marks[subject.code]?.['CA'] || 0);
        markValue = ese + ca;
      } else {
        markValue = Number(marks[subject.code]?.[mainComponent.name] || 0);
      }
      
      // Get grade points
      const { points } = getGradeInfo(markValue);
      
      totalCredits += subject.credits;
      totalPoints += points * subject.credits;
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };
  
  // Handle calculate button click
  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const sgpi = calculateSGPI();
      setCurrentSGPI(sgpi);
      
      if (Number(targetSGPI) > Number(sgpi)) {
        calculateRequiredMarks(sgpi);
      } else {
        setRequiredMarks(null);
      }
      setLoading(false);
    }, 300);
  };
  
  // Calculate required marks for target SGPI
  const calculateRequiredMarks = (currentSGPI) => {
    const subjects = subjectData[group][semester].subjects;
    const totalCredits = subjectData[group][semester].totalCredits;
    
    // Calculate current earned grade points
    let currentTotalPoints = 0;
    let completedCredits = 0;
    let incompleteSubjects = [];
    
    subjects.forEach(subject => {
      const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      let markValue = 0;
      let hasMarks = false;
      
      if (mainComponent.calculated && mainComponent.name === 'Tot1') {
        // For theory subjects with ESE + CA
        const ese = Number(marks[subject.code]?.['ESE'] || 0);
        const ca = Number(marks[subject.code]?.['CA'] || 0);
        markValue = ese + ca;
        hasMarks = ese > 0 || ca > 0;
      } else {
        // For practical subjects with single component
        markValue = Number(marks[subject.code]?.[mainComponent.name] || 0);
        hasMarks = markValue > 0;
      }
      
      if (hasMarks && markValue >= mainComponent.passing) {
        // Subject has passing marks, count it as completed
        const { points } = getGradeInfo(markValue);
        currentTotalPoints += points * subject.credits;
        completedCredits += subject.credits;
      } else {
        // Subject needs improvement or is incomplete
        incompleteSubjects.push({
          ...subject,
          currentMarks: marks[subject.code] || {}
        });
      }
    });
    
    // Calculate points needed for target SGPI
    const targetTotalPoints = targetSGPI * totalCredits;
    const pointsNeeded = targetTotalPoints - currentTotalPoints;
    const remainingCredits = totalCredits - completedCredits;
    
    if (remainingCredits === 0) {
      setRequiredMarks({ 
        message: "All subjects have been completed. Cannot calculate required marks.",
        possible: false 
      });
      return;
    }
    
    // Calculate average points needed per credit
    const pointsPerCredit = pointsNeeded / remainingCredits;
    
    if (pointsPerCredit > 10) {
      setRequiredMarks({ 
        message: `Target SGPI of ${targetSGPI} is not achievable with current marks.`,
        possible: false
      });
      return;
    }
    
    // Calculate required marks for each incomplete subject
    const requiredMarks = {};
    
    incompleteSubjects.forEach(subject => {
      const neededPoints = Math.ceil(pointsPerCredit * subject.credits);
      const minGradePoints = Math.min(Math.max(neededPoints / subject.credits, 4), 10);
      const minGradeMarks = minMarksForPoints(Math.ceil(minGradePoints));
      
      const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
      if (mainComponent.calculated && mainComponent.name === 'Tot1') {
        // For theory subjects with ESE + CA
        const ese = Number(subject.currentMarks['ESE'] || 0);
        const ca = Number(subject.currentMarks['CA'] || 0);
        const currentTotal = ese + ca;
        
        const additionalMarksNeeded = Math.max(0, minGradeMarks - currentTotal);
        
        if (additionalMarksNeeded > 0) {
          // Find all possible distributions of ESE and CA that achieve the required total
          const eseMax = subject.components.find(c => c.name === 'ESE').max;
          const caMax = subject.components.find(c => c.name === 'CA').max;
          
          const permutations = getPermutationsForTotal(
            additionalMarksNeeded,
            eseMax,
            caMax,
            ese,
            ca
          );
          
          requiredMarks[subject.code] = {
            subject: subject.name,
            currentTotal,
            requiredTotal: minGradeMarks,
            additionalMarksNeeded,
            permutations
          };
        }
      } else {
        // For lab/practical subjects
        const currentMark = Number(subject.currentMarks[mainComponent.name] || 0);
        const additionalMarksNeeded = Math.max(0, minGradeMarks - currentMark);
        
        if (additionalMarksNeeded > 0) {
          requiredMarks[subject.code] = {
            subject: subject.name,
            componentName: mainComponent.name,
            currentMark,
            requiredMark: minGradeMarks,
            additionalMarksNeeded
          };
        }
      }
    });
    
    setRequiredMarks({
      currentSGPI,
      targetSGPI,
      possible: true,
      subjects: requiredMarks
    });
  };
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundImage: darkMode ? 
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232a3a5d\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' :
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e5e5e5\' fill-opacity=\'0.6\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundAttachment: 'fixed'
      }}>
        <AppBar position="sticky" elevation={0} sx={{
          backdropFilter: 'blur(8px)',
          background: darkMode ? 'rgba(22, 33, 62, 0.8)' : 'rgba(255, 255, 255, 0.8)'
        }}>
          <Toolbar>
            <Typography variant="h6" fontWeight="700" sx={{ flexGrow: 1 }}>
              KJSCE SGPI Calculator
            </Typography>
            <Switch 
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Paper elevation={3} sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom align="center" color="primary">
                Semester GPA Calculator
              </Typography>
              
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange} 
                centered 
                sx={{ mb: 4 }}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Calculate SGPI" />
                <Tab label="Target SGPI" />
                <Tab label="Grade Table" />
              </Tabs>
              
              {/* Group and Semester Selection */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Group</InputLabel>
                    <Select
                      value={group}
                      label="Group"
                      onChange={(e) => setGroup(e.target.value)}
                    >
                      <MenuItem value="P">Group P</MenuItem>
                      <MenuItem value="C">Group C</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Semester</InputLabel>
                    <Select
                      value={semester}
                      label="Semester"
                      onChange={(e) => setSemester(e.target.value)}
                    >
                      <MenuItem value="Sem1">Semester 1</MenuItem>
                      <MenuItem value="Sem2">Semester 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              
              {/* Calculate SGPI Tab */}
              {activeTab === 0 && (
                <>
                  <Grid container spacing={3}>
                    {subjectData[group][semester].subjects.map((subject) => (
                      <Grid item xs={12} md={6} key={subject.code}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {subject.name}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                color="primary"
                                sx={{
                                  border: '1px solid',
                                  borderColor: 'primary.main',
                                  borderRadius: 1,
                                  px: 1,
                                  py: 0.5
                                }}
                              >
                                {subject.credits} credits
                              </Typography>
                            </Box>
                            
                            <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 2 }}>
                              {subject.code}
                            </Typography>
                            
                            <Grid container spacing={2}>
                              {subject.components
                                .filter(comp => !comp.calculated)
                                .map((component) => (
                                  <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
                                    <TextField
                                      label={`${component.name}`}
                                      type="number"
                                      size="small"
                                      fullWidth
                                      inputProps={{ min: 0, max: component.max }}
                                      value={marks[subject.code]?.[component.name] || ''}
                                      onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
                                      helperText={`Max: ${component.max}`}
                                    />
                                  </Grid>
                                ))
                              }
                            </Grid>
                            
                            {/* Show calculated totals if applicable */}
                            {subject.components.filter(comp => comp.calculated).map((component) => {
                              const total = getSubjectTotal(subject.code, component.name);
                              const { grade, points } = getGradeInfo(total);
                              
                              return (
                                <Box 
                                  key={`${subject.code}-${component.name}`} 
                                  sx={{ 
                                    mt: 2, 
                                    p: 1.5, 
                                    bgcolor: 'background.default', 
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                  }}
                                >
                                  <Grid container alignItems="center">
                                    <Grid item xs={5}>
                                      <Typography variant="body2">
                                        {component.name}: {total}/{component.max}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography variant="body2">
                                        Grade: {grade}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography variant="body2">
                                        Points: {points}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Box>
                              );
                            })}
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      onClick={handleCalculate}
                      disabled={loading}
                      sx={{ px: 4, py: 1 }}
                    >
                      {loading ? 'Calculating...' : 'Calculate SGPI'}
                    </Button>
                  </Box>
                  
                  {currentSGPI !== null && (
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                      <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto', borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom>
                          Your SGPI: {currentSGPI}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          Grade: {getGradeInfo(currentSGPI * 10).grade}
                        </Typography>
                      </Paper>
                    </Box>
                  )}
                </>
              )}
              
              {/* Target SGPI Tab */}
              {activeTab === 1 && (
                <>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      Target SGPI: {targetSGPI.toFixed(2)}
                    </Typography>
                    <Slider
                      value={targetSGPI}
                      min={4}
                      max={10}
                      step={0.1}
                      marks={[
                        { value: 4, label: '4.0' },
                        { value: 6, label: '6.0' },
                        { value: 8, label: '8.0' },
                        { value: 10, label: '10.0' },
                      ]}
                      onChange={(e, value) => setTargetSGPI(value)}
                    />
                  </Box>
                  
                  <Typography variant="body1" gutterBottom>
                    Enter your current marks for the subjects you've completed:
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {subjectData[group][semester].subjects.map((subject) => (
                      <Grid item xs={12} md={6} key={subject.code}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {subject.name}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                color="primary"
                                sx={{
                                  border: '1px solid',
                                  borderColor: 'primary.main',
                                  borderRadius: 1,
                                  px: 1,
                                  py: 0.5
                                }}
                              >
                                {subject.credits} credits
                              </Typography>
                            </Box>
                            
                            <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 2 }}>
                              {subject.code}
                            </Typography>
                            
                            <Grid container spacing={2}>
                              {subject.components
                                .filter(comp => !comp.calculated)
                                .map((component) => (
                                  <Grid item xs={12} sm={6} key={`${subject.code}-${component.name}`}>
                                    <TextField
                                      label={`${component.name}`}
                                      type="number"
                                      size="small"
                                      fullWidth
                                      inputProps={{ min: 0, max: component.max }}
                                      value={marks[subject.code]?.[component.name] || ''}
                                      onChange={(e) => handleMarkChange(subject.code, component.name, e.target.value)}
                                      helperText={`Max: ${component.max}`}
                                    />
                                  </Grid>
                                ))
                              }
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      onClick={handleCalculate}
                      disabled={loading}
                      sx={{ px: 4, py: 1 }}
                    >
                      {loading ? 'Calculating...' : 'Calculate Required Marks'}
                    </Button>
                  </Box>
                  
                  {currentSGPI !== null && requiredMarks && (
                    <Box sx={{ mt: 4 }}>
                      <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom textAlign="center">
                          Current SGPI: {currentSGPI}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ mt: 2 }} textAlign="center">
                          Target SGPI: {targetSGPI.toFixed(2)}
                        </Typography>
                        
                        {requiredMarks.message && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="body1" color="error" textAlign="center">
                              {requiredMarks.message}
                            </Typography>
                          </Box>
                        )}
                        
                        {!requiredMarks.message && requiredMarks.subjects && Object.keys(requiredMarks.subjects).length > 0 && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="h6" gutterBottom>
                              Additional Marks Needed:
                            </Typography>
                            <TableContainer>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Current</TableCell>
                                    <TableCell>Needed</TableCell>
                                    <TableCell>Additional</TableCell>
                                    <TableCell>Possible Combinations</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {Object.keys(requiredMarks.subjects).map(code => {
                                    const subjectReq = requiredMarks.subjects[code];
                                    
                                    return (
                                      <TableRow key={code}>
                                        <TableCell>{subjectReq.subject}</TableCell>
                                        <TableCell>
                                          {subjectReq.permutations ? (
                                            <>
                                              ESE: {subjectReq.permutations[0]?.ESE - (subjectReq.additionalMarksNeeded || 0) || 0}
                                              <br />
                                              CA: {subjectReq.permutations[0]?.CA - (subjectReq.additionalMarksNeeded || 0) || 0}
                                              <br />
                                              Total: {subjectReq.currentTotal || 0}
                                            </>
                                          ) : (
                                            <>
                                              {subjectReq.componentName}: {subjectReq.currentMark || 0}
                                            </>
                                          )}
                                        </TableCell>
                                        <TableCell>
                                          {subjectReq.permutations ? (
                                            <>Total: {subjectReq.requiredTotal}</>
                                          ) : (
                                            <>{subjectReq.componentName}: {subjectReq.requiredMark}</>
                                          )}
                                        </TableCell>
                                        <TableCell>
                                          {subjectReq.additionalMarksNeeded} marks
                                        </TableCell>
                                        <TableCell>
                                          {subjectReq.permutations ? (
                                            <Box>
                                              {subjectReq.permutations.slice(0, 3).map((perm, idx) => (
                                                <Box key={idx} sx={{ mb: 0.5 }}>
                                                  ESE: {perm.ESE}, CA: {perm.CA}
                                                </Box>
                                              ))}
                                              {subjectReq.permutations.length > 3 && 
                                                <Typography variant="caption">
                                                  And {subjectReq.permutations.length - 3} more combinations...
                                                </Typography>
                                              }
                                            </Box>
                                          ) : (
                                            <>Get at least {subjectReq.additionalMarksNeeded} more marks</>
                                          )}
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>
                        )}
                      </Paper>
                    </Box>
                  )}
                </>
              )}
              
              {/* Grade Table Tab */}
              {activeTab === 2 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    KJSCE Grading System
                  </Typography>
                  <TableContainer component={Paper} variant="outlined">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Marks Range</TableCell>
                          <TableCell>Letter Grade</TableCell>
                          <TableCell>Grade Points</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {gradeSystem.map((grade) => (
                          <TableRow key={grade.grade}>
                            <TableCell>{grade.min} - {grade.max}</TableCell>
                            <TableCell>{grade.grade}</TableCell>
                            <TableCell>{grade.points}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    SGPI Formula:
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                    <Typography>
                      SGPI = Sum(Grade Points × Credits) / Sum(Credits)
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default GpaCalculator;
