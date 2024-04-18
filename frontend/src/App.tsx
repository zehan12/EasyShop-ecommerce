import { Footer } from "./components/common";
import {
  HomeCarousel,
  Navigation,
  ProductCarousel,
  ProductGallery,
} from "./components/customers";
import { data } from "./mock/data";
import { ProductListing } from "./pages/ProductListing";

function App() {
  return (
    <>
      {/* <Navigation />
      <HomeCarousel />
      <div className="space-y-10 py-20 flex  flex-col justify-center px-5 lg:px-5">
        <ProductCarousel products={data} />
      </div>
      <ProductGallery />
      <Footer /> */}
      <HomeCarousel />
      <ProductListing />

    </>
  );
}

export default App;
