"use client";
import {
  Container,
  Button,
  Form,
  Input,
  Label,
  Row,
  Col,
  // Icon,
  // LinkList,
  // LinkListItem,
} from "design-react-kit";
export default function Footer() {
  return (
    <footer className="it-footer">
      <div className="it-footer-main">
        <Container>
          <section>
            <Row className="clearfix">
              <Col sm={12}>
                <div className="it-brand-wrapper">
                  <a className="" href="#">
                    {/* <Icon icon="it-pa" /> */}
                    <div className="it-brand-text">
                      <h2>Nome del Comune</h2>
                      <h3 className="d-none d-md-block">
                        Uno dei tanti Comuni d Italia
                      </h3>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </section>
          <section className="py-4 border-white border-top">
            <Row>
              <Col className="pb-2" lg={4} md={4}>
                <h4>
                  <a href="#" title="Vai alla pagina: Contatti">
                    Contatti
                  </a>
                </h4>
                <p>
                  <strong>Nome del Comune</strong>
                  <br />
                  Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA:
                  000000000
                </p>
                {/* <LinkList className="footer-list clearfix">
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Posta Elettronica Certificata"
                  >
                    Posta Elettronica Certificata
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: URP - Ufficio Relazioni con il Pubblico"
                  >
                    URP - Ufficio Relazioni con il Pubblico
                  </LinkListItem>
                </LinkList> */}
              </Col>
              <Col className="pb-2" lg={4} md={4}>
                <h4>
                  <a href="#" title="Vai alla pagina: Newsletter">
                    Newsletter
                  </a>
                </h4>
                <Form action="#" className="form-newsletter" method="post">
                  <Label
                    className="text-white fw-semibold active"
                    htmlFor="input-newsletter"
                    style={{
                      transition: "none 0s ease 0s",
                    }}
                  >
                    Iscriviti per riceverla
                  </Label>
                  <Input
                    id="input-newsletter"
                    name="input-newsletter"
                    placeholder="mail@example.com"
                    type="email"
                  />
                  <Button className="btn-icon" color="primary" type="submit">
                    {/* <Icon color="white" icon="it-mail" /> */}
                    <span>Iscriviti</span>
                  </Button>
                </Form>
              </Col>
              <Col className="pb-2" lg={4} md={4}>
                <h4>
                  <a href="#" title="Vai alla pagina: Seguici su">
                    Seguici su
                  </a>
                </h4>
                <ul className="list-inline text-start social">
                  <li className="list-inline-item">
                    <a className="p-2 text-white" href="#" target="_blank">
                      {/* <Icon
                        className="align-top"
                        color="white"
                        icon="it-designers-italia"
                        size="sm"
                      /> */}
                      <span className="visually-hidden">Designers Italia</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="p-2 text-white" href="#" target="_blank">
                      {/* <Icon
                        className="align-top"
                        color="white"
                        icon="it-twitter"
                        size="sm"
                      /> */}
                      <span className="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="p-2 text-white" href="#" target="_blank">
                      {/* <Icon
                        className="align-top"
                        color="white"
                        icon="it-medium"
                        size="sm"
                      /> */}
                      <span className="visually-hidden">Medium</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="p-2 text-white" href="#" target="_blank">
                      {/* <Icon
                        className="align-top"
                        color="white"
                        icon="it-behance"
                        size="sm"
                      /> */}
                      <span className="visually-hidden">Behance</span>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <div className="it-footer-small-prints clearfix">
        <div className="container">
          <h3 className="visually-hidden">Sezione Link Utili</h3>
          <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
            <li className="list-inline-item">
              <a href="#" title="Note Legali">
                Media policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Note Legali">
                Note legali
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Privacy-Cookies">
                Privacy policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Mappa del sito">
                Mappa del sito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
