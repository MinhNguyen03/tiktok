import config from "../../../config";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import {
  faCamera,
  faHouse,
  faUserGroup,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import SuggestedAccounts from "../SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} leftIcon={faHouse} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          leftIcon={faUserGroup}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          leftIcon={faCompass}
        />
        <MenuItem title="Live" to={config.routes.live} leftIcon={faCamera} />
      </Menu>
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
