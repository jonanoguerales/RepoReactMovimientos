import React from "react";
import classes from "./movement-item.component.module.css";
import { MovementVm } from "../movement-list.vm";

interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        {movementItem.description}
      </span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${classes.bold} ${
          Number(movementItem.amount) < 0 ? classes.negativo : ""
        }`}
      >
        {movementItem.amount}
      </span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${classes.bold}`}
      >
        {movementItem.balance} €
      </span>
    </div>
  );
};
