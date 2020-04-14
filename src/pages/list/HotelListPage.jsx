import "react-input-range/lib/css/index.css";

import React, { useState } from "react";
import InputRange from "react-input-range";
import "./HotelListPage.css";
import { requestImages, getPrices } from "../../api";

export default function HotelListPage() {
  const [value, setValue] = useState({
    min: 0,
    max: 1000000
  });
  const [data, setData] = useState([]);
  console.log(getPrices(5));

  const getHotels = () => {
    setData(requestImages(setData));
  };
  // console.log(data);

  let serve = [];
  const test = services => {
    serve = [];
    services.forEach(ele => {
      serve.push(<button>{ele}</button>);
    });
    return serve;
  };
  const eachPrices = [];
  const prices = id => {
    eachPrices.push(<div>{getPrices(id)}</div>);
  };

  const filteredHotel = [];
  data.length > 0 &&
    data.map((ele, idx) => {
      filteredHotel.push(
        <div
          key={idx}
          style={{
            display: `flex`,
            backgroundColor: `#fff`,
            marginBottom: `10px`
          }}
        >
          <img src={ele.imageUrl} alt={ele.name} style={{ flex: 0.75 }} />
          <div style={{ flex: 1.25, marginTop: `20px`, marginLeft: `20px` }}>
            {ele.name}
            <div style={{ marginTop: `10px` }}>{test(ele.freeServices)}</div>
            <div style={{ marginTop: `10px` }}>{ele.rate}성급 호텔</div>
          </div>
          <div style={{ marginTop: `20px` }}>
            {ele.totalReviewCount}개의 이용 후기{" "}
            <button>{ele.reviewScore}</button>
          </div>
          <div>{prices(ele.id)}</div>
        </div>
      );
      return filteredHotel;
    });

  return (
    <div className="wrapper">
      <div className="one">
        필터
        <button onClick={getHotels}>Test</button>
      </div>

      <div className="two">최근 본 호텔</div>
      <div className="three">
        <h3>요금</h3>
        <InputRange
          minValue={0}
          maxValue={1000000}
          value={value}
          step={1000}
          formatLabel={value =>
            value === 1000000 ? "1,000,000+" : value.toString()
          }
          onChange={value => setValue(value)}
        />
        <h3>리뷰 점수</h3>
        <InputRange
          minValue={0}
          maxValue={10}
          value={value}
          step={1}
          formatLabel={value => (value === 10 ? "10" : value.toString())}
          onChange={value => setValue(value)}
        />
        <h3>시설 정보</h3>
        <div>
          <label>
            <input type="checkbox" />
            FREE-WIFI
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            FREE-PARKING
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            FREE-AIRPORT-PICKUP
          </label>
        </div>
      </div>
      <div className="four"></div>
      <div className="five">{filteredHotel}</div>
    </div>
  );
}
