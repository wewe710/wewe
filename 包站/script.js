// 模拟视频数据
const videoData = [
    {
        id: 1,
        title: "【包站首发】超燃游戏混剪 - 2024年度最佳游戏瞬间",
        thumbnail: "https://via.placeholder.com/320x180/00a1d6/ffffff?text=游戏混剪",
        duration: "5:23",
        views: "125.6万",
        author: "游戏达人",
        authorAvatar: "https://via.placeholder.com/40x40/ff6699/ffffff?text=G",
        date: "2天前",
        category: "游戏",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        description: "精选2024年最精彩的游戏瞬间，带你回顾这一年的游戏盛宴！"
    },
    {
        id: 2,
        title: "【动画推荐】2024年必看新番TOP10，你看了几部？",
        thumbnail: "https://via.placeholder.com/320x180/ff6699/ffffff?text=新番推荐",
        duration: "12:45",
        views: "89.3万",
        author: "动漫控",
        authorAvatar: "https://via.placeholder.com/40x40/23ade5/ffffff?text=A",
        date: "3天前",
        category: "动画",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        description: "盘点2024年最值得观看的动画新番，从剧情到制作质量全面分析！"
    },
    {
        id: 3,
        title: "【音乐分享】经典老歌翻唱合集，带你回到那个年代",
        thumbnail: "https://via.placeholder.com/320x180/23ade5/ffffff?text=音乐分享",
        duration: "8:17",
        views: "67.2万",
        author: "音乐人",
        authorAvatar: "https://via.placeholder.com/40x40/00a1d6/ffffff?text=M",
        date: "1周前",
        category: "音乐",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
        description: "精选经典老歌翻唱版本，重温那些美好的音乐时光。"
    },
    {
        id: 4,
        title: "【娱乐八卦】明星最新动态，娱乐圈那些事儿",
        thumbnail: "https://via.placeholder.com/320x180/ff8c00/ffffff?text=娱乐八卦",
        duration: "15:32",
        views: "234.1万",
        author: "娱乐前线",
        authorAvatar: "https://via.placeholder.com/40x40/ff8c00/ffffff?text=E",
        date: "1天前",
        category: "娱乐",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        description: "最新娱乐圈动态，明星八卦新闻，带你了解娱乐圈最新消息。"
    },
    {
        id: 5,
        title: "【知识科普】宇宙的奥秘：黑洞是如何形成的？",
        thumbnail: "https://via.placeholder.com/320x180/8e44ad/ffffff?text=知识科普",
        duration: "20:15",
        views: "45.8万",
        author: "科普君",
        authorAvatar: "https://via.placeholder.com/40x40/8e44ad/ffffff?text=K",
        date: "4天前",
        category: "知识",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        description: "深入浅出地讲解黑洞的形成原理，带你探索宇宙的奥秘。"
    },
    {
        id: 6,
        title: "【美食制作】家常菜教程：红烧肉的正确做法",
        thumbnail: "https://via.placeholder.com/320x180/e74c3c/ffffff?text=美食制作",
        duration: "10:28",
        views: "156.7万",
        author: "美食家",
        authorAvatar: "https://via.placeholder.com/40x40/e74c3c/ffffff?text=F",
        date: "5天前",
        category: "美食",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
        description: "详细讲解红烧肉的制作步骤，让你在家也能做出饭店级别的美味。"
    },
    {
        id: 7,
        title: "【汽车评测】2024年最值得购买的SUV车型推荐",
        thumbnail: "https://via.placeholder.com/320x180/34495e/ffffff?text=汽车评测",
        duration: "18:42",
        views: "78.9万",
        author: "汽车达人",
        authorAvatar: "https://via.placeholder.com/40x40/34495e/ffffff?text=C",
        date: "1周前",
        category: "汽车",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        description: "专业评测2024年热门SUV车型，帮你选择最适合的座驾。"
    },
    {
        id: 8,
        title: "【影视评论】最新电影《星际穿越2》深度解析",
        thumbnail: "https://via.placeholder.com/320x180/2c3e50/ffffff?text=影视评论",
        duration: "25:10",
        views: "112.3万",
        author: "影评人",
        authorAvatar: "https://via.placeholder.com/40x40/2c3e50/ffffff?text=Y",
        date: "2天前",
        category: "影视",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        description: "深度解析《星际穿越2》的剧情、特效和深层含义。"
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeBanner();
    loadVideos();
    loadRanking();
    initializeSearch();
    initializeModal();
    initializeCategoryNavigation();
    initializeComments();
});

// 轮播图功能
function initializeBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 自动轮播
    setInterval(nextSlide, 5000);

    // 点击圆点切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// 加载视频列表
