import { observable, computed, action } from "mobx";
import login from "../stores/LoginStore/index";
import Link from "next/link";
// interface data = {

// }

interface loginParams {
  username: string;
  password: string;
}
class LoginPM {
  @observable loading: boolean = false;
  @observable success: boolean = false;
  @observable username: string = null;

  props;

  constructor(props) {
    this.props = props;
  }

  parseResponse = (data: any) => {};

  @action
  handleSubmit = async (event: React.FormEvent<HTMLFontElement>) => {
    event.preventDefault();
    console.log(this.props, "props");

    const form: HTMLFormElement = event.target as HTMLFormElement;
    const formData = new window.FormData(form);
    const variables: loginParams = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    form.reset();
    this.loading = true;
    // TODO: Declare the type for data
    const data: any = await login(variables);
    this.username = variables.username;
    if (!!data.register) this.onSuccess();
    this.loading = false;
  };

  onSuccess = () => {
    this.success = true;
    this.props.router.push("home");
  };
}

export default LoginPM;
