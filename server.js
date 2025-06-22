const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000; // 我们将后端服务器运行在 3000 端口，避免和前端的 8000 端口冲突

// --- Multer 配置 ---
// 定义文件的存储位置和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '..', '包站', 'videos');
    // 确保上传目录存在
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // 使用原始文件名，如果需要可以添加时间戳等防止重名
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// --- API 端点 ---
// 创建一个 POST 路由来处理文件上传
app.post('/upload', upload.single('videoFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('没有文件被上传。');
  }
  
  // 文件上传成功后，返回一个成功的消息和文件信息
  res.json({
    message: '文件上传成功!',
    filePath: `/videos/${req.file.filename}`
  });
});

// --- 启动服务器 ---
app.listen(port, () => {
  console.log(`后端服务器正在 http://localhost:${port} 上运行`);
}); 