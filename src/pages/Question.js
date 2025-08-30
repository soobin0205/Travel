import React from "react";
import styled from "styled-components";
import { QuestionData } from "../data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScroe] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScroe(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <Wrapper>
      <QNum>{QuestionData[questionNo].qnum}</QNum>
      <Title>{QuestionData[questionNo].title}</Title>

      <ImageWrapper>
        <ImageBox>
          <img src={QuestionData[questionNo].imglf} alt="선택1" />
        </ImageBox>
        <ImageBox>
          <img src={QuestionData[questionNo].imgrg} alt="선택2" />
        </ImageBox>
      </ImageWrapper>

      <ButtonGroup>
        <AnswerButton onClick={() => handleClickButton(1, QuestionData[questionNo].type)}>
          {QuestionData[questionNo].answera}
        </AnswerButton>
        <AnswerButton onClick={() => handleClickButton(0, QuestionData[questionNo].type)}>
          {QuestionData[questionNo].answerb}
        </AnswerButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  max-width: 600px;   
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  background: #d2e1f8; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08); 
`;

const QNum = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  padding: 1rem;
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  flex: 1 1 45%;
  max-width: 250px;
  aspect-ratio: 1 / 1;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;   
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const AnswerButton = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  background: #ffffff;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    background: #aacaf9;   
    color: #000000;
  }
`;
