import React from "react";

const Footer: React.FC = ()=>{
    return <footer className="footer">
    <div className="container-fluid">
      <ul className="nav">
        <li className="nav-item">
          <a href="javascript:void(0)" className="nav-link">
            MES TECH
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="nav-link">
            Blog
          </a>
        </li>
      </ul>
      <div className="copyright">
        ©
        <script>
          document.write(new Date().getFullYear())
        </script>2024
      </div>
    </div>
  </footer>
}

export default Footer