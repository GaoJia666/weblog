import Mock from 'mockjs';

// 模拟获取用户信息请求
Mock.mock('/api/user', 'get', {
  code: 200,
  message: '成功',
  data: {
    id: '@id',
    name: '@cname', // 随机中文姓名
    age: '@integer(20, 50)',
    avatar: '@image("200x200", "#4A7BF7", "Avatar")', // 随机生成头像图片
  },
});

// 模拟获取文章列表请求
Mock.mock('/api/articles', 'get', {
  code: 200,
  message: '成功',
  data: {
    'list|5': [{
      id: '@id',
      title: '@ctitle',
      content: '@cparagraph',
      author: '@cname',
      date: '@date("yyyy-MM-dd")',
    }],
  },
});

Mock.mock('/api/verse', 'get', {
  code: 200,
  message: '成功',
  data: {
    'list': [
      '问君能有几多愁？恰似一江春水向东流。',
      '但愿人长久，千里共婵娟。',
      '窈窕淑女，君子好逑。',
      '白日依山尽，黄河入海流。',
      '浮云游子意，落日故人情。',
      '青青子衿，悠悠我心。',
      '采菊东篱下，悠然见南山。',
      '桃花扇底江南水，翠梧高树不胜悲。',
      '红豆生南国，春来发几枝。',
      '长恨春归无觅处，乾坤无端似流水。',
    ],
  },
});

Mock.mock('/api/blog', 'get', {
  code: 200,
  message: '成功',
  data: {
    'list': [
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},
      {title:'nginx 部署前端vue项目',content:'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。优点支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。内存消耗少可商业化配置文件简单 除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等。'},

    ],
  },
});