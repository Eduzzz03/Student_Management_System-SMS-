// import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Link, useMediaQuery } from "@mui/material"
// import { styled } from "@mui/material/styles"

// // Styled components for the pill-shaped image containers
// const PillImage = styled(Box)(({ theme }) => ({
//   borderRadius: "40px",
//   overflow: "hidden",
//   position: "absolute",
//   width: "150px",
//   height: "350px",
//   "& img": {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
// }))

// // Styled component for colored circles
// const ColoredCircle = styled(Box)(({ theme, color }) => ({
//   position: "absolute",
//   borderRadius: "50%",
//   backgroundColor: color,
//   opacity: 0.8,
//   zIndex: 0,
// }))

// function Landingpage() {
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"))

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
//       <Container maxWidth="lg" sx={{ py: 3 }}>
//         {/* Navigation */}
//         <AppBar position="static" elevation={0} color="transparent">
//           <Toolbar sx={{ px: 0 }}>
//             <Typography variant="h5" component="div" sx={{ fontWeight: "bold", flexGrow: 1 }}>
//               SMS
//             </Typography>
//             {!isMobile && (
//               <Box sx={{ display: "flex", gap: 4 }}>
//                 <Link href="#" color="text.secondary" underline="none" sx={{ "&:hover": { color: "text.primary" } }}>
//                   About
//                 </Link>
//                 <Link href="#" color="text.secondary" underline="none" sx={{ "&:hover": { color: "text.primary" } }}>
//                   Admin
//                 </Link>
//                 <Link href="#" color="text.secondary" underline="none" sx={{ "&:hover": { color: "text.primary" } }}>
//                   Student
//                 </Link>
//                 <Link href="#" color="text.secondary" underline="none" sx={{ "&:hover": { color: "text.primary" } }}>
//                   Teachers
//                 </Link>
//               </Box>
//             )}
//           </Toolbar>
//         </AppBar>

//         {/* Main Content */}
//         <Grid container spacing={4} sx={{ mt: 6 }}>
//           {/* Left Content */}
//           <Grid item xs={12} lg={6} sx={{ position: "relative" }}>
//             {/* Orange circle accent */}
//             <ColoredCircle
//               color="#f57c00"
//               sx={{
//                 width: "48px",
//                 height: "48px",
//                 left: "-16px",
//                 top: isMobile ? "80px" : "100px",
//               }}
//             />

//             <Typography variant="h1" component="h1" sx={{ mb: 3, lineHeight: 1.2 }}>
//               Smart Solutions for <br /> Smarter Learning.
//             </Typography>

//             <Button variant="contained" color="primary" sx={{ mb: 4, px: 4, py: 1 }}>
//               Role
//             </Button>

//             <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: "600px" }}>
//               Our Student Management System (SMS) offers intelligent, user-friendly tools designed to enhance academic
//               administration.
//               <br />
//               <br />
//               We provide comprehensive solutions to support student success. With real-time data access, automated
//               processes, and seamless integration, SMS brings smarter learning to life through smarter solutions.
//             </Typography>
//           </Grid>

//           {/* Right Content - Student Images Collage */}
//           <Grid item xs={12} lg={6} sx={{ position: "relative", height: { xs: "500px", md: "600px" } }}>
//             {/* Colored circle accents */}
//             <ColoredCircle
//               color="#ffc107"
//               sx={{
//                 width: "32px",
//                 height: "32px",
//                 right: "16px",
//                 bottom: "48px",
//               }}
//             />
//             <ColoredCircle
//               color="#f44336"
//               sx={{
//                 width: "40px",
//                 height: "40px",
//                 left: "25%",
//                 top: "33%",
//               }}
//             />

//             {/* Student images in pill shapes */}
//             <PillImage sx={{ top: 0, right: 0 }}>
//               <img src="https://placehold.co/150x350" alt="Student with laptop" />
//             </PillImage>

//             <PillImage sx={{ top: "40px", left: isMobile ? "40px" : "80px" }}>
//               <img src="https://placehold.co/150x350" alt="Student with books" />
//             </PillImage>

//             <PillImage sx={{ bottom: 0, right: isMobile ? "80px" : "128px" }}>
//               <img src="https://placehold.co/150x350" alt="Student studying" />
//             </PillImage>

//             <PillImage sx={{ bottom: "40px", left: 0 }}>
//               <img src="https://placehold.co/150x350" alt="Student with notebook" />
//             </PillImage>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default Landingpage
