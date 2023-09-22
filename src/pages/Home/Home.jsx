import classNames from "classnames/bind";
import VideoItem from "../../layouts/components/VideoItem";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home-page")}>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
}

export default Home;
