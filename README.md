# blogs


```markdown
# 🌊 海斯分享

一个基于 GitHub Pages 的静态资源分享网站，专注于分享教程、应用资源和其他实用资料。

## 📖 网站简介

这是一个个人资源分享平台，主要内容包括：
- **📖 教程** - 软件教程、游戏攻略、应用使用方法
- **📦 应用** - 游戏、软件、系统安装包资源
- **📚 其他** - 图片、小说、视频、网站导航等资料

**访问地址**：https://haisi-ai.github.io/blogs/ 或 https://haisi.cc

---

## 📁 文件结构

```
<img width="436" height="455" alt="image" src="https://github.com/user-attachments/assets/fa6ede32-4fa4-4bf8-a25b-337c928c2cba" />


---

## 🚀 如何发布新内容

### 方式一：发布新的教程文章（tutorial/）

1. **创建新文件**
   - 进入 `tutorial/` 文件夹
   - 创建新文件，命名规则：`文章名.html`（使用英文小写，单词间用连字符）
   - 例如：`python-tutorial.html`

2. **复制模板内容**
   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>文章标题 - 海斯分享</title>
       <link rel="stylesheet" href="../css/style.css">
   </head>
   <body>
       <header class="header">
           <!-- 头部导航保持不变 -->
       </header>

       <main class="article-container">
           <article>
               <div class="article-header">
                   <h1 class="article-title">文章标题</h1>
                   <div class="article-meta">
                       <span>📅 日期</span>
                       <span>👤 海斯</span>
                       <span>🏷️ 分类标签</span>
                   </div>
               </div>
               
               <div class="article-content">
                   <!-- 文章正文内容 -->
               </div>
               
               <!-- 评论区 -->
               <div class="comments-section">
                   <h3>💬 评论区</h3>
                   <script src="https://giscus.app/client.js"
                       data-repo="haisi-ai/blogs"
                       data-repo-id="R_kgDORwBnLg"
                       data-category="Announcements"
                       data-category-id="DIC_kwDORwBnLs4C5OQ7"
                       data-mapping="pathname"
                       data-strict="0"
                       data-reactions-enabled="1"
                       data-emit-metadata="0"
                       data-input-position="bottom"
                       data-theme="preferred_color_scheme"
                       data-lang="zh-CN"
                       crossorigin="anonymous"
                       async>
                   </script>
               </div>
           </article>
       </main>

       <footer class="footer">
           <!-- 页脚保持不变 -->
       </footer>
   </body>
   </html>
   ```

3. **添加文章到首页**
   - 打开 `index.html`
   - 找到对应的分类区域（如 `#tutorial`）
   - 在 `<div class="posts-grid">` 中添加新卡片：
   ```html
   <a href="tutorial/你的文章名.html" class="post-card">
       <div class="card-image">📖</div>
       <div class="card-content">
           <span class="card-category tutorial">教程</span>
           <h3 class="card-title">文章标题</h3>
           <p class="card-desc">简短描述（50字以内）</p>
           <div class="card-meta">
               <span>📅 2026-03-XX</span>
               <span>👤 海斯</span>
               <span>💬 0条评论</span>
           </div>
       </div>
   </a>
   ```

4. **提交更新**
   ```bash
   git add .
   git commit -m "新增教程：文章标题"
   git push
   ```

---

### 方式二：发布新的应用资源（app/）

1. **创建新文件**
   - 进入 `app/` 文件夹
   - 命名规则：`资源名.html`（英文小写，连字符分隔）

2. **复制模板内容**
   - 使用与教程相同的 HTML 结构
   - 添加下载链接区域：
   ```html
   <div style="margin: 2rem 0; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
       <h3>📥 下载链接</h3>
       <div class="download-links">
           <a href="你的百度云链接" target="_blank" class="download-btn baidu">📥 百度云盘 (提取码: xxxx)</a>
           <a href="你的夸克链接" target="_blank" class="download-btn quark">📥 夸克网盘</a>
           <a href="你的GitHub链接" target="_blank" class="download-btn github">🐙 GitHub仓库</a>
       </div>
       <p style="font-size: 0.85rem; margin-top: 0.5rem;">⚠️ 如链接失效，请在评论区留言反馈</p>
   </div>
   ```

