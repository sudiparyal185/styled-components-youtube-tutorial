import { StyledDivContainer } from "./App.styled";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
const theme = {
  color: {
    button: "blue",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDivContainer>
        <h1>Styled Components Tutorial </h1>
        <Form />
      </StyledDivContainer>
    </ThemeProvider>
  );
}

export default App;