function loadVideos() {
    const videoGrid = document.getElementById('videoGrid');
    
    videoData.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

// 创建视频卡片
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video-id', video.id);
    
    // 从本地存储获取点赞和收藏状态
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos') || '[]');
    const favoritedVideos = JSON.parse(localStorage.getItem('favoritedVideos') || '[]');
    const isLiked = likedVideos.includes(video.id);
    const isFavorited = favoritedVideos.includes(video.id);
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <div class="video-stats">
                    <span>${video.views}播放</span>
                    <span>${video.date}</span>
                </div>
                <div class="video-author">
                    <img src="${video.authorAvatar}" alt="${video.author}" class="author-avatar">
                    <span>${video.author}</span>
                </div>
            </div>
            <div class="video-actions">
                <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-video-id="${video.id}">
                    <i class="fas fa-heart"></i>
                    <span class="action-text">点赞</span>
                </button>
                <button class="action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" data-video-id="${video.id}">
                    <i class="fas fa-star"></i>
                    <span class="action-text">收藏</span>
                </button>
            </div>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', (e) => {
        // 如果点击的是操作按钮，不触发视频播放
        if (e.target.closest('.video-actions')) {
            e.stopPropagation();
            return;
        }
        openVideoModal(video);
    });
    
    // 添加点赞和收藏事件监听
    const likeBtn = card.querySelector('.like-btn');
    const favoriteBtn = card.querySelector('.favorite-btn');
    
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(video.id, likeBtn);
    });
    
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(video.id, favoriteBtn);
    });
    
    return card;
}

// 切换点赞状态
function toggleLike(videoId, likeBtn) {
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos') || '[]');
    const isLiked = likedVideos.includes(videoId);
    
    if (isLiked) {
        // 取消点赞
        const index = likedVideos.indexOf(videoId);
        likedVideos.splice(index, 1);
        likeBtn.classList.remove('liked');
        likeBtn.querySelector('.action-text').textContent = '点赞';
    } else {
        // 添加点赞
        likedVideos.push(videoId);
        likeBtn.classList.add('liked');
        likeBtn.querySelector('.action-text').textContent = '已点赞';
    }
    
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
}

// 切换收藏状态
function toggleFavorite(videoId, favoriteBtn) {
    const favoritedVideos = JSON.parse(localStorage.getItem('favoritedVideos') || '[]');
    const isFavorited = favoritedVideos.includes(videoId);
    
    if (isFavorited) {
        // 取消收藏
        const index = favoritedVideos.indexOf(videoId);
        favoritedVideos.splice(index, 1);
        favoriteBtn.classList.remove('favorited');
        favoriteBtn.querySelector('.action-text').textContent = '收藏';
    } else {
        // 添加收藏
        favoritedVideos.push(videoId);
        favoriteBtn.classList.add('favorited');
        favoriteBtn.querySelector('.action-text').textContent = '已收藏';
    }
    
    localStorage.setItem('favoritedVideos', JSON.stringify(favoritedVideos));
}

// 加载排行榜
function loadRanking() {
    const rankingList = document.getElementById('rankingList');
    
    // 按播放量排序
    const sortedVideos = [...videoData].sort((a, b) => {
        const aViews = parseFloat(a.views.replace('万', ''));
        const bViews = parseFloat(b.views.replace('万', ''));
        return bViews - aViews;
    });
    
    sortedVideos.slice(0, 10).forEach((video, index) => {
        const rankingItem = createRankingItem(video, index + 1);
        rankingList.appendChild(rankingItem);
    });
}

// 创建排行榜项目
function createRankingItem(video, rank) {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    item.setAttribute('data-video-id', video.id);
    
    const isTop = rank <= 3;
    
    item.innerHTML = `
        <div class="ranking-number ${isTop ? 'top' : ''}">${rank}</div>
        <img src="${video.thumbnail}" alt="${video.title}" class="ranking-thumbnail">
        <div class="ranking-info">
            <div class="ranking-title">${video.title}</div>
            <div class="ranking-meta">${video.author} · ${video.views}播放</div>
        </div>
    `;
    
    item.addEventListener('click', () => {
        openVideoModal(video);
    });
    
    return item;
}

