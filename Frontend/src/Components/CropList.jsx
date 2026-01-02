import React from "react";
import "./CropList.css";

const data = [
  {
    crop: "Maize",
    company: "Ke Geberew",
    price: "3689.0",
    volume: "368,90",
    rank: 1,
    gain: "15%",
    trend: "../assets/icons/logo.svg",
  },
  {
    crop: "Barley",
    company: "Ale Bejimla",
    price: "2689.0",
    volume: "368,90",
    rank: 2,
    gain: "3%",
    trend: "../assets/icons/green.svg",
  },
  {
    crop: "Maize",
    company: "Ke Geberew",
    price: "1689.0",
    volume: "368,90",
    rank: 3,
    gain: "-7%",
    trend: "../assets/icons/green.svg",
  },
];
function CropList() {
  return (
    <div className="croplist-container">
      <h1>Croplist</h1>
      <table className="croplist-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Chart</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Rank</th>
            <th>Gain</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.crop}
                <br />
                <span>{item.company}</span>
              </td>
              <td>
                <img src={item.trend} alt="" />
              </td>
              <td>{item.price}</td>
              <td>{item.volume}</td>
              <td>{item.rank}</td>
              <td
                className={item.trend}
                style={{ color: `${item.gain > 0 ? "#0dd80d" : "red"}` }}
              >
                {item.gain}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="view-details-btn">View Details</button>
    </div>
  );
}

export default CropList;
