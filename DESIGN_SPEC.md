# 丁世贤个人网站 · 设计规范

> 整体风格：**手账本 / Bullet Journal / Sketchnote（视觉笔记）**
> 技术栈：Vite 5 + React 18 + 纯 CSS（无 UI 框架），lucide-react 图标库
> 核心视觉特征：淡灰网格纸底 + 蓝/红/黄三色笔记笔 + 手绘抖动边缘 + 手写/打印体混排
> 参考页面：**Hero 首页**、**教育背景章节**（已完成，作为全站点标杆）

---

## 一、背景与纸张

### 1.1 网格计算纸（Grid Paper）—— 全站统一背景

页面背景采用「计算纸/坐标纸」风格，双层淡灰色细线方格 + SVG 纸张纤维噪声，**所有章节/区块直接使用网格纸作为底色**，不再在 section 上叠加白色背景。

```css
body {
  background-color: var(--paper);  /* #f3f3f0 */
  background-image:
    linear-gradient(rgba(140,138,130,0.25) 1px, transparent 1px),   /* 横线 */
    linear-gradient(90deg, rgba(140,138,130,0.25) 1px, transparent 1px), /* 竖线 */
    url("data:image/svg+xml,...fractalNoise...");                    /* 纤维颗粒 */
  background-size: 24px 24px, 24px 24px, 200px 200px;
}
```

- **网格线颜色**：`rgba(140,138,130,0.25)`（淡灰色）
- **网格间距**：24px × 24px
- **纸底色**：`#f3f3f0`（淡灰米色，**禁止**使用高饱和暖黄色）
- **纤维纹理**：SVG `fractalNoise` 滤镜叠加，模拟真实纸张质感

**硬性规则**：section 级别元素**禁止**设置 `background` 覆盖网格纸，所有内容默认直接书写在网格纸上。

### 1.2 纸张层级色阶（半透明）

上层卡片/浮层使用半透明白色，让底层网格隐约透出，强化"贴在纸上"的层次感：

| 变量 | 色值 | 用途 |
|------|------|------|
| `--paper` | `#f3f3f0` | 页面主背景（网格纸底） |
| `--paper-2` | `rgba(247,247,244,0.82)` | 导航栏等上层区域（半透明透网格） |
| `--paper-3` | `rgba(250,250,248,0.72)` | 卡片间隙/分隔层 |
| `--paper-card` | `rgba(251,251,250,0.80)` | 便签卡片底色 |

> 注：抽屉（ProjectDrawer）、搜索弹窗（SearchModal）等浮层内部使用实色 `#fbfbfa` / `#f7f7f4`，确保浮层内容清晰可读。

---

## 二、颜色规范（四色体系）

全站仅使用 **黑 / 蓝 / 红 / 黄** 四种颜色，模拟真实手账笔记的工具限制。

### 2.1 核心色板

| 角色 | 变量 | 色值 | 隐喻 | 使用场景 |
|------|------|------|------|----------|
| **标题黑** | `--ink` / `--black` | `#000000` | 黑色签字笔/马克笔 | h1 标题、Logo 文字、学位/专业名、3D 主标题描边 |
| **正文蓝笔** | `--ink-body` / `--blue` | `#2b2295` (rgb 43,34,149) | 蓝色圆珠笔 | 所有正文小字、段落、列表、机构名、标签文字、研究方向 |
| **红笔强调** | `--accent` / `--red` | `#bb3942` (rgb 187,57,66) | 红色圆珠笔/红笔 | **克制使用**：红圈、红笔下划线、C9 印章、药丸红卡边框、和纸胶带 |
| **黄荧光笔** | `--hl-yellow-solid` / `--yellow` | `rgb(230,219,57)` | 黄色荧光笔 | 荧光笔涂抹底、Logo 方块背景、星星装饰、药丸黄卡 |

> ⚠️ 荧光笔色值已从旧版 `#decd5a` 更新为 `rgb(230,219,57)`（更亮更鲜活）。

### 2.2 半透明色（用于涂抹/胶带/阴影）

| 变量 | 色值 | 用途 |
|------|------|------|
| `--hl-yellow` | `rgba(230,219,57,0.48)` | 荧光笔涂抹底色（主层） |
| `--tape-yellow` | `rgba(230,219,57,0.35)` | 黄色和纸胶带 |
| `--tape-red` | `rgba(187,57,66,0.25)` | 红色和纸胶带 |

