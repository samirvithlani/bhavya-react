import logo from "./logo.svg";
import "./App.css";
import "./header.css";
import Header from "./components/Header";
import { HomeComponent } from "./components/HomeComponent";
import { UserComponent } from "./propsdemo/UserComponent";
import { StudentReg } from "./components/StudentReg";
import { UserReg } from "./components/UserReg";
function App() {

  var title = "Royal Tehnosoft";
  return (
    <div className="App">
      
      {/* <Header /> */}
      {/* <HomeComponent/> */}
      {/* <UserComponent title = {title}/> */}
      {/* <StudentReg/> */}
      <UserReg/>
      
    </div>
  );
}

export default App;
