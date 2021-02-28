import { observable, computed } from "mobx";

class UserStore {
  @observable _loggedIn = false;

  @computed
  get loggedIn(): boolean {
    return this._loggedIn;
  }
}

const userStore = new UserStore();

export default userStore;