### 2.3 辅助灰度

| 变量 | 色值 | 用途 |
|------|------|------|
| `--ink-soft` | `#4a4488` | 次要文字（副标题、英文小字） |
| `--mute` | `#8a8898` | 辅助信息/打字机体日期/打字机体标题 |
| `--line` | `#c4c2ba` | 实线分隔线、卡片边框 |
| `--line-soft` | `#d6d4cc` | 虚线分隔线、弱化边框 |

### 2.4 章节主题色交替

章节使用蓝/红笔色交替节奏，通过 `data-theme` 属性控制：

```
教育背景 (blue) → 实习经历 (red) → 研究项目 (blue) → 联系方式 (red)
```

```css
section[data-theme="blue"] { --c: var(--blue);  --hl: var(--hl-yellow); --tape: var(--tape-yellow); }
section[data-theme="red"]  { --c: var(--red);   --hl: var(--hl-yellow); --tape: var(--tape-red); }
```

### 2.5 颜色使用硬性约束

1. **禁止**使用除黑/蓝/红/黄以外的彩色（移除旧版绿/紫/粉/橙/青/棕等多色彩铅配色）
2. **红笔不随便出现**：仅用于圈画/划线标记极少数核心重点，全站红笔标记控制在 1~3 处以内，不可用于普通文字着色，不可大面积使用
3. **荧光笔统一黄色**：所有高亮底色均为黄色 `rgb(230,219,57)`，不分色
4. **正文统一蓝色**：所有正文、列表、段落文字均为蓝笔色 `--ink-body`，不可出现红色正文
5. 选择文字高亮（`::selection`）使用黄荧光笔底色 + 黑字
6. Hero 区域的便利贴（`.hero-pill`）允许使用马卡龙淡彩底色（#dbe5f5 蓝 / #f5dbdb 粉 / #dcebd0 绿 / #f5eec2 黄），作为装饰贴纸而非正文内容

---

## 三、字体规范（五维分层）

### 3.1 字体栈

```css
/* 英文打印体：老式打字机 */
--font-print-en: 'Special Elite', 'Courier New', 'Courier', monospace;
/* 英文手写体：圆珠笔速写 */
--font-hand-en:  'Kalam', 'Caveat', 'Architects Daughter', cursive;
/* 中文标题粗体：站酷快乐体（仅 Hero 3D 大字使用） */
--font-display-cn: 'ZCOOL KuaiLe', 'Hannotate SC', sans-serif;
/* 中文章节标题：悠哉字体 Bold */
--font-title-cn: 'Yozai', 'PingFang SC', sans-serif;
/* 中文正文：悠哉字体 Regular */
--font-body-cn:  'Yozai', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
/* 中文打字机体：华文仿宋（配合 Special Elite 使用） */
--font-print-cn: 'STFangsong', 'FangSong', '仿宋', 'FangSong_GB2312', serif;
```

### 3.2 字体选择理由

| 层级 | 字体 | 来源 | 字重 | 风格描述 |
|------|------|------|------|----------|
| 主标题中文 | **ZCOOL KuaiLe** | Google Fonts | 400 | 可爱粗圆的马克笔手写 POP 体，仅用于 Hero 3D 大字 |
| 章节标题中文 | **Yozai Bold** | 本地托管 (`public/fonts/yozai/`) | 700 | 悠哉字体粗体，硬笔手写感，清秀有力 |
| 正文中文 | **Yozai Regular** | 本地托管 (`public/fonts/yozai/`) | 400 | 悠哉字体常规，硬笔手写楷书，类似真实笔记 |
| 章节序号/日期中文 | **华文仿宋 STFangsong** | macOS/Windows 系统自带 | 400 | 中文打字机体，配合 Special Elite 使用 |
| 英文打印 | **Special Elite** | Google Fonts | 400 | 老式打字机印刷体，带自然磨损感 |
| 英文手写 | **Kalam** | Google Fonts | 300/400/700 | 自然流畅的圆珠笔手写体 |

### 3.3 语义组合变量

