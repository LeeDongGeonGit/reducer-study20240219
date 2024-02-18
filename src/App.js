import { Routes, Route } from "react-router-dom";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";

function App() {
  return (
    <Routes>
        <Route path="/" element={<BoardList/>}/>
        <Route path="/form" element={<BoardForm/>}/>
    </Routes>
  );
}

export default App;