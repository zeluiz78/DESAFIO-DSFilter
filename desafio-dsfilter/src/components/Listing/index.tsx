import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import ProductCard from "./ProductCard";
import * as productService from "../../services/product-service";
import FilterCard from "../FilterCard";
import "./styles.css";
import { ContextProductsCount } from "../../utils/context-products";

type SearchValues = {
  minValue: number;
  maxValue: number;
};

export default function Listing() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [searchValues, setSearchValues] = useState<SearchValues>({
    minValue: 0,
    maxValue: Number.MAX_VALUE,
  });

  const {setContextProductsCount} = useContext(ContextProductsCount);


  useEffect(() => {
    const prods = productService.findByPrice(
      searchValues.minValue || 0,
      searchValues.maxValue || Number.MAX_VALUE
    );
    setProducts(prods);
    setContextProductsCount(prods.length);
  }, [searchValues]);

  function handleSearch(minValue: string, maxValue: string) {
    setSearchValues({
      minValue: Number(minValue),
      maxValue: Number(maxValue),
    });
  }

  return (
    <>
      <FilterCard onSearch={handleSearch} />
      <section id="listing-section" className="container">
        <div className="listing-ctr">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </>
  );
}
