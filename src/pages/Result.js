import React from "react";
import styled from 'styled-components';
import { ResultData } from '../data/resultdata';
import { useNavigate, useSearchParams } from "react-router-dom";

const Result= () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = React.useState({});

  const handleClickButton = () => { 
    navigate('/board');
  }
  
  React.useEffect(() => {
    const result = ResultData.find((s) => s.mbti === mbti);
    setResultData(result);
  }, [mbti])
  
  return(
    <Wrapper>
      <Mbti>{resultData?.mbti}</Mbti>
      <Desc>{resultData?.desc}</Desc>

      <MateBox>
        <Best>
          잘 맞는 여행메이트<br/>{resultData?.best}
        </Best>
        <Worst>
          좀 멀리 할 여행메이트<br/>{resultData?.worst}
        </Worst>
      </MateBox>

      <Matebutton onClick={handleClickButton}>
        여행메이트 찾아보기
      </Matebutton>
    </Wrapper>
  )
}

export default Result;



const Wrapper = styled.div`
  max-width: 650px;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  background: #d2e1f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Mbti = styled.div`
  font-weight: 700;
  font-size: 3rem;
  background: #ffffff;
  border-radius: 50px;
  padding: 1rem 2rem;
  text-align: center;
`;

const Desc = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  white-space: pre-wrap;
  text-align: center;
`;

const MateBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

const Best = styled.div`
  flex: 1 1 40%;
  min-width: 200px;
  font-weight: 500;
  font-size: 1.2rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
`;

const Worst = styled(Best)``;

const Matebutton = styled.button`
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  background: #ffffff;
  border-radius: 25px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #aacaf9;
    color: #000000;
  }
`;
