import React from "react";
import styled from "styled-components";
import{ useNavigate } from 'react-router-dom';

const Home=()=>{
    const navigate =useNavigate();
    
    const handleClickButton = () => { 
        navigate('/question');
    }

    return(
        <Wrapper>
            <Contents>
            <Header>MBTI로 보는 나의 여행 스타일</Header>
            <Button onClick={handleClickButton}>시작하기</Button>
            </Contents>
        </Wrapper>

        
    )
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;  
  align-items: center;     
  background: #f5f8ff;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; 
`;

const Header = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  padding: 1.5rem 2.5rem;

  background: #d2e1f8;
  border-radius: 70px;
  color: #000000;


  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0.8rem 1rem;
  }
`;

const Button = styled.button`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;

  background: #aacaf9;
  border-radius: 70px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`
