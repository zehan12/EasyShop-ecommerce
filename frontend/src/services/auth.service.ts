import { BACKEND_API_URL } from "@/constant";

export const signup = async (body: object) => {
  const response = await fetch(BACKEND_API_URL + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const responseJson = await response.json();
  return responseJson;
};
