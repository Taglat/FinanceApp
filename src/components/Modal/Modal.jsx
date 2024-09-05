import style from "./style.module.css";
import { forwardRef } from "react"

const Modal = forwardRef(({data}, ref) => {
  return (
    <div className={style.modal} ref={ref}>
      <h3>{data.name}</h3>
    </div>
  )
})

export default Modal