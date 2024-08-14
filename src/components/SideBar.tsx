import React from "react";
import { Link } from "react-router-dom";

type Props = {
  page: string
}

const Sidebar: React.FC<Props> = ({page})=>{
    return <div className="sidebar">
    {/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red" */}
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href="javascript:void(0)" className="simple-text logo-mini">
        MES
      </a>
      <a href="javascript:void(0)" className="simple-text logo-normal">
        Tech
      </a>
    </div>
    <ul className="nav">
      <li className={page == "dashboard" ? "active " : ""}>
        <Link to="/">
          <i className="tim-icons icon-chart-pie-36"></i>
          <p>Dashboard</p>
        </Link>
      </li>
      <li className={page == "users" ? "active " : ""}>
        <Link to="/manage-users">
          <i className="tim-icons icon-atom"></i>
          <p>Manage Users</p>
        </Link>
      </li>
      <li className={page == "funds" ? "active " : ""}>
        <Link to="/funds">
          <i className="tim-icons icon-pin"></i>
          <p>Manage Funds</p>
        </Link>
      </li>
      {/* <li>
        <a href="./notifications.html">
          <i className="tim-icons icon-bell-55"></i>
          <p>Notifications</p>
        </a>
      </li> */}
      <li className={page == "graphs" ? "active " : ""}>
        <Link to="/graphs">
          <i className="tim-icons icon-single-02"></i>
          <p>Graphs</p>
        </Link>
      </li>
      <li className={page == "leaderboards" ? "active " : ""}>
        <Link to="/leaderboards">
          <i className="tim-icons icon-puzzle-10"></i>
          <p>Leaderboards</p>
        </Link>
      </li>
      {/* <li>
        <a href="./typography.html">
          <i className="tim-icons icon-align-center"></i>
          <p>Typography</p>
        </a>
      </li>
      <li>
        <a href="./rtl.html">
          <i className="tim-icons icon-world"></i>
          <p>RTL Support</p>
        </a>
      </li>
      <li className="active-pro">
        <a href="./upgrade.html">
          <i className="tim-icons icon-spaceship"></i>
          <p>Upgrade to PRO</p>
        </a>
      </li> */}
    </ul>
  </div>
</div>
}

export default Sidebar