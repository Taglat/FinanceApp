import { WithKzBalance } from "../../../../helpers/hoc/withKzBalance";
import Modal from "../../../Modal/Modal";
import DeleteButton from "../DeleteButton/DeleteButton";
import style from "../style.module.css";

const StockCard = ({ data, openModal, isModalOpen, deleteFromFavorites, symbol, modalRef }) => {
  return (
    <li className={style.item}>
      {data ? (
        <div onClick={() => openModal()} className={style.info}>
          {data.logo ? (
            <img className={style.logo} src={data.logo} alt={data.name} />
          ) : (
            <div className={style.logo}></div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p>{data.name}</p>
            <p>{data.ticker}</p>
            <p>
              {data.price} {data.currency}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <DeleteButton deleteStock={() => deleteFromFavorites(symbol)} />
      {isModalOpen ? <Modal ref={modalRef} data={data} /> : null}
    </li>
  );
};

export default WithKzBalance(StockCard);
