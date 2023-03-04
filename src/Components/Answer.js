import styled from "styled-components";
import wrong from "../assets/icone_erro.png";
import allMost from "../assets/icone_quase.png";
import right from "../assets/icone_certo.png";

export default function Answer({ q, setAnswer, made, setMade, setIcon }) {
  function callResult(note) {
    setAnswer(false);

    const done = made;
    setMade(done + 1);

    setIcon(note);
  }

  return (
    <CardStyleAnswer>
      <h4>{q.answer}</h4>
      <div>
        <button onClick={() => callResult(wrong)} className="red">
          Não lembrei
        </button>
        <button onClick={() => callResult(allMost)} className="yellow">
          Quase não lembrei
        </button>
        <button onClick={() => callResult(right)} className="green">
          Zap!
        </button>
      </div>
    </CardStyleAnswer>
  );
}

const CardStyleAnswer = styled.div`
  width: 300px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    margin-top: 18px;
    margin-right: 37px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 21px;
    margin-bottom: 10px;
  }
  button {
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: transparent;
    color: #ffffff;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .red {
    background: #ff3030;
  }
  .yellow {
    background: #ff922e;
  }
  .green {
    background: #2fbe34;
  }
`;
