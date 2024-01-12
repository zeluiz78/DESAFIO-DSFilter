import { useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import { ContextProductsCount } from "./utils/context-products";

function App() {
  const [contextProductsCount, setContextProductsCount] = useState<number>(0);

  return (
    <ContextProductsCount.Provider
      value={{ contextProductsCount, setContextProductsCount }}
    >
      <Header />
      <main>
        <Listing />
      </main>
    </ContextProductsCount.Provider>
  );
}

export default App;
