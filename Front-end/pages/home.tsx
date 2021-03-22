import { presenter } from "../Util/Hoc";
import NavHeader from "../components/NavHeader/NavHeader";
const Home = () => (
  <div>
    <NavHeader /> Welcome Home
  </div>
);

export default presenter(false, Home, false);
