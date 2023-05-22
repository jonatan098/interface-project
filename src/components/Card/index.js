import * as S from "./styled";

const Card = ({ imgUrl, title, price, description, onClick }) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <img src={imgUrl} alt={`foto-${title}`} width="100%" height="100%" />
        <S.Title>{title}</S.Title>
      </S.ImageWrapper>

      <S.Wrapper>
        <S.description>{description}</S.description>
        <S.Price>R$ {price}</S.Price>

        <S.button onClick={onClick}>Comprar</S.button>
      </S.Wrapper>
    </S.CardWrapper>
  );
};

export default Card;
