import Header from "./component/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import lamge from "./lam.svg.png";
import sec from "./sec.svg.png";
import icon from "./icon.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import group from "./Asset/group.png";

function App() {
  return (

    <div>

      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12  col-md-5 offset-1 ">
            <p id="heading1">Search for Homes in your Neighborhood </p>
            <p >

              Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.
            </p>


          </div>
          <div id="lam" className="col-sm-12  col-md-5 offset-1  ">
            <img src={lamge} height="500" width="380" />



          </div>

        </div>
      </div>

      <div className="container-fluid">
        <div className="row">


          < img src={sec} id="imageMarge" />



        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12  text-center ">
            <h2 id="headcolor">What Can We Help You Find? </h2>

          </div>


        </div>

      </div>


      <div className="container mt-5">
        <div className="row">

          <div className="col-sm-12 col-md-3 offset-1  ">

            <img src={icon} />

            <p class="head3">Buy a  home</p>
            With over 1 million+ homes for sale available on the website, Trulia can match you with a house.

          </div>

          <div className="col-sm-12 col-md-3 offset-1  ">

            <img src={icon3} />

            <p class="head3">Rent a home</p>
            With 35+ filters and custom keyword search, Trulia can help you
            find a home.

          </div>


          <div className="col-sm-12 col-md-3 offset-1  ">

            <img src={icon2} />

            <p class="head3">See neighborhoods</p>
            With more neighborhood insights than any other real estate
            website.

          </div>






        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6 col-md-5 " >
              <p class="head4">Our trending latest propart type</p>
              Our unique process gives you peace of mind from home rent to services
            </div>

            <div>
              {/* <div class="dropdown me-1">
                <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                  Offset
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Reference</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
              
              </div>
            </div> */}

            </div>
          </div>
          <div className="container-fluid  mt-8" >
            <div className="row">
          
                <img src={group} alt="" srcset="" />
              
            </div>

          </div>







          {/* 
        <div className="col-sm-12 col-md-3 offset-1  ">

          <img src={icon} />

        </div>
        <div className="col-sm-12 col-md-3 offset-1  ">

          With more neighborhood insights than any other real estate
          website.
          <img src={icon} />
        </div>

      </div> */}




          {/* </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p class="head3">Buy a  home</p>

          </div>
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p class="head3">Rent a Home</p>
          </div>
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p class="head3">See neighborhoods
            </p>

          </div>

        </div>

      </div> */}

          {/* 
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p >
              With over 1 million+ homes for sale available on the website, Trulia can match you with a house.
      
              </p>

          </div>
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p ></p>
          </div>
          <div className="col-sm-12 col-md-3 offset-1  ">
            <p >
            </p>

          </div>

        </div>

// </div> */}
        </div>

      </div>
    </div>




  );
}

export default App;


//  react ky under big advan ye han kay hm js ki file ma html likh sakta without dom
// html ky code ko hm js file ky under likh sak ty han
// app.js  ko kaabi b brower understand ni karta  html ka code ni chayla ga 
// why not under brower because ky html ky under js likh jo brower understand ni karta


// webpack or babel

// babel compiler : babel ek chalta chaya code hay
// bebel is ko code ko actual js ma convert karga
//  ye saarui file index.html ma ja kar store hoti hay



// import/export
// import or export ki commend ma hm ek file ko second ma move karna ky liya use kareta  hay
// agar hm ek file ko second ma use karna chata hay to os ko export karay ga

// first app.js ka code  index.js ma jata hay phir get element sy root id jo index.html ma define waha jata hay all code






