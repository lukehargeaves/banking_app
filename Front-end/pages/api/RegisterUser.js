import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";
const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

const registerUser = async (req, res) => {
  const { username, password, confirmPassword, email } = req.body.data;
  try {
    const { data } = await client.mutation({
      mutation: gql`
        mutation register(
          $username: String!
          $email: String!
          $password: String!
          $confirmPassword: String!
        ) {
          register(
            registerInput: {
              username: $username
              email: $email
              password: $password
              confirmPassword: $confirmPassword
            }
          ) {
            id
            email
            username
            token
          }
        }
      `,
    });
    res.status(200).json({ data: data.register, error: null });
  } catch (e) {
    if (error.message === "400: Not Found") {
      res.status(404).json({ data: null, error: "no data found" });
    } else {
      res.status(500).json({ characters: null, error: "Internal error" });
    }
  }
};
export default registerUser;
// useMutation(REGISTER_USER, {
//     update(proxy, result) {
//       console.log(result);
//     },
//     variables: values,
//   });
