# 甲骨文互动学习网站 🏺

一个现代化的中国甲骨文互动学习平台，展示汉字从甲骨文到现代汉字的演变历程。

## ✨ 功能特性

- 🔍 **智能搜索** - 支持按字符、含义、分类搜索甲骨文
- 📚 **丰富数据库** - 包含详细的字符演变历史和文化背景
- 🎨 **优雅设计** - 传统中式设计风格与现代界面完美结合
- 📱 **响应式布局** - 适配桌面和移动设备
- ⚡ **云端集成** - 支持 TCB 云数据库，实现数据动态管理
- 🎯 **分类筛选** - 按天文、自然、地理等类别浏览字符

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **样式方案**: Tailwind CSS + shadcn/ui
- **路由管理**: React Router
- **构建工具**: Vite
- **云服务**: 腾讯云开发 (TCB)
- **部署平台**: GitHub Pages

## 📦 安装与运行

```bash
# 克隆项目
git clone https://github.com/your-username/oracle-bone-script.git

# 进入项目目录
cd oracle-bone-script

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🌐 在线预览

访问 [GitHub Pages 部署地址](https://your-username.github.io/oracle-bone-script/) 体验完整功能。

## 📖 项目结构

```
src/
├── components/          # 可复用组件
│   ├── ui/             # 基础 UI 组件
│   └── custom/         # 自定义业务组件
├── pages/              # 页面组件
├── data/               # 静态数据
├── services/           # 服务层（TCB 集成）
├── hooks/              # 自定义 Hooks
└── utils/              # 工具函数
```

## 🎯 核心功能

### 字符展示
- 甲骨文字形展示
- 现代汉字对照
- 发音和含义说明

### 演变历史
- 完整的字符演变时间线
- 甲骨文 → 金文 → 小篆 → 现代汉字
- 历史背景和文化解释

### 互动学习
- 搜索和筛选功能
- 分类浏览体验
- 详细字符信息页面

## 🔧 配置说明

### 环境变量
创建 `.env` 文件配置 TCB 云开发：

```env
VITE_TCB_ENV_ID=your-tcb-env-id
VITE_TCB_REGION=ap-shanghai
```

### GitHub Pages 部署
项目已配置自动化部署，推送到 `main` 分支即可自动部署到 GitHub Pages。

### edgeone 的选择与运用
我选择了腾讯云 EdgeOne Pages 作为整个项目的一站式部署、加速及安全解决方案。，主要利用了它的三大功能：  
🚀1.我的项目代码完全托管在 GitHub (tuyiqing/oracle-bone-script) 上。EdgeOne Pages 完美地与我的 GitHub 仓库进行了集成，构建了一套完全自动化的持续集成与部署（CI/CD）流程。每当我完成一个新的功能或修复一个问题，只需将代码 git push 到 GitHub 的主分支。EdgeOne 就会自动将生成的 所有静态文件（HTML, CSS, JS, 图片等）部署到 EdgeOne 的全球边缘网络上。  
🚀2.EdgeOne Pages 的核心优势就是其强大的全球内容分发网络（CDN）。当我的网站通过 EdgeOne Pages 发布后，它的所有静态资源（例如甲骨文图片）被自动缓存到了遍布全球的边缘节点上。  
🚀3.EdgeOne Pages 自带了开箱即用的企业级安全防护，为我的网站筑起了一道坚固的防线。可以实现全站 HTTPS 加密，保障数据传输过程的安会，提升用户的信任度同时确保我的网站不会因为恶意攻击而瘫痪，时刻保护着这些珍贵的数字文化资产。  

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目！

## 📄 许可证

© 2025 甲骨文字典 - 探索汉字演变之美

---

**传承中华文化，弘扬汉字之美** ✨
