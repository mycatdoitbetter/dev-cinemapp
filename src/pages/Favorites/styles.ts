import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #050401;
  padding: 0px 20px;
  padding-top: 50px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: "RobotoSlabBold";
  color: #fffaff;
  margin-top: 20px;
  padding-bottom: 10px;
`;

export const Description = styled.Text`
  color: #fffaff;
  font-family: "RobotoSlabRegular";
  margin-bottom: 20px;
`;

export const ListEmptyContainer = styled.View`
  width: 100%;
  height: 500px;
  align-content: center;
  justify-content: center;
`;

export const PlaceHolderEmptyList = styled.Image`
  width: 60%;
  height: 50%;
  align-self: center;
`;

export const EmptyContentText = styled.Text`
  color: #fffaff;
  font-family: "RobotoSlabRegular";
  text-align: center;
`;
