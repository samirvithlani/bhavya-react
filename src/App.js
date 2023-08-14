import logo from "./logo.svg";
import "./App.css";
import "./header.css";
import Header from "./components/Header";
import { HomeComponent } from "./components/HomeComponent";
import { UserComponent } from "./propsdemo/UserComponent";
import { StudentReg } from "./components/StudentReg";
import { UserReg } from "./components/UserReg";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Navbar } from "./components/Navbar";
import { PageNotFound } from "./PageNotFound";
import { Director } from "./components/Director";
import { Ceo } from "./components/Ceo";
import { AboutCompany } from "./components/AboutCompany";
import { ApiDemo1 } from "./components/ApiDemo1";
import { ApiDemo2 } from "./components/ApiDemo2";
import { Counter } from "./components/Counter";
function App() {
  var title = "Royal Tehnosoft";
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HomeComponent/> */}
      {/* <UserComponent title = {title}/> */}
      {/* <StudentReg/> */}
      {/* <UserReg/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path ="/aboutus" element={<AboutUs/>}></Route>
        <Route path ="/contactus" element={<ContactUs/>}></Route>
        <Route path ="/contactus/director" element={<Director/>}></Route>
        <Route path = "/contactus/ceo" element ={<Ceo/>}></Route>
        <Route path ="/aboutus/aboutcompany/:id" element ={<AboutCompany/>}></Route>
        <Route path ="/aboutus/:id" element ={<AboutCompany/>}></Route>
        <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/*" element={<h1>PAGE NOT FOUND 404</h1>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
