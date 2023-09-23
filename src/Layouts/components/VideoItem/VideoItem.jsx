import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import {
  faBookmark,
  faHeart,
  faMessage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useRef } from "react";

const cx = classNames.bind(styles);

function VideoItem({ data, muted }) {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("avatar-wrapper")}>
            <Image className={cx("avatar")} src={data.avatar} />
          </div>
          <div className={cx("video-content")}>
            <div className={cx("header-content")}>
              <div className={cx("video-title")}>
                <strong className={cx("user-info")}>{data.nickname}</strong>
                <span className={cx("user-name")}>
                  {data.first_name + " " + data.last_name}
                </span>
                <div className={cx("description")}>
                  {data.popular_video.description}
                </div>
                <div className={cx("music")}>{data.popular_video.music}</div>
              </div>
              <div className={cx("follow-btn")}>
                <Button outline>Follow</Button>
              </div>
            </div>
            <div className={cx("main-video")}>
              <div className={cx("video")}>
                <ReactVisibilitySensor
                  onChange={handleVisibilityChange}
                  partialVisibility={true}
                  minTopValue={300}
                >
                  <video
                    muted={muted}
                    onEnded={handleVideoEnd}
                    ref={videoRef}
                    width="310"
                    height="555"
                    src={data.popular_video.file_url}
                    type="video/mp4"
                    controls
                  ></video>
                </ReactVisibilitySensor>
              </div>
              <div className={cx("reaction")}>
                <div className={cx("react")}>
                  <button className={cx("react-btn")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <p className={cx("quantity")}>
                    {data.popular_video.likes_count}
                  </p>
                </div>
                <div className={cx("react")}>
                  <button className={cx("react-btn")}>
                    <FontAwesomeIcon icon={faMessage} />
                  </button>
                  <p className={cx("quantity")}>
                    {data.popular_video.comments_count}
                  </p>
                </div>
                <div className={cx("react")}>
                  <button className={cx("react-btn")}>
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                  <p className={cx("quantity")}>
                    {data.popular_video.views_count}
                  </p>
                </div>
                <div className={cx("react")}>
                  <button className={cx("react-btn")}>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <p className={cx("quantity")}>
                    {data.popular_video.shares_count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={cx("line")}></p>
    </>
  );
}

VideoItem.propTypes = {
  data: PropTypes.object,
  muted: PropTypes.bool,
};

export default VideoItem;
