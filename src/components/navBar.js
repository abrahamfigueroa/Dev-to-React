import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar sticky-top container-fluid row-md" style={{ background: "#fff" }}>
      <div className="container-md d-flex justify-content-between">
        <div className="d-flex">
          <div className="me-3">
            <img src='https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />

          </div>
        </div>
      </div> 
    </nav>)
}
//         <nav
//   className="navbar sticky-top container-fluid row-md"
//   style="background-color: #ffffff"
//   >
//   <div className="container-md d-flex justify-content-between">
//     <div className="d-flex">
//       <div className="me-3">
//         <div className="div div__container-img d-flex align-items-center">
//         <div className="div div__menu-burguer mx-3 d-block d-md-none">
//           <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3uzztorovwykeessr6lbtvkxzautcfm" className="crayons-icon"><title id="a3uzztorovwykeessr6lbtvkxzautcfm">Navigation menu</title>
//               <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
//           </svg>
//           </a>
//         </div>
//           <a className="navbar-brand" href="./index.html">
//             <img
//             className="div__nav-menu img__devto-logo"
//             src="./assets/resized_logo_UQww2soKuUsjaOGNB38o.png"
//             alt=""
//             />
//           </a>
//         </div>
//       </div>
//       <div className="container text-start col align-items-start">
//         <form className="form__navbar" action="">
//           <div className="input-group">
//             <input
//             type="text"
//             className="d-none d-sm-none d-md-none d-lg-block form-control input__loupe-control"
//             placeholder="Search..."
//             />
//             <button className="d-none d-sm-none d-md-none d-lg-block btn btn-search" type="button">
//               <img width="20" src="/assets/loupe.svg" alt="" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     <div className="d-flex align-items-center gap-3 dropdown">
//       <button onclick="window.location.href='./create-post.html'" className="d-none d-sm-none d-md-none d-lg-block btn btn-purple btn-outline-purple fw-bold" type="button">
//         Create Post
//       </button>
//       <button className="d-md-block d-lg-none btn btn-search" type="button">
//         <img width="20" src="/assets/loupe.svg" alt="" />
//       </button>
//       <svg className= "bell__notification-icon crayons-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agdk31akwd0wvega671bi3rc07bwke7d"><title id="agdk31akwd0wvega671bi3rc07bwke7d">Notifications</title>
//         <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
//     </svg>
//       <button
//       type="button" data-bs-toggle="dropdown" aria-expanded="false"
//       className="avatar avatar__button p-1"
//       id="member-menu-button"
//       >
//       <img
//       className="avatar__icon-image rounded-circle"
//       alt=""
//       id="nav-profile-image"
//       src="https://res.cloudinary.com/practicaldev/image/fetch/s--iEKpXQPg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/922746/4331f4ce-8208-4936-bed4-d88204212fcd.jpeg"
//       />
//     </button>
//     <ul className="dropdown-menu dropdown__user-options dropdown-menu-light pt-2">
//       <li><a className="dropdown-item d-flex flex-column" href="#">
//         <span className="span span__dropdown">Jésica</span>
//         <small>@Jex</small></a>
//         </li>
//       <li><hr className="dropdown-divider"/></li>
//       <li><a className="dropdown-item" href="#">Dashboard</a></li>
//       <li><a className="dropdown-item" href="#">Create Post</a></li>
//       <li><a className="dropdown-item" href="#">Reading List</a></li>
//       <li><a className="dropdown-item" href="#">Settings</a></li>      
//       <li><hr className="dropdown-divider"/></li>
//       <li><a className="dropdown-item" href="#">Sign Out</a></li>
//     </ul>
//   </div>
// </div>
// </nav>
//     )
// }

export default NavBar;