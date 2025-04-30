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
// Code for Site till 30-04-25
// import React, { useState, useEffect } from 'react';
// import { 
//   Container, Typography, Paper, Grid, TextField, Button, Select,
//   MenuItem, FormControl, InputLabel, Box, Card, CardContent,
//   Slider, Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Tabs, Tab, AppBar, Toolbar, Switch
// } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// // Define subject structures
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
//           name: "Python Programming",
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
//         }
//       ],
//       totalCredits: 18
//     },
//     'Sem2': { // Semester 2 (P Group gets COMPS subjects)
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
//             { name: "LABCA", max: 75, passing: 29 }
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

// // Helper to get minimum marks for a grade point
// const minMarksForPoints = (points) => {
//   const grade = gradeSystem.find(g => g.points === points);
//   return grade ? grade.min : 0;
// };

// // Helper to get grade info from marks
// const getGradeInfo = (marks) => {
//   if (marks === '' || isNaN(marks)) return { grade: 'FF', points: 0 };
//   const grade = gradeSystem.find(g => marks >= g.min && marks <= g.max);
//   return grade || { grade: 'FF', points: 0 };
// };

// // Helper to generate permutations for required mark totals
// function getPermutationsForTotal(target, max1, max2, current1, current2) {
//   const result = [];
//   for (let additionalEse = 0; additionalEse <= Math.min(target, max1 - current1); additionalEse++) {
//     const additionalCa = target - additionalEse;
//     if (additionalCa >= 0 && current2 + additionalCa <= max2) {
//       result.push({ 
//         ESE: current1 + additionalEse, 
//         CA: current2 + additionalCa
//       });
//     }
//   }
//   return result;
// }

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
//   const [loading, setLoading] = useState(false);
  
//   // Reset marks when group/semester changes
//   useEffect(() => {
//     setMarks({});
//     setCurrentSGPI(null);
//     setRequiredMarks(null);
//   }, [group, semester]);
  
//   // Create theme based on dark/light mode
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
//     // Find the component max value
//     const componentObj = subjectData[group][semester].subjects
//       .find(s => s.code === subjectCode)
//       ?.components.find(c => c.name === component);
    
