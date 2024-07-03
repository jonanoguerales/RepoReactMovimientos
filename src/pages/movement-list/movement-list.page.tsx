import { AppLayout } from "@/layouts";
import React from "react";
import { getMovements } from "./api";
import { MovementVm } from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useLocation } from "react-router-dom";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import classes from "./movement-list.page.module.css";
import { Account, getAccount } from "../account/api";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [account, setAccount] = React.useState<Account>();
  const { pathname } = useLocation();
  const pathId = pathname.substring(pathname.lastIndexOf("/") + 1);

  React.useEffect(() => {
    getMovements(pathId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, [pathId]);
  React.useEffect(() => {
    getAccount(pathId).then((result) => {
      setAccount(result);
      console.log(result);
    });
  });
  React.useEffect(() => {
    console.log(account);
  });
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos Movimientos</h1>
          <div className={classes.headerSaldo}>
            <h4>SALDO DISPONIBLE</h4>
            <span>1490 €</span>
          </div>
        </div>
        <div className={classes.headerContainer}>
          <h2>{`Alias ${account?.iban}`} </h2>
          <div className={classes.headerSaldo}>
            <h4>SALDO DISPONIBLE</h4>
            <span>1490 €</span>
          </div>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
