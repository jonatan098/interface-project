import { useRouter } from "next/router";

import MoreDetails from "@/components/MoreDetails";
import Shipping from "@/components/Shipping";
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";

import * as S from "./styled";

const ProductPage = ({ product, products }) => {
  const pageRouter = useRouter();

  const renderMobileView = () => {
    return (
      <>
        <S.ImageWrapper>
          <S.Title>{product.title}</S.Title>
          <img src={product.thumbnail} alt={`foto-${product.title}`} />
        </S.ImageWrapper>

        <S.Description>{product.description}</S.Description>
        <S.Price>R$ {product.price.toFixed(2)}</S.Price>
        <S.Stock>{product.stock} itens disponíveis</S.Stock>

        <S.ShippingWrapper>
          <Shipping />
        </S.ShippingWrapper>

        <S.BuyButton>Comprar</S.BuyButton>

        <MoreDetails />
      </>
    );
  };

  const renderDesktopView = () => {
    return (
      <S.DesktopProductWrapper>
        <S.FirstSection>
          <S.ImageWrapper>
            <img src={product.thumbnail} alt={`foto-${product.title}`} />
          </S.ImageWrapper>

          <S.InnerWrapper>
            <S.Description>{product.description}</S.Description>
            <MoreDetails />
          </S.InnerWrapper>
        </S.FirstSection>

        <S.SecondSection>
          <S.Title>{product.title}</S.Title>
          <S.Price>R$ {product.price.toFixed(2)}</S.Price>
          <S.Stock>{product.stock} itens disponíveis</S.Stock>

          <S.ShippingWrapper>
            <Shipping />
          </S.ShippingWrapper>

          <S.BuyButton>Comprar</S.BuyButton>
        </S.SecondSection>
      </S.DesktopProductWrapper>
    );
  };

  return (
    <S.ProductPageWrapper>
      <S.ResponsiveView $display={700} $size="max">
        {renderMobileView()}
      </S.ResponsiveView>

      <S.ResponsiveView $display={701} $size="min">
        {renderDesktopView()}
      </S.ResponsiveView>

      <Carousel title="Veja também">
        {products?.map((prod, index) => {
          return (
            <Card
              key={index}
              imgUrl={prod.thumbnail}
              title={prod.title}
              price={prod.price.toFixed(2)}
              description={prod.description}
              onClick={() => pageRouter.push(`${prod.id}`)}
            />
          );
        })}
      </Carousel>
    </S.ProductPageWrapper>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { productId } = query;

  const data = await fetch(`https://dummyjson.com/products`).then((res) =>
    res.json()
  );

  const product = data.products.find((prod) => {
    if (prod.id == productId) return prod;
  });

  return { props: { product, products: data.products } };
};

export default ProductPage;
