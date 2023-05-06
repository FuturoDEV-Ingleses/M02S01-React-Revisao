import "./UnitList.css";
import { useState, useEffect } from "react";
import { Button } from "../../index";

export default function UnitList({ setOpenForm }) {
  const [unidades, setUnidades] = useState([]);

  const getData = () => {
    fetch("http://localhost:3333/unidades")
      .then((res) => res.json())
      .then((dados) => setUnidades(dados));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3333/unidades/${id}`, {
      method: "DELETE",
    });
    getData();
  };

  return (
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
                <Button
                  onClick={() => handleDelete(unidade.id)}
                  classStyle="danger"
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <Button
        id="new-unit"
        classStyle="secondary"
        onClick={() => setOpenForm(true)}
      >
        Nova Unidade
      </Button>
    </section>
  )
}