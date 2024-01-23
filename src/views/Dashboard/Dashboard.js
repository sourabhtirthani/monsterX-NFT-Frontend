import { useState } from "react";
// Components
import Sidebar from "../../components/Dashboard/Sidebar";
import Profile from "../../components/Dashboard/Sidebar/Profile";
import Create from "../../components/Dashboard/Sidebar/Create";
import Settings from "../../components/Dashboard/Sidebar/Settings";
import Curation from "../../components/Dashboard/Sidebar/Curation";
import Appreciate from "../../components/Dashboard/Sidebar/Appreciate";

function Dashboard () {
    const [tabShow,setTabShow] = useState('appreciate')
    const onClickMenuButton = (value) => {
        setTabShow(value)
    }
    switch (tabShow) {
        case 'create':
            return <Create render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
        case 'appreciate':
            return <Appreciate render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
        case 'curation':
            return <Curation render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
    
        case 'myProfile':
            return <Profile render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
    
        case 'settings':
            return <Settings render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
    
        default:
            return <Profile render={<Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />} />
            break;
    }
  
}

export default Dashboard;