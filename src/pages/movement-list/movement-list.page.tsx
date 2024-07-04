import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useLocation } from "react-router-dom";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import classes from "./movement-list.page.module.css";
import { Account, getAccount } from "../account/api";
import { getMovements } from "./api";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [account, setAccount] = React.useState<Account>();
  const { pathname } = useLocation();
  const pathId = pathname.substring(pathname.lastIndexOf("/") + 1);

  React.useEffect(() => {
    getMovements(pathId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
    getAccount(pathId).then((result) => setAccount(result));
  }, [pathId]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos Movimientos</h1>
          <div className={classes.headerSaldo}>
            <h4>SALDO DISPONIBLE</h4>
            <span>{account?.balance} €</span>
          </div>
        </div>
        <div className={classes.aliasIban}>
          <h2>Alias: {account?.name}</h2>
          <h2>IBAN: {account?.iban}</h2>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
