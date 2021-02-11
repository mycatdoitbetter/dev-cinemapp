import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import searchPlaceHolder from "../../../assets/Search/popcorn_placeholder.png";
import Movie from "../../components/Movie";
import { IMovie } from "../../interfaces";
import getMovies from "../../services/movies";
import {
  Container,
  Title,
  Description,
  ListEmptyContainer,
  PlaceHolderEmptyList,
  EmptyContentText,
  SearchArea,
  InputContainer,
  Input,
  SubmitButton,
  SubmitText,
  FooterContainer,
  FooterText,
} from "./styles";

const Search: React.FC = () => {
  /**
   * States to manage the pagination of the API service.
   * By default, i prefer to use 10 with the total pages.
   */
  const [actualPage, setActualPage] = useState(1);
  const [totalOfPages, setTotalOfPages] = useState(10);

  /**
   * States to manage the search, get the movies on a
   * array and the text field.
   */
  const [movieToSearch, setMovieToSearch] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  /**
   * States to manage the refresh and the "can refresh"
   * feature
   */
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [onLastPage, setOnLastPage] = useState(false);

  /**
   * Return true with the actual page is minor than the total of page,
   * btw, can refresh.
   */
  const handleNextPage = (
    totalOfPages: number,
    actualPage: number
  ): boolean => {
    if (actualPage < totalOfPages) {
      setActualPage(actualPage + 1);
      setOnLastPage(false);
      return true;
    } else {
      alert("Esses são os últimos resultados!");
      setOnLastPage(true);
      return false;
    }
  };

  /**
   * Search by the input-search and reset all the states of refresh
   */
  const search = async () => {
    setIsRefreshing(true);
    setOnLastPage(false);
    const entireData = await getMovies(movieToSearch, 1);
    setMovies(entireData.movies);
    setTotalOfPages(entireData.totalOfPages);
    setActualPage(entireData.actualPage);
    setIsRefreshing(false);
  };

  /**
   * Search more and change the pagination states
   */
  const searchMore = async () => {
    handleNextPage(totalOfPages, actualPage);
    if (actualPage < totalOfPages) {
      setIsFetching(true);
      const entireData = await getMovies(movieToSearch, actualPage + 1);
      console.log(entireData.movies);
      setIsFetching(false);
      setMovies((prev) => [...prev, ...entireData.movies]);
    }
  };

  const ListEmptyComponent = () => (
    <ListEmptyContainer>
      <PlaceHolderEmptyList resizeMode="contain" source={searchPlaceHolder} />
      <EmptyContentText>
        {movieToSearch
          ? "Que pena, não encontramos nada. Tente outro filme!"
          : "Vamos lá, procure algum filme!"}
      </EmptyContentText>
    </ListEmptyContainer>
  );

  const ListFooterComponent = () => {
    if (movies?.length <= 0 || onLastPage) return null;

    return (
      <TouchableOpacity onPress={() => searchMore()}>
        <FooterContainer>
          <FooterText>
            {isFetching ? "Aguarde um momento..." : "Buscar mais filmes"}
          </FooterText>
        </FooterContainer>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Title>Cinema APP</Title>
      <Description>Bem-vindo ao mundo espetacular do cinema!</Description>
      <SearchArea>
        <InputContainer>
          <Input
            placeholder="Procure um filme aqui!"
            value={movieToSearch}
            onChangeText={setMovieToSearch}
          />
        </InputContainer>
        <SubmitButton onPress={() => search()}>
          <SubmitText>Buscar</SubmitText>
        </SubmitButton>
      </SearchArea>

      <FlatList
        data={movies}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Movie
            Title={item.Title}
            Year={item.Year}
            Poster={item.Poster}
            imdbID={item.imdbID}
          />
        )}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        onRefresh={() => search()}
        refreshing={isRefreshing}
        keyExtractor={(_, index) => String(index)}
      />
    </Container>
  );
};

export default Search;
