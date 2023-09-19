import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <div className={cx("avatar")}>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1419c8bdaf3d5be944b0f865338a8983.jpeg?x-expires=1695297600&x-signature=VMV8MUXyWcyGokfqBx3XtQIMCuo%3D"
          alt=""
        />
      </div>
      <div className={cx("info")}>
        <h4 className={cx("user-name")}>
          <span className={cx("tick")}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </h4>
        <p className={cx("name")}></p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
