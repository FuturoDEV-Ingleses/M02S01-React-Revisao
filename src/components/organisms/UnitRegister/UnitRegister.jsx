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

  const handleSave = (event) => {
    event.preventDefault();

    setOpenForm(false);
  };

  return (
    <section className="unit-register">
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="apelido">Apelido</label>
          <Input
            type="text"
            name="apelido"
            id="apelido"
            value={form.apelido}
            onChange={(e) => {
              setForm({
                ...form,
                apelido: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="local">Local</label>
          <Input
            type="text"
            name="local"
            id="local"
            value={form.local}
            onChange={(e) => {
              setForm({
                ...form,
                local: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="marca">Marca</label>
          <Input
            type="text"
            name="marca"
            id="marca"
            value={form.marca}
            onChange={(e) => {
              setForm({
                ...form,
                marca: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="modelo">Modelo</label>
          <Input
            type="text"
            name="modelo"
            id="modelo"
            value={form.modelo}
            onChange={(e) => {
              setForm({
                ...form,
                modelo: e.target.value,
              });
            }}
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="ativa"
            id="ativa"
            checked={form.ativa}
            onChange={(e) => { 
              setForm({
                ...form,
                ativa: e.target.checked,
              });
            } }
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
