import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 100px;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  background-color: #000;

  p {
    font-size: 18px;

    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
