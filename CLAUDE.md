# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

恋爱类型测试网站，纯前端单页应用。30 道量表题，基于依恋理论（ECR）评估 6 个维度，输出 8 种恋爱类型结果，含 ECharts 雷达图/柱状图可视化。

## 启动方式

任意静态服务器即可运行：

```bash
npx serve .          # 或 python -m http.server 8080
```

唯一外部依赖是 ECharts CDN（`echarts@5.5.0`），无构建工具、无 npm、无框架。

## 架构

三个文件，数据驱动渲染，三个 section 通过 `display: none/block` 切换：

- **`index.html`** — 三个 section：`#landing-section` / `#test-section` / `#results-section`
- **`style.css`** — CSS 变量定义色板（粉紫渐变暖色调），响应式断点 680px / 480px
- **`script.js`** — 全部逻辑，核心数据结构：
  - `DIMENSIONS[6]` — 维度定义（anxiety / avoidance / possessive / romantic / independence / trust）
  - `QUESTIONS[30]` — 每题含 `dim`（维度 ID）和 `text`，5 级 Likert（完全符合→完全不符合 = 5→1 分）
  - `LOVE_TYPES[8]` — 结果类型，每个含 `name` / `emoji` / `tagline` / `oneLiner` / `analysis` / `advice[]`
  - `answers` 对象 — 核心状态 `{questionId: score}`，纯内存不持久化

## 关键函数

- `startTest()` → `initDotGrid()` + `showQuestion(0)` — 进入答题
- `showQuestion(index)` — 动态渲染题目文本 + 5 个 Likert 选项按钮
- `selectOption(qIndex, score, btn)` — 记录答案，180ms 后自动跳转；全部答完时调用 `showResults()`
- `calculateScores()` — 原始分 5-25 → 归一化 0-100
- `determineLoveType(scores)` — 以 anxiety + avoidance 组合为主判断依恋象限，辅以其他维度修正
- `showResults()` — 渲染结果页全部内容，初始化 ECharts 雷达图和柱状图

## 类型判定逻辑

```
焦虑>55 && 回避>55 → 纠结矛盾型
焦虑>55 && 回避≤45 → 恋爱脑上头型（浪漫≥60 则升级为甜宠浪漫型）
焦虑≤45 && 回避>55 → 回避型依恋（独立≥65 则升级为独立独美型）
焦虑≤40 && 回避≤40 && 信任≥55 → 安全感满格型
占有欲≥60 → 强占有欲型
浪漫≥60 → 甜宠浪漫型
独立≥60 → 独立独美型
默认 → 理性冷静型
```

## 样式体系

CSS 变量定义在 `:root`，主色调为粉紫暖色渐变（`--pink: #FF6B9D` / `--purple: #7C5CFC`）。桌面端容器 max-width 860~920px，移动端三等卡片变纵向堆叠。
