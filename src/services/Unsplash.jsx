import axios from "axios";

const ACCESS_KEY = "Qsrdb8U35vohlyhkbWY3_kze-CplRBFZMq8MkxYjGkw";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchImages = async (query, page = 1) => {
  const response = await unsplashApi.get("/search/photos", {
    params: { query, per_page: 12, page },
  });
  return response.data.results;
};