| 变量 | 组合 | 典型用途 |
|------|------|----------|
| `--font-display` | print-en + display-cn | Hero 主标题（3D POP 字） |
| `--font-title` | print-en + title-cn | 章节大标题（教育背景/实习经历…） |
| `--font-body` | hand-en + body-cn | 正文段落、列表、机构名 |
| `--font-hand` | hand-en + body-cn | 与 body 相同，强调手写感（标签、小注释） |
| `--font-print` | print-en + print-cn | 打字机体标题/日期（教育背景标题、日期） |

### 3.4 字体应用对照（已实现部分）

| 元素 | 中文字体 | 英文字体 | 字重 | 颜色 | 字号 |
|------|----------|----------|------|------|------|
| Hero 主标题（姓名） | ZCOOL KuaiLe | — | 400 | 纸色填充+黑描边 | clamp(54px,9vw,96px) |
| Hero 英文副标题 | — | Special Elite | 400 大写 | `--ink-soft` | 16px |
| Hero 随笔正文 | Yozai | Kalam | 400 | `--ink-body` | clamp(15px,1.4vw,18px) |
| Hero 便利贴按钮 | Hannotate SC | Kalam | 700 | 黑字/红字 | 13px |
| 章节序号（/01—Education） | —（仅英文） | Special Elite | 400 大写 | `--mute` | 18px, letter-spacing 0.08em |
| **教育背景标题** | **STFangsong 仿宋** | Special Elite | 400 | `--mute` | **22px** + ps-typewriter 噪点滤镜 + 黄荧光笔底 |
| 其他章节 h2 默认 | Yozai Bold | Special Elite 序号 | 500~700 | `--ink` 黑 + 黄荧光笔 | clamp(28px,3vw,36px) |
| **学位/专业名（edu-degree/major）** | **Yozai Bold** | Kalam | 700 | `--ink` 黑 | clamp(20px,2.2vw,25px) |
| **日期（edu-date）** | **STFangsong 仿宋** | Special Elite | 400 | `--mute` | 14px + ps-typewriter 噪点滤镜 |
| 机构/学院名 | Yozai | Kalam | 400 | `--ink-body` 蓝 | 17px |
| 研究方向 | Yozai | Kalam | 400 | `--ink-body` 蓝 | 17px（与机构同级） |
| 标签（edu-tag） | — | Kalam | 400 | `--ink-body` 蓝 | 15px + 红笔 SVG 下划线 |
| 导航品牌名 | — | Special Elite | 400 | `--ink` 黑 | 26px |
| 导航链接 | Yozai | Kalam | 400 | `--ink-body` 蓝 | 13px |
| 实习/项目卡片正文 | Yozai | Kalam | 400 | `--ink-body` 蓝 | 14~15px |

### 3.5 CDN 引入

**Google Fonts**（index.html `<head>`）：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Kalam:wght@300;400;700&family=Caveat:wght@400;700&family=Architects+Daughter&family=ZCOOL+KuaiLe&family=ZCOOL+XiaoWei&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**悠哉字体**（Yozai）：本地自托管在 `public/fonts/yozai/`（Regular 400 / Medium 500 / Bold 700 三个字重，cn-font-split 分包 woff2，按 unicode-range 按需加载），由 index.html 以同源 `/fonts/yozai/.../result.css` 引入，不依赖境外 CDN，避免冷启动回退到系统楷体。

---

## 四、手绘效果滤镜（SVG）

全站通过 SVG filter 实现手绘边缘/噪点效果，定义在 index.html `<defs>` 中。

| 滤镜 ID | 效果 | 用途 |
|---------|------|------|
| `#ps-edge` | 强边缘抖动（强度 5） | Hero 主标题描边、便利贴边框、图标描边等粗线条 |
| `#ps-edge-soft` | 中边缘抖动（强度 ~3） | 荧光笔涂抹、红圈、波浪下划线、红笔标签线、C9印章、和纸胶带 |
| `#ps-edge-rough` | 极强抖动（强度 9） | 特殊粗粝手绘效果（备用） |
| `#ps-sketch` | 颗粒纹理（强度 6.5） | 排线纹理叠加 |
| `#ps-typewriter` | **墨粒噪点 + 边缘微抖** | **打字机体文字（教育背景标题、日期）** |
| `#ps-grain` / `#ps-paper` | 纸张纤维噪声 | 页面底纹 |

