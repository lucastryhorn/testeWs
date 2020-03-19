import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Typography } from "@material-ui/core";
import local from "../../../assets/map.png";
import grafico from "../../../assets/grafico.png";
import Email from "@material-ui/icons/Email";
import Smartphone from "@material-ui/icons/Smartphone";
import Room from "@material-ui/icons/Room";
import { ViewRow } from "./styles";
import DivWithNumber from "../../../components/DivWithNumber";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp
} from "@material-ui/icons/";

export const data = [
  {
    title: "Informações gerais",
    children: (
      <div>
        <div style={{ flexDirection: "row", display: "flex", padding: 10 }}>
          <AccountCircle style={{ fontSize: 80, marginRight: 10 }} />
          <div>
            <Typography>Nome</Typography>
            <Typography>Empresa</Typography>
            <div
              style={{
                backgroundColor: "green",
                justifyContent: "center",
                display: "flex",
                borderRadius: 3
              }}
            >
              <Typography style={{ color: "#FFF" }}>Ativo</Typography>
            </div>
          </div>
        </div>
        <ViewRow>
          <Smartphone style={{ marginRight: 10 }} />
          <div>
            <Typography>45 999999999</Typography>
            <Typography>Celular</Typography>
          </div>
        </ViewRow>
        <ViewRow>
          <Email style={{ marginRight: 10 }} />
          <div>
            <Typography>aqui@hotmail.com</Typography>
            <Typography>Trabalho</Typography>
          </div>
        </ViewRow>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Facebook />
          <Instagram />
          <WhatsApp />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    )
  },
  {
    title: "Local",
    children: (
      <div>
        <img style={{ width: "100%", height: 160 }} src={local} alt="local" />
        <ViewRow>
          <Room style={{ marginRight: 10 }} />
          <div>
            <Typography>Avenida Brasil</Typography>
            <Typography>Trabalho</Typography>
          </div>
        </ViewRow>
      </div>
    )
  },
  {
    title: "Oportunidades",
    children: (
      <div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between"
          }}
        >
          <ViewRow>
            <DivWithNumber backgroundColor="green" text={"4"} />
            <div>
              <Typography style={{ fontWeight: "bold" }}>Ganhas</Typography>
              <Typography>Trabalho</Typography>
            </div>
          </ViewRow>
          <ViewRow>
            <DivWithNumber backgroundColor="red" text={"1"} />
            <div>
              <Typography style={{ fontWeight: "bold" }}>Perdida</Typography>
              <Typography>R$ 4.3000,00</Typography>
            </div>
          </ViewRow>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between"
          }}
        >
          <ViewRow>
            <DivWithNumber backgroundColor="blue" text={"2"} />
            <div>
              <Typography style={{ fontWeight: "bold" }}>Abertas</Typography>
              <Typography>Diversas moedas</Typography>
            </div>
          </ViewRow>
          <ViewRow>
            <DivWithNumber backgroundColor="gray" text={"0"} />
            <div>
              <Typography style={{ fontWeight: "bold" }}>
                Descartadas
              </Typography>
              <Typography>-</Typography>
            </div>
          </ViewRow>
        </div>
        <Typography
          style={{
            color: "blue",
            marginTop: 10,
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 14
          }}
        >
          VER TODAS OPORTUNIDADES
        </Typography>
      </div>
    )
  },
  {
    title: "Limite de crédito",
    children: (
      <div>
        <div style={{ paddingTop: 10, marginBottom: 10 }}>
          <Typography style={{ color: "blue", fontWeight: "bold" }}>
            R$ 12.000,00
          </Typography>
          <Typography>Concedido</Typography>
        </div>
        <div style={{ paddingTop: 10, marginBottom: 10 }}>
          <Typography style={{ color: "green", fontWeight: "bold" }}>
            R$ 3.105,00
          </Typography>
          <Typography>Disponivel</Typography>
        </div>
      </div>
    )
  },
  {
    title: "Vendas",
    children: (
      <div>
        <img
          style={{ width: "100%", height: 250 }}
          src={grafico}
          alt="grafico"
        />
      </div>
    )
  },
  {
    title: "Titulos financeiros",
    children: (
      <div>
        <ViewRow>
          <DivWithNumber backgroundColor="red" text={"1"} />
          <div>
            <Typography style={{ fontWeight: "bold" }}>R$ 3.100,00</Typography>
            <Typography>Vencidos</Typography>
          </div>
        </ViewRow>
        <ViewRow>
          <DivWithNumber backgroundColor="orange" text={"2"} />
          <div>
            <Typography style={{ fontWeight: "bold" }}>R$ 3.100,00</Typography>
            <Typography>A vencer</Typography>
          </div>
        </ViewRow>
        <ViewRow>
          <DivWithNumber backgroundColor="green" text={"2"} />
          <div>
            <Typography style={{ fontWeight: "bold" }}>R$ 3.100,00</Typography>
            <Typography>Pagos</Typography>
          </div>
        </ViewRow>
      </div>
    )
  }
];
