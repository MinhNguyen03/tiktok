/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Wrapper as PopperWrapper } from "../../Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Button from "../../../../components/Button";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  // const [darkMode, setDarkMode] = useState(false);

  // const handleDarkModeToggle = () => {
  //   setDarkMode(!darkMode);
  //   // Thực hiện các hành động cần thiết khi chuyển đổi chế độ ban đêm
  // };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx("content")} tabIndex="-1" {...attrs}>
            {renderItems()}
          </div>
          <div className={cx("menu-item")}>
            <Button leftIcon={faMoon} className={cx("dark-mode")}>
              Dark Mode
            </Button>
            <Switch className={cx("switch")} />
          </div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
