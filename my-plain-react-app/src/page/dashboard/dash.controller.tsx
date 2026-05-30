import React from "react";
import { useNavigate } from "react-router";
import DashboardPage from "./dash.tsx";
import { ReactComponent as Checkmark }  from "../../assets/icons/checkmarx.svg";
import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as CalenderIcone } from "../../assets/icons/calendar-time.svg";

function DashboardController() {
    const navigate = useNavigate();
    const tileData = [
        {
            title: 'Task Manager',
            description: 'Manage your tasks and track progress',
            child: <span className="icon-wrapper">
                        <Checkmark style={{color:"white", width: 40}} />
                    </span>,
            onclick: ()=>{navigate('/list')}
        },
        {
            title: 'Vocablary',
            description: 'Look up word definitions and meanings',
            child: <span className="icon-wrapper1">
                        <BookIcon style={{color:"white", width: 40}}/>
                    </span>,
            onclick: ()=>{navigate('/vocablary')}
        },
        {
            title: 'Timetable',
            description: 'View and manage your schedule',
            child: <span className="icon-wrapper2">
                        <CalenderIcone style={{color:"white", width: 40}}/>,
                    </span>,
            onclick: ()=>{navigate('/timetable')}
        }
    ]
    return(
        <DashboardPage tileData={tileData}/>
    )
}
export default DashboardController;