import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import worldImg from "../../assets/images/world.png"
import hero01 from "../../assets/images/hero01.jpeg"
import hero02 from "../../assets/images/hero02.jpeg"
import hero03 from "../../assets/images/hero03.jpeg"
import experienceImg from "../../assets/images/experience.png"

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../features-tours/FeaturedTourList";
import MasonryImagesGallery from "../image-gallery/MansonryImagesGallery";
import Testimonials from "../Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>

              <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum illo aliquid libero tempore quod nostrum quaerat corrupti necessitatibus sunt voluptates obcaecati, ut, nesciunt ducimus dolore porro voluptatum veritatis architecto.</p>
            </div>
          </Col>
          <Col lg='4' className="mx-auto">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner rounded-4">
                <div className="carousel-item active">
                  <img src={hero01} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={hero02} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={hero03} className="d-block w-100 h-50" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>


      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quisquam, quod isc scnjnscn .</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trips</h6>
                </div>

                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>1Years</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
    </section>
  )
}

export default Home
