import { useState } from "react";
import { login } from "../services/auth.service";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = {
      email,
      password,
    };
    const response = await login(user);
    console.log(response, "response");
    return response;
  };

  return (
    <>
      <div>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};
