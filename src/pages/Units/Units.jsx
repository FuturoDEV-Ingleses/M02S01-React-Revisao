import "./Units.css";
import { useState, useEffect } from "react";
import { Button, Container } from "../../components/index";

export default function Units() {
  const [unidades, setUnidades] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  console.log({ openForm });

  const [form, setForm] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativa: false,
  });

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

  const formItens = [
    { label: "Apelido", name: "apelido" },
    { label: "Local", name: "local" },
    { label: "Marca", name: "marca" },
    { label: "Modelo", name: "modelo" },
  ];

  const handleSave = (event) => {
    event.preventDefault();
    console.log({ form });

    setOpenForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setForm({ ...form, [name]: value });
  }

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    console.log({ name, checked });
    setForm({ ...form, [name]: checked });
  }

  return (
    <Container title="Unidades">
      {openForm === false && (
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
      )}

      {openForm === true && (
        <section className="unit-form">
          <h2>Cadastro de Unidade Geradora</h2>
          <form onSubmit={handleSave}>
            {formItens.map((item) => (
              <div key={item.name}>
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  type="text"
                  name={item.name}
                  id={item.name}
                  value={form[item.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="checkbox">
              <input
                type="checkbox"
                name="ativa"
                id="ativa"
                checked={form.ativa}
                onChange={handleChangeCheckbox}
                // defaultChecked={form.ativa}
              />{" "}
              <label htmlFor="ativa">Ativo</label>
            </div>

            <Button classStyle="secondary" type="submit">
              Salvar
            </Button>
          </form>
        </section>
      )}
    </Container>
  );
}
