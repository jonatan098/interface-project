import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 320px;

  border-radius: 8px;

  background: #ffffff;
  box-shadow: 0px 2px 3px #0000001f;

  &:hover {
    box-shadow: 0px 3px 6px #00000033;
  }
`;

export const ImageWrapper = styled.div`
  height: 176px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
`;

export const Title = styled.p`
  background: white;
  position: absolute;
  bottom: 0;

  margin: 0;
  padding: 3px 10px 0 10px;

  border-radius: 0 4px 0 0;

  font-size: 12px;
  font-weight: bold;
`;

export const Price = styled.p`
  font-weight: bold;

  color: #fe0000;
`;

export const description = styled.p`
  height: 40px;

  font-size: 12px;

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const button = styled.button`
  width: 100%;
  height: 34px;

  border: 0;
  border-radius: 18px;

  font-size: 14px;
  font-weight: bold;

  color: #fff;
  background-color: #000000;

  :hover {
    cursor: pointer;
  }
`;
