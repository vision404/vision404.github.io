var posts=["2023/10/15/2023年11月12日短讯/","2023/10/09/你好/","2025/07/05/2025年7月5日早报/","2023/10/09/关于/","2023/10/12/农行常用二维码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };