import { gql, useMutation } from "@apollo/client";
import login from "../stores/LoginStore/index";
import React, { useState } from "react";
// interface register {
//   id :string,
//   email :string,
//   username : String,
//   token : string,
//   //
// }

// interface registerRepsonse {
//  errors?: [];
//   // data?: [];
//   // status?: string;
// }
export default function register() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const variables = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    form.reset();
    console.log("variables", variables);
    setLoading(true);
    const data: any = await login(variables);
    if (!!data.register) setSuccess(true);
    console.log(data);
    setLoading(false);
    console.log("complete");
  };

  return (
    <div>
      {loading && <div>SPINNER</div>}
      {success && !loading && <div>REGISTERED</div>}
      {!loading && !success && (
        <form onSubmit={handleSubmit}>
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
      )}
    </div>
  );
}
