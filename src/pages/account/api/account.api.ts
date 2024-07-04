import Axios from "axios";
import { Account } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account/`;

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccount}${accountId}`).then(({ data }) => data);
