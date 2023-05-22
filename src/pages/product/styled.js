import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;

  padding: 0 20px;

  @media (min-width: 700px) {
    padding: 0 2rem;
  }
`;

export const ResponsiveView = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  @media (${({ $display, $size }) => `${$size}-width:  ${$display}`}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  border-radius: 14px;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 700px) {
    min-width: 250px;
    border-radius: 10px 0 0 10px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;

  margin: 0 0 12px 0;

  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;

  line-height: 20px;

  @media (min-width: 700px) {
    min-height: 60px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: pre-wrap;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 5px;

  color: #fe0000;

  @media (min-width: 700px) {
    font-size: 30px;

    margin: 0;
  }
`;

export const Stock = styled.p`
  font-size: 12px;

  margin: 0 0 20px 0;
`;

export const ShippingWrapper = styled.div`
  padding: 16px 13px;
  margin: 10px 15px;

  border-radius: 20px;

  background-color: #fff;
  box-shadow: 0px 6px 12px #00000029;

  @media (min-width: 700px) {
    padding: 0;
    margin: 10px 0 0 0;
    box-shadow: 0 0 0 #fff;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  max-width: 338px;
  height: 34px;

  margin: 30px;

  align-self: center;

  border: 0;
  border-radius: 18px;

  background-color: #000000;

  font-size: 14px;
  font-weight: bold;

  color: #ffff;

  @media (min-width: 700px) {
    margin: 20px 0 0 0;

    :hover {
      cursor: pointer;
    }
  }
`;

export const DesktopProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const FirstSection = styled.div`
  width: 100%;
  max-height: 300px;

  display: flex;
  gap: 10px;

  border-radius: 10px;

  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  max-width: 335px;

  padding: 0 20px 0 0;

  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SecondSection = styled.div`
  max-width: 288px;
  min-height: 280px;

  padding: 10px;

  border-radius: 10px;

  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;
`;
