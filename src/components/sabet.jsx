
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
const Sabet = ()=> { 
    return (
    <main>
        <Header />
        <Outlet /> 
        <Footer />
    </main>);
};

export default Sabet;