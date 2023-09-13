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
import { useDebounce } from "../../../hooks";
import * as searchServices from "../../../apiServices/searchServices.js";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);
  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <p className={cx("search-title")}>Accounts</p>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !loading && (
          <button className={cx("clear-button")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <span className={cx("loading")}>
            <FontAwesomeIcon icon={faSpinner} />
          </span>
        )}
        <span className={cx("small-column")}></span>
        <button className={cx("search-button")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
