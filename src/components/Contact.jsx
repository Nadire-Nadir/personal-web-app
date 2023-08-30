import { MdLocationPin, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't hasitate to contact me👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <MdLocationPin color="#147efb" className="icon-24" />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Tampere, Finland</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <MdEmail color="#147efb" className="icon-24" />
                </span>
                <div className="contact__info">
                  <h3>Email</h3>
                  <a href="mailto:nadiraemam@gmail.com">
                    nadiraemam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
