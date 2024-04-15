import {
  HomeCarousel,
  Navigation,
  ProductCarousel,
} from "./components/customers";
import { data } from "./mock/data";

function App() {
  return (
    <>
      <Navigation />
      <HomeCarousel />
      <div className="space-y-10 py-20 flex  flex-col justify-center px-5 lg:px-5">
        <ProductCarousel products={data} />
      </div>
    </>
  );
}

export default App;
