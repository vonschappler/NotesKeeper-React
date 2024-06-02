import dbConn from "./database";

const getData = async ({ query }) => {
  const queryURL = `/notes/?${query}`;
  const response = await dbConn.get(queryURL);
  return response;
};

const addData = async (data) => {
  console.log({ addDataFn: data });
  const queryURL = `/notes/`;
  const response = await dbConn.post(queryURL, data);
  return response;
};

const deleteData = async ({ id }) => {
  const queryURL = `/notes/?id=${id}`;
  const response = await dbConn.delete(queryURL);
  return response;
};

const updateData = async ({ id, data }) => {
  const queryURL = `/notes/?id=${id}`;
  const response = await dbConn.patch(queryURL, data);
  return response;
};

export { getData, addData, deleteData, updateData };