### 4.1 ps-typewriter 打字机滤镜（关键新增）

模拟老式色带打字机的着墨不均匀效果，由两步管线组成：

1. **墨粒缺失（speckle）**：`feTurbulence`（baseFrequency=1.4）生成高频噪点，经 `feColorMatrix` 阈值化为高对比度墨点，再用 `feComposite operator="out"` 在文字上**挖洞**——随机位置的墨水没有打上去，露出纸色
2. **边缘微抖（jitter）**：第二层 `feTurbulence`（baseFrequency=0.9）+ `feDisplacementMap scale=0.6`，给文字边缘增加 <1px 的不规则抖动

**用法**：`filter: url(#ps-typewriter);`，仅用于 Special Elite + 仿宋 组合的打字机体文字。

**用法**：在 CSS 中通过 `filter: url(#ps-xxx)` 应用。

---

## 五、涂鸦标记规范

涂鸦分三类：**黄色荧光笔涂抹**（标记关键词）、**红色笔迹**（圈画/划重点/标签下划线）、**散落装饰涂鸦**（背景小图标）。

### 5.1 🟡 黄色荧光笔（`.hl-text` / `.ps-hl`）

**隐喻**：做笔记时用荧光笔涂在文字上方高亮关键词。

**实现方式**：双层伪元素（::before + ::after），模拟真实荧光笔毛毡头来回涂画的纤维条纹质感。

```css
.hl-text {
  position: relative;
  color: inherit;
  padding: 0;
  isolation: isolate;
}
.hl-text::before, .hl-text::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: -4px; right: -4px;
  top: 6%; bottom: 10%;
  border-radius: 5px 3px 6px 4px / 3px 5px 4px 5px;
  transform: rotate(-0.8deg);
  background-color: rgba(230,219,57,0.48);
  /* 纤维条纹：竖向 repeating-linear-gradient 模拟毛毡头拖动 */
  background-image: repeating-linear-gradient(
    90deg,
    rgba(230,219,57,0.55) 0 1.5px,
    rgba(230,219,57,0.42) 1.5px 3px,
    rgba(230,219,57,0.52) 3px 5px,
    rgba(230,219,57,0.38) 5px 7px
  );
  filter: url(#ps-edge-soft);
  pointer-events: none;
}
/* ::after 为副笔触，旋转 +0.4° 错开，模拟来回涂画 */
.hl-text::after {
  transform: rotate(0.4deg);
  opacity: 0.6;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(230,219,57,0.48) 0 2px,
    rgba(230,219,57,0.32) 2px 4.5px,
    rgba(230,219,57,0.45) 4.5px 6px,
    rgba(230,219,57,0.28) 6px 8px
  );
}
```

**关键特征**：
- ✅ **不影响字间距**：`padding: 0`，色块通过绝对定位溢出
- ✅ **在文字下方**：`z-index: -1`，父元素 `isolation: isolate` 确保层叠正确
- ✅ **双层笔迹**：::before 主笔触（-0.8°）+ ::after 副笔触（+0.4°），微错开模拟来回涂画
- ✅ **纤维条纹纹理**：竖向 repeating-linear-gradient 模拟毛毡头拖动留下的条纹
- ✅ **仿笔迹形状**：不规则椭圆圆角（非正圆角矩形），微旋转
- ✅ **手绘边缘**：叠加 SVG `#ps-edge-soft` 抖动滤镜
- ✅ **颜色**：`rgb(230,219,57)`，主层不透明度 0.38~0.55，副层 0.22~0.48

**应用场景**：
- 所有章节大标题：教育背景、实习经历、研究项目、联系方式
- Hero 随笔关键词
- 职位标签（`.intern-role strong`）

### 5.2 🔴 红色笔迹

**隐喻**：用红色圆珠笔/红笔圈画或划线，标记极少数核心重点。

**使用原则（硬性约束）**：
- ❌ 不可用于普通文字着色
- ❌ 不可大面积使用
- ✅ 仅用于圈出/划出整段文字中最核心的 1~2 个重点
- ✅ 红笔颜色统一 `#bb3942`
- ✅ 必须有手绘感（SVG 曲线 + `ps-edge-soft` 抖动滤镜），禁止使用笔直的 `border-bottom` 直线

#### 5.2.1 红椭圆圈（`.mark-circle`）

