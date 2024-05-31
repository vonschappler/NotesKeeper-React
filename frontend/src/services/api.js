import dbConn from "./database";

const getData = async ({ query }) => {
  const queryURL = `/notes/?${query}`;
  const response = await dbConn.get(queryURL);
  console.log({ response });
  return response;
};

export { getData };
