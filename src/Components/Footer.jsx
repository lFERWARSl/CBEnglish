import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTelephoneFill,
} from "react-icons/bs";
import { BiSolidPaperPlane } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer className="footer-top">
        <div className="footer-top-content display-flex">
          <div className="footer-top-left f-1 text-center">
            <h4>¿Quieres que te contactemos?</h4>
          </div>
          <div className="footer-top-right f-1">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Escribe tu email..."
                aria-label="Escribe tu email..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Enviar <BiSolidPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-center">
        <div className="footer-center-content">
          <div className="footer-center-contact ">
            <h6>Contactanos</h6>

            <ul>
              <li>
                <a className="mt-4" href="tel:+525512367767">
                  <BsTelephoneFill /> +52 5512367767
                </a>
              </li>
              <li>
                <a href="mailto:ifuentes@cbenglish.com.mx">
                  <AiOutlineMail /> ifuentes@cbenglish.com.mx
                </a>
              </li>
            </ul>

            <div className="footer-center-socialmedia">
              <a
                href="https://www.facebook.com/CertificatesandBusinessEnglish"
                target="_blank"
              >
                {<BsFacebook />}
              </a>
              <a
                href="https://www.instagram.com/certificates_business_english/"
                target="_blank"
              >
                {<BsInstagram />}
              </a>
              <a href="https://www.tiktok.com/@cbenglish" target="_blank">
                {<BsTiktok />}
              </a>
            </div>
          </div>
          {/* <div className="footer-center-information ">
            <h6>Información</h6>
            <ul>
              <li>
                <Link to={"/privacy-policy"}>Politica de Privacidad</Link>
              </li>

              <li>
                <Link to={"/terms-and-conditions"}>Terminos y Condiciones</Link>
              </li>
            </ul>
          </div> */}

          <div className="footer-center-quicklinks">
            <h6>Accesos Rapidos</h6>
            <ul>
              <li>
                <Link to={"/"} onClick={(e) => scrollToTop(e)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to={"/Cursos"} onClick={(e) => scrollToTop(e)}>
                  Cursos
                </Link>
              </li>
              <li>
                <Link to={"/Certificaciones"} onClick={(e) => scrollToTop(e)}>
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link to={"/Nosotros"} onClick={(e) => scrollToTop(e)}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to={"/Contacto"} onClick={(e) => scrollToTop(e)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>
              &copy; {new Date().getFullYear()}. Certificates and Business
              English.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