用于圈出最核心的目标词。

```css
.mark-circle::after {
  content: '';
  position: absolute;
  left: -8px; right: -8px;
  top: -10px; bottom: -10px;
  border: 2.5px solid var(--red);
  border-radius: 50%;
  transform: rotate(-3deg);
  pointer-events: none;
  opacity: 0.8;
  filter: url(#ps-edge-soft);
}
```

**当前应用**：Hero 中核心目标「**AI 产品经理**」一词。

#### 5.2.2 红笔波浪下划线（`.mark-ul`）

通过 SVG 双贝塞尔曲线绘制，模拟红笔随手划波浪线。

```css
.mark-ul::after {
  content: '';
  position: absolute;
  left: -3px; right: -3px;
  bottom: -1px;
  height: 10px;
  background-image: url("data:image/svg+xml,...双贝塞尔波浪路径...stroke=%23bb3942...");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
  opacity: 0.85;
  filter: url(#ps-edge-soft);
}
```

**当前应用**：Hero 随笔中"计算机""设计""真的好用""设计思维""技术能力""现实问题"。

#### 5.2.3 红笔标签下划线（`.edu-tag::after`，教育背景专用）

用于教育标签（奖学金、荣誉等），双层 SVG 贝塞尔曲线模拟红圆珠笔快速划线：

- **主笔触**：2.4px 粗贝塞尔曲线，opacity 0.9，stroke-linecap="round"
- **副笔触**：1.2px 细偏移曲线，opacity 0.35，模拟墨水渗纸/重描效果
- 路径用 6 段贝塞尔曲线自然起伏，末端带上挑收笔
- 应用 `#ps-edge-soft` 抖动滤镜
- 标签本身微旋转交替：`-0.8°` / `+0.6°` / `-0.3°`，随标签一起旋转

#### 5.2.4 红笔装饰元素（非文字标记）

- **C9 印章**（`.c9-stamp`）：方形朱红印章，`2px` 红边框 + 红字 "C9"，30×30px，旋转 -6°，opacity 0.75，`#ps-edge-soft` 抖动
- **日期章**（`.hero-stamp`）：圆形红框印章，`2.5px` 边框，双层 inset box-shadow 模拟双线边框，旋转 12°
- **学校校徽印章**（`.edu-seal`）：PNG 图片（zju.png / ustc.png），绝对定位左上角，`mix-blend-mode: multiply` 正片叠底（盖在纸上的渗色感），opacity 0.58，统一旋转 -8°，尺寸 80×80px（移动端 60px），z-index:0 垫在正文下方

### 5.3 散落装饰涂鸦（背景层）

散落在章节留白处的手绘小图标，使用预定义的 SVG symbol（`#ps-i-book`、`#ps-pencil` 等），z-index:0 垫在内容下方，不遮挡文字。

**教育背景章节已实现的涂鸦清单**（9 个）：

| class | 图标 | 位置 | 旋转 | 颜色 | 尺寸 | 说明 |
|-------|------|------|------|------|------|------|
| `.ed-book` | 📖 书本 | 标题左上 | -12° | 蓝笔色 | 36px | 教育主题 |
| `.ed-pencil` | ✏️ 铅笔 | 右侧中部 | 25° | 蓝笔 50% | 34px | 学习工具 |
| `.ed-star1` | ⭐ 实心星 | ZJU 记录左侧 | -18° | 黄色 twinkle | 22px | 荣誉位置 |
| `.ed-star2` | ⭐ 实心星 | USTC 记录左侧 | 12° | 黄色 twinkle 延迟 | 20px | 荣誉位置 |
| `.ed-sparkle` | ✨ 闪光 | 标题右上 | 10° | 蓝笔 twinkle | 26px | 装饰 |
| `.ed-bulb` | 💡 灯泡 | 研究方向右侧 | -8° | 红色 60% | 30px | Idea/研究 |
| `.ed-heart` | ❤️ 爱心 | 右上角 | -15° | 红色 45% | 20px | 小装饰 |
| `.ed-check` | ✓ 对勾 | 左下角 | 8° | 蓝笔 50% | 26px | 成就 |
| `.ed-paperclip` | 📎 回形针 | 标题右上 | -20° | 蓝笔 45% | 28×34px | 手账文具 |

