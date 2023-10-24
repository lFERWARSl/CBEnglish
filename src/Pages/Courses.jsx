import React from "react";
import { Link } from "react-router-dom";
import Meta from "../Components/Meta";
import { AiFillWechat } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { Fade, Bounce, Hinge, Slide } from "react-awesome-reveal";

function Courses() {
  return (
    <>
      <Meta pageTitle="Cursos" />
      <section className="courses-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-content col-6 d-flex flex-column justify-content-center">
              <Fade delay={100}>
                <div>
                  <div className="hero-title">
                    <h1>Explora los Cursos de Inglés en CB English</h1>
                  </div>
                </div>
                <div className="hero-description">
                  <p>
                    Descubre cómo nuestros cursos de inglés en CB English pueden
                    ayudarte a alcanzar tus objetivos personales y
                    profesionales.
                  </p>
                </div>
                <div>
                  <Link to={"/contacto"} className="button">
                    Contactanos
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="hero-content-1 col-6">
              <div>
                <img src="/images/courses.webp" alt="courses-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="general-courses">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="d-flex wrap-section gap-2 justify-content-center">
                <div className="col-">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Inmersión Total</h5>
                      <p class="card-text">
                        Nuestros cursos te sumergen en el idioma desde el primer
                        día, garantizando un aprendizaje efectivo y rápido.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-">
                  <div class="card" style={{ width: "18rem;" }}>
                    <div class="card-body">
                      <h5 class="card-title">Profesores Expertos</h5>
                      <p class="card-text">
                        Contamos con un equipo de profesionales altamente
                        calificados y apasionados por la enseñanza del inglés
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-">
                  <div class="card" style={{ width: "18rem;" }}>
                    <div class="card-body">
                      <h5 class="card-title">Variedad de Niveles</h5>
                      <p class="card-text">
                        Desde principiantes hasta avanzados, tenemos cursos para
                        todos los niveles de habilidad.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-">
                  <div class="card" style={{ width: "18rem;" }}>
                    <div class="card-body">
                      <h5 class="card-title">Resultados Garantizados</h5>
                      <p class="card-text">
                        Nuestra metodología probada te llevará a la fluidez y al
                        éxito en tu carrera y vida personal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="display-flex">
                <div className="f-1 gap-3 d-flex flex-column justify-content-center ">
                  <Fade delay={50} damping={0.3}>
                    <div>
                      <h1 className="title">
                        ¡Domina el Inglés como un Profesional! Niveles al
                        Alcance de Todos
                      </h1>
                    </div>
                    <div>
                      <p className="description">
                        ¿Quieres alcanzar el dominio del inglés? Este es el
                        lugar para empezar. Exploraremos los niveles de inglés
                        según el MCER de una manera amena y accesible. Desde
                        principiantes hasta avanzados, descubre cómo cada nivel
                        te aproxima al dominio del idioma. ¡Prepárate para
                        conquistar el idioma con confianza y determinación!
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="display-flex f-1">
                  <div className="courses-img">
                    <img
                      src="/images/learning.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>

      <section className="levels-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="section-heading ">
                <h1 className="mb-5 text-center">Niveles</h1>
              </div>

              <div className="levels-animation">
                <div className="levels">
                  <Fade delay={"30"}>
                    <div className="levels-container left-container">
                      <span className="level-icon one">A1</span>
                      <div className="text-box">
                        <h2>Principiante </h2>
                        <small>(Breakthrough)</small>
                        <ul>
                          <li>Construirás una base sólida en inglés.</li>
                          <li>
                            podrás presentarte o pedir y dar información básica
                            sobre ti.
                          </li>
                          <li>
                            Esto incluye saludos, presentaciones y
                            conversaciones simples sobre temas familiares
                          </li>
                        </ul>
                        <span className="left-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container right-container">
                      <span className="level-icon two">A2</span>
                      <div className="text-box">
                        <h2>Elemental</h2>
                        <small> (Fundamentos)</small>
                        <ul>
                          <li>
                            Comprenderás frases y expresiones comunes
                            relacionadas con tu vida diaria.
                          </li>
                          <li>Podrás describir aspectos simples de tu vida.</li>
                          <li>Entenderás palabras y frases cotidianas.</li>
                          <li>
                            Serás capaz de comunicarte en tareas simples y
                            cotidianas, enfocándote en conversaciones sencillas.
                          </li>
                        </ul>
                        <span className="right-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container left-container">
                      <span className="level-icon three">B1</span>
                      <div className="text-box">
                        <h2>Intermedio</h2>
                        <small> (Umbral)</small>
                        <ul>
                          <li>
                            Fortalecerás tus habilidades en gramática,
                            vocabulario y comunicación.
                          </li>
                          <li>
                            Aprenderás a comprender discursos y textos más
                            complejos, y a expresarse con fluidez en una
                            variedad de situaciones cotidianas.
                          </li>
                          <li>
                            Este nivel es un trampolín crucial para la fluidez
                            en inglés y proporciona las bases para avanzar en su
                            dominio del idioma.
                          </li>
                        </ul>
                        <span className="left-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container right-container">
                      <span className="level-icon four">B2</span>
                      <div className="text-box">
                        <h2>Intermedio Alto</h2>
                        <small> (Vantage)</small>
                        <ul>
                          <li>
                            Perfeccionarás tus habilidades de expresión oral.
                          </li>
                          <li>
                            Podrás hablar de manera fluida y precisa sobre una
                            variedad de temas, desde temas familiares hasta
                            asuntos más complejos.
                          </li>
                          <li>
                            La comunicación en situaciones de trabajo y sociales
                            será más cómoda.
                          </li>
                        </ul>

                        <span className="right-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container left-container">
                      <span className="level-icon five">C1</span>
                      <div className="text-box">
                        <h2>Avanzado</h2>
                        <small> (Dominio Efectivo)</small>
                        <ul>
                          <li>Destacarás en la expresión oral.</li>
                          <li>
                            Podrás debatir y presentar con fluidez sobre una
                            amplia gama de temas.
                          </li>
                          <li>
                            Tendrás la capacidad de discutir temas complejos en
                            profundidad y expresar ideas y opiniones de
                            manera efectiva.
                          </li>
                        </ul>

                        <span className="left-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container right-container">
                      <span className="level-icon six">
                        <AiFillWechat />
                      </span>
                      <div className="text-box">
                        <h2>Conversation Club</h2>
                        <small> (Tu Primer Vuelo)</small>
                        <ul>
                          <li>
                            En el club de conversación, podrás practicar tus
                            habilidades de conversación en inglés en un entorno
                            relajado y amigable.
                          </li>
                          <li>
                            Explora temas cotidianos mientras despegas hacia la
                            fluidez en inglés.
                          </li>
                          <li>
                            Mejorarás tu comprensión auditiva al participar en
                            conversaciones en inglés en grupo.
                          </li>
                        </ul>
                        <span className="right-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={"30"}>
                    <div className="levels-container left-container">
                      <span className="level-icon seven">
                        <BsPersonWorkspace />
                      </span>
                      <div className="text-box">
                        <h2>Empresarial</h2>
                        <small> (Comunicación Profesional)</small>
                        <ul>
                          <li>
                            En este nivel, adquirirás las habilidades necesarias
                            para comunicarte de manera efectiva en un entorno
                            empresarial.
                          </li>
                          <li>
                            Podrás mantener conversaciones relacionadas con tu
                            trabajo y entender instrucciones específicas.
                          </li>
                          <li>
                            Aprenderás a expresar tus ideas de manera clara y a
                            participar en reuniones de trabajo con confianza.
                          </li>
                          <li>
                            Comprenderás documentos y correos electrónicos
                            comerciales de nivel medio.
                          </li>
                        </ul>

                        <span className="left-container-arrow"></span>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
