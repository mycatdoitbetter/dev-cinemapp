import React, { useEffect } from "react";
import { View } from "react-native";

import api from "../../services/api";

// import { Container } from './styles';

const Search: React.FC = () => {
  const get = async () => {
    const { data } = await api.get("batman");
    console.log(data);
  };

  useEffect(() => {
    get();
  }, []);

  return <View />;
};

export default Search;
