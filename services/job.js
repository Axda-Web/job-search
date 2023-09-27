export const getJobsFromApi = async () => {
  const url =
    "https://jsearch.p.rapidapi.com/search?query=React%20developer&page=1&num_pages=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20938f02ecmsh7ee8f49fe3cbd12p154f3djsnb96c55a25f36",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("🚀 ~ file: job.js:15 ~ getJobsFromApi ~ json:", json);
    return json.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getJobsFromJson = async () => {
  const url = "/data.json";

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
