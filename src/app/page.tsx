"use client";
import NavScrollSample from "@/components/navScrollSample";
import { Container } from "design-react-kit";

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Hello h1</h1>
        <h2>Hello h2</h2>
        <h3>Hello h3</h3>
        <h4>Hello h4</h4>
        <h5>Hello h5</h5>
        <h6>Hello h6</h6>
      </div>
      {/* <Card>AO</Card> */}
      <div>
        <p>
          Esempio di testo <u>sottolineato</u>.
        </p>
        <p>
          Esempio di testo <mark>evidenziato</mark>.
        </p>
        <p>
          Esempio di testo <em>corsivo</em>.
        </p>
        <p>
          Esempio di testo <strong>in grassetto</strong>.
        </p>
        <p>
          Esempio di testo <small>rimpicciolito</small>.
        </p>
        <p>
          Esempio di testo <ins>aggiuntivo</ins>.
        </p>
        <p>
          Esempio di testo <del>cancellato</del> o <s>invalido</s>.
        </p>
        <p>
          Esempio di testo <code>monospace</code>.
        </p>
        <NavScrollSample />
      </div>
    </Container>
  );
}
