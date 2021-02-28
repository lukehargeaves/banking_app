import client from "../../lib/Client";
import LOGIN_USER from "./Query";

interface loginParams {
  username: string;
  password: string;
}
export default async (variables) => {
  const { username, password }: loginParams = variables;

  try {
    return client.mutate({
      mutation: LOGIN_USER,
      variables: {
        username,
        password,
      },
      errorPolicy: "all",
    });
  } catch (e) {
    console.error(e);
    return { status: 400 };
  }
};

const _onError = (err) => {
  const errors = err.graphQLErrors[0].extensions.exception.errors;
};
