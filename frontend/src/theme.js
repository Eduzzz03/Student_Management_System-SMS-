// import { createTheme } from "@mui/material/styles"

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#2196f3", // Blue color for primary elements like the button
//     },
//     background: {
//       default: "#121212", // Dark background
//       paper: "#121212",
//     },
//     text: {
//       primary: "#ffffff",
//       secondary: "rgba(255, 255, 255, 0.7)",
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 700,
//       fontSize: "3.5rem",
//       lineHeight: 1.2,
//     },
//     body1: {
//       fontSize: "1rem",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 50, // Rounded button
//           textTransform: "none", // No uppercase text
//           padding: "8px 24px",
//           fontSize: "1.1rem",
//         },
//       },
//     },
//   },
// })

// export default theme

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#0f0f1b',
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#cfcfcf',
    },
  },
});

export default theme;

