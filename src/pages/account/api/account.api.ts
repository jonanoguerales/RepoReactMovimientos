import Axios from "axios";
import { Account } from "./account.api-model";
import { generatePath } from "react-router-dom";
import { appRoutes } from "@/core/router";

const url = `${import.meta.env.VITE_BASE_API_URL}${appRoutes.account}`;

export const getAccount = (id: string): Promise<Account> => {
  console.log(generatePath(url, { id: id }));
  return Axios.get<Account>(
    generatePath(url, {
      id: id,
    })
  ).then(({ data }) => {
    console.log("la data", data);
    return data;
  });
};
