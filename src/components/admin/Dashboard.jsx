import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar" 

const Dashboard = () => {
  return (
    <div className="w-full">
        <AdminNavbar/>
        <Outlet/>
    </div>        
  )
}

export default Dashboard