import styled from "styled-components";

export const ShippingWrapper = styled.div`
  box-shadow: 0px 6px 12px #00000029;
  background-color: #fff;
  border-radius: 20px;
  padding: 16px 13px;
  margin: 10px 15px;
`;

export const LabelShipping = styled.p`
  margin: 0 0 10px 0;

  font-size: 14px;
  font-weight: bold;

  color: #404040;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;

  input {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: unset;
  padding: 0 14px 0px 0;
  border-radius: 0 5px 5px 0;
  background: #000000;
  color: #fff;
  cursor: pointer;
  z-index: 100;
  &:before {
    position: relative;
    content: " ";
    left: -6px;
    height: 100%;
    width: 6px;
    background: #000000;
  }
`;

export const ShippingInfo = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: space-between;

  font-size: 14px;
  color: #808080;
`;
