import client from "../../lib/Client";
import REGISTER_USER from "./Query";

interface registerParams {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}
export default async (variables) => {
  const {
    username,
    password,
    confirmPassword,
    email,
  }: registerParams = variables;
  try {
    return client.mutate({
      mutation: REGISTER_USER,
      variables: {
        username,
        password,
        confirmPassword,
        email,
      },
      errorPolicy: "all",
    });
  } catch (e) {
    console.error(e);
    return { status: 400 };
  }
};
