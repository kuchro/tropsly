import { MainBox, StyledGrid } from "./StyledComponents";
import { PRODUCT_DATA as mockdata } from "mockdata";
import ProductCard from "common/components/product/index.js";

const MainView = () => {
  return (
    <MainBox>
      <h1>Mens</h1>
      <StyledGrid gutter={[16, 24]} >
        {mockdata.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledGrid>

      <h1>Womens</h1>
      <StyledGrid gutter={[16, 24]} >
        {mockdata.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledGrid>
      <h1>Kids</h1>
      <StyledGrid gutter={[16, 24]} >
        {mockdata.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledGrid>
    </MainBox>
  );
};
export default MainView;
