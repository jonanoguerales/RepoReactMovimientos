import { Movement } from "./api";
import { MovementVm } from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: Movement[]
): MovementVm[] => {
  console.log("estoy ene l fetch", movementList);
  return movementList.map((movement) => {
    console.log(movement);
    const movementList1: MovementVm = {
      id: movement.id,
      transaction: new Date(movement.transaction),
      realTransaction: new Date(movement.realTransaction),
      description: movement.description,
      amount: movement.amount.toString(),
      balance: movement.balance.toString(),
      accountId: movement.accountId,
    };

    console.log("estoy en el final del map", movementList);
    return movementList1;
  });
};
