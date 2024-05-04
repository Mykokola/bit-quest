import "./App.css";
import { ExchangesPage } from "./pages/ExchangesPage/ExchangesPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ExchangesPage></ExchangesPage>}></Route>
    </Routes>
  );
}

export default App;
