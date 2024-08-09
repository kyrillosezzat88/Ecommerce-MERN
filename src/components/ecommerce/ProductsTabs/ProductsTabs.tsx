import TabsNavigation from "../tabsNavigation/TabsNavigation";
import ProductsList from "../ProductsList/ProductsList";
import useProduct from "@hooks/useProduct";

const ProductsTabs = () => {
  const {
    loading,
    error,
    productsTabs,
    activeTab,
    setActiveTab,
    activeProductsTab,
  } = useProduct();
  return (
    <div className="container flex justify-center flex-col items-center spaceY">
      <h1 className="title">Whats New</h1>
      <TabsNavigation
        tabs={productsTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        classes="mb-6"
      />
      <div>
        <ProductsList
          products={activeProductsTab}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ProductsTabs;
