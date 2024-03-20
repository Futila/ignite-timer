import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Button } from "./components/Button/styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Enviar</Button>
      <Button>Enviar</Button>
      <Button>Enviar</Button>
      <Button>Enviar</Button>

      <GlobalStyle />
    </ThemeProvider>
  );
}
