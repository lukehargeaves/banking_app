import { presenter } from "../Util/Hoc";
import Presenter from "../presenter/Login";
import { useRouter } from "next/router";
const Login = ({ cn, pm, router = "test" }) => {
  return (
    <div>
      <form onSubmit={(evt) => pm.handleSubmit(evt)}>
        <h1>Submit</h1>
        <input placeholder="username" name="username" type="text" required />
        <input
          placeholder="passowrd"
          name="password"
          type="password"
          required
        />
        <button type="submit">Submit</button>
        <style jsx>{`
          form {
            border-bottom: 1px solid #ececec;
            padding-bottom: 20px;
            margin-bottom: 20px;
          }
          h1 {
            font-size: 20px;
          }
          input {
            display: block;
            margin-bottom: 10px;
          }
        `}</style>
      </form>
    </div>
  );
};

export default presenter(Presenter, Login, false);
