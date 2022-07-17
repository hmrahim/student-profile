import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Dashboard/Navbar";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./Components/Students/AddStudent";
import AllStudent from "./Components/Students/AllStudent";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ViewStudent from "./Components/Students/ViewStudent";
import UpdateStudent from "./Components/Students/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="addstudent" element={<AddStudent/>} ></Route>
          <Route path="allstudent" element={<AllStudent/>} ></Route>
          <Route path="viewstudent/:id" element={<ViewStudent/>} ></Route>
          <Route path="edittudent/:id" element={<UpdateStudent/>} ></Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