//     const maxValue = componentObj ? componentObj.max : 100;
//     const numValue = value === '' ? '' : Math.min(Number(value), maxValue);
    
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [subjectCode]: {
//         ...prevMarks[subjectCode] || {},
//         [component]: numValue
//       }
//     }));
//   };
  
//   // Get calculated total for a subject (like Tot1 from ESE + CA)
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
  
//   // Calculate SGPI based on entered marks
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
  
//   // Handle calculate button click
//   const handleCalculate = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const sgpi = calculateSGPI();
//       setCurrentSGPI(sgpi);
      
//       if (Number(targetSGPI) > Number(sgpi)) {
//         calculateRequiredMarks(sgpi);
//       } else {
//         setRequiredMarks(null);
//       }
//       setLoading(false);
//     }, 300);
//   };
  
//   // Calculate required marks for target SGPI
//   const calculateRequiredMarks = (currentSGPI) => {
//     const subjects = subjectData[group][semester].subjects;
//     const totalCredits = subjectData[group][semester].totalCredits;
    
//     // Calculate current earned grade points
//     let currentTotalPoints = 0;
//     let completedCredits = 0;
//     let incompleteSubjects = [];
    
//     subjects.forEach(subject => {
//       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
//       let markValue = 0;
//       let hasMarks = false;
      
//       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
//         // For theory subjects with ESE + CA
//         const ese = Number(marks[subject.code]?.['ESE'] || 0);
//         const ca = Number(marks[subject.code]?.['CA'] || 0);
//         markValue = ese + ca;
//         hasMarks = ese > 0 || ca > 0;
//       } else {
//         // For practical subjects with single component
//         markValue = Number(marks[subject.code]?.[mainComponent.name] || 0);
//         hasMarks = markValue > 0;
//       }
      
//       if (hasMarks && markValue >= mainComponent.passing) {
//         // Subject has passing marks, count it as completed
//         const { points } = getGradeInfo(markValue);
//         currentTotalPoints += points * subject.credits;
//         completedCredits += subject.credits;
//       } else {
//         // Subject needs improvement or is incomplete
//         incompleteSubjects.push({
//           ...subject,
//           currentMarks: marks[subject.code] || {}
//         });
//       }
//     });
    
//     // Calculate points needed for target SGPI
//     const targetTotalPoints = targetSGPI * totalCredits;
//     const pointsNeeded = targetTotalPoints - currentTotalPoints;
//     const remainingCredits = totalCredits - completedCredits;
    
//     if (remainingCredits === 0) {
//       setRequiredMarks({ 
//         message: "All subjects have been completed. Cannot calculate required marks.",
//         possible: false 
//       });
//       return;
//     }
    
//     // Calculate average points needed per credit
//     const pointsPerCredit = pointsNeeded / remainingCredits;
    
//     if (pointsPerCredit > 10) {
//       setRequiredMarks({ 
//         message: `Target SGPI of ${targetSGPI} is not achievable with current marks.`,
//         possible: false
//       });
//       return;
//     }
    
//     // Calculate required marks for each incomplete subject
//     const requiredMarks = {};
    
//     incompleteSubjects.forEach(subject => {
//       const neededPoints = Math.ceil(pointsPerCredit * subject.credits);
//       const minGradePoints = Math.min(Math.max(neededPoints / subject.credits, 4), 10);
//       const minGradeMarks = minMarksForPoints(Math.ceil(minGradePoints));
      
//       const mainComponent = subject.components.find(c => c.calculated) || subject.components[0];
      
//       if (mainComponent.calculated && mainComponent.name === 'Tot1') {
//         // For theory subjects with ESE + CA
//         const ese = Number(subject.currentMarks['ESE'] || 0);
//         const ca = Number(subject.currentMarks['CA'] || 0);
//         const currentTotal = ese + ca;
        
//         const additionalMarksNeeded = Math.max(0, minGradeMarks - currentTotal);
        
//         if (additionalMarksNeeded > 0) {
//           // Find all possible distributions of ESE and CA that achieve the required total
//           const eseMax = subject.components.find(c => c.name === 'ESE').max;
//           const caMax = subject.components.find(c => c.name === 'CA').max;
          
//           const permutations = getPermutationsForTotal(
//             additionalMarksNeeded,
//             eseMax,
//             caMax,
//             ese,
//             ca
//           );
          
//           requiredMarks[subject.code] = {
//             subject: subject.name,
//             currentTotal,
//             requiredTotal: minGradeMarks,
//             additionalMarksNeeded,
//             permutations
//           };
//         }
//       } else {
//         // For lab/practical subjects
//         const currentMark = Number(subject.currentMarks[mainComponent.name] || 0);
//         const additionalMarksNeeded = Math.max(0, minGradeMarks - currentMark);
        
//         if (additionalMarksNeeded > 0) {
//           requiredMarks[subject.code] = {
//             subject: subject.name,
//             componentName: mainComponent.name,
//             currentMark,
//             requiredMark: minGradeMarks,
//             additionalMarksNeeded
//           };
//         }
//       }
//     });
    
//     setRequiredMarks({
//       currentSGPI,
//       targetSGPI,
//       possible: true,
//       subjects: requiredMarks
//     });
//   };
  
//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ 
//         minHeight: '100vh', 
//         backgroundImage: darkMode ? 
//           'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232a3a5d\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' :
//           'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e5e5e5\' fill-opacity=\'0.6\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
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
//                 onChange={handleTabChange} 
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
//                       disabled={loading}
//                       sx={{ px: 4, py: 1 }}
//                     >
//                       {loading ? 'Calculating...' : 'Calculate SGPI'}
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
//                       disabled={loading}
//                       sx={{ px: 4, py: 1 }}
//                     >
//                       {loading ? 'Calculating...' : 'Calculate Required Marks'}
//                     </Button>
//                   </Box>
                  
//                   {currentSGPI !== null && requiredMarks && (
//                     <Box sx={{ mt: 4 }}>
//                       <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', borderRadius: 2 }}>
//                         <Typography variant="h5" gutterBottom textAlign="center">
//                           Current SGPI: {currentSGPI}
//                         </Typography>
//                         <Typography variant="h6" color="primary" sx={{ mt: 2 }} textAlign="center">
//                           Target SGPI: {targetSGPI.toFixed(2)}
//                         </Typography>
                        
//                         {requiredMarks.message && (
//                           <Box sx={{ mt: 3 }}>
//                             <Typography variant="body1" color="error" textAlign="center">
//                               {requiredMarks.message}
//                             </Typography>
//                           </Box>
//                         )}
                        
//                         {!requiredMarks.message && requiredMarks.subjects && Object.keys(requiredMarks.subjects).length > 0 && (
//                           <Box sx={{ mt: 3 }}>
//                             <Typography variant="h6" gutterBottom>
//                               Additional Marks Needed:
//                             </Typography>
//                             <TableContainer>
//                               <Table>
//                                 <TableHead>
//                                   <TableRow>
//                                     <TableCell>Subject</TableCell>
//                                     <TableCell>Current</TableCell>
//                                     <TableCell>Needed</TableCell>
//                                     <TableCell>Additional</TableCell>
//                                     <TableCell>Possible Combinations</TableCell>
//                                   </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                   {Object.keys(requiredMarks.subjects).map(code => {
//                                     const subjectReq = requiredMarks.subjects[code];
                                    
//                                     return (
//                                       <TableRow key={code}>
//                                         <TableCell>{subjectReq.subject}</TableCell>
//                                         <TableCell>
//                                           {subjectReq.permutations ? (
//                                             <>
//                                               ESE: {subjectReq.permutations[0]?.ESE - (subjectReq.additionalMarksNeeded || 0) || 0}
//                                               <br />
//                                               CA: {subjectReq.permutations[0]?.CA - (subjectReq.additionalMarksNeeded || 0) || 0}
//                                               <br />
//                                               Total: {subjectReq.currentTotal || 0}
//                                             </>
//                                           ) : (
//                                             <>
//                                               {subjectReq.componentName}: {subjectReq.currentMark || 0}
//                                             </>
//                                           )}
//                                         </TableCell>
//                                         <TableCell>
//                                           {subjectReq.permutations ? (
//                                             <>Total: {subjectReq.requiredTotal}</>
//                                           ) : (
//                                             <>{subjectReq.componentName}: {subjectReq.requiredMark}</>
//                                           )}
//                                         </TableCell>
//                                         <TableCell>
//                                           {subjectReq.additionalMarksNeeded} marks
//                                         </TableCell>
//                                         <TableCell>
//                                           {subjectReq.permutations ? (
//                                             <Box>
//                                               {subjectReq.permutations.slice(0, 3).map((perm, idx) => (
//                                                 <Box key={idx} sx={{ mb: 0.5 }}>
//                                                   ESE: {perm.ESE}, CA: {perm.CA}
//                                                 </Box>
//                                               ))}
//                                               {subjectReq.permutations.length > 3 && 
//                                                 <Typography variant="caption">
//                                                   And {subjectReq.permutations.length - 3} more combinations...
//                                                 </Typography>
//                                               }
//                                             </Box>
//                                           ) : (
//                                             <>Get at least {subjectReq.additionalMarksNeeded} more marks</>
//                                           )}
//                                         </TableCell>
//                                       </TableRow>
//                                     );
//                                   })}
//                                 </TableBody>
//                               </Table>
//                             </TableContainer>
//                           </Box>
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

//Code From 01-05-25
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Paper, Grid, TextField, Button, Select, MenuItem,
  FormControl, InputLabel, Box, Card, CardContent, Slider, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, AppBar, Toolbar, 
  Switch, Chip, Tooltip, Avatar, IconButton, Link
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring';

// ---- SUBJECTS DATA STRUCTURE ----
// Based on the KJSCE curriculum document
const subjectData = {
  'P': {
    'Sem1': {
      name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics - I",
          credits: 4, // 3 for Theory, 1 for Tutorial
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true },
            { name: "TuCA", max: 25, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06C102",
          name: "Engineering Physics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true }
          ]
        },
        {
          code: "216U06C104",
          name: "Engineering Mechanics",
          credits: 3,
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true }
          ]
        },
        {
          code: "216U06L101",
          name: "Python Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 75, credits: 3, calculated: false }
          ]
        },
        {
          code: "216U06L102",
          name: "Engineering Physics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 50, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06L104",
          name: "Engineering Mechanics Laboratory",
          credits: 1,
          components: [
            { name: "LABCA", max: 50, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06T101",
          name: "Presentation and Communication Skills",
          credits: 2,
          components: [
            { name: "TuCA", max: 50, credits: 2, calculated: false }
          ]
        },
        {
          code: "216U06W101",
          name: "Basic Workshop Practice - I",
          credits: 2,
          components: [
            { name: "LABCA", max: 50, credits: 2, calculated: false }
          ]
        }
      ]
    },
    'Sem2': {
      name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
      subjects: [
        {
          code: "216U06C201",
          name: "Applied Mathematics - II",
          credits: 4,
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true },
            { name: "TuCA", max: 25, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06L201",
          name: "C Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 75, credits: 3, calculated: false }
          ]
        },
        // Add more Sem2 subjects according to curriculum
        {
          code: "216U06P101",
          name: "Project Based Learning",
          credits: 2,
          components: [
            { name: "CA", max: 50, credits: 2, calculated: false }
          ]
        },
        {
          code: "216U06W201",
          name: "Basic Workshop Practice - II",
          credits: 2,
          components: [
            { name: "LABCA", max: 50, credits: 2, calculated: false }
          ]
        }
      ]
    }
  },
  'C': {
    'Sem1': {
      name: "F.Y. B.TECH. COMPUTER ENGINEERING SEM-I",
      subjects: [
        {
          code: "216U06C101",
          name: "Applied Mathematics - I",
          credits: 4,
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true },
            { name: "TuCA", max: 25, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06L101",
          name: "Python Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 75, credits: 3, calculated: false }
          ]
        },
        // Add more C-Group Sem1 subjects
      ]
    },
    'Sem2': {
      name: "F.Y. B.TECH. COMPUTER SCIENCE & BUSINESS SYSTEMS SEM-I",
      subjects: [
        {
          code: "216U06C201",
          name: "Applied Mathematics - II",
          credits: 4,
          components: [
            { name: "ESE", max: 50, credits: 3 },
            { name: "CA", max: 50, credits: 3, calculated: false },
            { name: "Tot1", max: 100, credits: 3, calculated: true },
            { name: "TuCA", max: 25, credits: 1, calculated: false }
          ]
        },
        {
          code: "216U06L201",
          name: "C Programming",
          credits: 3,
          components: [
            { name: "LABCA", max: 75, credits: 3, calculated: false }
          ]
        },
        // Add more C-Group Sem2 subjects
        {
          code: "216U06P101",
          name: "Project Based Learning",
          credits: 2,
          components: [
            { name: "CA", max: 50, credits: 2, calculated: false }
          ]
        }
      ]
    }
  }
};

