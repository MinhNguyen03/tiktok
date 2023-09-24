import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import {
  faBookmark,
  faCircleCheck,
  faHeart,
  faMessage,
  faMusic,
  faPause,
  faPlay,
  faShare,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

function VideoItem({ data, muted, onMuteChange }) {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    isPlay ? videoRef.current.play() : videoRef.current.pause();
    setIsPlay(!isPlay);
  };

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };
  const handleMutedChange = () => {
    const newMuted = !muted;
    // Gọi callback để thông báo cho component cha
    onMuteChange(newMuted);
  };
  console.log(isPlay);
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
                {data.tick && (
                  <span className={cx("tick")}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                )}
                <span className={cx("user-name")}>
                  {data.first_name + " " + data.last_name}
                </span>
                <div className={cx("description")}>
                  {data.popular_video.description}
                </div>
                <div className={cx("music")}>
                  <FontAwesomeIcon
                    icon={faMusic}
                    className={cx("music-icon")}
                  />
                  {data.popular_video.music ? (
                    data.popular_video.music
                  ) : (
                    <span>
                      Music - {data.first_name + " " + data.last_name}
                    </span>
                  )}
                </div>
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
                  <div>
                    <video
                      muted={muted}
                      onClick={handlePlay}
                      loop
                      ref={videoRef}
                      width="310"
                      height="555"
                      src={data.popular_video.file_url}
                      type="video/mp4"
                    ></video>

                    <button className={cx("pause")} onClick={handlePlay}>
                      {isPlay ? (
                        <FontAwesomeIcon icon={faPlay} />
                      ) : (
                        <FontAwesomeIcon icon={faPause} />
                      )}
                    </button>

                    <button
                      className={cx("volume")}
                      onClick={handleMutedChange}
                    >
                      {muted ? (
                        <FontAwesomeIcon icon={faVolumeXmark} />
                      ) : (
                        <FontAwesomeIcon icon={faVolumeHigh} />
                      )}
                    </button>
                  </div>
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
  onMuteChange: PropTypes.func,
};

export default VideoItem;
