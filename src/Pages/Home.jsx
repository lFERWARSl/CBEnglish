import React, { useEffect, useState, useRef } from "react";
import Meta from "../Components/Meta.jsx";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Fade, Bounce, Hinge, Slide } from "react-awesome-reveal";
function Home() {
  const audioRef = useRef(null);
  const [audioState, setAudioState] = useState("paused");
  const [playHandle, setPlayHandle] = useState(true);

  const handleAudioClick = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  const handleAudioEvent = (event) => {
    switch (event.type) {
      case "play":
        setAudioState("playing");
        setPlayHandle(false);
        break;
      case "pause":
        setAudioState("paused");
        setPlayHandle(true);

        break;
      case "ended":
        setAudioState("ended");
        setPlayHandle(true);

        break;
      default:
        break;
    }
  };
  return (
    <>
      <Meta pageTitle="CB English" />
      <div>
        <section className="hero-wrapper ">
          <div className="container-xxl">
            <div className="row">
              <div className="hero-content col-6 d-flex flex-column justify-content-center">
                <div>
                  <div className="hero-announcement">
                    <div>
                      <h2>
                        <span>Oferta</span> Descubre nuestra oferta para nuevos
                        clientes
                      </h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="hero-title">
                    <h1>Potencia Tu Futuro hablando Inglés</h1>
                  </div>
                </div>
                <div className="hero-description">
                  <p>
                    Prepárate para el éxito en un mundo globalizado. Gana la
                    confianza y las habilidades que necesitas para prosperar en
                    cualquier entorno de habla inglesa.
                  </p>
                </div>
                <div>
                  <Link className="button" to={"/contacto"}>
                    Contactanos
                  </Link>
                </div>
              </div>
              <div className="hero-content-1 col-6">
                <img src="/images/home-2.webp" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="advantages py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h1>Ventajas</h1>
                </div>
                <div className="d-flex gap-4 wrap-section">
                  <div className="col-">
                    <Slide direction={"up"} delay={10}>
                      <div className="advantage">
                        <div className="advantage-icon">
                          <img src="/images/icono5.webp" alt="" />
                        </div>
                        <div className="advantage-title">Método Innovador</div>
                        <div className="advantage-description">
                          Nuestro moderno enfoque de enseñanza.
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className=" col-">
                    <Slide direction={"up"} delay={100}>
                      <div className="advantage">
                        <div className="advantage-icon">
                          <img src="/images/icono4.webp" alt="" />
                        </div>
                        <div className="advantage-title">
                          Profesores Expertos
                        </div>
                        <div className="advantage-description">
                          Maestros altamente cualificados.
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className=" col-">
                    <Slide direction={"up"} delay={150}>
                      <div className="advantage">
                        <div className="advantage-icon">
                          <img src="/images/icono1.webp" alt="" />
                        </div>
                        <div className="advantage-title">
                          Aprendizaje Personalizado
                        </div>
                        <div className="advantage-description">
                          Tu ritmo, tus objetivos.
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className=" col-">
                    <Slide direction={"up"} delay={200}>
                      <div className="advantage">
                        <div className="advantage-icon">
                          <img src="/images/icono3.webp" alt="" />
                        </div>
                        <div className="advantage-title">
                          Evaluación Continua
                        </div>
                        <div className="advantage-description">
                          Monitoreo constante de tu progreso.
                        </div>
                      </div>
                    </Slide>
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
                <div className="display-flex formation ">
                  <div className="f-1">
                    <img src="/images/formation.webp" alt="" />
                  </div>
                  <div className="display-flex column-flex f-1 ">
                    <Fade delay={50} cascade damping={0.3}>
                      <div>
                        <h1 className="title">Formación en Línea de Calidad</h1>
                      </div>
                      <div>
                        <p className="description">
                          Descubre nuestra plataforma de formación en línea que
                          te permite acceder a cursos de inglés de alta calidad
                          desde cualquier lugar. Aprende de manera flexible,
                          adaptándote a tu ritmo y horario, con el apoyo de
                          nuestros profesores expertos y recursos interactivos.
                          Invierte en tu futuro con nuestra conveniente opción
                          de formación en línea y mejora tus habilidades en
                          inglés desde la comodidad de tu hogar.
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="display-flex reverse formation">
                  <div className="f-1 display-flex column-flex ">
                    <Fade delay={50} cascade damping={0.3}>
                      <div>
                        <h1 className="title">
                          Acogiendo a una Variedad de Estudiantes Talentosos
                        </h1>
                      </div>
                      <div>
                        <p className="description">
                          En nuestra institución educativa, damos la bienvenida
                          a una amplia gama de estudiantes talentosos, cada uno
                          con sus propias metas y aspiraciones en el aprendizaje
                          del inglés. Desde principiantes entusiastas hasta
                          hablantes avanzados, nuestro enfoque personalizado y
                          diverso les brinda a todos la oportunidad de
                          sobresalir en su viaje lingüístico.
                        </p>
                      </div>
                    </Fade>
                  </div>
                  <div className="f-1">
                    <img src="/images/success.webp" alt="" />
                  </div>
                </div>
                <div className="display-flex formation">
                  <div className="f-1">
                    <img src="/images/online-learning.webp" alt="" />
                  </div>
                  <div className="f-1 display-flex column-flex ">
                    <Fade delay={50} cascade damping={0.3}>
                      <div>
                        <h1 className="title">
                          Innovación Educativa para Todos
                        </h1>
                      </div>
                      <div>
                        <p className="description">
                          En CB English, nuestra innovación educativa garantiza
                          que todos los estudiantes, sin importar su nivel
                          inicial, tengan la oportunidad de sobresalir. Nuestros
                          métodos avanzados y tecnología de vanguardia crean un
                          entorno inclusivo y dinámico donde cada estudiante
                          alcanza su máximo potencial. Únete a nosotros en este
                          emocionante viaje hacia el éxito educativo y
                          profesional.
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="platforms py-4 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="section-heading">
                <h1>Plataformas</h1>
              </div>
              <div className="display-flex">
                <div className="educationals f-3">
                  <div>
                    <h2 className="text-center">Educativas</h2>
                  </div>
                  <div className="display-flex wrap-section">
                    <div className="platform">
                      <Bounce>
                        <img
                          src="/images/Meet.webp"
                          alt="plataforma"
                          className="img-fluid"
                        />
                      </Bounce>
                    </div>
                    <div className="platform">
                      <Bounce>
                        <img
                          src="/images/Jamboard.webp"
                          alt="plataforma"
                          className="img-fluid"
                        />
                      </Bounce>
                    </div>
                    <div className="platform">
                      <Bounce>
                        <img
                          src="/images/Kahoot.webp"
                          alt="plataforma"
                          className="img-fluid"
                        />
                      </Bounce>
                    </div>
                    <div className="platform">
                      <Bounce>
                        <img
                          src="/images/wordwall.webp"
                          alt="plataforma"
                          className="img-fluid"
                        />
                      </Bounce>
                    </div>
                  </div>
                </div>
                <div className="f-2">
                  <div>
                    <h2 className="text-center">Certificación</h2>
                  </div>
                  <div className="platform">
                    <Bounce>
                      <img src="/images/Cambridge.webp" alt="" />
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials py-4">
          <div className="row">
            <div className="section-heading w">
              <h1>Testimonios</h1>
            </div>
            <div>
              <Marquee autoFill={true} pauseOnClick={true} speed={"100"} play={playHandle}>
                <div className="card-wrapper">
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-1.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Ramiro Servin</h2>
                      <p>
                        "Definitivamente recomiendo CB English. Lo que realmente
                        aprecio es cómo comprenden nuestras necesidades y nos
                        enseñan de manera clara, sencilla y concisa. Además,
                        valoro mucho la forma en que dan clases, su
                        accesibilidad, la empatía y paciencia de los profesores
                        durante la enseñanza."
                      </p>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-2.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Aidee Rojas</h2>
                      <p>
                        "Studying at CB English has really helped me. I've
                        gotten much better at understanding English when reading
                        and writing, all thanks to the teachers who are so
                        dedicated and professional. I especially like the
                        personalized classes; they make learning more effective
                        and fun. I'd recommend CB English classes to anyone who
                        wants to improve their English in a good and meaningful
                        way."
                      </p>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-3.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Sra. Consuelo Bustamante</h2>
                      <p>
                        "La comodidad de tomar las clases en casa con horarios
                        flexibles y grupos reducidos fue de gran ayuda para
                        nosotros. Cuando algo nos impide tomar la clases
                        presenciales, optar por clases en línea se convirtió en
                        una excelente opción para mi hijo. Por esta razón,
                        recomendamos CB English para todos aquellos estudiantes
                        que necesiten aprender desde casa."
                      </p>
                      <h3>- Mother´s Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-5.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Karina Valeria</h2>
                      
                      <audio
                        ref={audioRef}
                        onClick={handleAudioClick}
                        onPlay={handleAudioEvent}
                        onPause={handleAudioEvent}
                        onEnded={handleAudioEvent}
                        controls
                      >
                        <source src="/audio/t-1.mp3" type="audio/mpeg" />
                        Your browser does not support the <code>audio</code>
                        element.
                      </audio>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-4.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Sofia Meza</h2>
                      <p>
                        "Absolutely amazing! The CB English team is consistently
                        improving their teaching methods for everyone. My
                        personal experience is a clear indicator of the results.
                        My professor always provides me with their time,
                        dedication, and empathy. I highly recommend CB English."
                      </p>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-6.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Andrea Olvera</h2>
                      <p>
                        "En cuanto a las clases en línea, disfruté mucho más de
                        ellas en comparación con las presenciales. Tenía muchas
                        más oportunidades para hablar y cometer errores, ya que
                        no me preocupaba que otras personas me vieran. Los
                        profesores son extremadamente competentes y pacientes.
                        Tomé este curso y logré obtener el certificado B1, así
                        que definitivamente recomiendo CB English si estás
                        buscando alcanzar una meta similar."
                      </p>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                  <div className="t-card">
                    <div className="card-img">
                      <img src="/images/testimonials/t-5.webp" alt="" />
                    </div>
                    <div className="t-card-text">
                      <h2>Angel Martinez</h2>
                      
                      <audio
                        ref={audioRef}
                        onClick={handleAudioClick}
                        onPlay={handleAudioEvent}
                        onPause={handleAudioEvent}
                        onEnded={handleAudioEvent}
                        controls
                      >
                        <source src="/audio/t-2.mp3" type="audio/mpeg" />
                        Your browser does not support the <code>audio</code>
                        element.
                      </audio>
                      <h3>- Student -</h3>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
