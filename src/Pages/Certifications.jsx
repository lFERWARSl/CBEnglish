import React from "react";
import { Fade, Bounce, Hinge, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Certifications() {
  return (
    <>
      <section className="certifications-wrapper p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-content col-6 d-flex flex-column justify-content-center">
              <Fade delay={100}>
                <div>
                  <div className="hero-title">
                    <h1>Tu Próxima Aventura Comienza Ahora</h1>
                  </div>
                </div>
                <div className="hero-description">
                  <p>
                    Prepárate para brillar en un mundo cada vez más
                    interconectado. Nuestras certificaciones de inglés te abren
                    puertas a nuevas experiencias, trabajos y amistades. Domina
                    el idioma que habla el mundo y desbloquea tu potencial
                    ilimitado.
                  </p>
                </div>
                <div>
                  <Link className="button" to={"/contacto"}>Contactanos</Link>
                </div>
              </Fade>
            </div>
            <div className="hero-content-1 col-6">
              <Slide>
                <img src="/images/books.webp" alt="" className="img-fluid" />
              </Slide>
            </div>
          </div>
        </div>
      </section>
      <section className="certification-info py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h1 className="text-center">Certificaciones</h1>
              </div>
              <div className="display-flex formation reverse-1">
                <div className="f-1 world d-flex justify-content-center align-items-center">
                  <img src="/images/world.webp" alt="" />
                </div>
                <div className="display-flex column-flex f-1 ">
                  <Fade delay={50} cascade damping={0.3}>
                    <div>
                      <h1 className="title">
                        Certificaciones Internacionales adaptadas a cada
                        necesidad
                      </h1>
                    </div>
                    <div>
                      <p className="description">
                        Estar certificado en otro idioma es una confirmación
                        formal de que nuestros alumnos cuentan con el nivel de
                        competencia que exige una universidad de prestigio o un
                        organismo internacional.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="online-formation py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="display-flex formation">
                <div className="f-1">
                  <img src="/images/cert-1.webp" alt="" />
                </div>
                <div className="display-flex column-flex f-1 ">
                  <Fade delay={50} cascade damping={0.3}>
                    <div>
                      <h1 className="title">KEY (Key English Test)</h1>
                    </div>
                    <div>
                      <p className="description">
                        Está indicado para alumnos en edad escolar y los prepara
                        para las certificaciones superiores de inglés. La
                        certificación A2 Key for Schools demuestra que el alumno
                        puede comunicarse en inglés en situaciones simples y
                        cotidianas. Este examen le proporciona a los alumnos la
                        confianza necesaria para prepararse para realizar las
                        evaluaciones de inglés de nivel superior, como B1
                        Preliminary for Schools.
                      </p>
                    </div>
                    <div>
                      <Link className="button ">Contactar</Link>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="display-flex reverse formation">
                <div className="f-1 display-flex column-flex ">
                  <Fade delay={50} cascade damping={0.3}>
                    <div>
                      <h1 className="title">B1 Preliminary</h1>
                    </div>
                    <div>
                      <p className="description">
                        Recomendado para estudiantes de nivel medio superior.
                        Este certificado es permanente (no requiere
                        revalidación) y ampliamente aceptado por instituciones
                        públicas y privadas. Con este examen el alumno demuestra
                        que dominas los aspectos fundamentales del inglés y
                        posee las habilidades lingüísticas necesarias para un
                        uso cotidiano. En tu camino de aprendizaje, este examen
                        es el paso intermedio entre A2 Key y B2 First.
                      </p>
                    </div>
                    <div>
                      <Link className="button">Contactar</Link>
                    </div>
                  </Fade>
                </div>
                <div className="f-1">
                  <img src="/images/cert-2.webp" alt="" />
                </div>
              </div>
              <div className="display-flex formation">
                <div className="f-1">
                  <img src="/images/cert-3.webp" alt="" />
                </div>
                <div className="f-1 display-flex column-flex ">
                  <Fade delay={50} cascade damping={0.3}>
                    <div>
                      <h1 className="title">B2 First</h1>
                    </div>
                    <div>
                      <p className="description">
                        Recomendado para estudiantes universitarios. Este
                        certificado es permanente (no requiere revalidación) y
                        útil para “liberar la carrera”. Con este examen el
                        alumno demuestra ante el mundo que posee las habilidades
                        lingüísticas necesarias para vivir y trabajar de manera
                        independiente en un país angloparlante, así como, para
                        estudiar cursos impartidos en inglés. En tu trayectoria
                        de aprendizaje, este examen es el paso intermedio entre
                        B1 Preliminary y C1 Advanced.
                      </p>
                    </div>
                    <div>
                      <Link className="button">Contactar</Link>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="display-flex reverse formation">
                <div className="f-1 display-flex column-flex ">
                  <Fade delay={50} cascade damping={0.3}>
                    <div>
                      <h1 className="title">C1 Advance</h1>
                    </div>
                    <div>
                      <p className="description">
                        C1 Advanced Más de 8.000 instituciones educativas,
                        empresas y organismos oficiales de todo el mundo aceptan
                        C1 Advanced como prueba de un elevado rendimiento en el
                        aprendizaje del inglés. La preparación para C1 Advanced
                        ayuda a nuestros alumnos a obtener las destrezas
                        lingüísticas necesarias para desarrollarte al máximo en
                        el estudio, en el trabajo y la de residir en países
                        angloparlantes.
                      </p>
                    </div>
                    <div>
                      <Link className="button">Contactar</Link>
                    </div>
                  </Fade>
                </div>
                <div className="f-1">
                  <img src="/images/cert-4.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certifications;
