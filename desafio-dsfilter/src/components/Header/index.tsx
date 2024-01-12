import { useContext } from "react";
import { ContextProductsCount } from "../../utils/context-products";
import "./styles.css";

export default function Header() {
  const { contextProductsCount } = useContext(ContextProductsCount);

  return (
    <header>
      <div className="container dsf-header">
        <h1 className="dsf-brand">DSFilter</h1>
        <div>
          <span>{contextProductsCount} produto(s)</span>
        </div>
      </div>
    </header>
  );
}
