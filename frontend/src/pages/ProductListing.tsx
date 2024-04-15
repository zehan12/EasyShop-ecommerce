import { Fragment } from "react/jsx-runtime";

export const ProductListing = () => {
  return (
    <Fragment>
      <section className="flex">
        <aside className="w-[20%]">Filters</aside>
        <main className="w-full">Products</main>
      </section>
    </Fragment>
  );
};
