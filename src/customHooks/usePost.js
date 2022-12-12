import { useState } from "react";
const usePost = (method) => {
  const [response, setResponse] = useState("");
  const post = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let isJSON = response.headers
        .get("content-type")
        .includes("application/json");
      isJSON
        ? setResponse(await response.json())
        : setResponse(await response.text());
    } catch (e) {
      console.log(e);
    }
  };
  return { response, post };
};

export default usePost;
