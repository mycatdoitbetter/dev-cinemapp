import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import posterPlaceholder from "../../../assets/Movies/poster_placeholder.jpg";
import { IMovie } from "../../interfaces";
import { storeData, getData } from "../../store/AsyncStorage";
import {
  Container,
  DescriptionContainer,
  Poster as PosterImage,
  TitleText,
  YearText,
  Star,
} from "./styles";

const addMovieToFavorites = async (movie: IMovie): Promise<any> => {
  const favoriteMovies = await getData();

  favoriteMovies.push(movie);

  await storeData(favoriteMovies);

  return favoriteMovies;
};

const removeMovieToFavorites = async (movies: IMovie[]): Promise<any> => {
  await storeData(movies);
};

const Movie: React.FC<IMovie> = ({ Title, Year, Poster, imdbID }: IMovie) => {
  const haveImage = Poster !== "N/A";

  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  const isFavorite = favoriteMovies.find((movie) => movie.imdbID === imdbID);

  const addToFavorites = async () => {
    if (isFavorite) {
      const newFavorites = favoriteMovies.filter(
        (item) => item.imdbID !== isFavorite.imdbID
      );
      await removeMovieToFavorites(newFavorites);
      setFavoriteMovies(newFavorites);
    } else {
      const favorites = await addMovieToFavorites({
        Title,
        Year,
        Poster,
        imdbID,
      });
      setFavoriteMovies(favorites);
    }
  };

  const getAllFavoriteMovies = async () => {
    const favoriteMovies = await getData();

    setFavoriteMovies(favoriteMovies);
  };

  useEffect(() => {
    getAllFavoriteMovies();
  }, []);

  return (
    <Container>
      <PosterImage source={haveImage ? { uri: Poster } : posterPlaceholder} />
      <DescriptionContainer>
        <TitleText numberOfLines={1}>{Title}</TitleText>
        <YearText>Ano: {Year}</YearText>
      </DescriptionContainer>
      <TouchableOpacity onPress={() => addToFavorites()}>
        <Star isFavorite={isFavorite} />
      </TouchableOpacity>
    </Container>
  );
};

export default Movie;
