import React from "react";
import StyledCardToday from "./../../styles/StyledCardToday";
import Paragraph from "./../../styles/Paragraph";
import {weather_icons} from './../../utils/icons';

export default function TodayCard(props) {
  return (
    <StyledCardToday>
      <Paragraph className="location">{props.today.city}, {props.today.region}</Paragraph>
      <div className="row">
        <Paragraph>{props.today.temp}&deg;</Paragraph>
        {weather_icons.filter(i=>i.code === props.today.code)[0].today}
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
