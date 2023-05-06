import "./UnitList.css";
import { useState, useEffect } from "react";
import { Button } from "../../index";

import { getData } from "../../../utils"

export default function UnitList({ setOpenForm, setSelectedUnit }) {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    getData("unidades", setUnits);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3333/unidades/${id}`, {
      method: "DELETE",
    });
    getData("unidades", setUnits);
  };

  const handleEdit = (unidade) => {
    setSelectedUnit(unidade);
    setOpenForm(true);
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
          {units.map((unidade) => (
            <tr key={unidade.id}>
              <td>{unidade.id}</td>
              <td>{unidade.apelido}</td>
              <td>{unidade.local}</td>
              <td>{unidade.marca}</td>
              <td>{unidade.modelo}</td>
              <td>
                <Button onClick={() => handleEdit(unidade)} classStyle="green">
                  Editar
                </Button>
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
  );
}
