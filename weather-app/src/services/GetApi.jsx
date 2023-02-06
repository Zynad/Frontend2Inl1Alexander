const GetApi = async (url) => {
  let response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error code: " + response.status);
  } else {
    return response.json();
  }
};

export default GetApi;
