import axios from "axios";

const POST = async (data) => {
  return await axios
    .post("/pinlyapi/create", {
      ...data,
    })
    .then((value) => {
      return value.data;
    });
};

const GET = async () => {
  return await axios.get("/pinlyapi/").then((value) => {
    return value.data;
  });
};

const createNewURL = async (params) => {
  const originalURL = params.originalURL;
  return await POST({
    originalURL,
  });
};

export { createNewURL };
