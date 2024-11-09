import { useEffect, useState } from "react";
import { addNumber } from "./components/AddNumber";
import cloneDeep from "lodash.clonedeep";
import "./App.css";
// Reference Youtube Link
// https://www.youtube.com/watch?v=qR26x9czYhA&list=PLE9cyLFRZmXJ7V4EdsOZPpPGjcdDo3Tww&index=3

function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const initialize = () => {
    let newGrid = cloneDeep(data);
    console.log(newGrid);
    addNumber(newGrid);
    addNumber(newGrid);
    setData(newGrid);
  };
  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
        }}>
        2048 game
      </h1>
      <div
        style={{
          background: "#42a7f5",
          width: "max-content",
          margin: "auto",
          padding: 5,
          borderRadius: 5,
          marginTop: 10,
        }}>
        {data.map((row, oneIndex) => {
          return (
            <div key={oneIndex} style={{ display: "flex" }}>
              {row.map((digit, index) => (
                <Block num={digit} key={index}></Block>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

const Block = ({ num }) => {
  const { blockStyle } = style;
  return (
    <div
      style={{
        ...blockStyle,
        // background: getColors(num),
        color: num === 2 || num === 4 ? "purple" : "white",
      }}>
      {num !== 0 ? num : "0"}
    </div>
  );
};

const style = {
  blockStyle: {
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a1d6ff",
    borderRadius: 3,
    margin: 4,
    fontSize: 35,
    fontWeight: "800",
    cursor: "pointer",
  },
};
export default App;
