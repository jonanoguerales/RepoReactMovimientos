import { Movement } from "./api";
import { MovementVm } from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: Movement[]
): MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    accountId: movement.accountId,
  }));
