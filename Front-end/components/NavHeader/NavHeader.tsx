import { presenter } from "../../Util/Hoc";

import UserIcon from "../UserIcon/UserIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
const NavHeader = () => (
  <div
    className="flex flex-row items-center"
    style={{ background: "blue", width: "100vw", height: "40px" }}
  >
    <UserIcon />
    <HomeIcon />
  </div>
);

export default presenter(false, NavHeader, false);
