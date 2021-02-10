import React from "react";
import { TouchableOpacity } from "react-native";

import posterPlaceholder from "../../../assets/Movies/poster_placeholder.jpg";
import { IMovie } from "../../interfaces";
import {
  Container,
  DescriptionContainer,
  Poster as PosterImage,
  TitleText,
  YearText,
  Star,
} from "./styles";

const favoriteList = ["tt0372784", "tt2975590"];

const Movie: React.FC<IMovie> = ({ Title, Year, Poster, imdbID }: IMovie) => {
  const indexOfFavorite = favoriteList.indexOf(imdbID);

  const isFavorite = favoriteList[indexOfFavorite] === imdbID;

  const haveImage = Poster !== "N/A";

  return (
    <Container>
      <PosterImage source={haveImage ? { uri: Poster } : posterPlaceholder} />
      <DescriptionContainer>
        <TitleText numberOfLines={1}>{Title}</TitleText>
        <YearText>Ano: {Year}</YearText>
      </DescriptionContainer>
      <TouchableOpacity>
        {isFavorite ? <Star color="#33FFFF" /> : <Star color="#d7d7d7" />}
      </TouchableOpacity>
    </Container>
  );
};

export default Movie;
