import React, { useEffect, useState } from "react";
// import Counter from "./components/Counter";
// import User from "./components/User";
import "./App.less";
import AppRoutes from "./routes/index";
import Header from "./views/Header/Header";
import {
  SettingOutlined,
  MoonOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Popover, message } from "antd";
import ReactPlayer from "react-player";
const App: React.FC = () => {
  //复制
  const copyPage = async () => {
    try {
      await navigator.clipboard.writeText("http://localhost:8080/");
      message.success("内容已复制到剪贴板!");
    } catch (err) {
      message.error("复制失败!");
    }
  };
  const setTheme = () => {
    message.warning("主题定制暂未开放!");
  };
  // const buts = (
  //   <div>
  //     <MoonOutlined className="mainIcon" onClick={setTheme} />
  //     <ShareAltOutlined className="mainIcon" onClick={copyPage} />
  //   </div>
  // );

  // Define a list of audio tracks
  const [tracks] = useState<string[]>([
    // "https://lv-sycdn.kuwo.cn/43b89f45e6c4517d5edcf13c03361cf6/66db5a27/resource/30106/trackmedia/M8000001UZvd1prsGb.mp3",
    // "https://er-sycdn.kuwo.cn/dd67bca3f0d4c3d2af90b151a3144cba/66db4582/resource/30106/trackmedia/M5000015fSFu2QuMlM.mp3",
  ]);

  // State to track the current track index
  const [currentTrack, setCurrentTrack] = useState<number>(0);

  // Function to go to the next track
  const nextTrack = () => {
    setCurrentTrack((prevIndex) => (prevIndex + 1) % tracks.length);
  };
  return (
    <div>
      {/* <Counter />
      <User /> */}
      <Header />
      <div className="app">
        <div className="AppRoutes_set">
          {/* <Popover placement="left" content={buts}>
            <SettingOutlined spin style={{ fontSize: "25px" }} />
          </Popover> */}
          <div className="Header_Left_Item">
            <ReactPlayer
              className="react-player"
              url={tracks[currentTrack]}
              playing={true} // 是否自动播放，false表示不会自动播放
              controls={true} // 显示播放控件
              width="400px" // 播放器宽度
              height="50px" // 播放器高度
              playsinline
              // muted
              // volume={1} // 确保音量设置为最大
            />
            {/* <button onClick={nextTrack}>Next</button> */}
          </div>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
