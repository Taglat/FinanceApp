import { useQuery } from "react-query";
import stocksApi from "../../../api/stocksApi";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useKeyPress } from "../../../hooks/useKeyPress";
import StockCard from "./StockCard/StockCard";

const fetchStock = async (symbol) => {
  const price = await stocksApi["getPrice"](symbol);
  const profile = await stocksApi["getProfile"](symbol);

  const stock = { ...profile.data, price: price.data.c };
  return stock;
};

const StockItem = ({ symbol, deleteFromFavorites }) => {
  const { data } = useQuery(`getStock/${symbol}`, () => fetchStock(symbol));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const isKeyPressed = useKeyPress('p');

  useEffect(() => {
    if (isKeyPressed) {
      closeModal();
    }
  }, [isKeyPressed]);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useOnClickOutside(modalRef, closeModal);

  return (
    data ? (
      <StockCard
        data={data}
        openModal={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
        deleteFromFavorites={deleteFromFavorites}
        symbol={symbol}
        modalRef={modalRef}
      />
    ) : (
      <div>Loading...</div>
    )
  );
};

export default StockItem;
