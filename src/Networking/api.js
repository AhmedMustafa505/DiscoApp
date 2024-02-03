import axios from "axios";

const BASE_URL = "https://discoappdemo-default-rtdb.firebaseio.com/";

export const fetchTransactions = () => {
  return axios.get(`${BASE_URL}/transactions.json`);
};
