import "./Units.css";
import { useState, useEffect } from "react";
import { Button, Container } from "../../components/index";

export default function Units() {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/unidades")
      .then((res) => res.json())
      .then((dados) => setUnidades(dados));
  }, []);

  return (
    <Container title="Unidades">
      <section className="unit-list">
        <h2>Lista de unidades</h2>
        <br />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {unidades.map((unidade) => (
              <tr key={unidade.id}>
                <td>{unidade.id}</td>
                <td>{unidade.apelido}</td>
                <td>{unidade.local}</td>
                <td>{unidade.marca}</td>
                <td>{unidade.modelo}</td>
                <td>
                  <Button classStyle="green">Editar</Button>
                </td>
                <td>
                  <Button classStyle="danger">Remover</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <br />
        <Button id="new-unit" classStyle="secondary">
          Nova Unidade
        </Button>
      </section>
    </Container>
  );
}
