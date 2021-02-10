import AsyncStorage from "@react-native-async-storage/async-storage";

import { IMovie } from "../interfaces";

export const storeData = async (value: IMovie[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@favoriteMovies", jsonValue);
  } catch (e) {
    alert("Não foi possível salvar o filme como favorito");
    return [];
  }
};

export const getData = async (): Promise<IMovie[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favoriteMovies");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    alert("Não foi possível recuperar os filmes favoritados");
    return [];
  }
};
