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
import { UserDetail } from "./components/UserDetail";
import { UpdateUser } from "./UpdateUser";
import { DalleDemo } from "./components/DalleDemo";
import { Countries } from "./context/Countries";
import { AppContext } from "./context/context";
import { UserListWithQ } from "./components/UserListWithQ";
import axios from "axios";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { StoreData } from "./components/StoreData";
import { DynamicForm } from "./components/DynamicForm";
import { BoxDemo } from "./mui/box/BoxDemo";
import { ProductComponent } from "./components/ProductComponent";
import { CartComponent } from "./components/CartComponent";
function App() {
  var title = "Royal Tehnosoft";
  var style = {
    color: "red",
    backgroundColor: "yellow",
  };

  axios.defaults.baseURL = "https://node5.onrender.com";
  //axios.defaults.baseURL = "http://localhost:3001";

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HomeComponent/> */}
      {/* <UserComponent title = {title}/> */}
      {/* <StudentReg/> */}
      {/* <UserReg/> */}
      <Navbar />
      {/* <DalleDemo/> */}
      <AppContext.Provider value={{ style }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/aboutus" element={<AboutUs />}></Route>
          </Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/contactus/director" element={<Director />}></Route>
          <Route path="/contactus/ceo" element={<Ceo />}></Route>
          <Route
            path="/aboutus/aboutcompany/:id"
            element={<AboutCompany />}
          ></Route>
          <Route path="/aboutus/:id" element={<AboutCompany />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/userdetail/:id" element={<UserDetail />}></Route>
          <Route path="/userupdate/:id" element={<UpdateUser />}></Route>
          <Route path="/*" element={<h1>PAGE NOT FOUND 404</h1>}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/userlistq" element={<UserListWithQ />}></Route>
          <Route path ="/storedata" element={<StoreData/>}></Route>
          <Route path ="/dynamicform" element={<DynamicForm/>}></Route>
          <Route path = "/boxdemo" element = {<BoxDemo/>}></Route>
          <Route path = "/product" element = {<ProductComponent/>}></Route>
          <Route path = "/cart" element ={<CartComponent/>}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
