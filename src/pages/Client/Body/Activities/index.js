import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Steppers from "../Steppers";
import CardMaterial from "@material-ui/core/Card";
import DivWithNumber from "../../../../components/DivWithNumber";

const buttons = [
  { name: "Total", value: "25" },
  { name: "Em Atraso", value: "1" },
  { name: "Em andamento", value: "0" },
  { name: "Previstas", value: "3" },
  { name: "Concluidas", value: "21" }
];

const colors = {
  "0": "gray",
  "1": "red",
  "2": "blue",
  "3": "orange",
  "4": "green"
};

function Activities() {
  return (
    <CardMaterial style={{ padding: 10, boxShadow: "0px 0px 1px 1px #9E9E9E" }}>
      <Typography>Atividades</Typography>
      <TextField
        id="filled-start-adornment"
        label="Pesquisar"
        style={{ width: "100%", margin: "10px" }}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
      <div>
        {buttons.map((item, index) => (
          <Button key={index}>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center"
              }}
            >
              <DivWithNumber
                backgroundColor={colors[index.toString()]}
                text={item.value}
              />
              {item.name}
            </div>
          </Button>
        ))}
      </div>
      <Steppers />
    </CardMaterial>
  );
}

export default Activities;
