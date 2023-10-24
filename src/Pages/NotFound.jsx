import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
    
  return (
    <>
      <section className="notfound-wrapper d-flex">
        <div className="container-xxl d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12">
              <div className="notfound-title">
                <h1>Pagina no encontrada</h1>
              </div>
              <div className="notfound-img d-flex flex-column gap-4">
                <img src="/images/404.webp" alt="" className="img-fluid" />
                <div>
                  <Link to={"/"} className="button">
                    Regresar a Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
