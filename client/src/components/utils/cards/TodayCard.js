import React from "react";
import StyledCardToday from "./../../styles/StyledCardToday";
import Row from "./../../styles/Row";
import Column from "./../../styles/Column";
import Paragraph from "./../../styles/Paragraph";
import { WiDayCloudy } from "react-icons/wi";

export default function TodayCard(props) {
  return (
    <StyledCardToday>
      <Paragraph className="location">Hamilton, ON</Paragraph>
      <div className="row">
        <Paragraph>19&deg;</Paragraph>
        <WiDayCloudy size={75} />
      </div>
      <Paragraph className="stats">Day Cloudy</Paragraph>
      <hr/>
      <Paragraph className="stats">Humidity:</Paragraph>
      <Paragraph className="stats">Pressure:</Paragraph>
      <Paragraph className="stats">Speed:</Paragraph>
      <Paragraph className="stats">Sunrise:</Paragraph>
      <Paragraph className="stats">Sunset:</Paragraph>
    </StyledCardToday>
  );
}