**涂鸦放置原则**：
1. **绝对定位**在 container 内（`position: absolute; z-index: 0; pointer-events: none`）
2. 透明度 0.45~0.7，不抢正文视觉
3. 每个涂鸦都有不同旋转角度（-20°~+25°），避免整齐划一
4. 星星/闪光可加 `twinkle` 闪烁动画（与 Hero 星星一致）
5. **移动端**（≤480px）隐藏 5 个较大的涂鸦（书、铅笔、回形针、爱心、对勾），只保留星星/闪光/灯泡三个小元素，并缩小尺寸
6. 内容容器设置 `position: relative; z-index: 1`，确保涂鸦在文字下方

### 5.4 正文强调规则

- 正文中的 `<strong>` 加粗文字：保持 **蓝笔色 + font-weight:700**，**不加**任何背景色/荧光笔/红笔装饰
- 正文中的 `<em>` 斜体文字：保持蓝笔色 + font-weight:600，不做特殊处理
- 标签（`.edu-tag`）使用红笔 SVG 下划线，文字本身保持蓝笔色
- 机构 logo（如 idi.png / ici.png）使用 `mix-blend-mode: multiply` 正片叠底，高度 22px，与文字基线对齐，opacity 0.85（hover 1.0）

---

## 六、主标题 3D POP 立体字（Hero 专用）

Hero 区域中文名「丁世贤」采用手绘 3D POP 立体字效果，模仿手账本上的手绘粗体字。

### 6.1 实现方案（三层叠加）

```css
.hero-copy h1 .h1-blue {
  color: var(--paper);                              /* 顶层：纸色填充 */
  -webkit-text-stroke: 3px #000;                    /* 粗黑描边 */
  font-family: 'ZCOOL KuaiLe', 'Hannotate SC', sans-serif;
  font-weight: 400;
  z-index: 2;
  paint-order: stroke fill;
  text-shadow:                                      /* 中层：7层阴影做厚度渐变 */
    1px 1px 0 #000, 2px 2px 0 #000,
    3px 3px 0 rgba(0,0,0,0.85), 4px 4px 0 rgba(0,0,0,0.70),
    5px 5px 0 rgba(0,0,0,0.55), 6px 6px 0 rgba(0,0,0,0.40),
    7px 7px 0 rgba(0,0,0,0.25);
  filter: url(#ps-edge);                            /* 手绘抖动边缘 */
}
.hero-copy h1 .h1-blue::before {
  content: attr(data-text);                         /* 底层：排线填充 */
  position: absolute; left: 0; top: 0;
  color: transparent; z-index: -1;
  background: repeating-linear-gradient(
    -45deg, #000 0 1.2px, transparent 1.2px 5px);   /* -45° 斜线排线 */
  -webkit-background-clip: text; background-clip: text;
  transform: translate(7px, 7px);                   /* 右下偏移 */
  filter: url(#ps-edge-soft);
}
```

| 层级 | 技术 | 效果 |
|------|------|------|
| 顶层（主文字） | `-webkit-text-stroke: 3px #000` + 纸色填充 + `#ps-edge` 抖动 | 粗黑描边空心字，手绘不完美边缘 |
| 中层（text-shadow） | 7 层向右下递进偏移，透明度 100%→25% | 3D 厚度阴影，近实远虚 |
| 底层（::before） | -45° repeating-linear-gradient + background-clip:text + 偏移 7px | 铅笔排线填充的立体侧面 |

---

## 七、章节布局模式（两种）

### 7.1 模式 A：直接写在纸上（教育背景为标杆）

**隐喻**：笔记直接写在网格本上，无卡片背景。适用于简洁信息块。

```
[章节序号 Special Elite 打印体]
[章节大标题 Yozai Bold + 黄荧光笔 + 打字机噪点]  ← 教育背景用此模式
┌──────────────────────────────────────────┐
│ [校徽印章-8° multiply]                    │
│  [学位/专业 Yozai Bold 黑] [日期 Special Elite 仿宋]
│    [学院logo] 学院名 蓝笔 17px [C9红印章]
│    [实验室logo] 实验室名 蓝笔 17px
│  研究方向：xxx 蓝笔 17px
│  [tag 红笔下划线] [tag] [tag]              │
└──────────────────────────────────────────┘
```

