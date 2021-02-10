/* eslint-disable import/order */
import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

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
  const [movieToSearch, setMovieToSearch] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const search = async () => {
    const entireData = await getMovies(movieToSearch, 1);
    setMovies(entireData.movies);
    console.log(entireData.actualPage, entireData.totalOfPages);
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

  const ListFooterComponent = () => (
    <TouchableOpacity>
      <FooterContainer>
        <FooterText>Buscar mais filmes</FooterText>
      </FooterContainer>
    </TouchableOpacity>
  );

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
