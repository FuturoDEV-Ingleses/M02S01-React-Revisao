import { useState } from "react";
import {  Container, UnitList, UnitRegister } from "../../components";

export default function Units() {
  const [openForm, setOpenForm] = useState(false);
  console.log({ openForm });

  return (
    <Container title="Unidades">
      {openForm === false && <UnitList setOpenForm={setOpenForm} /> }

      {openForm === true && <UnitRegister setOpenForm={setOpenForm} />}
    </Container>
  );
}
