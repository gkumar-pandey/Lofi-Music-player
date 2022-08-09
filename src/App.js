import "./App.css";
import Home from "./Pages/Home/Home";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import data from "./Assets/Data/Data";
function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#04293a",
      },
    },
  });
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
