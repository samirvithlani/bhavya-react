import { Outlet } from "react-router-dom";
import { StoreData } from "./StoreData";

const { useState, useEffect } = require("react");

const useAuth = () => {
  const [flag, setflag] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("id");
    if (token) {
      setflag(true);
    } else {
      setflag(false);
    }
  }, [flag]);
  
  return flag;
};

const ProtectedRoutes = () => {
  const flag = useAuth();

  return <>{flag ? <Outlet /> : <StoreData />}</>;
};
export default ProtectedRoutes;
