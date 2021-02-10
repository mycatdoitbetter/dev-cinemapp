import React, { Dispatch, useState, useEffect } from "react";
import { FlatList } from "react-native";

import searchPlaceHolder from "../../../assets/Search/popcorn_placeholder.png";
import Movie from "../../components/Movie";
import { getData } from "../../store/AsyncStorage";
import {
  Container,
  Title,
  Description,
  ListEmptyContainer,
  PlaceHolderEmptyList,
  EmptyContentText,
} from "./styles";

import { IMovie } from "~/interfaces";

const fakeResult = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman Begins",
    Type: "movie",
    Year: "2005",
    imdbID: "tt0372784",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2975590",
  },
];

const getMovies = async (
  setFavoriteMovies: Dispatch<IMovie[]>
): Promise<void> => {
  const list = await getData();
  console.log("list favorites", list);
  setFavoriteMovies(list);
};

const Favorites: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  const getAll = async () => {
    setRefreshing(true);
    await getMovies(setFavoriteMovies);
    setRefreshing(false);
  };

  useEffect(() => {
    getAll();
  }, []);

  const ListEmptyComponent = () => (
    <ListEmptyContainer>
      <PlaceHolderEmptyList resizeMode="contain" source={searchPlaceHolder} />
      <EmptyContentText>
        Parece que você ainda não favoritou nenhum filme.
      </EmptyContentText>
    </ListEmptyContainer>
  );

  return (
    <Container>
      <Title>Cinema APP - Favoritos</Title>
      <Description>Bem vindo ao mundo espetacular do cinema!</Description>
      <FlatList
        data={favoriteMovies}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Movie
            Title={item.Title}
            Year={item.Year}
            Poster={item.Poster}
            imdbID={item.imdbID}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => getAll()}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={(_, index) => String(index)}
      />
    </Container>
  );
};

export default Favorites;
