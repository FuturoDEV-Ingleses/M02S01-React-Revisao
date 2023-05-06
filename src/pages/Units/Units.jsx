import { useState } from "react";
import { Container, UnitList, UnitRegister } from "../../components";

export default function Units() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState({});

  return (
    <Container title="Unidades">
      {openForm === false && (
        <UnitList
          setOpenForm={setOpenForm}
          setSelectedUnit={setSelectedUnit}
        />
      )}

      {openForm === true && (
        <UnitRegister
          setOpenForm={setOpenForm}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
      )}
    </Container>
  );
}
