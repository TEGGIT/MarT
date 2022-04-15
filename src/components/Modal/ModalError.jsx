import React from 'react';
import classes from "./Modal.module.scss";

const ModalError = ({setOpenModalError}) => {
  const closeModal = () => setOpenModalError(false)
  return (

      <>
        <div className={classes.background} onClick={closeModal}>
          <div
              className={classes.background__card}
              onClick={(e) => e.stopPropagation()}
          >
          <p>Для бронирования номера нужно авторизироваться </p>
          </div>
        </div>
      </>
  );
};

export default ModalError;