// ---- GRADE SYSTEM ----
const gradeSystem = [
  { min: 80, max: 100, grade: "O", points: 10 },
  { min: 70, max: 79.99, grade: "A+", points: 9 },
  { min: 60, max: 69.99, grade: "A", points: 8 },
  { min: 55, max: 59.99, grade: "B+", points: 7 },
  { min: 50, max: 54.99, grade: "B", points: 6 },
  { min: 45, max: 49.99, grade: "C", points: 5 },
  { min: 40, max: 44.99, grade: "D", points: 4 },
  { min: 0, max: 39.99, grade: "FF", points: 0 }
];

// ---- HELPER FUNCTIONS ----
function getGradePoints(marks, maxMarks) {
  // Convert to percentage, then get grade points
  const percent = (marks / maxMarks) * 100;
  for (const g of gradeSystem) {
    if (percent >= g.min && percent <= g.max) return g.points;
  }
  return 0;
}

function getGradeLabel(marks, maxMarks) {
  const percent = (marks / maxMarks) * 100;
  for (const g of gradeSystem) {
    if (percent >= g.min && percent <= g.max) return g.grade;
  }
  return "FF";
}

function minMarksForPoints(points, maxMarks) {
  const grade = gradeSystem.find((g) => g.points === points);
  if (!grade) return 0;
  return Math.ceil((grade.min / 100) * maxMarks);
}

