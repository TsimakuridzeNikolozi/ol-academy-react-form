import "./App.css";
import MyForm from "./Components/MyForm";
import { Container } from "reactstrap";

function App() {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-dark"
    >
      <MyForm />
    </Container>
  );
}

export default App;
