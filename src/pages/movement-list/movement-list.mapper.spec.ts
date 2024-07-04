import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { Account } from "../account/api";
import { Movement } from "./api";

describe("pages/movement-list/movement-list.mapper specs", () => {
  describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
      // Arrange
      const movementList: Movement[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-11-21T14:07:38",
          realTransaction: "2019-11-21T14:07:38",
          accountId: "1",
        },
      ];

      // Act
      const result = mapMovementListFromApiToVm(movementList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: new Date("2019-11-21T14:07:38"),
          realTransaction: new Date("2019-11-21T14:07:38"),
          accountId: "1",
        },
      ]);
    });
  });

  describe("Traer account", () => {
    it("should return empty account when it feeds empty account", () => {
      // Arrange
      const account: Account = {
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };

      // Act
      const result = account;

      // Assert
      expect(result).toEqual({
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      });
    });
  });
});
