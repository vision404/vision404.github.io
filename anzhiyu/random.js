var posts=["2023/10/15/2023年11月12日短讯/","2023/10/09/关于/","2023/10/12/农行常用二维码/","2023/10/09/你好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };