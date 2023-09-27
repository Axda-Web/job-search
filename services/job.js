export const getJobs = async () => {
  const url =
    "https://jsearch.p.rapidapi.com/search?query=React%20developer&page=1&num_pages=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "10cfaf1ca1msh0005d5e71e0af03p15d8d5jsn476258353717",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getJobDetails = async (id) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&extended_publisher_details=false`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "10cfaf1ca1msh0005d5e71e0af03p15d8d5jsn476258353717",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
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
