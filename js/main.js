// 加载文章数据
async function loadPosts(category = 'all') {
    try {
        const response = await fetch('/posts/data.json');
        const data = await response.json();
        
        let posts = data.posts;
        if (category !== 'all') {
            posts = posts.filter(post => post.category === category);
        }
        
        renderPosts(posts);
        return data;
    } catch (error) {
        console.error('加载文章失败:', error);
        return null;
    }
}

// 渲染文章卡片
function renderPosts(posts) {
    const container = document.getElementById('posts-container');
    if (!container) return;
    
    if (posts.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:3rem;">暂无内容，敬请期待~</p>';
        return;
    }
    
    container.innerHTML = posts.map(post => `
        <a href="/post.html?id=${post.id}" class="post-card">
            <img src="${post.coverImage}" alt="${post.title}" class="card-image" onerror="this.src='/images/placeholder.jpg'">
            <div class="card-content">
                <span class="card-category">${post.categoryName}</span>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-desc">${post.desc || post.content.substring(0, 100)}...</p>
                <div class="card-meta">
                    <span>📅 ${post.date}</span>
                    <span>👤 ${post.author}</span>
                </div>
            </div>
        </a>
    `).join('');
}

// 加载单个文章
async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    if (!postId) {
        window.location.href = '/index.html';
        return;
    }
    
    try {
        const response = await fetch('/posts/data.json');
        const data = await response.json();
        const post = data.posts.find(p => p.id === postId);
        
        if (!post) {
            document.getElementById('post-content').innerHTML = '<p>文章不存在</p>';
            return;
        }
        
        renderPost(post);
        document.title = `${post.title} - 海斯分享`;
    } catch (error) {
        console.error('加载文章失败:', error);
    }
}

// 渲染文章详情
function renderPost(post) {
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-category').textContent = post.categoryName;
    document.getElementById('post-content').innerHTML = post.content;
    
    // 渲染下载链接
    const downloadsContainer = document.getElementById('downloads-container');
    if (post.downloads && post.downloads.length > 0) {
        downloadsContainer.innerHTML = post.downloads.map(d => `
            <a href="${d.url}" target="_blank" class="download-btn ${d.type}">
                📥 ${d.name}
            </a>
        `).join('');
    } else {
        downloadsContainer.innerHTML = '<p>暂无下载链接</p>';
    }
    
    // 渲染其他链接
    const linksContainer = document.getElementById('links-container');
    if (post.links && post.links.length > 0) {
        linksContainer.innerHTML = post.links.map(l => `
            <a href="${l.url}" target="_blank" class="download-btn github" style="background-color:#586069;">
                🔗 ${l.name}
            </a>
        `).join('');
    } else {
        linksContainer.innerHTML = '<p>暂无相关链接</p>';
    }
    
    // 渲染 Giscus 评论区
    renderGiscus();
}

// 渲染评论区
function renderGiscus() {
    const giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.setAttribute('data-repo', 'haisi-ai/blogs');
    giscusScript.setAttribute('data-repo-id', 'R_kgDORwBnLg');
    giscusScript.setAttribute('data-category', 'Announcements');
    giscusScript.setAttribute('data-category-id', 'DIC_kwDORwBnLs4C5OQ7');
    giscusScript.setAttribute('data-mapping', 'pathname');
    giscusScript.setAttribute('data-strict', '0');
    giscusScript.setAttribute('data-reactions-enabled', '1');
    giscusScript.setAttribute('data-emit-metadata', '0');
    giscusScript.setAttribute('data-input-position', 'bottom');
    giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
    giscusScript.setAttribute('data-lang', 'zh-CN');
    giscusScript.setAttribute('crossorigin', 'anonymous');
    giscusScript.async = true;
    
    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
        giscusContainer.innerHTML = '';
        giscusContainer.appendChild(giscusScript);
    }
}

// 激活当前分类
function setActiveCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentCat = urlParams.get('cat') || 'all';
    const categoryLinks = document.querySelectorAll('.category-tag');
    categoryLinks.forEach(link => {
        const cat = link.getAttribute('data-cat');
        if (cat === currentCat) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('posts-container')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat') || 'all';
        loadPosts(category);
        setActiveCategory();
    }
    
    if (document.getElementById('post-content')) {
        loadPost();
    }
});
