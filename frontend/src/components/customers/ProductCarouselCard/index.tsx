import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Product } from "@/types";
import { FC } from "react";

export const ProductCarouselCard: FC<Product> = ({ title, image }) => {
  return (
    <Card key={title} className="w-[250px]">
      <CardHeader>
        <img
          className=" object-contain h-[12rem] w-full"
          src={image}
          alt={title}
        />
      </CardHeader>
      <CardContent className="h-20">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription>Nike T-shirt.</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-center w-60 py-2 font-medium tracking-wide text-foreground capitalize hover:bg-blue-600 bg-blue-500 text-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          view
        </div>
      </CardFooter>
    </Card>
  );
};