// ---- MAIN COMPONENT ----
export default function GpaCalculator() {
  // ---- STATE VARIABLES ----
  const [darkMode, setDarkMode] = useState(true);
  const [group, setGroup] = useState('P');
  const [semester, setSemester] = useState('Sem1');
  const [marks, setMarks] = useState({});
  const [targetSGPI, setTargetSGPI] = useState(8.0);
  const [targetMode, setTargetMode] = useState('overall'); // 'overall' or 'subject'
  const [targetSubject, setTargetSubject] = useState('');
  const [calculatedResults, setCalculatedResults] = useState(null);
  const [requiredMarks, setRequiredMarks] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  // Set initial target subject when subjects change
  useEffect(() => {
    if (subjectData[group]?.[semester]?.subjects.length > 0) {
      setTargetSubject(subjectData[group][semester].subjects[0].code);
    }
  }, [group, semester]);

  // ---- THEME ----
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#00a8ff' : '#2e7d32' },
      secondary: { main: darkMode ? '#ff5722' : '#ff5722' },
      background: {
        default: darkMode ? '#0a1929' : '#f5f5f5',
        paper: darkMode ? '#102a43' : '#ffffff'
      }
    },
    typography: {
      fontFamily: '"Roboto Mono", "Fira Code", monospace',
      h4: { fontWeight: 700, letterSpacing: 1 },
      button: { fontFamily: '"Roboto Mono", monospace', fontWeight: 600 }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: darkMode ? '0 8px 24px rgba(0,168,255,0.2)' : '0 8px 24px rgba(46,125,50,0.2)',
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          }
        }
      }
    }
  });

  // ---- HANDLERS ----
  // Input change handler
  const handleMarkChange = (subjectCode, compName, value) => {
    // Validate and set mark value
    const subject = subjectData[group][semester].subjects.find(s => s.code === subjectCode);
    const component = subject?.components.find(c => c.name === compName);
    
    if (!component) return;
    
    const numValue = value === '' ? '' : Number(value);
    const validValue = numValue === '' ? '' : Math.min(Math.max(0, numValue), component.max);
    
    setMarks(prev => ({
      ...prev,
      [subjectCode]: {
        ...prev[subjectCode] || {},
        [compName]: validValue
      }
    }));
  };

  // ---- SGPI CALCULATION ----
  const calculateSGPI = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    // Process each subject
    subjectData[group][semester].subjects.forEach(subject => {
      // Process each component
      subject.components.forEach(comp => {
        // Skip calculated components (like Tot1)
        if (comp.calculated) return;
        
        const mark = Number(marks[subject.code]?.[comp.name] || 0);
        if (mark === 0) return; // Skip components with no marks
        
        const gradePoint = getGradePoints(mark, comp.max);
        totalPoints += gradePoint * comp.credits;
        totalCredits += comp.credits;
      });
      
      // Special case for Tot1 (calculated from ESE+CA)
      const tot1Comp = subject.components.find(c => c.name === 'Tot1' && c.calculated);
      if (tot1Comp) {
        const ese = Number(marks[subject.code]?.['ESE'] || 0);
        const ca = Number(marks[subject.code]?.['CA'] || 0);
        
        // Only count if either ESE or CA is filled
        if (ese > 0 || ca > 0) {
          const total = ese + ca;
          // We don't add credits here since they're already counted in ESE and CA
        }
      }
    });
    
    // Calculate SGPI
    const sgpi = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    
    // Set the results
    setCalculatedResults({
      sgpi: sgpi,
      totalPoints: totalPoints,
      totalCredits: totalCredits
    });
    
    return sgpi;
  };

  // ---- TARGET SGPI CALCULATION ----
  const calculateTargetRequirements = () => {
    // Calculate current points and remaining components
    let earnedPoints = 0;
    let filledCredits = 0;
    let unfilled = [];
    
    // Get total credits for this semester
    const totalCredits = subjectData[group][semester].subjects.reduce(
      (sum, subj) => sum + subj.credits, 0
    );
    
    // Process each subject
    subjectData[group][semester].subjects.forEach(subject => {
      subject.components.forEach(comp => {
        // Skip calculated components
        if (comp.calculated) return;
        
        const mark = Number(marks[subject.code]?.[comp.name] || '');
        
        // If component has marks, add to earned points
        if (!isNaN(mark) && mark > 0) {
          const gradePoint = getGradePoints(mark, comp.max);
          earnedPoints += gradePoint * comp.credits;
          filledCredits += comp.credits;
        } 
        // Otherwise, add to unfilled components
        else {
          unfilled.push({
            subject: subject,
            component: comp,
            code: subject.code,
            name: subject.name,
            compName: comp.name,
            max: comp.max,
            credits: comp.credits
          });
        }
      });
    });
    
    // Calculate points needed for target SGPI
    const targetTotalPoints = targetSGPI * totalCredits;
    const pointsNeeded = targetTotalPoints - earnedPoints;
    const creditsLeft = totalCredits - filledCredits;
    
    // Check if target is possible
    if (creditsLeft === 0) {
      setRequiredMarks({ message: "All components are already filled! Nothing to calculate." });
      return;
    }
    
    if (pointsNeeded / creditsLeft > 10) {
      setRequiredMarks({ 
        message: `Target SGPI of ${targetSGPI} is not achievable with current marks. Maximum possible SGPI is ${(earnedPoints + 10 * creditsLeft) / totalCredits}` 
      });
      return;
    }
    
    // Calculate required marks for each unfilled component
    const results = {};
    
    // For subject-specific mode
    if (targetMode === 'subject') {
      const subject = subjectData[group][semester].subjects.find(s => s.code === targetSubject);
      if (!subject) {
        setRequiredMarks({ message: "Subject not found" });
        return;
      }
      
      // Find unfilled components for this subject
      const subjectUnfilled = unfilled.filter(u => u.code === targetSubject);
      
      if (subjectUnfilled.length === 0) {
        setRequiredMarks({ message: "All components for this subject are filled" });
        return;
      }
      
      // For each unfilled component in target subject
      subjectUnfilled.forEach(item => {
        // Calculate required grade points (assume best possible grade for this component)
        const reqGradePoints = 10; // Aim for O grade
        
        // Calculate minimum marks needed
        const minMarks = minMarksForPoints(reqGradePoints, item.max);
        
        // Special case for ESE when CA is filled (or vice versa)
        if (item.compName === 'ESE') {
          const ca = Number(marks[item.code]?.['CA'] || 0);
          if (ca > 0) {
            // Calculate total needed based on Tot1
            const tot1Comp = subject.components.find(c => c.name === 'Tot1');
            if (tot1Comp) {
              const tot1GradePoints = reqGradePoints;
              const tot1MinMarks = minMarksForPoints(tot1GradePoints, tot1Comp.max);
              const eseNeeded = Math.max(0, tot1MinMarks - ca);
              
              results[item.code] = {
                name: item.name,
                components: [{
                  name: item.compName,
                  minMarks: eseNeeded,
                  maxMarks: item.max,
                  withCA: ca
                }]
              };
            }
          }
        } 
        else if (item.compName === 'CA') {
          const ese = Number(marks[item.code]?.['ESE'] || 0);
          if (ese > 0) {
            // Calculate total needed based on Tot1
            const tot1Comp = subject.components.find(c => c.name === 'Tot1');
            if (tot1Comp) {
              const tot1GradePoints = reqGradePoints;
              const tot1MinMarks = minMarksForPoints(tot1GradePoints, tot1Comp.max);
              const caNeeded = Math.max(0, tot1MinMarks - ese);
              
              results[item.code] = {
                name: item.name,
                components: [{
                  name: item.compName,
                  minMarks: caNeeded,
                  maxMarks: item.max,
                  withESE: ese
                }]
              };
            }
          }
        }
        else {
          // Other components (LABCA, TuCA, etc.)
          results[item.code] = {
            name: item.name,
            components: [{
              name: item.compName,
              minMarks: minMarks,
              maxMarks: item.max
            }]
          };
        }
      });
    }
    // For overall SGPI mode
    else {
      // Required points per credit
      const pointsPerCredit = pointsNeeded / creditsLeft;
      
      // Group unfilled by subject
      const unfilledBySubject = {};
      unfilled.forEach(item => {
        if (!unfilledBySubject[item.code]) {
          unfilledBySubject[item.code] = {
            name: item.name,
            components: []
          };
        }
        unfilledBySubject[item.code].components.push({
          name: item.compName,
          credits: item.credits,
          max: item.max
        });
      });
      
      // For each subject with unfilled components
      Object.keys(unfilledBySubject).forEach(code => {
        const subject = subjectData[group][semester].subjects.find(s => s.code === code);
        const components = unfilledBySubject[code].components;
        
        // Calculate minimum grade points needed for each component
        const subjectResults = [];
        
        components.forEach(comp => {
          // Needed grade points for this component
          const neededGP = Math.min(10, Math.max(4, Math.ceil(pointsPerCredit)));
          const minMarks = minMarksForPoints(neededGP, comp.max);
          
          // Special case for ESE/CA pairs
          if (comp.name === 'ESE') {
            const ca = Number(marks[code]?.['CA'] || 0);
            if (ca > 0) {
              const tot1Comp = subject.components.find(c => c.name === 'Tot1');
              if (tot1Comp) {
                const tot1MinMarks = minMarksForPoints(neededGP, tot1Comp.max);
                const eseNeeded = Math.max(0, tot1MinMarks - ca);
                
                subjectResults.push({
                  name: comp.name,
                  minMarks: eseNeeded,
                  maxMarks: comp.max,
                  withCA: ca
                });
              }
            } else {
              subjectResults.push({
                name: comp.name,
                minMarks: minMarks,
                maxMarks: comp.max
              });
            }
          }
          else if (comp.name === 'CA') {
            const ese = Number(marks[code]?.['ESE'] || 0);
            if (ese > 0) {
              const tot1Comp = subject.components.find(c => c.name === 'Tot1');
              if (tot1Comp) {
                const tot1MinMarks = minMarksForPoints(neededGP, tot1Comp.max);
                const caNeeded = Math.max(0, tot1MinMarks - ese);
                
                subjectResults.push({
                  name: comp.name,
                  minMarks: caNeeded,
                  maxMarks: comp.max,
                  withESE: ese
                });
              }
            } else {
              subjectResults.push({
                name: comp.name,
                minMarks: minMarks,
                maxMarks: comp.max
              });
            }
          }
          else {
            // Other components (LABCA, TuCA)
            subjectResults.push({
              name: comp.name,
              minMarks: minMarks,
              maxMarks: comp.max
            });
          }
        });
        
        results[code] = {
          name: unfilledBySubject[code].name,
          components: subjectResults
        };
      });
    }
    
    setRequiredMarks({
      targetSGPI: targetSGPI,
      currentPoints: earnedPoints,
      totalCredits: totalCredits,
      results: results
    });
  };

  // ---- PARTICLES INITIALIZATION ----
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  // Animated result number
  const AnimatedNumber = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 }
    });
    return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: darkMode ? "#0a1929" : "#f5f5f5"
          },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: darkMode ? "#00a8ff" : "#2e7d32" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: darkMode ? "#00a8ff" : "#2e7d32",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.5 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />
      
      {/* Main App Container */}
      <Box sx={{ minHeight: "100vh", position: "relative" }}>
        {/* App Bar */}
        <AppBar 
          position="sticky" 
          elevation={0}
          sx={{ 
            backdropFilter: "blur(8px)",
            background: darkMode ? "rgba(16, 42, 67, 0.8)" : "rgba(255, 255, 255, 0.8)"
          }}
        >
          <Toolbar>
            <Box display="flex" alignItems="center">
              <CalculateIcon sx={{ mr: 1.5 }} />
              <Typography variant="h6" fontWeight={700} letterSpacing={1}>
                KJSCE SGPI Calculator
              </Typography>
            </Box>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Tooltip title="Toggle Dark Mode">
              <Switch 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="primary"
                sx={{ mr: 2 }}
              />
            </Tooltip>
            
            <Tooltip title="Created by [YOUR NAME]">
              <IconButton color="primary">
                <Avatar 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    backgroundColor: theme.palette.primary.main,
                    color: '#fff',
                    fontWeight: 'bold'
                  }}
                >
                  {/* Replace with your initials */}
                  AL
                </Avatar>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="View Code on GitHub">
              <IconButton 
                color="primary"
                component={Link}
                href="https://github.com/Aryan-lomte05/Gpa-Calci"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        
        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Calculator Card */}
          <Paper 
            elevation={darkMode ? 24 : 6}
            sx={{ 
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: darkMode 
                ? '0 10px 30px rgba(0,168,255,0.2)' 
                : '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            {/* Header */}
            <Box 
              sx={{ 
                p: 4, 
                pb: 2,
                background: darkMode 
                  ? 'linear-gradient(135deg, #102a43 0%, #0a1929 100%)' 
                  : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
                <SchoolIcon color="primary" sx={{ fontSize: 35, mr: 1.5 }} />
                <Typography 
                  variant="h4" 
                  align="center" 
                  color="primary"
                  sx={{ 
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textShadow: darkMode 
                      ? '0 0 10px rgba(0,168,255,0.5)' 
                      : 'none'
                  }}
                >
                  SGPI Calculator
                </Typography>
              </Box>
              
              <Typography 
                variant="subtitle1" 
                align="center"
                sx={{ 
                  opacity: 0.8,
                  mb: 3,
                  fontFamily: '"Roboto", sans-serif'
                }}
              >
                Calculate your Semester Grade Point Index with precision
              </Typography>
              
              <Tabs 
                value={activeTab} 
                onChange={(_, newValue) => setActiveTab(newValue)} 
                centered
                sx={{ mb: 2 }}
                TabIndicatorProps={{
                  sx: {
                    height: 3,
                    borderRadius: 1.5
                  }
                }}
              >
                <Tab 
                  label="Calculate SGPI" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none'
                  }} 
                />
                <Tab 
                  label="Target SGPI" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none'
                  }} 
                />
                <Tab 
                  label="Grade Table" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none'
                  }} 
                />
              </Tabs>
            </Box>
            
            {/* Group and Semester Selection */}
            <Box sx={{ px: 4, py: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Group</InputLabel>
                    <Select
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                      label="Group"
                    >
                      <MenuItem value="P">Group P</MenuItem>
                      <MenuItem value="C">Group C</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Semester</InputLabel>
                    <Select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      label="Semester"
                    >
                      <MenuItem value="Sem1">Semester 1</MenuItem>
                      <MenuItem value="Sem2">Semester 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            
            {/* Calculator Tab Content */}
            <Box sx={{ p: 4 }}>
              {/* SGPI Calculation Tab */}
              {activeTab === 0 && (
                <>
                  <Grid container spacing={3}>
                    {subjectData[group][semester].subjects.map((subject, index) => (
                      <Grid item xs={12} md={6} key={subject.code}>
                        <motion.div
                          custom={index}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <Card 
                            variant="outlined" 
                            sx={{ 
                              height: '100%',
                              borderWidth: 2,
                              borderColor: 'primary.main',
                              borderRadius: 3,
                              background: darkMode 
                                ? 'linear-gradient(135deg, rgba(16, 42, 67, 0.6) 0%, rgba(10, 25, 41, 0.6) 100%)' 
                                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(245, 245, 245, 0.6) 100%)',
                              backdropFilter: 'blur(8px)'
                            }}
                          >
                            <CardContent>
                              {/* Subject Header */}
                              <Box sx={{ mb: 2 }}>
                                <Typography 
                                  variant="subtitle1" 
                                  fontWeight="bold"
                                  sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                  {subject.name}
                                  <Chip 
                                    label={`${subject.credits} credits`}
                                    size="small"
                                    color="primary"
                                    sx={{ ml: 1, fontWeight: 600 }}
                                  />
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                  {subject.code}
                                </Typography>
                              </Box>
                              
                              {/* Components */}
                              <Grid container spacing={2}>
                                {subject.components
                                  .filter(comp => !comp.calculated)
                                  .map((comp) => (
                                    <Grid item xs={12} sm={6} key={`${subject.code}-${comp.name}`}>
                                      <TextField
                                        label={comp.name}
                                        type="number"
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                          inputProps: { 
                                            min: 0,
                                            max: comp.max,
                                            step: 1
                                          }
                                        }}
                                        value={marks[subject.code]?.[comp.name] || ''}
                                        onChange={(e) => handleMarkChange(subject.code, comp.name, e.target.value)}
                                        helperText={`Max: ${comp.max}`}
                                      />
                                    </Grid>
                                  ))}
                              </Grid>
                              
                              {/* Calculated Components */}
                              {subject.components
                                .filter(comp => comp.calculated)
                                .map((comp) => {
                                  const total = subject.components
                                    .filter(c => !c.calculated && c.credits === comp.credits)
                                    .reduce((sum, c) => sum + Number(marks[subject.code]?.[c.name] || 0), 0);
                                  
                                  const grade = getGradeLabel(total, comp.max);
                                  const points = getGradePoints(total, comp.max);
                                  
                                  return (
                                    <Box 
                                      key={`${subject.code}-${comp.name}`}
                                      sx={{ 
                                        mt: 2, 
                                        p: 1.5, 
                                        backgroundColor: 'background.default',
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: 'divider'
                                      }}
                                    >
                                      <Grid container alignItems="center">
                                        <Grid item xs={4}>
                                          <Typography variant="body2">
                                            {comp.name}: {total}/{comp.max}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                          <Typography variant="body2">
                                            Grade: <Chip 
                                              size="small" 
                                              label={grade} 
                                              color={grade === "FF" ? "error" : "success"} 
                                            />
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
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
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {/* Calculate Button */}
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={calculateSGPI}
                      sx={{ 
                        px: 6, 
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                        boxShadow: darkMode ? '0 0 20px rgba(0,168,255,0.5)' : '0 6px 20px rgba(46,125,50,0.25)'
                      }}
                    >
                      Calculate SGPI
                    </Button>
                  </Box>
                  
                  {/* Results Display */}
                  {calculatedResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Paper 
                          elevation={darkMode ? 12 : 6}
                          sx={{ 
                            p: 4, 
                            maxWidth: 500, 
                            mx: 'auto', 
                            borderRadius: 3,
                            background: darkMode 
                              ? 'linear-gradient(135deg, rgba(22, 33, 62, 0.5) 0%, rgba(26, 41, 128, 0.5) 100%)' 
                              : 'linear-gradient(135deg, rgba(245, 245, 245, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <Typography variant="h5" gutterBottom color="primary">
                            Your SGPI:
                          </Typography>
                          <Box 
                            sx={{ 
                              fontSize: '3rem', 
                              fontWeight: 800,
                              color: 'primary.main',
                              mb: 2,
                              textShadow: darkMode ? '0 0 10px rgba(0,168,255,0.5)' : 'none'
                            }}
                          >
                            <AnimatedNumber n={parseFloat(calculatedResults.sgpi)} />
                          </Box>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              mb: 2,
                              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
                            }}
                          >
                            Grade: {getGradeLabel(calculatedResults.sgpi * 10, 100)}
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="body2" color="textSecondary">
                            Total Credits: {calculatedResults.totalCredits}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Total Points: {calculatedResults.totalPoints}
                          </Typography>
                        </Paper>
                      </Box>
                    </motion.div>
                  )}
                </>
              )}
              
              {/* Target SGPI Tab */}
              {activeTab === 1 && (
                <>
                  {/* Target SGPI Settings */}
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 3, 
                      mb: 4,
                      borderRadius: 3,
                      borderColor: 'primary.main',
                      borderWidth: 2
                    }}
                  >
                    <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                      Set Your Target SGPI
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="body1" gutterBottom>
                        Target SGPI: {targetSGPI.toFixed(2)}
                      </Typography>
                      <Slider
                        value={targetSGPI}
                        min={4}
                        max={10}
                        step={0.1}
                        marks={[
                          { value: 4, label: "4.0" },
                          { value: 6, label: "6.0" },
                          { value: 8, label: "8.0" },
                          { value: 10, label: "10.0" }
                        ]}
                        onChange={(_, value) => setTargetSGPI(value)}
                        sx={{ color: 'primary.main' }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                      <FormControl sx={{ minWidth: 220 }}>
                        <InputLabel>Target Type</InputLabel>
                        <Select
                          value={targetMode}
                          label="Target Type"
                          onChange={(e) => setTargetMode(e.target.value)}
                        >
                          <MenuItem value="overall">Overall SGPI</MenuItem>
                          <MenuItem value="subject">Single Subject</MenuItem>
                        </Select>
                      </FormControl>
                      
                      {targetMode === 'subject' && (
                        <FormControl sx={{ minWidth: 220 }}>
                          <InputLabel>Subject</InputLabel>
                          <Select
                            value={targetSubject}
                            label="Subject"
                            onChange={(e) => setTargetSubject(e.target.value)}
                          >
                            {subjectData[group][semester].subjects.map((s) => (
                              <MenuItem value={s.code} key={s.code}>
                                {s.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Box>
                  </Paper>
                  
                  {/* Subject Marks Input */}
                  <Typography variant="h6" gutterBottom color="primary">
                    Enter Your Current Marks
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Fill in the marks you've received so far. Leave fields blank for components you want to calculate the required marks for.
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {subjectData[group][semester].subjects.map((subject, index) => (
                      <Grid item xs={12} md={6} key={subject.code}>
                        <motion.div
                          custom={index}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <Card 
                            variant="outlined" 
                            sx={{ 
                              height: '100%',
                              borderWidth: 2,
                              borderColor: 'primary.main',
                              borderRadius: 3,
                              opacity: targetMode === 'subject' && targetSubject !== subject.code ? 0.7 : 1,
                              transform: targetMode === 'subject' && targetSubject === subject.code ? 'scale(1.02)' : 'scale(1)',
                              transition: 'all 0.3s ease',
                              background: darkMode 
                                ? 'linear-gradient(135deg, rgba(16, 42, 67, 0.6) 0%, rgba(10, 25, 41, 0.6) 100%)' 
                                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(245, 245, 245, 0.6) 100%)',
                              backdropFilter: 'blur(8px)'
                            }}
                          >
                            <CardContent>
                              {/* Subject Header */}
                              <Box sx={{ mb: 2 }}>
                                <Typography 
                                  variant="subtitle1" 
                                  fontWeight="bold"
                                  sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                  {subject.name}
                                  <Chip 
                                    label={`${subject.credits} credits`}
                                    size="small"
                                    color="primary"
                                    sx={{ ml: 1, fontWeight: 600 }}
                                  />
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                  {subject.code}
                                </Typography>
                              </Box>
                              
                              {/* Components */}
                              <Grid container spacing={2}>
                                {subject.components
                                  .filter(comp => !comp.calculated)
                                  .map((comp) => (
                                    <Grid item xs={12} sm={6} key={`${subject.code}-${comp.name}`}>
                                      <TextField
                                        label={comp.name}
                                        type="number"
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                          inputProps: { 
                                            min: 0,
                                            max: comp.max,
                                            step: 1
                                          }
                                        }}
                                        value={marks[subject.code]?.[comp.name] || ''}
                                        onChange={(e) => handleMarkChange(subject.code, comp.name, e.target.value)}
                                        helperText={`Max: ${comp.max} (Leave blank to calculate)`}
                                      />
                                    </Grid>
                                  ))}
                              </Grid>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {/* Calculate Button */}
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={calculateTargetRequirements}
                      sx={{ 
                        px: 6, 
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                        boxShadow: darkMode ? '0 0 20px rgba(0,168,255,0.5)' : '0 6px 20px rgba(46,125,50,0.25)'
                      }}
                    >
                      Calculate Required Marks
                    </Button>
                  </Box>
                  
                  {/* Results Display */}
                  {requiredMarks && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ mt: 4 }}>
                        {requiredMarks.message ? (
                          <Paper 
                            sx={{ 
                              p: 3, 
                              borderRadius: 3,
                              textAlign: 'center',
                              background: darkMode 
                                ? 'linear-gradient(135deg, rgba(22, 33, 62, 0.5) 0%, rgba(26, 41, 128, 0.5) 100%)' 
                                : 'linear-gradient(135deg, rgba(245, 245, 245, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <Typography color="error" variant="h6">
                              {requiredMarks.message}
                            </Typography>
                          </Paper>
                        ) : (
                          <>
                            <Typography variant="h6" gutterBottom color="primary">
                              Required Marks to Achieve Target SGPI of {targetSGPI.toFixed(2)}
                            </Typography>
                            
                            <TableContainer 
                              component={Paper} 
                              variant="outlined" 
                              sx={{ 
                                mt: 2,
                                borderRadius: 3,
                                background: darkMode 
                                  ? 'rgba(16, 42, 67, 0.6)' 
                                  : 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(10px)'
                              }}
                            >
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Component</TableCell>
                                    <TableCell>Required Marks</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {Object.keys(requiredMarks.results || {}).map((code) => {
                                    const subject = requiredMarks.results[code];
                                    return subject.components.map((comp, compIndex) => (
                                      <TableRow key={`${code}-${comp.name}`}>
                                        {compIndex === 0 ? (
                                          <TableCell rowSpan={subject.components.length}>
                                            {subject.name}
                                          </TableCell>
                                        ) : null}
                                        <TableCell>{comp.name}</TableCell>
                                        <TableCell>
                                          {comp.withESE ? (
                                            <>You need at least <b>{comp.minMarks}</b> out of {comp.maxMarks} with your ESE = {comp.withESE}</>
                                          ) : comp.withCA ? (
                                            <>You need at least <b>{comp.minMarks}</b> out of {comp.maxMarks} with your CA = {comp.withCA}</>
                                          ) : (
                                            <>At least <b>{comp.minMarks}</b> out of {comp.maxMarks}</>
                                          )}
                                        </TableCell>
                                      </TableRow>
                                    ));
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </>
                        )}
                      </Box>
                    </motion.div>
                  )}
                </>
              )}
              
              {/* Grade Table Tab */}
              {activeTab === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom color="primary">
                        KJSCE Grading System
                      </Typography>
                      <TableContainer 
                        component={Paper} 
                        variant="outlined" 
                        sx={{ 
                          borderRadius: 3,
                          background: darkMode 
                            ? 'rgba(16, 42, 67, 0.6)' 
                            : 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Marks Range (%)</TableCell>
                              <TableCell>Letter Grade</TableCell>
                              <TableCell>Grade Points</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {gradeSystem.map((grade) => (
                              <TableRow key={grade.grade}>
                                <TableCell>{grade.min} - {grade.max}</TableCell>
                                <TableCell>
                                  <Chip 
                                    label={grade.grade} 
                                    color={grade.grade === "FF" ? "error" : "primary"} 
                                    variant={grade.grade === "FF" ? "filled" : "outlined"}
                                  />
                                </TableCell>
                                <TableCell>{grade.points}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom color="primary">
                        SGPI Formula & Information
                      </Typography>
                      <Paper 
                        variant="outlined" 
                        sx={{ 
                          p: 3,
                          borderRadius: 3,
                          background: darkMode 
                            ? 'rgba(16, 42, 67, 0.6)' 
                            : 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                          SGPI Formula:
                        </Typography>
                        <Box 
                          sx={{ 
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: 'background.default',
                            mb: 3,
                            fontFamily: '"Fira Code", monospace',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography>
                            SGPI = Σ(Grade Points × Credits) / Σ(Credits)
                          </Typography>
                        </Box>
                        
                        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                          Credit Distribution:
                        </Typography>
                        <Box 
                          component="ul" 
                          sx={{ 
                            pl: 2,
                            '& li': {
                              mb: 1
                            }
                          }}
                        >
                          <Typography component="li">
                            Theory subjects (ESE + CA): 3 credits
                          </Typography>
                          <Typography component="li">
                            Practical/Laboratory subjects: 1-3 credits
                          </Typography>
                          <Typography component="li">
                            Tutorial components: 1 credit
                          </Typography>
                        </Box>
                        
                        <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ mt: 2 }}>
                          Important Notes:
                        </Typography>
                        <Box 
                          component="ul" 
                          sx={{ 
                            pl: 2,
                            '& li': {
                              mb: 1
                            }
                          }}
                        >
                          <Typography component="li">
                            Minimum passing grade: D (4 grade points)
                          </Typography>
                          <Typography component="li">
                            Failing grade: FF (0 grade points)
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </motion.div>
              )}
            </Box>
            
            {/* Footer with Branding */}
            <Box 
              sx={{ 
                p: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                textAlign: 'center',
                background: darkMode 
                  ? 'linear-gradient(135deg, #102a43 0%, #0a1929 100%)' 
                  : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'
              }}
            >
              <Typography variant="body2" color="textSecondary">
                KJSCE SGPI Calculator © 2025 | Created by 
                <Typography 
                  component="span" 
                  color="primary" 
                  sx={{ 
                    fontWeight: 'bold',
                    mx: 0.5,
                    display: 'inline-block'
                  }}
                >
                  {/* Replace with your name */}
                  Aryan Lomte
                </Typography>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
