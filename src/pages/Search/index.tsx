/* eslint-disable import/order */
import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { IMovie } from "../../interfaces";

import Movie from "../../components/Movie";

import getMovies from "../../services/movies";

import searchPlaceHolder from "../../../assets/Search/popcorn_placeholder.png";

// import api from "../../services/api";
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
  const [actualPage, setActualPage] = useState(1);
  const [totalOfPages, setTotalOfPages] = useState(10);
  const [movieToSearch, setMovieToSearch] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [onLastPage, setOnLastPage] = useState(false);

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

  const search = async () => {
    setOnLastPage(false);
    const entireData = await getMovies(movieToSearch, 1);
    setMovies(entireData.movies);
    setTotalOfPages(entireData.totalOfPages);
    setActualPage(entireData.actualPage);
  };

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
        keyExtractor={(_, index) => String(index)}
      />
    </Container>
  );
};

export default Search;
