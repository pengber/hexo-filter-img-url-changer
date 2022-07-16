# 简介

一个替换本地路径例如`D:\pic-bed\img\`为图床路径`https://raw.githubusercontent.com/pengber/pic-bed/main/img/`的`hexo`插件.

# 配置

在hexo根目录下添加配置:

```yml
uml_changer:
 local_img_path: "D:\\pic-bed\\img\\"
 pic_bed_path: "https://raw.githubusercontent.com/pengber/pic-bed/main/img/"
```

**注意:** 需要给本地路径的反斜线前面加反斜线进行转义, 例如你的windows本地图片路径为`D:\pic-bed\img\`, 则你的配置应该为`D:\\pic-bed\\img\\`.

# 使用场景

本插件是本地博客使用typora进行书写, 图片使用时复制到本地一个文件夹(typora设置), 将该图片文件夹作为本地图床与github公共仓库建立关联后形成公开图床, 再

使用场景:

- 在本地建立一个图片的文件夹, 例如`D:\pic-bed\img`.
- 在使用typora复制图片时先复制到本地一个同一的路径, 目的是解耦合, 减弱使用图片的存储位置和文章内引用的路径之间的关联
- 将`D:\pic-bed`与github的一个公开仓库相关联, 也就是自己手动实现图床的功能, 不使用`PicGo`.
  因为`PicGo`实现图床时, 搭配`typora`是直接上传到了图床上面, 如果是`github`还好, 但是如果是其他图床, 只有这图床网站上面的一份备份. 另外github作为图床会出现上传失败的情况, 不利于图片的管理.
- 在复制到本地图床文件夹后, 在每次文章发布后, 需要自行`push`图床到公共仓库.
- **然后再将本地图床路径替换成公共图床路径即可, 本插件就是完成的hexo静态博客替换图床路径的这个功能**

配合typora的图片复制机制来使用.

typora设置: 偏好设置=>图像=>插入图片时=>**复制到指定路径**=>"D:\\pic-bed\\img\".



# 使用方法

`npm install hexo-filter-img-url-change –save`

添加配置

```yml
uml_changer:
 local_img_path: "D:\\pic-bed\\img\\"
 pic_bed_path: "https://raw.githubusercontent.com/pengber/pic-bed/main/img/"
```

可以替换所有文档中的 `local_img_path` 为 `pic_bed_path`.

也可以将本插件的 `index.js` 文件夹放到静态博客本地路径的根目录下的 `scripts`文件夹后即可再添加配置也可以.

# 其他

如果是自己编写`hexo`插件的话, 写出的代码可以直接放在`根目录\scripts`下生效, 而如果要在`node_modules`文件夹下的编写`hexo-`开头的文件夹下编写代码的话, 编写完成后还需要在根目录的`package.js`的`dependencies`下添加**文件夹名和版本号**

```yml
    "hexo-filter-img-url-changer":"1.0.0"
```

## 参考

[hexo 插件及其发布](https://hexo.io/zh-cn/docs/plugins.html)

[hexo 搭建静态博客－高级篇（插件编写）](https://frapples.github.io/articles/2016-09-21-6d0.html)

[hexo-article-emoji](https://github.com/frapples/hexo-article-emoji/blob/master/readme_cn.md)