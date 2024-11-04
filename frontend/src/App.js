import Header1 from "./Componant/Header/Header1";
import Header2 from "./Componant/Header/Header2";
import Header3 from "./Componant/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Componant/Hero/Hero";
import Main from "./Componant/Main/Main";
import Footer from "./Componant/Footer/Footer";
import Scroll from "./Componant/Scroll/Scroll";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Main/>
        </Box>
          <Footer/>
          <Scroll/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
