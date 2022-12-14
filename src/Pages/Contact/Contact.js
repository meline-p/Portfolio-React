import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div >
      <h1 className="contact-title">Contactez-moi</h1>

      {/* <Form className="formulaire">
        <div className="postal-card-left">

          <Form.Group className="mb-3" id="services">
            <Form.Label>Services</Form.Label>
            <Form.Select>
              <option>Infos</option>
              <option>Developpement Web</option>
              <option>3D</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" id="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" rows="12" cols="33" />
          </Form.Group>
        </div> */}


      {/* <div className="postal-card-right"> */}


        <div className="contact-mes-infos">
          <h4>Méline Pischedda</h4>
          <p>meline.pischedda@gmail.com</p>
          <p>06 23 36 90 92</p>
          <p>Aix-en-Provence</p>
        </div>

        {/* <Form.Group className="mb-3" id="name">
            <Form.Label>Nom</Form.Label>
            <Form.Control aria-label="Last name" placeholder="Nom" />
          </Form.Group>

          <Form.Group className="mb-3" id="email">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>



          <Form.Group className="mb-3" id="tel">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control aria-label="tel" placeholder="Téléphone" />
          </Form.Group>

        </div>


      </Form> */}
        {/* <div className="contact-envoyer">
        <Button className="contact-button" variant="primary" type="submit">
          Submit
        </Button>
      </div> */}

      </div>
      );
}
