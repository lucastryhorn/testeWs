import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import { ViewRowAti } from "./styles";
import { dataEA, dataAP, dataAC } from "./config";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    display: "flex"
  }
}));

function getSteps() {
  return [
    "Atividades em atraso",
    "Atividades previstas",
    "Atividades concluidas"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return dataEA.map(item => (
        <ViewRowAti>
          {item.icon}
          <div>
            <Typography>{item.title}</Typography>
            <Typography>{item.subTitle}</Typography>
          </div>
        </ViewRowAti>
      ));
    case 1:
      return dataAP.map(item => (
        <ViewRowAti>
          {item.icon}
          <div>
            <Typography>{item.title}</Typography>
            <Typography>{item.subTitle}</Typography>
          </div>
        </ViewRowAti>
      ));
    case 2:
      return dataAC.map(item => (
        <ViewRowAti>
          {item.icon}
          <div>
            <Typography>{item.title}</Typography>
            <Typography>{item.subTitle}</Typography>
          </div>
        </ViewRowAti>
      ));
    default:
      return "Unknown step";
  }
}

export default function Steppers() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper orientation="vertical">
        {steps.map((label, index) => (
          <Step active={true} key={label}>
            <StepLabel stepIconProps={{ color: "red" }}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
