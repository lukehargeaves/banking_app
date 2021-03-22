import { observable, computed, action } from "mobx";
import register from "../stores/RegisterStore/index";
import { useRouter } from "next/router";
import Register from "../pages/Register";
// interface data = {

// }

interface registerParams {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}
class LoginPM {
  @observable loading: boolean = false;
  @observable success: boolean = false;
  @observable username: string = null;

  props;

  constructor(props) {
    this.props = props;
  }

  @action
  handleSubmit = async (event: React.FormEvent<HTMLFontElement>) => {
    event.preventDefault();

    const form: HTMLFormElement = event.target as HTMLFormElement;
    const formData = new window.FormData(form);

    const variables: registerParams = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    console.log(variables);

    form.reset();
    this.loading = true;
    // TODO: Declare the type for data
    const { data }: any = await register(variables);
    this.username = variables.username;
    if (!!data.register) this.success = true;
    this.loading = false;
  };

  onSuccess = () => {
    this.success = true;
    this.props.router.push("home");
  };
}

export default LoginPM;
