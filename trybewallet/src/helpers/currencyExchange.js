const currencyExchange = async (value, currency) => {
  try {
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${currency}`);
    const json = await response.json();

    const rate = json[Object.keys(json)].ask;
    return value * rate;
  } catch (error) {
    console.log(error);
  }
};

export default currencyExchange;
