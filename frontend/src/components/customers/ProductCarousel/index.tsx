import { FC, Fragment } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCarouselCard } from "../ProductCarouselCard";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-between items-center p-5">
          <h4 className="text-3xl font-semibold">Clothing and Accessories</h4>
          <div className="uppercase bg-[#2874F0] font-semibold text-white h-8 w-24 text-center text-sm pt-[5px]">
            view all
          </div>
        </div>
        <Slider
          autoplay
          autoplaySpeed={2000}
          infinite
          prevArrow={<PreviousButton />}
          nextArrow={<NextButton />}
          slidesToShow={5}
        >
          {products.map((product) => (
            <ProductCarouselCard
              key={product.title}
              image={product.image}
              title={product.title}
            />
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

interface SliderButtonProps {
  onClick: () => void;
}

const PreviousButton: FC<SliderButtonProps> = ({ onClick }) => {
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={onClick}
      aria-label="next"
      className="h-20 z-50 absolute top-[9rem] left-[-2rem]"
    >
      <ChevronLeft size={40} />
    </Button>
  );
};
const NextButton: FC<SliderButtonProps> = ({ onClick }) => {
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={onClick}
      aria-label="next"
      className="h-20 z-50 absolute top-[9rem] right-[-1rem]"
    >
      <ChevronRight size={40} />
    </Button>
  );
};
