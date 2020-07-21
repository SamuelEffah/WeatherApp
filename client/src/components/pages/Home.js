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
import StyledDropdown from './../styles/StyledDropdown';

export default function Home(props) {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [isClose, setIsClose] = useState(false);

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

  return (
    <Container>
      <Column>
        <Contents style={{ flex: 2, background: "#f2f2f2" }}>
          <Row style={{ width: "90%" }}>
            <TodayCard />
            <Column style={{ width: "80%",alignItems:"flex-end"}}>
              <SearchContainer>
                <MdLocationOn size={20} color={"#424242"} />
                <SearchBox
                  placeholder="search for location"
                  value={query}
                  onChange={e=>handleSearch(e)}
                />
                {isClose ? (
                  <StyledButton onClick={(e) => handleClose(e)}>
                    <IoIosClose size={20} />
                  </StyledButton>
                ) : null}
              </SearchContainer>
                  {isClose?(
                    <StyledDropdown>
                   s
                  </StyledDropdown>

                  ):null}
               
            </Column>
          </Row>
        </Contents>
        <BottomContents>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </BottomContents>
      </Column>
    </Container>
  );
}
