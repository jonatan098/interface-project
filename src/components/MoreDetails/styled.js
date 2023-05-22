import styled from "styled-components";

export const MoreDetailsWrapper = styled.div`
  background: transparent;
  border-radius: 14px;
  width: auto;
  height: auto;
  position: relative;
`;
export const Title = styled.div`
  color: #313131;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 7px;
`;
export const Description = styled.div`
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  text-align: justify;
  color: #313131;
  line-height: 16px;

  &.show {
    display: block;
    height: auto;

    @media (min-width: 1024px) {
      overflow: auto;
      height: 90px;
    }
  }
  &.closed {
    display: -webkit-box;
    height: 90px;
    mask-image: linear-gradient(to bottom, #000 50%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, #000 50%, transparent 100%);
  }
`;
export const ReadMore = styled.button`
  width: 100%;
  height: 30px;
  color: ${({ actionColor }) => actionColor};
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  border: 0;
  background: transparent;
  text-align: left;
`;
