# 部署到GitHub Pages指南

本文档说明如何将相册拖拽项目部署到GitHub Pages。

## 自动部署（推荐）

项目包含GitHub Actions工作流配置，可以自动将应用部署到GitHub Pages。

### 设置步骤

1. **将代码推送到GitHub仓库**

    ```bash
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/your-username/drag.git
    git push -u origin main
    ```

2. **在GitHub仓库中启用GitHub Pages**

   - 进入仓库设置 (Settings)
   - 找到"Pages"选项
   - 在"Build and deployment"部分，选择"GitHub Actions"作为源

3. **触发部署**

   - 当推送代码到main分支时，会自动触发部署
   - 也可以在"Actions"标签页手动触发工作流

4. **访问部署的网站**

   部署完成后，您的应用将会在以下URL可用：
   ```
   https://your-username.github.io/drag/
   ```

## 手动部署

如果您想手动部署，可以使用gh-pages工具。

1. **安装依赖**

    ```bash
    npm install
    ```

2. **使用gh-pages部署**

    ```bash
    npm run deploy
    ```

   这会运行构建过程并将生成的文件部署到gh-pages分支。

3. **配置GitHub Pages**

   - 进入仓库设置 (Settings)
   - 找到"Pages"选项
   - 在"Build and deployment"部分，选择"Deploy from a branch"
   - 选择"gh-pages"分支作为源

## 注意事项

1. **仓库名称配置**
   
   如果您的仓库名称不是"drag"，请确保在`vite.config.js`中更新repository变量：

   ```javascript
   const repository = 'your-repo-name'
   ```

2. **域名配置**
   
   如果您使用自定义域名，在public目录中添加CNAME文件：

   ```
   your-domain.com
   ```

3. **私有仓库**
   
   GitHub Pages在免费账户上只能用于公共仓库。对于私有仓库，需要GitHub Pro订阅。 