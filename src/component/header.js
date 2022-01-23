import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Header() {
  return (

    <header>
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h3>Besnik</h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item px-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link">Contact Us</a>
                </li>
                <button
                  style={{ fontSize: "14px" }}
                  type="button"
                  class="btn btn-sm btn-outline-primary px-4 mx-4"
                >
                  Sign In
                </button>
                <button
                  style={{ fontSize: "14px", color: "black" }}
                  type="button"
                  class="btn btn-sm btn-primary px-4 mx-4"
                >
                  Sign Up
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;



    // <nav class="navstyle" class="navbar navbar-expand-lg   navbar-dark    ">
    //     <div class="container">
    //         <a class="navbar-brand text-primary  fw-bold"   >besnik</a>
    //         <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse " id="navbarNav">
    //             <ul class="navbar-nav offset-4">
    //                 <li class="nav-item">
    //                     <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-primary" href="#">About us</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-primary" href="#">Features</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-primary" href="#">Contant</a>
    //                 </li>


    //                 <li class="nav-item offset-1">
    //                 <a class="btn btn-primary" href="#" role="button">Link</a>
    //                 </li>
    //                 <li class="nav-item offset-1">
    //                 <a class="btn btn-primary" href="#" role="button">Link</a>
    //                 </li>

    //             </ul>
    //         </div>
    //     </div>
    // </nav>
