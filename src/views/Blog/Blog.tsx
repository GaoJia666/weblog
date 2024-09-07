import React, { useEffect, useState } from "react";
import bgImage from "../../style/img/blogBgimage.jpg";
import myAvatar from "../../style/img/myAvatar.jpg"; // 使用 import 语法导入图片
import "./Blog.less";
import Masonry from "react-masonry-css";
import { Avatar, Button, Flex } from "antd";
import { StarOutlined } from "@ant-design/icons";
import axios from "../../utils/request";

// 定义数据返回类型
interface Blog {
  title: string;
  content: string;
}

interface ResponseData {
  list: (Blog | null)[];
}

const Blog: React.FC = () => {
  // 示例数据

  const leftCon = [
    { title: "文章", num: 1 },
    { title: "分类", num: 1 },
    { title: "访问", num: 6 },
  ];
  useEffect(() => {
    getBlogList();
  }, []);

  // 定义状态类型
  const [blogList, setBlogList] = useState<(Blog | null)[]>([]);

  // 定义异步函数
  const getBlogList = async () => {
    try {
      const { data } = await axios.get<ResponseData>("/blog");
      console.log(data);
      setBlogList(data.list);
    } catch (error) {
      console.error("Failed to fetch blog list:", error);
    }
  };
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="Blog">
      <div className="Blog_content">
        <div className="Blog_content_left">
          <div className="Blog_content_left_avatar">
            <Avatar src={myAvatar} size={80} />
          </div>
          <div className="Blog_content_left_name">缺舟一帆渡</div>
          <div className="Blog_content_left_num">
            {leftCon.map((item, index) => (
              <div key={index}>
                <div>{item.title}</div>
                <div className="Blog_content_left_num_num">{item.num}</div>
              </div>
            ))}
          </div>
          <div className="Blog_content_left_button">
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" block icon={<StarOutlined />}>
                朋友圈
              </Button>
            </Flex>
          </div>
        </div>
        <div className="Blog_content_right">
          {/* <div className="Blog_content_right_header">
            <div>git连接:</div>
            <div>联系QQ:1519183565</div>
          </div> */}
          <Masonry
            breakpointCols={1} // 响应式布局
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {blogList.map((item, index) => (
              <div key={index} className="masonry-item">
                <div>
                  <div className="Blog_content_right_title">{item?.title}</div>
                  <div className="Blog_content_right_content">
                    {item?.content}
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Blog;
