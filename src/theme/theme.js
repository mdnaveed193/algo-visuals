import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3B82F6",
    },

    secondary: {
      main: "#A855F7",
    },

    success: {
      main: "#22C55E",
    },

    warning: {
      main: "#F59E0B",
    },
    button: {
      main: "#00ab66",
    },

    error: {
      main: "#EF4444",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    button: {
      main: '#10B981',
      dark: '#059669',
      contrastText: '#ffffff'
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },
  },

//   shape: {
//     borderRadius: 14,
//   },
});

export default theme;