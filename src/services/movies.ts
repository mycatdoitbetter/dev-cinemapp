import { EntireResponse } from "../interfaces";
import getNumberOfPages from "../utils";
import api from "./api";

const getMovies = async (
  movieToSearch: string,
  page: number
): Promise<EntireResponse> => {
  try {
    const { data } = await api.get(`${movieToSearch}*&page=${page}`);

    const totalOfPages = getNumberOfPages(data.totalResults);

    return { movies: data.Search, totalOfPages, actualPage: page };
  } catch (error) {
    alert(
      "Busca mal sucedidade. Verifique sua conexão, tente novamente mais tarde"
    );
    return { movies: [], totalOfPages: 0, actualPage: 0 };
  }
};

export default getMovies;
