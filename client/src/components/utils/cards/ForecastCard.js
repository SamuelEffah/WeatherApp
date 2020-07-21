import React from 'react';
import StyledForecastCard from './../../styles/StyledForecastCard';
import Row from './../../styles/Row';
import Column from './../../styles/Column';
import { WiDayCloudy } from "react-icons/wi";
import Paragraph from "./../../styles/Paragraph";

export default function ForecastCard(props){
    return (
        <StyledForecastCard>
        <Paragraph>Sat</Paragraph>
        <Column
        style={{height:"25%",alignItems:"center"}}
        >
            <WiDayCloudy size={40} />
            <Paragraph>day cloudy</Paragraph>
        </Column>
      
        <Paragraph>22 &deg;</Paragraph>
        

        </StyledForecastCard>
    )
}