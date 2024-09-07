import React, { useState, useEffect } from "react";
import bgImage from "../../style/img/homeBgImage.jpg";
import axios from "../../utils/request";
import "./Home.less";

// 定义数据类型
interface VerseResponse {
  list: string[]; // list 字段是字符串数组
}

const Home: React.FC = () => {

  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
     axios.get<VerseResponse>("/verse").then(res=>{
      const randomElement = res.data.list[Math.floor(Math.random() * res.data.list.length)];
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prevText) => {
          const newText = randomElement.substring(0, index + 1);
          index += 1;
          if (index >= randomElement.length) {
            clearInterval(interval);
          }
          return newText;
        });
      }, 100); // Adjust typing speed here
  
      return () => clearInterval(interval);

     })
  }, []);

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="Home">
      <div className="Home_Content">
        <div className="Home_Title">
          <span>生活倒影</span>
        </div>
        <div className="Home_Desc">
          <span>{displayedText}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
