import axios from "axios";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const ACCESS_TOKEN =
  "BQB0dYzdlaMmnHyM3r545RcNaQ-TkEWdWY2vB62jfYij3NfSXjNr8HSvkbHQsQDAlXg2mOR0RHHHWShx5kEwm0X8rzkRQG6KBimoj92VWMMzhrl4Yi4";

const axiosInstance = axios.create({
  baseURL: SPOTIFY_API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getTopItems = async (type: "artists" | "tracks", limit = 10) => {
  try {
    const response = await axiosInstance.get(`/me/top/${type}`, {
      params: {
        limit,
        time_range: "medium_term", // Options: long_term, medium_term, short_term
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching top items:", error);
    throw error;
  }
};
