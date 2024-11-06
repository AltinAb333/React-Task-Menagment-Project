import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Login({ isOpen, toggleSidebar }){
    return (
        <div>
            <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <h1 className="px-72 py-16">New LogIn</h1>
        </div>
        
    )
}