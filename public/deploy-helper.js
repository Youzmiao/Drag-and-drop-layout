// GitHub Pages部署帮助脚本
// 在页面加载时执行，确保资源路径正确
(function() {
  // 获取脚本标签
  var scripts = document.getElementsByTagName('script');
  
  // 检查当前URL是否在GitHub Pages上
  if (window.location.hostname.includes('github.io')) {
    // 提取仓库名称
    var pathParts = window.location.pathname.split('/');
    var repoName = pathParts[1]; // 第一个部分应该是仓库名称
    
    // 修正资源路径
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (script.src && !script.src.includes('http')) {
        // 如果是相对路径，添加正确的前缀
        if (script.src.startsWith('/')) {
          script.src = '/' + repoName + script.src;
        }
      }
    }
    
    // 修正样式表路径
    var links = document.getElementsByTagName('link');
    for (var j = 0; j < links.length; j++) {
      var link = links[j];
      if (link.href && !link.href.includes('http') && link.rel === 'stylesheet') {
        if (link.href.startsWith('/')) {
          link.href = '/' + repoName + link.href;
        }
      }
    }
    
    console.log('GitHub Pages路径已修正，仓库名称:', repoName);
  }
})(); 