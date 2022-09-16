import styled from "styled-components";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 95vh;
  background: #222;
`;
const InfoHeader = styled.header``;
const InfoTitle = styled.h1`
  font-size: clamp(2rem, calc(4vw + 1rem), 3rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
`;
const InfoDescription = styled.p`
  font-size: 1.1rem;
  color: #999;
  font-weight: 500;
  max-width: 650px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 15px;
`;
const InfoButton = styled.button`
  background: hsl(215, 100%, 50%);
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
`;

export { InfoBox, InfoHeader, InfoTitle, InfoDescription, InfoButton };
