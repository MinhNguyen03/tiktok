import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../assets/images/tiktok_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faHouse,
  faKeyboard,
  faLightbulb,
  faPlus,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faMessage,
  faUser,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
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
    title: "LIVE Creator Hub",
    to: "/live_creator",
  },
  {
    icon: faEarthAsia,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        { type: "language", code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
  {
    icon: faCircleQuestion,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: faKeyboard,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  const userMenu = [
    {
      icon: faUser,
      title: "View Profile",
    },
    {
      icon: faBookmark,
      title: "Favorites",
    },
    {
      icon: faCoins,
      title: "Get Coins",
    },
    {
      icon: faCamera,
      title: "LIVE Studio",
    },
    {
      icon: faHouse,
      title: "LIVE Center",
    },
    {
      icon: faLightbulb,
      title: "LIVE Creator Hub",
      to: "/live_creator",
    },
    {
      icon: faGear,
      title: "Settings",
    },
    ...MENU_ITEMS.slice(1),
    {
      icon: faSignOut,
      title: "Sign Out",
      separate: true,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  console.log(currentUser);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("tiktok-icon")}>
        <img src={logo} alt="" />
      </div>
      <HeadlessTippy
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
      </HeadlessTippy>
      <div className={cx("action")}>
        <Button text leftIcon={faPlus}>
          Upload
        </Button>
        {currentUser ? (
          <>
            <Tippy content="Messages">
              <button className={cx("action-button")}>
                {" "}
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </Tippy>
            <Tippy content="Inbox">
              <button className={cx("action-button")}>
                <FontAwesomeIcon icon={faMessage} />{" "}
              </button>
            </Tippy>
          </>
        ) : (
          <>
            <Button primary>Login</Button>
          </>
        )}
        <Menu items={currentUser ? userMenu : MENU_ITEMS}>
          {currentUser ? (
            <img
              className={cx("user-avatar")}
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693634400&x-signature=ljBL2dhzpGdIFlKOQ0DFBY3EfhA%3D"
              alt=""
            />
          ) : (
            <button className={cx("menu-button")}>
              {" "}
              <FontAwesomeIcon icon={faEllipsisVertical} />{" "}
            </button>
          )}
        </Menu>
      </div>
    </header>
  );
}

export default Header;
