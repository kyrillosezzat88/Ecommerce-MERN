import { Banner, Benefit, HeroSlider } from "@components/common";
import { CategoriesList, ProductsTabs } from "@components/ecommerce";

const Home = () => {
  return (
    <section>
      <HeroSlider />
      <ProductsTabs />
      <CategoriesList />
      <Banner />
      <Benefit />
    </section>
  );
};

export default Home;
