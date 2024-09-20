import { Banner, HeroSlider } from "@components/common";
import { CategoriesList, ProductsTabs } from "@components/ecommerce";

const Home = () => {
  return (
    <section>
      <HeroSlider />
      <ProductsTabs />
      <CategoriesList />
      <Banner />
    </section>
  );
};

export default Home;
