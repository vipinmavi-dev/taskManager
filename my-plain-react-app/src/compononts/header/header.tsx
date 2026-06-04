import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, CheckSquare, BookOpen, Calendar } from "lucide-react";
import "./header.css";

function Header() {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    
    return(
        <header className="commonPageHeader">
                <div onClick={()=>navigate('/')} className='headerLogo' >
                    <Home/>
                    <span className="font18px">Productivity Hub</span>
                </div>
                <nav>
                    <div className={pathname=='/list'? "navLink activeButton":'navLink'} onClick={()=>navigate('/list')}>
                        <CheckSquare/>
                        <span className="font10px">Task Manager</span>
                    </div>
                    <div className={pathname=='/vocablary'? "navLink activeButton":'navLink'}  onClick={()=>navigate('/vocablary')}>
                        <BookOpen/>
                        <span className="font10px">Voacablry</span>
                    </div>
                    <div className={pathname=='/timetable'? "navLink activeButton":'navLink'} onClick={()=>navigate('/timetable')}>
                        <Calendar/>
                        <span className="font10px">Time Table</span>
                    </div>
                </nav>
            </header>
    )
}

export default Header;