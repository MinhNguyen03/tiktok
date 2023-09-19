import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("label")}>{label}</span>
      <AccountItem />
      <AccountItem />
      <AccountItem />
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
