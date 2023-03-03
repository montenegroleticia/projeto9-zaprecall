import styled from "styled-components";
import turn from "../assets/seta_virar.png";
import Infos from "../mock";
import Answer from "./Answer"

export default function Card({setDeck}) {
  return (
    <>
      {Infos.map((p, index) => (
        <CardStyle key={index}>
          <h4>{p.question}</h4>
          <img onClick={() => (setDeck(<Answer />))} src={turn} alt="turn" />
        </CardStyle>
      ))}
    </>
  );
}
const CardStyle = styled.div`
  width: 300px;
  height: 131px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    margin-top: 18px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  img {
    margin-left: 255px;
    margin-bottom: 6px;
    width: 30px;
    height: 20px;
  }
`;
