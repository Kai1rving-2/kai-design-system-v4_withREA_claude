# KAI Learning HTML · 小型实验

这里是独立于 KAI Design System 核心的学习材料实验。现有「CSS 盒模型」最小模板之外，新增根据 COMP3015 三份讲义各制作的一个交互案例；直接复用 v4.3 样式，使用原生 HTML/CSS/JavaScript，不依赖框架、构建工具或 CDN。

## 运行

在仓库根目录执行：

```sh
python3 -m http.server 8000
```

浏览器打开 `http://localhost:8000/examples/learning-html/`，从首页进入三个案例。页面通过 `../../styles.css` 直接使用仓库中的 Design System，并通过同目录的 `learning.css` / `cases.css` 补充实验布局。无外部请求，页面可直接从文件系统打开（保留仓库内相对路径）。

## 案例与来源

| 页面 | 来源讲义 | 互动重点 |
| --- | --- | --- |
| `case-01.html` | DCN26-1c.pdf，第 9–11 页 | 单工、半双工、全双工的通信方向 |
| `case-02.html` | DCN26-2c.pdf，第 60、64–67 页 | HTTP → TCP → IP → 802.11 的逐层封装示意 |
| `case-03.html` | DCN26-3c.pdf，第 115–129、145 页 | 讲义例题：将 17.12.14.0/26 分成 32、16、16 个地址 |

三个案例是从讲义挑选的概念演示，并非三份讲义的完整翻译。原有盒模型页仍在首页下方，用来对照最小模板。PDF 文件保留在用户的原始位置，不复制到仓库。

## 实验边界

- 只修改 `examples/learning-html/` 内的示例文件；不改 Design System 的 token、组件、规范和生成文件。
- 优先使用语义化 HTML 与原生交互；借用已有 `.kai-*` 样式时，行为和无障碍语义仍由示例负责。
- 当前验证的是**模板可运行**，不是完整课程、课程框架或可发布的 Skill。
- `skills/kai-learning-html/` 仅为未来整理成 Codex Skill 的独立预留目录；待有更多实践案例后再提炼正式指引。