**CSS 特征**：
- 条目无背景、无边框、无圆角、无阴影
- 左侧 padding 48px（给校徽印章让位）
- 条目之间用 `margin-top: var(--space-4)` 自然分隔，**禁止**虚线/实线分隔线
- 校徽印章绝对定位左上角，`mix-blend-mode: multiply`，z-index:0
- 机构 logo 与文字 inline-flex 对齐，`mix-blend-mode: multiply`，可点击跳转

### 7.2 模式 B：便签纸卡片（实习/项目/联系方式）

**隐喻**：内容写在方形便签纸上，贴在网格本上。适用于详细经历/长文本。

**CSS 特征**：
- 半透明白底（`--paper-card` rgba）
- 1.5px 实线边框 `--line`
- 左侧 5px 彩色主题边（`--c` 变量，蓝/红交替）
- 圆角 8px
- 硬投影（2px 3px 0 叠加 4px 6px 0）
- 横线笔记本内纹（repeating-linear-gradient）
- 和纸胶带 ::before（76×20px，`--tape` 颜色，微旋转，交替左右位置）
- 日期药丸：白字+彩底（`--c`），旋转，带投影
- 微旋转 ±0.3°（奇偶交替）

---

## 八、组件视觉规范

### 8.1 便利贴按钮（`.hero-pill`，Hero 专用）

马卡龙淡彩底色的 Post-it 便利贴，作为 Hero 区域导航按钮。

- **边框**：2.8px 粗实线（主题色）
- **圆角**：大幅度不规则圆角
- **阴影**：三层递进硬投影
- **颜色**：四色马卡龙淡彩（蓝 #dbe5f5 / 粉 #f5dbdb / 绿 #dcebd0 / 黄 #f5eec2）+ 和纸胶带
- **文字**：中文 Hannotate SC 粗体 + 英文 Kalam
- **旋转**：每张便利贴独立微旋转角度
- ⚠️ 仅限 Hero 使用，其他章节导航/链接禁止使用此彩色样式

### 8.2 拍立得照片（`.polaroid`，Hero 专用）

- 白底宽边（白边宽度 8%~10%）
- 底部手写文字 "have a nice day!"
- 旋转 -3°，硬投影
- 周围 10 枚贴纸圆弧分布，固定角度数组 `[150, 134, 118, 102, 86, -14, -30, -46, -62, -78]`（相邻间距 16°，中间 100° 缺口避开手写文字）

### 8.3 日期章（`.hero-stamp`）

- 圆形（`border-radius: 50%`），`2.5px` 红边框
- 双层 inset box-shadow 模拟双线边框
- 旋转 12°，透明度 0.72
- 文字：Special Elite 打字机体
- 滤镜：`ps-edge-soft` 手绘抖动

### 8.4 导航栏

- 左侧：`DSX` 黄底方块（Monogram，36×36px，旋转 4°）+ 打字机体品牌名（26px 黑）+ 大写副标题（10px `--mute`）
- 右侧：手写体导航链接（Yozai 中文 + Kalam 英文，13px 蓝笔色 `--ink-body`），前有序号 `/ 0X —`（Special Elite 灰色）
- 半透明背景 `--paper-2`，backdrop-filter 轻微模糊
- hover 时 Monogram 背景变黄荧光笔色

### 8.5 机构 Logo（`.edu-org-logo`）

- 与机构名同行显示，inline-flex 垂直居中
- 高度 22px（按图片原比例缩放宽度）
- `mix-blend-mode: multiply` 正片叠底，与纸张融合
- opacity 0.85，hover 提升至 1.0
- logo + 文字整体作为 `<a>` 链接，hover 时文字变主题色、虚线下划线

---

## 九、Hero 贴纸圆弧布局算法

拍立得周围的兴趣贴纸采用固定角度圆弧分布：

- **角度数组**：`[150, 134, 118, 102, 86, -14, -30, -46, -62, -78]`（从左上方顺时针到左下方）
- **相邻间隙**：统一 16°
- **中间缺口**：约 100°（86° 到 -14° 之间），避开拍立得底部的 "have a nice day!" 手写文字
- **半径计算**：`computeGlobalRadius` 通过二分法在安全边距约束下求最大可行 R
- **布局切换**：视口宽度 ≤600px 启用纵向布局，`topSafePad` 增至 16-26px，缩放系数 kT 下限 0.30
- **层级**：默认 z:4，展开瞬间提升至 z:7（覆盖便利贴）
- **动画**："千手观音"式展开，每张贴纸沿径向飞出

