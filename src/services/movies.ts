import api from "./api";

const getExample = async (): Promise<void> => {
  const response = await api.get("&batman");

  console.log(response);
};

export default getExample;
