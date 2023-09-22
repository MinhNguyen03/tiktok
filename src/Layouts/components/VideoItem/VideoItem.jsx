import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import {
  faBookmark,
  faGear,
  faHeart,
  faMessage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function VideoItem({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("avatar-wrapper")}>
          <Image
            className={cx("avatar")}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/542d4134e8b03318049938efc27a66a2~c5_100x100.jpeg?x-expires=1695524400&x-signature=wOQ4T0Ey%2B4%2BaaLOCZPbO3fbNsu8%3D"
          />
        </div>
        <div className={cx("video-content")}>
          <div className={cx("header-content")}>
            <div className={cx("video-title")}>
              <div className={cx("user-info")}>moontravel_vnMOONTRAVEL</div>
              <div className={cx("description")}>
                Trùng Khánh - Trung Quốc out trình thế giới như thế nào? 💯💯
              </div>
              <div className={cx("music")}>nhạc nền - MOONTRAVEL</div>
            </div>
            <div className={cx("follow-btn")}>
              <Button outline>Follow</Button>
            </div>
          </div>
          <div className={cx("main-video")}>
            <div className={cx("video")}></div>
            <div className={cx("reaction")}>
              <button className={cx("react")}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className={cx("react")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
              <button className={cx("react")}>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <button className={cx("react")}>
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