// 搜索功能
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        
        const filteredVideos = videoData.filter(video => 
            video.title.toLowerCase().includes(query) ||
            video.author.toLowerCase().includes(query) ||
            video.category.toLowerCase().includes(query)
        );
        
        displaySearchResults(filteredVideos, query);
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 显示搜索结果
function displaySearchResults(results, query) {
    const videoGrid = document.getElementById('videoGrid');
    const sectionHeader = document.querySelector('.video-section .section-header h2');
    
    // 清空现有内容
    videoGrid.innerHTML = '';
    
    if (results.length === 0) {
        videoGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #999;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>没有找到与"${query}"相关的视频</p>
            </div>
        `;
        sectionHeader.textContent = `搜索结果：${query}`;
    } else {
        results.forEach(video => {
            const videoCard = createVideoCard(video);
            videoGrid.appendChild(videoCard);
        });
        sectionHeader.textContent = `搜索结果：${query} (${results.length}个视频)`;
    }
}

// 视频播放模态框
function initializeModal() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        const video = document.getElementById('videoPlayer');
        video.pause();
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            const video = document.getElementById('videoPlayer');
            video.pause();
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            const video = document.getElementById('videoPlayer');
            video.pause();
        }
    });
}

// 打开视频播放模态框
function openVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoViews = document.getElementById('videoViews');
    const videoDate = document.getElementById('videoDate');
    const videoDescription = document.getElementById('videoDescription');
    
    videoPlayer.src = video.videoUrl;
    videoTitle.textContent = video.title;
    videoViews.textContent = `${video.views}播放`;
    videoDate.textContent = video.date;
    videoDescription.textContent = video.description;
    
    modal.style.display = 'block';
    
    // 加载评论
    loadComments(video.id);
    
    // 自动播放视频
    videoPlayer.play().catch(e => {
        console.log('自动播放被阻止:', e);
    });
}

// 加载评论
function loadComments(videoId) {
    const commentsList = document.getElementById('commentsList');
    const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">暂无评论，快来发表第一条评论吧！</p>';
    } else {
        commentsList.innerHTML = comments.map(comment => `
            <div class="comment-item">
                <div class="comment-header">
                    <div class="comment-avatar">${comment.author.charAt(0)}</div>
                    <div>
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-time">${comment.time}</div>
                    </div>
                </div>
                <div class="comment-content">${comment.content}</div>
                <div class="comment-actions">
                    <span class="comment-action" onclick="likeComment(${comment.id})">
                        <i class="fas fa-thumbs-up"></i> 点赞 (${comment.likes || 0})
                    </span>
                    <span class="comment-action" onclick="replyComment(${comment.id})">
                        <i class="fas fa-reply"></i> 回复
                    </span>
                </div>
            </div>
        `).join('');
    }
}

// 初始化评论功能
function initializeComments() {
    const commentInput = document.getElementById('commentInput');
    const submitComment = document.getElementById('submitComment');
    
    if (commentInput && submitComment) {
        submitComment.addEventListener('click', () => {
            const content = commentInput.value.trim();
            if (!content) {
                alert('请输入评论内容！');
                return;
            }
            
            // 获取当前播放的视频ID
            const videoPlayer = document.getElementById('videoPlayer');
            const currentVideo = videoData.find(v => v.videoUrl === videoPlayer.src);
            
            if (currentVideo) {
                addComment(currentVideo.id, content);
                commentInput.value = '';
            }
        });
        
        // 回车发送评论
        commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitComment.click();
            }
        });
    }
}

// 添加评论
function addComment(videoId, content) {
    const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
    const newComment = {
        id: Date.now(),
        author: '匿名用户',
        content: content,
        time: new Date().toLocaleString(),
        likes: 0
    };
    
    comments.unshift(newComment);
    localStorage.setItem(`comments_${videoId}`, JSON.stringify(comments));
    
    // 重新加载评论
    loadComments(videoId);
}

// 点赞评论
function likeComment(commentId) {
    // 这里可以实现评论点赞功能
    console.log('点赞评论:', commentId);
}

// 回复评论
function replyComment(commentId) {
    // 这里可以实现评论回复功能
    console.log('回复评论:', commentId);
}

// 分区导航功能
function initializeCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.querySelector('span').textContent;
            filterVideosByCategory(category);
        });
    });
}

// 按分类筛选视频
function filterVideosByCategory(category) {
    const videoGrid = document.getElementById('videoGrid');
    const sectionHeader = document.querySelector('.video-section .section-header h2');
    
    let filteredVideos;
    if (category === '全部') {
        filteredVideos = videoData;
    } else {
        filteredVideos = videoData.filter(video => video.category === category);
    }
    
    // 清空现有内容
    videoGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #999;">
                <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>${category}分类下暂无视频</p>
            </div>
        `;
    } else {
        filteredVideos.forEach(video => {
            const videoCard = createVideoCard(video);
            videoGrid.appendChild(videoCard);
        });
    }
    
    sectionHeader.textContent = category === '全部' ? '推荐视频' : `${category}视频`;
}

// 用户头像点击事件
document.querySelector('.user-avatar').addEventListener('click', () => {
    alert('用户中心功能正在开发中，敬请期待！');
});

// 导航菜单点击事件
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 移除所有active类
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // 添加active类到当前点击的项目
        item.classList.add('active');
        
        // 这里可以添加页面切换逻辑
        const page = item.textContent;
        console.log(`切换到${page}页面`);
    });
});

// 更多链接点击事件
document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('更多内容功能正在开发中，敬请期待！');
    });
});

// 添加一些动画效果
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有视频卡片
    document.querySelectorAll('.video-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 页面滚动时添加动画
window.addEventListener('scroll', () => {
    addScrollAnimations();
});

// 初始化滚动动画
addScrollAnimations();

// 关于本站弹窗逻辑
const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const aboutClose = document.getElementById('aboutClose');
if (aboutBtn && aboutModal && aboutClose) {
    aboutBtn.addEventListener('click', () => {
        aboutModal.classList.add('show');
    });
    aboutClose.addEventListener('click', () => {
        aboutModal.classList.remove('show');
    });
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('show');
        }
    });
} 