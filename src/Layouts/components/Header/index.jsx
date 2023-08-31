import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../assets/images/tiktok_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("tiktok-icon")}>
        <img src={logo} alt="" />
      </div>
      <div className={cx("search")}>
        <input
          type="text"
          className={cx("search-bar")}
          placeholder="Search"
          spellCheck={false}
        />
        <button className={cx("clear-button")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <span className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} />
        </span>
        <span className={cx("small-column")}></span>
        <button className={cx("search-button")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={cx("action")}></div>
    </header>
  );
}

export default Header;
