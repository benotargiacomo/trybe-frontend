const fetchAPI = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