---

## 十、硬性约束（不可违反）

1. **禁止**使用"Intern/实习生"相关职业标签（适配正职求职）
2. **禁止**回退到高饱和暖黄色背景，必须维持淡灰纸质感
3. **禁止**使用黑/蓝/红/黄四色以外的彩色作为主要视觉色（Hero 便利贴马卡龙淡彩除外，仅限 Hero）
4. **禁止**正文文字使用红色（红笔仅用于圈画/划线标记/印章/边框装饰）
5. **禁止**荧光笔使用 padding/margin 影响字间距，必须用绝对定位伪元素
6. **禁止**红笔大面积使用，全站红笔标记（不含红边框/红胶带）控制在 1~3 处文字标记以内
7. 中英文混排时，英文必须使用对应英文字体（Special Elite / Kalam），中文必须使用对应中文字体（Yozai / STFangsong）；打印体场景必须添加 STFangsong 作为中文回退
8. 保持手绘抖动边缘（SVG filter），不可过度光滑（禁止 `border-radius: 50%` 正圆、笔直 `border-bottom` 直线）
9. 章节 section 禁止设置白色背景覆盖网格纸
10. 教育背景模式条目之间**禁止**使用虚线/实线分隔线
11. 校徽/机构 logo 等图片装饰必须使用 `mix-blend-mode: multiply` 与纸张融合
12. 打字机体文字（标题/日期）配合 Special Elite 使用时，必须叠加 `#ps-typewriter` 噪点滤镜和 STFangsong 中文回退

---

## 十一、文件索引

| 文件 | 职责 |
|------|------|
| [index.html](react-cv/index.html) | 入口 HTML，Google Fonts CDN 引入，SVG filter/symbol 定义 |
| [src/index.css](react-cv/src/index.css) | 主样式：颜色/字体变量、布局、Hero/Section/Nav 样式、涂鸦标记类、教育/实习/项目/联系样式 |
| [src/pencil.css](react-cv/src/pencil.css) | pencil-sketch 组件库：SVG 滤镜、基础组件（ps-pill/ps-hl/ps-btn 等）、色板映射、悠哉字体 @font-face |
| [src/components/Hero.jsx](react-cv/src/components/Hero.jsx) | Hero 区域：3D 主标题、随笔文案（荧光笔/红圈）、便利贴导航、拍立得、贴纸圆弧、散落涂鸦 |
| [src/components/Nav.jsx](react-cv/src/components/Nav.jsx) | 导航栏：品牌区 + 手写导航链接 |
| [src/components/Education.jsx](react-cv/src/components/Education.jsx) | **教育背景章节（模式 A 标杆）**：校徽印章、C9 印章、机构 logo、研究方向、红笔标签、散落涂鸦 |
| [src/components/Internship.jsx](react-cv/src/components/Internship.jsx) | 实习经历章节（模式 B 便签卡片），富文本通过 dangerouslySetInnerHTML 渲染 |
| [src/components/Projects.jsx](react-cv/src/components/Projects.jsx) | 研究项目章节（模式 B 便签卡片） |
| [src/components/Contact.jsx](react-cv/src/components/Contact.jsx) | 联系方式章节（模式 B） |
| [src/components/ProjectDrawer.jsx](react-cv/src/components/ProjectDrawer.jsx) | 项目详情浮层（实色背景） |
| [src/components/SearchModal.jsx](react-cv/src/components/SearchModal.jsx) | 搜索弹窗（实色背景） |
| [src/components/Toast.jsx](react-cv/src/components/Toast.jsx) | 提示气泡（ink 黑底贴纸风格） |
| [src/data/resume.js](react-cv/src/data/resume.js) | 简历数据：教育/实习/项目信息（含 `<strong>` 标签、logo/link/c9 字段） |
| [src/img/](react-cv/src/img/) | 图片资源：zju.png / ustc.png（校徽印章）、idi.png / ici.png（机构 logo）、mini90.png（拍立得）、贴纸图片 |

---

*最后更新：2026-08-22（基于 Hero + 教育背景实际实现汇总）*
