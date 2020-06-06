# 项目的说明
* 使用node通过sequelize(ORM)操作关系型数据库
* 注册时，服务端需要安装body-parser,解析通过post传过来的数据
* 注册时，存入Mysql关系库中的密码需要使用bcryptjs包进行加密
* 登录时，服务端要返回token，通过jwt包装用户名、有效期等生成token，返回给客户端，客户端进行解析
* sequelize通过定义model对应关系库中的表
* 创建.gitignore文件配置github中忽略上传的文件，比如node_modules
* npm 安装的包在package.json中可以看到，分-D和--save安装的，分别在devDependencies和dependencies下