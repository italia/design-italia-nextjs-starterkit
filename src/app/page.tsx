"use client";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardCategory,
  CardReadMore,
  Chip,
  ChipLabel,
  Container,
  Icon,
  Row,
  Col,
  LinkListItem,
  LinkList,
} from "design-react-kit";

export default function Home() {
  const cards = [
    {
      cat: "Giunta e consiglio",
      title: " Mario Rossi",
      text: "Sindaco della città",
      more: "Tutta l'amministrazione",
      link: "#",
      img: {
        src: "https://picsum.photos/150/200",
        alt: "Immagine di esempio",
      },
    },
    {
      cat: "Pagamenti",
      title: "TARI - Tassa dei rifiuti",
      text: "La TARI è in scadenza, controlla il tuo pagamento nella tua area personale.",
      more: "Tutti i Servizi",
      link: "#",
    },
    {
      cat: "Bandi",
      title: "Come partecipare ad un bando",
      text: "Tutte le informazioni e i documenti neecessari per partecipare",
      more: "Tutti i documenti",
      link: "#",
    },
  ];

  const events = [
    {
      number: 15,
      day: "lunedì",
      items: [
        "saldo TARI",
        "Concerto gratuito piazza XX Settembre",
        "Convocazione Consiglio Comunale - Prima seduta",
        "Seconda rata TARI",
      ],
    },
    {
      number: 16,
      day: "martedì",
      items: [
        "saldo TARI",
        "Concerto gratuito piazza XX Settembre",
        "Convocazione Consiglio Comunale - Prima seduta",
        "Seconda rata TARI",
      ],
    },
    {
      number: 17,
      day: "mercoledì",
      items: [
        "saldo TARI",
        "Concerto gratuito piazza XX Settembre",
        "Convocazione Consiglio Comunale - Prima seduta",
        "Seconda rata TARI",
      ],
    },
  ];

  const args = [
    "Agevolazioni per la casa",
    "Ambiente",
    "Assistenza sociale",
    "Costruire e ristrutturare",
    "Famiglia",
    "Immigrazione",
    "Investire",
    "Lavori pubblici",
  ];

  return (
    <>
      <section id="head-section">
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 1, order: 2 }}>
              <picture>
                <img
                  src="https://picsum.photos/800/600"
                  title="img title"
                  alt="imagealt"
                  className="img-fluid"
                />
              </picture>
            </Col>
            <Col lg={{ size: 5, order: 1 }}>
              <Card>
                <CardBody className="pb-5">
                  <CardCategory date="18 mag 2018" iconName="it-calendar">
                    Notizie
                  </CardCategory>
                  <CardTitle tag="h4">
                    Parte l&#39;estate con oltre 300 eventi in centro e nei
                    quartieri, tutti gli eventi previsti
                  </CardTitle>
                  <CardText>
                    Inaugurazione lunedì 2 luglio con il concerto gratuito in
                    piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                    musicisti da tutto il mondo.
                  </CardText>
                  <div className="chip chip-simple chip-primary">
                    <Link href="#" className="chip-label">
                      Estate in città
                    </Link>
                  </div>
                  <CardReadMore
                    text="Tutte le novità"
                    className="pb-3"
                    href="#"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="">
        <div className="section section-muted pb-5 pt-0">
          <Container>
            <Row>
              <div className="card-wrapper card-teaser-wrapper card-overlapping card-teaser-wrapper-equal card-teaser-block-3">
                {cards.map((c) => (
                  <Card
                    key={c.title}
                    teaser
                    noWrapper
                    className="card-teaser-image card-flex no-after rounded shadow"
                  >
                    <div className="card-image-wrapper with-read-more pb-5">
                      <CardBody className="p-4">
                        <CardCategory>
                          <Icon icon="it-pa" />
                          {c.cat}
                        </CardCategory>
                        <CardTitle className="font-weight-semibold">
                          {c.title}
                        </CardTitle>
                        <CardText className="card-text">{c.text}</CardText>
                      </CardBody>
                      {c.img && (
                        <div className="card-image card-image-rounded pb-5">
                          <CardImg src={c.img.src} alt={c.img.alt} />
                        </div>
                      )}
                    </div>
                    <CardReadMore
                      className="ps-4"
                      iconName="it-arrow-right"
                      text={c.more}
                      href={c.link}
                    />
                  </Card>
                ))}
              </div>
            </Row>
            <Row className="pt-5 pb-3">
              <Col>
                <h2>Calendario</h2>
              </Col>
              <Col>
                {" "}
                {[
                  { label: "Tutto", icon: "" },
                  { label: "Consigli comunali", icon: "it-pa" },
                  { label: "Eventi", icon: "it-calendar" },
                  { label: "Scadenze", icon: "it-settings" },
                ].map((i) => (
                  <Button
                    key={i.label}
                    color="secondary"
                    size="sm"
                    className={`mt-1 ${i.icon ? "btn-icon" : ""}`}
                    outline
                    type="button"
                  >
                    {i.icon && <Icon icon={i.icon} />}
                    <span>{i.label}</span>
                  </Button>
                ))}
              </Col>
            </Row>
            <Row className="row-calendar">
              <div className="it-calendar-wrapper">
                <div className="it-header-block">
                  <div className="it-header-block-title">
                    <h4 className="mb-0 text-center">
                      {new Date().getMonth()} {new Date().getFullYear()}
                    </h4>
                  </div>
                </div>
                <Row>
                  {events.map((e) => (
                    <Col lg="4" xs="12" key={e.number}>
                      <Card className="card-bg">
                        <CardBody>
                          <CardTitle tag="h5">
                            {e.number}
                            <span>{e.day}</span>
                          </CardTitle>
                          {e.items.map((i) => (
                            <CardText key={i}>
                              <Link href="#">{i}</Link>
                            </CardText>
                          ))}
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section id="evidenza">
        <div className="section section-background-header py-5">
          <Container>
            <Row>
              <h2 className="text-white">Argomenti in evidenza</h2>
            </Row>
            <div className="py-4">
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-info-circle" />
                    </CardCategory>
                    <CardTitle tag="h3">Cantieri in città</CardTitle>
                    <CardText>
                      Informazioni sui principali cantieri stradali aperti o in
                      programmazione un città che comportano modifiche alla
                      circolazione stradale.
                    </CardText>
                    <CardText>Visita il sito:</CardText>
                    <Link href="#">
                      <Card
                        teaser
                        noWrapper
                        className="card-bg-primary no-after mt-0"
                      >
                        <div className="avatar size-lg me-3">
                          <picture>
                            <img
                              src="https://picsum.photos/200/200"
                              alt="Immagine"
                            />
                          </picture>
                        </div>
                        <CardBody>
                          <CardTitle tag="h5">Mobilità in Comune</CardTitle>
                          <CardText className="text-sans-serif">
                            Il sito del turismo del Comune e della Città
                            Metropolitana.
                          </CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora argomento"
                    href="#"
                  />
                </Card>
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-clock" />
                    </CardCategory>
                    <CardTitle tag="h3">Estate in città</CardTitle>
                    <CardText>
                      Un ricco programma di appuntamenti: eventi culturali,
                      ricreativi, concerti, mostre, cinema, ed altro ancora in
                      diversi luoghi della città.
                    </CardText>

                    <LinkList className="mt-4">
                      <LinkListItem active className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Eventi questo weekend</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Cosa fare questa settimana</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Agosto metropolitano</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Orari estivi metro e bus in vigore dal 9 giugno
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora l'argomento"
                    href="#"
                  />
                </Card>
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-camera" />
                    </CardCategory>
                    <CardTitle>Sport</CardTitle>
                    <CardText>
                      Tutto quello che c&#39;è da sapere sulle strutture
                      sportive comunali a disposizione del pubblico e delle
                      Associazioni, le iniziative a sostegno dello sport e gli
                      eventi che coinvolgono la città.
                    </CardText>
                    <LinkList className="mt-4">
                      <LinkListItem active className="icon-left">
                        <Icon color="primary" icon="it-pa" />
                        <span>Tutte le strutture turistiche della città</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Da lunedì 3 settembre chiudono le vasche della piscina
                          comunale
                        </span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Concessione contributi ad enti, associazioni, società
                          sportive
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora l'argomento"
                    href="#"
                  />
                </Card>
              </div>
            </div>
            <Row className="pt-5">
              <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                <Row className="d-lg-inline-flex">
                  <Col lg={3}>
                    <h6 className="text-uppercase text-center">
                      Altri argomenti
                    </h6>
                  </Col>
                  <Col lg={9}>
                    {args.map((arg) => (
                      <Link key={arg} href="#">
                        <Chip color={"primary"} className="me-2 mb-2" large>
                          <ChipLabel>{arg}</ChipLabel>
                        </Chip>
                      </Link>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button color="primary" className="mt-5">
                      Vedi tutti
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="pt-5">
              <h3>Siti tematici</h3>
            </Row>
            <div className="py-4">
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
                <Card teaser noWrapper className="card-bg-primary rounded">
                  <div className="avatar size-lg me-3">
                    <picture>
                      <img src="https://picsum.photos/200/200" alt="Immagine" />
                    </picture>
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Mobilità in Comune</CardTitle>
                    <CardText className="text-sans-serif">
                      Il sito del turismo del Comune e della Città Metropolitana
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className="card-bg-warning rounded">
                  <div className="avatar size-lg me-3">
                    <picture>
                      <img src="https://picsum.photos/200/200" alt="Immagine" />
                    </picture>
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Turismo</CardTitle>
                    <CardText className="text-sans-serif">
                      Il sito che offre informazioni sulle attività turistiche
                      attive in città
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className="card-bg-dark rounded">
                  <div className="avatar size-lg me-3">
                    <picture>
                      <img src="https://picsum.photos/200/200" alt="Immagine" />
                    </picture>
                  </div>
                  <CardBody tag="h5">
                    <CardTitle>Musei Civici</CardTitle>
                    <CardText className="text-sans-serif">
                      Tutte le informazioni sui musei e gli eventi culturali
                      della città
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="novita">
        <div
          className="section section-background-header"
          style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}
        >
          <Container>
            <Row>
              <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                <form>
                  <div className="form-group mb-1">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <button type="submit" className="border-0 px-0">
                            <Icon icon="it-search" size="sm" />
                          </button>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputText"
                      />
                      <label
                        htmlFor="exampleInputText"
                        style={{ width: "auto" }}
                      >
                        Cerca servizi, informazioni, persone
                      </label>
                    </div>
                  </div>
                </form>

                {[
                  "Uffici comunali",
                  "Servizi demografici",
                  "SUAP",
                  "Sostegno alle famiglie",
                  "Segnalazioni",
                  "Dove lo butto?",
                ].map((i) => (
                  <Button
                    key={i}
                    color="primary"
                    size="sm"
                    href="#"
                    className="me-3 mt-3"
                  >
                    {i}
                  </Button>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}
