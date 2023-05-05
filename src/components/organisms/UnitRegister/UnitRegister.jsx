import "./UnitRegister.css";
import { useState } from "react";
import { Button, Input } from "../../index";

export default function UnitRegister({ setOpenForm }) {
  const [form, setForm] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativa: false,
  });

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
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    console.log({ name, checked });

    setForm({ ...form, [name]: checked });
  };

  return (
    <section className="unit-register">
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={handleSave}>
        {formItens.map((item) => (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <Input
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
  );
}
