import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AdmissionForm from "./components/AdmissionForm";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import Events from "./components/Events";


function App() {
  return (
    <>
      <Header />

     <Routes>
  <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/home" element={<Home />} />
  <Route path="/events" element={<Events />}/>
  <Route path="/admissions" element={<AdmissionForm />} />
  <Route path="/faculty" element={<Faculty />} />
</Routes>


      <Footer />
    </>
  );
}

export default App;