3. **添加到首页**
   - 打开 `index.html`
   - 找到 `#app` 分类区域
   - 添加新卡片，`card-category` 使用 `app`

---

### 方式三：发布其他资料（other/）

1. **创建新文件**
   - 进入 `other/` 文件夹
   - 命名规则：`资料名.html`

2. **复制模板内容**
   - 使用通用 HTML 结构
   - 根据内容类型添加相应的说明和下载链接

3. **添加到首页**
   - 打开 `index.html`
   - 找到 `#other` 分类区域
   - 添加新卡片，`card-category` 使用 `other`

---

## 📝 首页卡片配置说明

每个卡片包含以下字段：

| 字段 | 说明 | 示例 |
|------|------|------|
| `href` | 链接到详情页 | `tutorial/xxx.html` |
| `card-image` | 卡片图标（emoji或图标） | `📖`、`🎮`、`🎨` |
| `card-category` | 分类样式 | `tutorial`、`app`、`other` |
| `card-title` | 文章标题 | 20字以内 |
| `card-desc` | 简短描述 | 50字以内 |
| `date` | 发布日期 | `2026-03-25` |
| `author` | 作者名 | `海斯` |
| `comments` | 评论数 | `0条评论` |

---

## 🔧 维护注意事项

### 1. 更新现有文章
- 直接编辑对应的 HTML 文件
- 修改后提交即可自动更新

### 2. 删除文章
1. 删除对应的 HTML 文件
2. 从 `index.html` 中移除对应的卡片
3. 提交更新

### 3. 修改分类
- 如需调整文章分类，移动文件到对应文件夹
- 修改 `index.html` 中的链接路径
- 修改卡片分类样式类名

### 4. 添加新的图片/文件
- 可在根目录创建 `images/` 文件夹存放图片
- 引用路径：`images/图片名.jpg`

### 5. Giscus 评论区
- 评论区配置在 `data-repo="haisi-ai/blogs"`
- 确保 GitHub 仓库 `haisi-ai/blogs` 已开启 Discussions
- 评论数据自动同步到 GitHub Discussions

---

## 🚨 常见问题

### Q: 新发布的文章访问 404？
**A**: 检查链接路径是否正确：
- 主页引用：`href="tutorial/文章名.html"`
- 详情页返回主页：`href="../index.html"`

### Q: CSS 样式不生效？
**A**: 检查样式表引用路径：
- 主页：`<link rel="stylesheet" href="css/style.css">`
- 子页面：`<link rel="stylesheet" href="../css/style.css">`

### Q: 下载链接失效怎么办？
**A**: 
1. 更新资源文件中的下载链接
2. 在评论区回复用户，提供新链接

### Q: 如何添加新的分类？
**A**: 
1. 在 `index.html` 添加新的 `section` 区域
2. 在导航栏添加新的菜单项
3. 创建对应的文件夹存放文件

---

## 📦 部署说明

本网站基于 GitHub Pages 部署，更新代码后自动生效。

1. **首次部署**
   ```bash
   git clone https://github.com/haisi-ai/blogs.git
   cd blogs
   # 添加所有文件
   git add .
   git commit -m "初始化网站"
   git push
   ```

2. **开启 GitHub Pages**
   - 仓库 Settings → Pages
   - Source 选择 `main` 分支
   - 点击 Save

3. **绑定自定义域名**（可选）
   - 在 Pages 设置中输入 `haisi.cc`
   - 在域名服务商添加 CNAME 记录指向 `haisi-ai.github.io`

---

## 📄 许可证

本站内容仅供学习交流使用，所有资源版权归原作者所有。

---

## 📧 联系方式

- 邮箱：haisi@mail.com
- GitHub：[@haisi-ai](https://github.com/haisi-ai)
- 网站：[haisi.cc](https://haisi.cc)

---

*最后更新：2026年3月25日*
```


