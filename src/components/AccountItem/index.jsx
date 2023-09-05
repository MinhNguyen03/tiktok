import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693634400&x-signature=ljBL2dhzpGdIFlKOQ0DFBY3EfhA%3D"
          alt=""
        />
      </div>
      <div className={cx("info")}>
        <h4 className={cx("user-name")}>
          hoaa.hanassii{" "}
          <span className={cx("tick")}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>{" "}
        </h4>
        <p className={cx("name")}>Đào Lê Phương Hoa</p>
      </div>
    </div>
  );
}

export default AccountItem;
