import React from "react";
import StyledForecastCard from "./../../styles/StyledForecastCard";
import Row from "./../../styles/Row";
import Column from "./../../styles/Column";
import Paragraph from "./../../styles/Paragraph";
import {weather_icons} from './../../utils/icons';


export default function ForecastCard(props) {
  return (
    <StyledForecastCard>
      <Paragraph className="day">{props.forecast.day}</Paragraph>
      <Column style={{ height: "25%", alignItems: "center" }}>
        {weather_icons.filter(i=>i.code === props.forecast.code)[0].forecast}
        <Paragraph>{props.forecast.text}</Paragraph>
      </Column>

      <Paragraph className="temp">{props.forecast.high} &deg;</Paragraph>
    </StyledForecastCard>
  );
}
