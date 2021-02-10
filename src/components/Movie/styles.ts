import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 90px;
  background-color: #fffaff;
  margin-top: 10px;
  border-radius: 2px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 10px;
`;

export const DescriptionContainer = styled.View`
  justify-content: center;
`;

export const Poster = styled.Image`
  height: 85%;
  width: 50px;
  margin-left: 10px;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  width: 215px;
  font-family: "RobotoSlabRegular";
  color: #303036;
  padding-bottom: 10px;
`;

export const YearText = styled.Text`
  font-size: 13px;
  font-family: "RobotoSlabRegular";
  color: #303036;
`;

export const Star = styled(FontAwesome).attrs(
  ({ isFavorite }: { isFavorite: boolean }) => ({
    name: "star",
    size: 35,
    color: isFavorite ? "#33FFFF" : "#d7d7d7",
  })
)``;
