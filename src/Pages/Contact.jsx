import React, { useRef, useState } from "react";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
function Contact() {
  const [send, setsend] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2ypzr5c",
        "template_kuunmcy",
        form.current,
        "F4qFHLh5s3dfP6Yx3"
      )
      .then(
        (result) => {
          setsend(true);
        },
        (error) => {
          setsend(false);
        }
      );
  };
  return (
    <>
      <Meta pageTitle="Contactanos" />
      <div className="content-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mt-5 d-flex">
              <div className="hero-content-1 f-1">
                <div>
                  <img src="/images/contact.webp" alt="" />
                </div>
              </div>
              <div className="values hero-content f-1">
                <div className="contact-inner-wrapper d-flex flex-column justify-content-between gap-4">
                  <div className="w-100">
                    <h3 className="contact-title mb-4">Contacto</h3>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="d-flex flex-column gap-15"
                    >
                      <div>
                        <input
                          type="text"
                          className="w-100 form-control"
                          placeholder="Nombre"
                          name="from_name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="w-100 form-control"
                          placeholder="Correo"
                          name="email"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="w-100 form-control"
                          placeholder="Numero Telefonico"
                          name="tel"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comentarios"
                          required
                        ></textarea>
                      </div>
                      <div className={send ? "d-block" : "d-none"}>
                        <span className="send">Mensaje enviado</span>
                      </div>
                      <div className={send ? "d-none" : "d-block"}>
                        <button className="button border-0">Enviar</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">
                      Comunicate con nosotros
                    </h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiPhoneCall className="fs-5" />
                          <a href="tel:+525512367767" className="text-black">
                            +52 5512367767
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail className="fs-5" />
                          <a
                            href="mailto:ifuentes@cbenglish.com.mx"
                            className="text-black"
                          >
                            ifuentes@cbenglish.com.mx
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BsInfoCircle className="fs-5" />
                          <p className="mb-0">
                            Lunes - Sábado 9:00am - 6:00pm
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
