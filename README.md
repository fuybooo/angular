# Auction

## 学习开发angular项目

1.初始化angular项目
  1.安装开发环境
    1.nodejs, webstorm, git
  2.搭建项目骨架
    1.安装angular命令行工具 npm install -g @angular/cli
    2.查看命令版本 ng -v
    3.使用命令生成项目骨架 ng new auction
    4.进入项目并启动项目 cd auction && npm start
    5.使用git将项目提交到自己的github
      1.在github创建一个项目名叫auction,设置ssh key略过
      2.生成公钥： ssh-keygen -t rsa -C 'fuybooo@qq.com'
      3.在github上设置SSH公钥
      4.git init
      5.git remote add origin git@github.com:fuybooo/auction.git
      6.git add -A
      7.git commit -m '搭建angular项目骨架'
      8.git push -u origin master
  3.安装第三方库
    1.npm install jquery --save
    2.npm install bootstrap --save
  4.安装类型文件
    1.npm install @types/jquery --save-dev
    2.npm install @types/bootstrap --save-dev
  5.生成组件骨架
    1.ng g component xxx
  6.开发页面模板
    1.如果遇到webstorm无法提示css样式的问题,可以做如下操作
      1.文件-设置-directories-add content root 将需要提示的文件所在的父级文件夹加进来即可.
      
  
