import SearchStocks from "../../components/SearchStocks/SearchStocks";
import StocksList from "../../components/StocksList/StocksList";
import style from "./style.module.css";
import { useFavoriteStocks } from "../../hooks/useFavoriteStocks";

const Stocks = () => {
  const { favorites, addSToFavorites, deleteFromFavorites } = useFavoriteStocks();

  return (
    <div className={style.stocks}>
      <h1>Stocks</h1>

      <SearchStocks addSToFavorites={addSToFavorites} />

      <StocksList
        deleteFromFavorites={deleteFromFavorites}
        stocks={favorites}
      />
    </div>
  );
};

export default Stocks;
