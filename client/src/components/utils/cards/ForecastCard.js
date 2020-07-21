import React from "react";
import StyledForecastCard from "./../../styles/StyledForecastCard";
import Row from "./../../styles/Row";
import Column from "./../../styles/Column";
import { WiDayCloudy } from "react-icons/wi";
import Paragraph from "./../../styles/Paragraph";

export default function ForecastCard(props) {
  return (
    <StyledForecastCard>
      <Paragraph className="day">{props.forecast.day}</Paragraph>
      <Column style={{ height: "25%", alignItems: "center" }}>
        <WiDayCloudy size={40} />
        <Paragraph>{props.forecast.text}</Paragraph>
      </Column>

      <Paragraph className="temp">{props.forecast.high} &deg;</Paragraph>
    </StyledForecastCard>
  );
}
