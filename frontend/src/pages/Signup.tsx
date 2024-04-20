import { useState } from "react";
import { signup } from "../services/auth.service";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    const response = await signup(user);
    console.log(response, "response");
    return response;
  };

  return (
    <>
      <div>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
