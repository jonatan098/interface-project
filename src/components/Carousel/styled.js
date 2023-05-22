import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 20px 0 15px 0;
`;

export const Scroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    scroll-snap-align: center;
    flex-shrink: 0;

    @media (max-width: 600px) {
      margin-right: 1rem;
    }
  }

  @media (min-width: 700px) {
    padding: 10px 1rem;
    gap: 1rem;
  }
`;

/* istanbul ignore next */
const Arrow = ({ color = "", inverseColor = "" }) => css`
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 80px;
  z-index: 9;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  background: ${color};

  @media (max-width: 600px) {
    display: none;
  }

  :hover {
    background: ${inverseColor};

    svg {
      fill: ${color};
    }
  }
`;

export const ArrowRight = styled.button`
  ${(props) => Arrow(props)}
  right: -1.3rem;
`;

/* istanbul ignore next */
export const ArrowLeft = styled.button`
  ${(props) => Arrow(props)}
  left: -1.3rem;
`;

export const Title = styled.b`
  font-size: 16px;
  line-height: 30px;
  color: #313131;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    padding: 0 1rem;
  }
`;
