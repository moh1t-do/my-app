import { useNavigate, Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
    const navigate = useNavigate();
    return (
        <div className={style.nav_header}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default Header;