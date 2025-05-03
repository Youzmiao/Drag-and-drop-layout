# 相册拖拽项目

一个使用Vite、React和TypeScript构建的交互式相册拖拽应用。用户可以自由拖动卡片，拖拽松开后卡片将保持在当前位置。

## 📋 功能特点

- **卡片拖拽**：按住卡片可以自由拖动到任意位置
- **视觉反馈**：拖拽过程中提供平滑的视觉反馈，包括轻微的旋转和缩放效果
- **美观界面**：卡片采用精美的阴影和圆角设计
- **全屏交互**：整个页面空间都可以作为拖拽区域
- **响应式**：适应各种屏幕尺寸

## 🚀 技术栈

- **React 18**：用于构建用户界面的JavaScript库
- **TypeScript**：增强的JavaScript，提供类型系统
- **Vite**：现代前端构建工具，提供快速的开发体验
- **CSS3**：使用现代CSS功能实现视觉效果

## 🖥️ 预览

![应用预览](https://example.com/screenshot.png)

## 📦 安装与运行

### 前提条件

- Node.js 16+
- npm 或 yarn

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/your-username/drag-cards.git
cd drag-cards
```

2. 安装依赖
```bash
npm install
# 或
yarn
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 `http://localhost:5173`

## 🏗️ 构建项目

```bash
npm run build
# 或
yarn build
```

构建后的文件将放在 `dist` 目录中。

## 📝 项目结构

```
src/
├── App.tsx        # 主应用组件，包含卡片数据和状态管理
├── App.css        # 应用级样式
├── components/    # 组件目录
│   ├── Card.tsx   # 卡片组件，实现拖拽功能
│   └── Card.css   # 卡片样式
├── main.tsx       # 应用入口文件
└── style.css      # 全局样式
```

## 🔍 实现细节

### 拖拽实现

卡片拖拽通过以下步骤实现：

1. 监听鼠标按下事件，记录初始偏移量
2. 使用React的useEffect钩子添加全局鼠标移动和松开事件监听
3. 在鼠标移动时计算新位置并更新状态
4. 在鼠标松开时移除事件监听

### 视觉反馈

- 使用CSS transform属性实现拖拽时的缩放和旋转效果
- 通过transition实现平滑的过渡动画
- 使用z-index确保当前拖拽的卡片始终显示在顶层

## 🤝 贡献

欢迎提交问题和功能请求！

## 📄 许可证

MIT 