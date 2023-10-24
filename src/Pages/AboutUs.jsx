import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { Fade, Bounce, Hinge, Slide } from "react-awesome-reveal";
function AboutUs() {
  return (
    <>
      <Meta pageTitle="Nosotros" />
      <section className="aboutus-wrapper arrow-up">
        <div className="video-container">
          <div className="color-ovelay"></div>
          <video autoPlay muted loop>
            <source src="/videos/bg-4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about-desc col-12 d-flex flex-column justify-content-center align-items-center aboutus-text">
          <div>
            <h1 className="hero-title cb">
              Certificates and Business English
            </h1>
          </div>
          <div>
            <p className="hero-description cb">
              Con más de 17 Años de Excelencia en la Enseñanza del idioma Inglés
            </p>
          </div>
        </div>
      </section>

      <div className="pasion-wrapper ">
        <section className="aboutus py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="display-flex">
                <div className="f-1 d-flex flex-column gap-2 justify-content-center">
                  <Fade>
                    <div>
                      <h1 className="title ">
                        Nuestra Pasión por la Enseñanza del Inglés en Línea
                      </h1>
                    </div>
                    <div>
                      <h3 className="description ">Desde 2005</h3>
                    </div>
                    <div>
                      <p className="description ">
                        En CB English, nos encontramos profundamente
                        comprometidos con el aprendizaje y la enseñanza en línea
                        del Idioma Inglés. Desde nuestro comienzo hace más de 17
                        años, hemos crecido y evolucionado.
                      </p>
                    </div>
                  
                  </Fade>
                </div>
                <div className="f-1">
                  <div>
                    <Fade>
                      <img
                        src="/images/team-2.webp"
                        alt=""
                        className="img-fluid"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="objective-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 ">
                <div className="objective-container">
                  <div className="col-2 display-flex">
                    <div className="objective-img">
                      <img src="/images/objective-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="objective-text">
                      <h2>Objetivo</h2>
                      <p>
                        Nuestro objetivo es capacitar a nuestros estudiantes
                        para que puedan obtener una certificación que avale sus
                        conocimientos en el idioma y esto a su vez les permita
                        avanzar tanto en sus estudios como en su área laboral.
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="objective-img">
                      <img src="/images/objective-2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mvv-wrapper py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="co-12 d-flex gap-4">
                <div className="values hero-content-1 ">
                  <div className="values-img ">
                    <img src="/images/about-meeting.webp" alt="" />
                  </div>
                </div>
                <div className="values hero-content d-flex flex-column gap-3">
                  <Slide direction="right" delay={"10"}>
                    <div className="d-flex gap-3">
                      <div className="mvv-icon">
                        <img src="/images/mission.webp" alt="" />
                      </div>
                      <div className="mvv-text">
                        <h2>Misión</h2>
                        <p>
                          Abrirle las puertas de las oportunidades a jóvenes y
                          adultos, para que a través del idioma adquieran esta
                          valiosa herramienta de comunicación que les permita
                          obtener mejores oportunidades.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide direction="right" delay={"20"}>
                    <div className="d-flex gap-3">
                      <div className="mvv-icon">
                        <img src="/images/vision.webp" alt="" />
                      </div>
                      <div className="mvv-text">
                        <h2>Visión</h2>
                        <p>
                          Convertirnos en la mejor opción para aprender el
                          idioma inglés dentro de nuestra zona de influencia a
                          un precio competitivo, con calidad en la enseñanza y
                          resultados tangibles en un tiempo razonable.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide direction="right" delay={"30"}>
                    <div className="d-flex gap-3">
                      <div className="mvv-icon">
                        <img src="/images/values.webp" alt="" />
                      </div>
                      <div className="mvv-text">
                        <h2>Valores</h2>
                        <p>
                          <ul>
                            <li>Comunicación</li>
                            <li>Trabajo en equipo</li>
                            <li>Honestidad</li>
                            <li>Compromiso</li>
                            <li>Solidaridad</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
