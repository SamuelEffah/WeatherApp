const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const OAuth = require("oauth");

dotenv.config({ path: "./.env.local" });
const port = process.env.PORT || 5000;

const header = {
  "X-Yahoo-App-Id": process.env.YAHOO_WEATHER_API_APP_ID,
};

const request = new OAuth.OAuth(
  null,
  null,
  process.env.YAHOO_WEATHER_CLIENT_ID,
  process.env.YAHOO_WEATHER_CLIENT_SECRET,
  "1.0",
  null,
  "HMAC-SHA1",
  null,
  header
);

const app = express();

//middeleware 
app.use(express.json());
app.use(cors());


//routes
app.get("/:query", (req, res) => {
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${req.params.query},ca&u=c&format=json`,
    null,
    null,
    function (err, data, result) {
      if (err) {
        res.status(400).json({
            status:"failed"
        })
      } else {
    
        res.status(200).json({
          status: "success",
          data
          
        });
      }
    }
  );
});

app.listen(port);
