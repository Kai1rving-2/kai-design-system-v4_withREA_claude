# 在另一台电脑使用 KAI 独行侠模板

仓库：<https://github.com/Kai1rving-2/kai-design-system-v4_withREA_claude>

在线预览：<https://kai1rving-2.github.io/kai-design-system-v4_withREA_claude/designs/mavericks-colors/>

## 在 Codex 中安装并调用

在另一台电脑的 Codex 中发送：

```text
请用 skill-installer 安装 https://github.com/Kai1rving-2/kai-design-system-v4_withREA_claude/tree/main/skills/kai-mavericks
```

这是仓库内的独立 Skill 目录，所需模板全部在该目录内；只安装这个子目录即可，无需本机旧目录或另一个设计 Skill。出现 `kai-mavericks` 后调用：

```text
$kai-mavericks 用 B 午夜蓝，帮我做一个包含项目列表、搜索和状态筛选的工作台。
```

也可以指定「A 冷银蓝」或「C 钢蓝银」。Codex 支持显式 `$` 调用和按描述选择 Skill；安装后若尚未出现，可以重新打开 Codex。参考 [OpenAI 官方 Skills 文档](https://learn.chatgpt.com/docs/build-skills)。

## 直接下载模板，无需安装 Skill

先克隆仓库（或在 GitHub 使用 Code → Download ZIP）：

```sh
git clone https://github.com/Kai1rving-2/kai-design-system-v4_withREA_claude.git
cd kai-design-system-v4_withREA_claude
python3 skills/kai-mavericks/scripts/create-project.py ../my-mavericks --palette B
cd ../my-mavericks
python3 -m http.server 4311
```

打开 <http://localhost:4311/>。新项目拥有自己的样式、运行库、字体和主题，不需要 Node.js、npm 或网络请求。Python 3 用于复制项目和提供本地 HTTP；Windows 可将 `python3` 换为已安装的 `py -3`。脚本拒绝覆盖已存在的目标目录。

本地 HTTP 支持外置 JSX 的浏览器编译，因此按上述方式打开，不直接双击 `index.html`。自由画布的跨刷新保存依赖宿主桥接；普通浏览器里把它作为临时排版工具。收藏也是演示状态。

如果使用其他能读取 Skill 的 Agent，可安装完整 `skills/kai-mavericks` 文件夹，或让 Agent 读取其中 `SKILL.md`；不要只复制 SKILL.md 而遗漏 assets。已有 HTML/React 产品可以复用主题与控件，不必整体替换技术栈。

## 更新与维护

源仓库更新：

```sh
git pull --ff-only
```

独立安装的 Skill 需要从同一 GitHub 子目录更新。已经生成的产品目录属于你的项目，不会被更新命令自动覆盖；保留产品自己的修改。

维护者修改根系统或 `designs/mavericks-colors` 后执行 `npm run build`，生成 `skills/kai-mavericks/assets/template`；`npm run skill:check` 检查其与源码一致。`template-manifest.json` 记录版本、三套主题默认值及每项资源的 SHA-256，不携带作者电脑路径。

本模板是个人 Dallas 配色探索，不是官方球队品牌资产；具体业务、数据请求、权限、保存与恢复仍由产品实现。
