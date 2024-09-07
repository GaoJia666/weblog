import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.less";
import houseImage from "../../style/img/house.png";
import MailBox from "../../style/img/mailbox.png";
import Scene from "../../style/img/scene.png";
import { Popover } from "antd";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const homeButs = (
    <div className="homeButs">
      <div onClick={() => navigate("/blog")}>博客</div>
      <div onClick={() => navigate("/")}>起始页</div>
      <div onClick={() => window.open("https://www.google.com/")}>Goole</div>
    </div>
  );

  // Define a list of audio tracks
  const [tracks] = useState<string[]>([
    "https://er-sycdn.kuwo.cn/dd67bca3f0d4c3d2af90b151a3144cba/66db4582/resource/30106/trackmedia/M5000015fSFu2QuMlM.mp3",
    "https://lv-sycdn.kuwo.cn/ad543a8e8389a6cf45ae2612406c24ab/66db5095/resource/30106/trackmedia/M800003Jcrlj1d82Vt.mp3", // Add more tracks here
  ]);

  // State to track the current track index
  const [currentTrack, setCurrentTrack] = useState<number>(0);

  // Function to go to the next track
  const nextTrack = () => {
    setCurrentTrack((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  return (
    <div className="Header">
      <div className="Header_Right">
        <span>POETIZE</span>
      </div>
      <div className="Header_Left">
        <Popover
          placement="bottom"
          content={homeButs}
          className="popover-transparent"
        >
          <div className="Header_Left_Item">
            <div>
              <img src={houseImage} alt="House" width="20" height="20" />
            </div>
            <div className="Header_Left_Item_Text">
              <span>首页</span>
            </div>
          </div>
        </Popover>
        <div className="Header_Left_Item">
          <div>
            <img src={Scene} alt="House" width="20" height="20" />
          </div>
          <div className="Header_Left_Item_Text">
            <span>记录</span>
          </div>
        </div>
        <div className="Header_Left_Item">
          <div>
            <img src={MailBox} alt="House" width="25" height="25" />
          </div>
          <div className="Header_Left_Item_Text">
            <span>留言</span>
          </div>
        </div>
        {/* <div className="Header_Left_Item">
          <div>
            <img src={Scene} alt="House" width="20" height="20" />
          </div>
          <div className="Header_Left_Item_Text">
            <span>设置</span>
          </div>
        </div> */}
        <div className="Header_Left_Item">
          <div className="Header_Left_Item_Login">
            <span>登录</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
