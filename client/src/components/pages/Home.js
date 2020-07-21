import React, { useEffect, useState } from "react";
import Container from "./../styles/Container";
import Column from "./../styles/Column";
import Row from "./../styles/Row";
import Contents from "./../styles/Contents";
import BottomContents from "./../styles/BottomContents";
import TodayCard from "./../utils/cards/TodayCard";
import ForecastCard from "./../utils/cards/ForecastCard";
import SearchContainer from "./../styles/SearchContainer";
import StyledButton from "./../styles/StyledButton";
import SearchBox from "./../styles/SearchBox";
import { MdLocationOn } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import StyledDropdown from "./../styles/StyledDropdown";
import axios from "axios";
import moment from "moment";

export default function Home(props) {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [forecasts, setForecasts] = useState([]);
  const [isClose, setIsClose] = useState(false);
  const [todayWeather, setTodayWeather] = useState({
    city: " ",
    region: " ",
    lat: 0,
    long: 0,
    sunrise: "",
    sunset: "",
    humidity: 0,
    pressure: 0,
    condition: "",
    temp: 0,
    wind_speed: 0,
    updated_time: 0,
  });

  //get geolocation from mapbox api
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (query.length > 0) {
      setIsClose(true); //shows close button
    }
  };

  //hide dropdown and set query to empty string
  const handleClose = (e) => {
    e.preventDefault();
    setQuery("");
    setIsClose(false); //hide close button
  };

  //fetch data from backend enpoint
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/hamilton");
      const resultJSON = JSON.parse(result.data.data);
      setTodayWeather({
        city: resultJSON.location.city,
        region: resultJSON.location.region,
        lat: resultJSON.location.lat,
        long: resultJSON.location.long,
        sunrise: resultJSON.current_observation.astronomy.sunrise,
        sunset: resultJSON.current_observation.astronomy.sunset,
        humidity: resultJSON.current_observation.atmosphere.humidity,
        pressure: resultJSON.current_observation.atmosphere.pressure,
        condition: resultJSON.current_observation.condition.text,
        temp: resultJSON.current_observation.condition.temperature,
        wind_speed: resultJSON.current_observation.wind.speed,
        updated_time: moment().format("MMMM Do, h:mm:ss a"),
      });

      setForecasts(
        resultJSON.forecasts.slice(1, resultJSON.forecasts.length - 1)
      );
      console.log(resultJSON);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Column>
        <Contents style={{ flex: 2, background: "#f2f2f2" }}>
          <Row style={{ width: "90%" }}>
            <TodayCard today={todayWeather} />
            <Column style={{ width: "80%", alignItems: "center",justifyContent:"center" }}>
              <SearchContainer>
                <MdLocationOn size={20} color={"#424242"} />
                <SearchBox
                  placeholder="search for location"
                  value={query}
                  onChange={(e) => handleSearch(e)}
                />
                {isClose ? (
                  <StyledButton onClick={(e) => handleClose(e)}>
                    <IoIosClose size={20} />
                  </StyledButton>
                ) : null}
              </SearchContainer>
              {isClose ? <StyledDropdown>s</StyledDropdown> : null}
            </Column>
          </Row>
        </Contents>
        <div
          style={{ 
            background:"#f2f2f2",
            height: "100%",
            width:"100%",
            flex:1,
          }}
        >
        <BottomContents>
         
          {forecasts.map((forecast, index) => {
            return <ForecastCard forecast={forecast} key={index} />;
          })}
        </BottomContents>
        </div>
      </Column>
    </Container>
  );
}
