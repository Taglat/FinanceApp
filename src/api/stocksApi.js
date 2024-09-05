import axios from "axios";

const API_KEY = "crco3n1r01qibo2g342gcrco3n1r01qibo2g3430";
const BASE_URL = "https://finnhub.io/api/v1";

const stocksApi = {
  getStocks: async () => {
    const response = await axios.get(
      `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`
    );

    return response.data;
  },
  getProfile: (symbol) =>
    axios.get(`${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`),
  getPrice: (symbol) =>
    axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`),
};

export default stocksApi;
