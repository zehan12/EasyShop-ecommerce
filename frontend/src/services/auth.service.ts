import { BACKEND_API_URL } from "@/constant";

export const signup = async (body: object) => {
  try {
    const response = await fetch(BACKEND_API_URL + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error: unknown) {
    return {
      status: 500,
      error: "Internal Server Error",
      message: (error as Error)?.message,
    };
  }
};

export const login = async (body: { email: string; password: string }) => {
  try {
    const response = await fetch(BACKEND_API_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error: unknown) {
    return {
      status: 500,
      error: "Internal Server Error",
      message: (error as Error)?.message,
    };
  }
};
