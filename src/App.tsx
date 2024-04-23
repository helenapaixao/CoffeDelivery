import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import {Header} from "../src/components/Molecules/Header";
import router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
