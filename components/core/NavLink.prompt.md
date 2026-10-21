导航链接：常态中性（text-2，hover 浅灰底），选中态落 blue + 8px 圆角浅底，不使用下边线。
```jsx
<NavLink href="/" active>索引</NavLink>
<NavLink href="/projects">项目</NavLink>
```
替代手写 .kai-nav-links；active 时默认带 aria-current="page"。页面内区块导航可传入 aria-current="location"；inactive 时不会保留 aria-current。
