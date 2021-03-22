import { presenter } from "../../Util/Hoc";
import presenter from "";
const UserIcon = ({ pm }) => (
  <div
    className="rounded-full h-8 w-8 border-2 border-white"
    onClick={pm.onClickHandler}
  />
);

export default presenter(false, UserIcon, false);
