import React from "react";
import { Container } from "./styles";
import { Typography } from "@material-ui/core";

export default function DivWithNumber(props) {
  return (
    <Container {...props}>
      <Typography style={{ color: "#FFF" }}>{props.text}</Typography>
    </Container>
  );
}
