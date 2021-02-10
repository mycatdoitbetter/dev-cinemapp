const getNumberOfPages = (totalResults: number) => {
  const resultsPerPage = totalResults / 10;
  const integerPart = Math.floor(resultsPerPage);
  const decimalPartRounded = Math.round(resultsPerPage - integerPart);

  const numberOfPages = integerPart + decimalPartRounded;

  return numberOfPages;
};

export default getNumberOfPages;
