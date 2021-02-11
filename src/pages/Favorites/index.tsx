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

const getMovies = async (
  setFavoriteMovies: Dispatch<IMovie[]>
): Promise<void> => {
  const list = await getData();
  setFavoriteMovies(list);
};

const Favorites: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  /**
   * Get all favorites on the async storage
   */
  const getAll = async () => {
    setRefreshing(true);
    await getMovies(setFavoriteMovies);
    setRefreshing(false);
  };

  const ListEmptyComponent = () => (
    <ListEmptyContainer>
      <PlaceHolderEmptyList resizeMode="contain" source={searchPlaceHolder} />
      <EmptyContentText>
        Parece que você ainda não favoritou nenhum filme. Caso já tenha
        adicionado, arrasta pra baixo pra atualizar a página! :D
      </EmptyContentText>
    </ListEmptyContainer>
  );

  useEffect(() => {
    getAll();
  }, []);

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
