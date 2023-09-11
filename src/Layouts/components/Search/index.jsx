import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../../../components/AccountItem";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    setSearchResult([1, 2, 3]);
  }, []);
  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <p className={cx("search-title")}>Accounts</p>
            <AccountItem />
            <AccountItem />
          </div>
        </PopperWrapper>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          value={searchValue}
          ref={inputRef}
          type="text"
          className={cx("search-bar")}
          placeholder="Search"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {searchValue && (
          <button className={cx("clear-button")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <span className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} />
        </span>
        <span className={cx("small-column")}></span>
        <button className={cx("search-button")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
