import { observable, computed } from "mobx";

class UserMenu {
  @observable _menuOpen = false;

  @computed
  get menuOpen(): boolean {
    return this._menuOpen;
  }
}

const userMenu = new UserMenu();

export default userMenu;
