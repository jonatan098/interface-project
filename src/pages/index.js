import Card from "@/components/Card";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function HomePage({ data }) {
  const pageRouter = useRouter();

  return (
    <HomeWrapper>
      <h1>Produtos imperdíveis</h1>
      <CardListWrapper>
        {data.map((product, index) => {
          return (
            <Card
              key={index}
              imgUrl={product.thumbnail}
              title={product.title}
              price={product.price.toFixed(2)}
              description={product.description}
              onClick={() => pageRouter.push(`product/${product.id}`)}
            />
          );
        })}
      </CardListWrapper>
    </HomeWrapper>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return {
    props: { data: data.products },
  };
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardListWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  overflow: hidden;
  padding: 2px 2px 6px;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3px 4px 8px;
  }
  @media (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
