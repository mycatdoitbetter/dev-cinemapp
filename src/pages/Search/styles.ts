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

export const SearchArea = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const InputContainer = styled.View`
  background-color: #fffaff;
  border-radius: 6px;
  width: 70%;
  height: 40px;
  padding: 0 10px;
  margin: 30px 0;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #999;
  font-family: "RobotoSlabRegular";
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  width: 25%;
  height: 40px;
  background-color: #fc5130;
  border-radius: 6px;
`;

export const SubmitText = styled.Text`
  color: #fffaff;
  font-family: "RobotoSlabSemiBold";
  text-align: center;
`;

export const FooterContainer = styled.View`
  height: 40px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const FooterText = styled.Text`
  color: #fc5130;
  font-size: 17px;
  font-family: "RobotoSlabBold";
`;
