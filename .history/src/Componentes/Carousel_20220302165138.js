import { Heart2 } from '../Elementos/ImagenesSVG'
import imagen1 from './../Imagenes/carousel1.jpg'
import imagen2 from './../Imagenes/carousel2.jpg'
import imagen3 from './../Imagenes/carousel3.jpg'
import './Carousel.css'
const Carousel = () => {
    return ( 

        <>
<section className="main">
  <div className="container">
    <div className="row mt-5">
      <div className="col">
        <div className="carousel slide carousel-fade carousel-sm" id="mi-carousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="carousel-caption">
            <h5>PizzeriaLove</h5>
            <p><Heart2></Heart2></p>
          </div>
              <img className="img-fluid" src={imagen1} alt='' />
            </div>
            
            <div className="carousel-item" data-bs-interval="5000">
              <div className="carousel-caption">
                <h5>PizzeriaLove</h5>
                <p><Heart2></Heart2></p>
              </div>
              <img className="img-fluid" src={imagen2}  alt=''/>
            </div>
            <div className="carousel-item">
            <div className="carousel-caption">
            <h5>PizzeriaLove</h5>
            <p><Heart2></Heart2></p>
          </div>
            <img className="img-fluid" src={imagen3} alt='' />
            </div>
          </div>
        


          <button 
            className="carousel-control-prev botonprev"
            type="button"
            data-bs-target="#mi-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon  icono" aria-hidden="true"></span>
            <span className="visually-hidden">Prev</span>
          </button>
          <button 
            className="carousel-control-next"
            type="button"
            data-bs-target="#mi-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon icono" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
           
          


          <div className="carousel-indicators">
            <button 
              type="button"
              className="active"
              data-bs-target="#mi-carousel"
              data-bs-slide-to="0"
              aria-label="Slide 1"
            ></button>
            <button 
              type="button"
              className=""
              data-bs-target="#mi-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button 
              type="button"
              className=""
              data-bs-target="#mi-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>

        
        </>
     );
}
 
export default Carousel;