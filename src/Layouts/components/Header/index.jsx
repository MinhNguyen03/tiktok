import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../assets/images/tiktok_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faLightbulb,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../../../components/AccountItem";
import Button from "../../../components/Button";
import Menu from "../Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: faLightbulb,
    content: "LIVE Creator Hub",
    to: "/live_creator",
  },
  {
    icon: faEarthAsia,
    content: "English",
  },
  {
    icon: faCircleQuestion,
    content: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: faKeyboard,
    content: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("tiktok-icon")}>
        <img src={logo} alt="" />
      </div>
      <Tippy
        visible={searchResult.length > 0}
        interactive={true}
        render={(attrs) => (
          <PopperWrapper>
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <p className={cx("search-title")}>Accounts</p>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </div>
          </PopperWrapper>
        )}
      >
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
      </Tippy>
      <div className={cx("action")}>
        <Button text leftIcon={faPlus}>
          Upload
        </Button>
        <Button primary>Login</Button>
        <Menu items={MENU_ITEMS}>
          <button className={cx("menu-button")}>
            {" "}
            <FontAwesomeIcon icon={faEllipsisVertical} />{" "}
          </button>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
