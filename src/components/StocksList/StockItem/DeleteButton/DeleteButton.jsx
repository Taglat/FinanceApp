import style from "../style.module.css"

const DeleteButton = ({deleteStock}) => {
  return (
    <p
        onClick={deleteStock}
        className={style.deleteButton}
      >
        Delete
    </p>
  )
}

export default DeleteButton