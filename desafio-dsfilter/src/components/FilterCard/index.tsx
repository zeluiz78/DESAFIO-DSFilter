import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function FilterCard({ onSearch }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(formData?.minPrice, formData?.maxPrice);
  }

  function handleClearClick(event: any) {
    setFormData({});
  }

  return (
    <section id="filter-section" className="container mb20">
      <form className="filter-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="minPrice"
            id="minPrice"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
            value={formData.minPrice || ""}
          />
        </div>
        <div>
          <input
            type="text"
            name="maxPrice"
            id="maxPrice"
            placeholder="Preço máximo"
            onChange={handleInputChange}
            value={formData.maxPrice || ""}
          />
        </div>
        <div className="dsf-btn filter-btn">
          <button type="submit">Filtrar</button>
        </div>
        <div className="dsf-btn clear-filter-btn">
          <button onClick={handleClearClick}>Limpar</button>
        </div>
      </form>
    </section>
  );
}
