import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
