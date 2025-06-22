# 视频文件夹

这个文件夹用于存放网站的视频文件。

## 支持的格式
- MP4 (推荐)
- AVI
- MOV
- WebM

## 文件大小限制
- 最大文件大小：500MB
- 建议分辨率：1280x720 或更高

## 使用方法
1. 将你的视频文件放入此文件夹
2. 在 `script.js` 文件中的 `videoData` 数组中添加视频信息
3. 更新视频的 `videoUrl` 路径指向你的视频文件

## 示例
```javascript
{
    id: 9,
    title: "我的视频标题",
    thumbnail: "https://via.placeholder.com/320x180/00a1d6/ffffff?text=我的视频",
    duration: "5:30",
    views: "1.2万",
    author: "我的用户名",
    authorAvatar: "https://via.placeholder.com/40x40/00a1d6/ffffff?text=M",
    date: "刚刚",
    category: "游戏",
    videoUrl: "videos/my-video.mp4",
    description: "这是我的视频描述"
}
```

## 注意事项
- 确保视频文件格式正确
- 文件名不要包含特殊字符
- 建议使用英文文件名
- 视频文件较大时，建议使用压缩工具优化文件大小 