import React from "react";
import StyledCardToday from "./../../styles/StyledCardToday";
import Paragraph from "./../../styles/Paragraph";
import { WiDayCloudy } from "react-icons/wi";


export default function TodayCard(props) {
  return (
    <StyledCardToday>
      <Paragraph className="location">{props.today.city}, {props.today.region}</Paragraph>
      <div className="row">
        <Paragraph>{props.today.temp}&deg;</Paragraph>
        <WiDayCloudy size={75} />
      </div>
      <Paragraph className="stats">{props.today.condition}</Paragraph>
      <hr/>
      <Paragraph className="stats">Humidity: {props.today.humidity}%</Paragraph>
      <Paragraph className="stats">Pressure: {props.today.pressure} mbar </Paragraph>
      <Paragraph className="stats">Speed: {props.today.wind_speed} km/h </Paragraph>
      <Paragraph className="stats">Sunrise: {props.today.sunrise}</Paragraph>
      <Paragraph className="stats">Sunset: {props.today.sunset}</Paragraph>
      <Paragraph className="stats">Updated on {props.today.updated_time}</Paragraph>
    </StyledCardToday>
  );
}
