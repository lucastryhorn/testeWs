import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Calendar from "@material-ui/icons/CalendarToday";

export const dataEA = [
  {
    title: "Ligação de agendamento da reunião",
    subTitle: "Erica",
    icon: <Phone style={{ color: "red", marginRight: 5 }} />
  }
];

export const dataAP = [
  {
    title: "Reunião orçamento",
    subTitle: "Erica",
    icon: <PersonIcon style={{ color: "orange", marginRight: 5 }} />
  },
  {
    title: "Email documentação",
    subTitle: "Erica",
    icon: <Email style={{ color: "orange", marginRight: 5 }} />
  },
  {
    title: "Almoço coorporativo",
    subTitle: "Erica",
    icon: <Calendar style={{ color: "orange", marginRight: 5 }} />
  }
];

export const dataAC = [
  {
    title: "Apresentação feira agrícola",
    subTitle: "Erica",
    icon: <Calendar style={{ color: "green", marginRight: 5 }} />
  },
  {
    title: "Email orçamento",
    subTitle: "Erica",
    icon: <Email style={{ color: "green", marginRight: 5 }} />
  },
  {
    title: "Email contrato",
    subTitle: "Erica",
    icon: <Email style={{ color: "green", marginRight: 5 }} />
  },
  {
    title: "Ligação contrato",
    subTitle: "Erica",
    icon: <Phone style={{ color: "green", marginRight: 5 }} />
  }
];
