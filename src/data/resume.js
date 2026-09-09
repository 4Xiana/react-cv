// 所有简历内容数据集中管理
import imgFramework from '../img/framework.jpg'
import imgComparison from '../img/comparison.jpg'
import imgProblem from '../img/problem.jpg'
import imgAaaiFramework from '../img/aaai-framework.png'
import imgAaaiRobustness from '../img/aaai-robustness.png'
import imgAaaiImaging from '../img/aaai-imaging.png'
import imgVrTeaser from '../img/vr-teaser.jpg'
import imgVrWpm from '../img/vr-wpm.jpg'
import imgVrEr from '../img/vr-er.jpg'
import imgVrNasa from '../img/vr-nasa.jpg'
import imgVrExpert from '../img/vr-expert.jpg'
import imgTrizWorkflow from '../img/triz-workflow.png'
import imgTrizOverview from '../img/triz-overview.png'
import imgTrizViz from '../img/triz-visualization.png'
import imgPaceSystem from '../img/pace-system.jpg'
import imgPaceTeaser from '../img/pace-teaser.jpg'
import imgPaceEfficiency from '../img/pace-efficiency.png'
import imgPaceQuality from '../img/pace-quality.png'
import imgPaceControl from '../img/pace-control.png'
import imgPaceCsi from '../img/pace-csi.png'
import imgPaceNasa from '../img/pace-nasa.png'
import imgPaceApproach from '../img/pace-approach.png'
import imgPaceInteraction1 from '../img/pace-interaction1.png'
import imgPaceInteraction2 from '../img/pace-interaction2.png'
import imgHuaweiRestore from '../img/huawei-restore.png'
import imgHuaweiDerive from '../img/huawei-derive.png'
import imgJdRubrics from '../img/jd-rubrics.png'

export const PROFILE = {
  name: '丁世贤',
  nameEn: 'Shixian Ding',
  role: 'AI Product Manager',
  contacts: [
    { icon: 'mail', label: 'sxding@zju.edu.cn', href: 'mailto:sxding@zju.edu.cn', color: 'blue', rotate: -1.5 },
    { icon: 'phone', label: '188-8891-8650', copy: '18888918650', color: 'salmon', rotate: 2 },
    { icon: 'message-circle', label: 'sin_yay', copy: 'sin_yay', color: 'green', rotate: -2 },
  ],
};

export const EDUCATION = [
  {
    degree: '工学硕士',
    major: '人机交互',
    orgs: [
      { text: '浙江大学人工智能学院', c9: true },
      {
        inline: [
          { text: '浙江大学国际设计研究院', logo: 'idi', link: 'http://www.idi.zju.edu.cn' },
          { text: '智能创意与交互实验室', logo: 'ici', link: 'http://www.icilab.cn' },
        ],
      },
    ],
    date: '2024.09 — 至今',
    research: '生成式 UI · Design2Code · 智能设计方法 · Human-AI 交互',
    tags: ['综测 1/41', '国奖提名', '零跑汽车奖学金 TOP 5%', '优秀研究生干部'],
  },
  {
    degree: '工学学士',
    major: '计算机科学与技术 · 金融学双学位',
    orgs: [
      { text: '中国科学技术大学计算机科学与技术学院', c9: true },
    ],
    date: '2020.09 — 2024.06',
    research: '',
    tags: ['GPA 3.78/4.3（前 15%）', '华瑜奖学金 TOP 2%', '校优秀毕业生'],
  },
];

export const INTERNSHIPS = [
  {
    company: '字节跳动',
    companyEn: 'ByteDance',
    dept: '国际化商业产品与技术-商业合规',
    role: 'AI 产品经理实习生',
    focus: 'AI 广告审核',
    date: '2026.08 — 至今',
    keywords: ['平台产品设计','数据体系建设', '原型验证','协同落地'],
    summary: '参与内容安全审核 Agent 的产品建设，负责判例与 Memory 机制的产品化落地，将线上误判案例转化为 Agent 可调用的外部记忆。',
    logo: 'bytedance',
    sections: [],
  },
  {
    company: '京东零售',
    companyEn: 'JD Retail',
    dept: '搜推业务部',
    role: 'AI 产品经理实习生',
    focus: 'AI 搜索',
    date: '2026.04 — 2026.08',
    keywords: ['AI产品设计', '模型评测', '策略优化', '协同推进'],
    summary: '负责京东主站AI搜索产品的迭代优化，通过回复形态设计和模型生成策略优化，提升AI搜索的回复质量与用户体验。',
    logo: 'jd',
    sections: [
      {
        title: 'AI 搜索产品形态设计',
        items: [
          '负责京东主站 <strong>AI 搜索</strong>产品的迭代优化，针对老版存在"回复模式单一、文本与商卡割裂、难以应对场景化需求"等问题进行方案重构。',
          '将 AI 文本与商卡<strong>混排</strong>以增强导购能力；基于典型 Query 抽样分析，设计适配不同意图的 <strong>8 类回复模式</strong>；针对信息稀疏的场景化需求设计<strong>引导式问答卡</strong>。',
          '累计完成 <strong>三个版本</strong>产品迭代，通过端到端内测，综合可用率提升约 <strong>38%</strong>。',
        ],
        detail: { type: 'html', src: 'intern/jd-reply-modes.html', cta: '点我看演示台', wide: true },
      },
      {
        title: 'AI 生成内容评测与策略优化',
        items: [
          '负责 AI 生成内容的评测与策略优化，覆盖<strong>攻略、推荐理由、筛选项</strong>等多个模块。',
          '针对生成结果不稳定、问题难以定位的痛点，设计<strong>评测维度与问题分类体系</strong>，并沉淀自动化评测 Skill。',
          '以"推荐理由"模块为例，归纳出<strong>可用性、有效性、多样性、个性化</strong> 4 个大方向及 <strong>19 类细分问题</strong>，针对性制定优化策略，推动综合可用率由 <strong>48% 提升至 85%</strong>。',
        ],
        detail: { type: 'image', src: imgJdRubrics, caption: '"推荐理由"评测量规：4 个评测方向 · 19 类细分问题的判定标准与典型案例。' },
      },
    ],
  },
  {
    company: '华为',
    companyEn: 'Huawei',
    dept: '2012 实验室 UCD 中心',
    role: 'Agent工程师（校企合作）',
    focus: 'AI 辅助 UI 设计工具',
    date: '2025.03 — 2025.07',
    keywords: ['Image2Code', 'AI Workflow搭建', 'RAG'],
    summary: '负责 UI 设计平台 AI 插件的方案设计，围绕设计稿还原和创意衍生两个场景，定义产品功能并推动方案落地。',
    logo: 'huawei',
    sections: [
      {
        title: '规范化的参考UI还原',
        items: [
          'UI设计师常需从参考图片获取灵感，并基于参考内容进行修改。但参考图无法直接编辑，需还原成设计稿，人工还原费时费力。<strong>对LLM的能力边界进行测试</strong>，发现三个核心瓶颈：空间定位精度不足、复杂页面生成崩溃、无法遵守私有设计规范。',
          '<strong>结合场景提出优化方案</strong>，通过小模型辅助、分治生成和规则约束，补全了LLM的生成能力，生成页面满意率达 94%，同时实现2-5分钟的页面还原耗时，每年约为公司节省 700 Man-day。'
        ],
        detail: { type: 'image', src: imgHuaweiRestore, caption: '规范化参考 UI 还原：小模型辅助 · 分治生成 · 规则约束的整体方案架构。' },
      },
      {
        title: '区块级UI创意衍生',
        items: [
          'UI 设计师常面临"多出几版方案对比"的需求，手动制作变体需克服思维定势和重复劳动，耗时耗力，需要快速进行创意衍生的工具。',
          '针对此场景<strong>定义了产品功能</strong>，通过设计师访谈与设计资产走查，梳理出最常见的衍生维度（如布局结构、信息密度等）作为功能依据。使多方案产出周期从平均数小时缩短至分钟级，衍生方案采纳率约 83%，每年节省约 500 Man-day。'
        ],
        detail: { type: 'image', src: imgHuaweiDerive, caption: '区块级 UI 创意衍生：以衍生维度驱动的多方案生成流程。' },
      }
    ],
  },
  {
    company: '长鑫存储',
    companyEn: 'CXMT',
    dept: '信息技术研发部',
    role: '产品经理实习生',
    focus: 'AI 办公平台',
    date: '2023.11 — 2024.06',
    keywords: ['AI产品设计', 'AI Workflow', '竞品分析','协同落地'],
    summary: '负责公司内部 AI 辅助办公平台从 0 到 1 的设计、迭代与推广，落地了知识库智能阅读、代码助手等功能模块，推动大模型辅助芯片设计功能的预研，最终实现产品覆盖公司全员约 1.2 万人、运维期 DAU 稳定在 3000 左右。',
    logo: 'cxmt',
    sections: [
      {
        title: '产品功能设计与落地',
        items:[
          '通过竞品调研和内部用户访谈，明确用户需求，定义产品功能。',
          '以知识库功能为例，调研了智谱等通用AI平台及SciSpace等垂类工具，并结合试点部门对检索效率、权限隔离、答案可追溯与易于维护的需求，设计了知识库智能阅读功能。',
          '与设计、开发、算法团队协作，推动产品排期、落地、测试和走查，累计迭代四个版本。'
        ]
      },
      {
        title: '产品迭代优化',
        items:[
          '灰度上线后跟踪日活、点踩率等指标，发现术语理解不足是影响模型回答质量的主要问题之一。',
          '针对此问题，推动构建外挂术语库，并通过 RAG 与意图识别机制增强模型回答能力。',
          '优化后术语相关问题可用率提升约 <strong>45%</strong>。',
        ],
      }
    ],
  },
];

export const PROJECTS = [
  {
    id: 4,
    title: 'DesignCoder · 设计元数据驱动的 UI 代码生成',
    tags: ['Design2Code', 'GenUI', 'AI Workflow','Agentic Self-Correction'],
    badge: 'IST26 CCF-B',
    visualClass: 'pv1',
    visualText: 'DesignCoder',
    visualImg: imgFramework,
    frameworkCaption: '图 · 方法框架总览：UI 分组链 → 层级引导代码生成 → 视觉引导自修正。',
    subtitle: 'Hierarchy-aware and Self-correcting UI Code Generation with LLMs',
    cat: 'IST 2026 · CCF-B 期刊 · 学生三作',
    period: '2024.11 — 2025.03',
    kpis: [
    ],
    problem:
      '工业前端开发的输入不是平面截图，而是 Figma 等富含元数据的设计稿——图层树、样式 token、约束与变体都在其中。直接让 MLLM 吃这类设计稿，会撞上三堵墙：\n· [[上下文冗长嘈杂]]：注释图层、隐藏图层、原型帧、重复变体与碎片向量撑爆上下文，连 GPT‑4o 都会漏掉关键元素；\n· [[层级错位]]：设计时的图层树与运行时组件树并不一致，模型只能产出浅而畸形的组件结构；\n· [[样式保真不足]]：字体、间距、颜色等细粒度约束难以一致还原。',
    bgFigure: {
      src: imgProblem,
      caption: '图 · 直接将 MLLM 应用于设计稿的三类典型失败：(a) 冗余元数据撑爆上下文导致关键线索被遗漏；(b) 设计图层树与运行时组件树层级错位；(c) 样式保真不足，进度环等元素渲染变形。',
    },
    stages: [
      {
        n: '01',
        t: 'UI 分组链',
        en: 'UI Grouping Chain',
        d: '区域划分 → 语义抽取 → 层级构建，三步把嘈杂设计稿收敛成组件树。\n先把界面切分为功能区域以压缩冗长元数据，再让 MLLM 逐元素抽取语义，最终基于语义相似度[[重建面向代码的组件树]]。',
      },
      {
        n: '02',
        t: '层级引导代码生成',
        en: 'Hierarchy-Guided Generation',
        d: 'MLLM 沿组件树分治生成模块化结构代码（React），确定性规则引擎同时从元数据中精确抽取样式代码（CSS）。结构靠模型推理、样式靠规则抽取，二者合并，[[兼顾结构合理与视觉保真]]。',
      },
      {
        n: '03',
        t: '视觉引导自修正',
        en: 'Vision-Guided Self-Correction',
        d: '编译渲染后做组件级「渲染图 vs 原始设计稿」比对。\n编译报错触发 Bug Fix，视觉差异触发 Code Fix，迭代修复缺失组件、布局错位与样式遗漏，[[让模型看见自己的错误并自我修正]]。',
      },
    ],
    setup: [
      { k: '数据集', v: '300 张高保真设计稿：100 张阿里 EGFE 专业数据集 ＋ 200 张 Figma 社区 58 个热门项目（娱乐 / 教育 / 健康 / 购物 / 旅行）' },
      { k: '对比基线', v: 'Prototype2Code、DeclarUI、DCGEN、LayoutCoder，以及 GPT‑4o / Claude‑3.5 / LLaVA 直接生成' },
      { k: '评测维度', v: '视觉保真度：MSE / CLIP / SSIM；代码结构性：TreeBLEU / Container Match / Tree Edit Distance' }
    ],
    tables: [
      {
        caption: '表 1 · 自动评测：相对最强基线（SOTA）的提升',
        headers: ['维度', '指标', 'Figma 集', 'EGFE 集'],
        rows: [
          ['视觉保真', 'MSE ↓', '−37.6%', '−24.3%'],
          ['视觉保真', 'CLIP ↑', '+9.5%', '+4.6%'],
          ['视觉保真', 'SSIM ↑', '+6.0%', '+10.3%'],
          ['代码结构', 'TreeBLEU ↑', '+30.2%', '+17.8%'],
          ['代码结构', 'Container Match ↑', '+29.3%', '+22.5%'],
          ['代码结构', 'Tree Edit Distance ↓', '−28.5%', '−19.8%'],
        ],
        note: '六项指标在两个数据集上[[全部最优]]，全面超越所有专用系统与通用大模型基线。',
      },
      {
        caption: '表 2 · 用户研究：资深前端工程师评分（5分制）',
        headers: ['评估维度', 'DesignCoder', 'Prototype2Code'],
        rows: [
          ['代码可用度', '4.52', '3.62'],
          ['修改效率', '4.20', '3.38'],
          ['可读性', '4.75', '4.41'],
          ['可维护性', '4.32', '3.41'],
        ],
        note: '5 名 5 年以上资深 React Native 工程师、单盲、100 组配对样本；修改效率与可维护性全部提升 [[p<0.001]]。',
      },
    ],
    figures: [
      {
        src: imgComparison,
        caption: '图 · 与 DeclarUI / Prototype2Code 的生成效果对比：蓝框代表正确识别的组件，黄框代表滥用 <div> 标签，红框代表渲染错误。',
      },
    ],
    conclusion:
      '本文提出 DesignCoder，一种层级感知、视觉引导自修正的方法：让 MLLM 经由分阶段多模态推理，从嘈杂的设计稿元数据中恢复复杂嵌套结构，自动生成静态单屏 UI 代码。\n实验表明：对比专用系统（Prototype2Code、DeclarUI 等）与通用 MLLM（GPT‑4o、Claude‑3.5），方法在[[视觉保真度与代码结构相似度上全面领先]]。生成代码[[更易读、易维护、易精修]]，能有效支撑离线设计交付、减少工程师返工。',
    tech: ['Design2Code','GenUI','AI Workflow', 'Agentic Self-Correction'],
    links: [
      { label: 'IST 论文', icon: 'file-text', href: 'https://doi.org/10.1016/j.infsof.2026.108214' },
      { label: '代码仓库', icon: 'github', href: 'https://github.com/AnonymousResearcher530/DesignCoder' },
    ],
  },
  {
    id: 3,
    title: 'PACE · 渐进式 App 协同创作环境',
    tags: ['GenUI', 'AI 辅助渐进式设计', '人机交互设计'],
    badge: 'ICIC26 CCF-C',
    visualClass: 'pv1',
    visualText: 'PACE',
    coverImg: imgPaceSystem,
    visualImg: imgPaceApproach,
    frameworkCaption: '图 · 三种范式对比（旧范式 vs PACE 新机制）：上排——单次抽卡式提示让人困在局部修补、整页孤立生成导致跨屏头部不一致、目标/结构/视觉全塞进一条冗长提示造成认知过载；下排——[[约束逐条累积]]逐步锁定设计目标、[[有机体模块一次生成、跨屏复用]]保证系统一致、[[分层提示]]把「面向谁/有什么功能 → 信息架构 → 视觉风格」拆到不同认知层。',
    bgFigure: {
      src: imgPaceTeaser,
      caption: '图 · 一次性生成 vs 渐进式协同：左——模糊提示直出整套界面，遭遇问题（C1）、结构（C2）、维度（C3）三重复杂度，导致高认知负荷与失控；右——PACE 以 P1 累积问题探索、P2 生成粒度解耦、P3 认知层级分解三原则，收敛到具体且系统一致的设计。',
    },
    subtitle: 'Setting the PACE: A Progressive App Co-creation Environment for Complex App Design',
    cat: 'ICIC 2026 · CCF-C 会议 · 学生一作',
    period: '2025.7 — 2026.03',
    kpis: [
    ],
    problem:
      '现有 GenUI 工具（Google Stitch、Uizard、Figma Make 等）普遍是「一句话 → 整套高保真界面」的[[一次性黑盒生成]]，很难生成准确的界面，又容易造成设计固化和信息过载。核心原因是 AI 的工作方式，和 UI 设计的复杂性不匹配：\n· 问题复杂度 C1：新手初期只能写出模糊意图，基于不够清楚的prompt，模型只能给出训练数据的「概率平均」——[[通用、平庸、不贴合具体需求]]。\n· 结构复杂度 C2：App 是多屏联动的系统，一次性整体生成的成果[[系统性差，极易出现不一致，且难以迭代修改]]。\n· 维度复杂度 C3：功能逻辑、信息架构、视觉风格被压平在同一张图里，用户被迫「多线程思考」，在抽卡式返工中[[失去对设计链路的控制]]。',
    stages: [
      {
        n: '01',
        t: '累积式问题探索',
        en: 'Cumulative Problem Exploration (P1)',
        d: '不急于出图：先用结构化需求阶段把模糊意图转化为明确约束，持久维护[[设计简报（Strategy）与功能清单（Scope）]]。\n系统显式记住全部约束并持续指导生成，[[防止模型过早开始设计，从而收敛到平庸的设计产出]]。',
      },
      {
        n: '02',
        t: '有机体级解耦生成',
        en: 'Decoupling of Generation Granularity (P2)',
        d: '借鉴原子设计理论，把生成粒度锚定在[[「有机体」层级]]（如导航栏、记忆流模块）——比整屏更易局部优化，比按钮/输入框更具独立语义。\n各模块在无限画布上独立生成、精化再组装成屏，[[便于局部修改，不会引发全局连锁崩溃]]。',
      },
      {
        n: '03',
        t: '五层渐进演化与约束传播',
        en: 'Decomposition of Cognitive Layers (P3)',
        d: '依 Garrett 用户体验五要素，生成沿[[功能逻辑 → 信息架构 → 低保真线框 → 高保真界面]]逐层具象化，任一层都可修改与探索，并可以[[层级联动]]，确保跨层结果一致。',
      },
    ],
    implementation: {
      fig: {
        src: imgPaceSystem,
        caption: '图 · PACE 系统界面（双面板协同布局）：左侧持久化问题空间——(a) Strategy 层记录目标用户与核心价值、(b) Scope 层以卡片动态维护功能清单、(c) 对话 Agent 把自然语言指令翻译为定向修改；右侧无限画布为方案空间——有机体节点、低保真屏与高保真屏逐层生成并装配，连线表示组装关系。',
      },
      video: {
        src: `${import.meta.env.BASE_URL}videos/pace-demo.mp4`,
        caption: '演示视频 · PACE 完整协同流程：从模糊意图出发，先在问题空间累积约束，再在画布上逐层生成有机体、线框与高保真界面，跨层修改自动级联同步。',
      },
      flows: [
        {
          src: imgPaceInteraction1,
          caption: '图 · 问题空间交互流：(a) 输入模糊 brief「AI 日记 App，简单易用」后 Analyze，自动结构化为 Product Strategy（目标用户 / 核心价值 / 设计目标）；(b) 用口语补充「更年轻、帮他们留住记忆…」一键 Update，简报即时改写；(c) Gen Features 生成层级功能清单（视觉记忆流、AI 故事洞察等可展开子功能）；(d–f) 勾选、内联修改、Apply——[[约束逐条累积，问题空间持续持久化]]。',
        },
        {
          src: imgPaceInteraction2,
          caption: '图 · 解空间跨层交互流：(a) 全局导航等有机体支持删除/再生与实时预览；(b) 将有机体 Compose 组合成屏，低保真线框即时呈现；(c–d) 设定视觉风格（色彩 / 形质 / 字体三系统）后 Gen Hi-fi 渲染高保真界面；(e–g) 在高保真层直接提修改时，系统识别跨层影响，弹出 [[Cascading Update Required]] 级联对话框——业务逻辑层与 IA 结构层的改动方案逐项列出，Confirm & Execute All 后定向重建，实现上下游双向同步。',
        },
      ],
    },
    setup: [
      { k: '被试与设计', v: '16 名新手设计师（8 男 8 女，平均 21.8 岁；UI/UX 经验均 <1 年、不熟悉 Figma）；[[被试内设计 + 拉丁方]]平衡工具与任务顺序' },
      { k: '对照与任务', v: '对照工具选 Google Stitch，与 PACE 同为 [[Gemini 3 Pro]] 基座；\n 两个结构同构的复杂任务（AI 日记 App、时间管理 App），均含 300 词标准 brief、强制「AI+」非标准业务逻辑、要求产出 3~7 个关键屏，每任务计时 30 分钟' },
      { k: '评测体系', v: '客观数据：5 名研究员标注录屏，按「操作-等待-观察」三态编码统计屏幕数/操作次数/操作时长；\n 双盲专家评分：3 位资深从业者（2 名 UI/UX 设计师 + 1 名产品经理）依 ISO 25010 四维度进行评分（5分制）；\n 主观数据：用三个问卷度量系统在控制感、创意支持、使用负荷上的影响（[[CSI 创意支持指数、NASA-TLX 负荷、AME 控制感框架]]）' },
      ],
    figures: [
      {
        src: imgPaceEfficiency,
        caption: '图 · 生产效率对比：单屏平均耗时 [[86.0s vs 118.4s（p=0.023）]]，总操作时长 375s vs 620s；操作次数更多（11.4 vs 8.4）而单次操作更短（38.1s vs 111.6s）——高频低成本的敏捷交互取代了「抽卡式」长提示。',
      },
      {
        src: imgPaceQuality,
        caption: '图 · 双盲专家评分（3 位资深专家，ISO 25010 四维度）：[[系统一致性 3.85 vs 3.23（p=0.001）]]显著领先，功能性呈提升趋势（p=0.071）；美观度与新颖性无显著差异。',
      },
      {
        src: imgPaceControl,
        caption: '图 · 感知控制（AME 框架 8 题）：控制手段（Q1 p=0.001）与控制结果（Q2 p<0.001、Q5 p=0.004）显著更强，[[修订阶段优势最明显（Q8 p=0.002）]]；创作主导感 Agency（Q3/Q6）无显著差异。',
      },
      {
        src: imgPaceCsi,
        caption: '图 · 创意支持指数 CSI：总分 [[79.4 vs 64.4（p=0.002，d=0.96）]]，探索、愉悦、投入值得、协作四个子维度显著领先；沉浸感与表达力无显著差异——细粒度中间产物分散了部分注意力。',
      },
      {
        src: imgPaceNasa,
        caption: '图 · NASA-TLX 任务负荷：总负荷 3.05 vs 3.72（边缘显著 p=0.083），努力程度与绩效自评更优；但负荷来源不同——基线耗在「评估与返工的无助感」，PACE 则把认知负荷[[分散到各个阶段]]，体力需求略高（拖拽节点比写提示更繁琐）。',
      },
    ],
    conclusion:
      'PACE 把复杂人造物设计理论操作化为三条原则——[[累积式问题探索、生成粒度解耦、认知层级分解]]，将黑盒一次性生成重构为设计师可介入、可回溯的渐进协同过程。\n16 名新手的被试内实验表明：PACE [[显著提升感知控制与创意支持，单屏效率提高约 27%，专家盲评的系统一致性显著领先]]；行为日志显示用户「主动精修」的意愿更强，也进行了更充分的功能探索。\n研究同样诚实揭示了渐进范式的张力：中间产物可能带来信息过载，且[[控制手段的增加并不绝对带来创作主导感]]，这可能和系统框架的定义权相关。',
    tech: ['Human-AI Co-creation', 'GenUI', 'React Flow', 'Gemini 3', 'User Study'],
    links: [
      { label: '论文链接', icon: 'file-text', href: 'https://doi.org/10.1007/978-981-92-3397-7_47' },
      { label: '代码仓库', icon: 'github', href: 'https://anonymous.4open.science/r/PACE-B22D/' },
    ],
  },
  {
    id: 1,
    title: '不规则医疗时序数据的序列-图像联合建模',
    tags: ['多变量时序数据', '自监督学习', '多模态联合表征'],
    badge: 'AAAI25 CCF-A',
    visualClass: 'pv1',
    visualText: 'MedSSL',
    visualImg: imgAaaiFramework,
    frameworkCaption: '图 · 方法框架总览： 序列分支负责缺失值插补与序列特征学习，图像分支将时间序列转换为多种图像，并通过预训练的 Swin Transformer 提取视觉特征。两类特征经融合形成联合表征，并通过三种自监督学习目标进行优化，最终用于下游分类。',
    subtitle: 'Integrating Sequence and Image Modeling in Irregular Medical Time Series Through Self-Supervised Learning',
    cat: 'AAAI 2025 · CCF-A 会议 · 学生二作',
    period: '2024.06 — 2024.10',
    kpis: [
    ],
    problem:
      '临床医疗时间序列（ICU 监护、可穿戴活动识别）天生不规则：采样间隔忽长忽短、传感器随时脱落、记录频繁中断，[[真实缺失率常达 60%~95%]]，严重影响下游任务。\n现有解决方法主要分为两派，各有局限：\n· 序列派（GRU‑D、Raindrop 等）：用循环网络对缺失序列本身建模，[[长于时序依赖，但忽略了整体模式，且对插补的依赖易积累误差]]；\n· 图像派（ViTST 等）：把序列画成图再交给视觉模型，[[长于捕捉全局结构，但对稀疏数据敏感]]。\n两类表征展现出了一定的互补性质，但此前从未被真正联合利用。',
    stages: [
      {
        n: '01',
        t: '序列编码器 · 对抗插补',
        en: 'Adversarial Imputation Encoder',
        d: '生成器（4 层 BiRNN）借助 time‑lag 衰减矩阵 δ 感知距上次观测的时间间隔，[[边插补缺失值、边编码时序依赖]]。\n判别器（5 层）区分真实值与插补值，以对抗训练逼出更可信的补全；重构损失，[[弃用 MSE、改用 NT‑Xent 对比损失]]，让表征对缺失模式更鲁棒。',
      },
      {
        n: '02',
        t: '图像编码器 · 六类时序成像',
        en: 'Time-Series Imaging Encoder',
        d: '把每条多变量序列转译为六类图像：折线图、频谱图、格拉姆角和/差场（GASF/GADF）、马尔可夫转移场、递归图，分别刻画趋势、频率、相位相关、状态转移与递归结构。\n再由 [[ImageNet‑21K 预训练的 Swin Transformer]]（patch=4，window=7）提取视觉表征。',
      },
      {
        n: '03',
        t: '联合表征 · 双自监督融合',
        en: 'Contrastive & Clustering Fusion',
        d: '两种自监督策略把双视角拧成一股绳。\n带 margin 的[[序列‑图像对比损失]]拉近同一样本的跨模态表征、推远不同样本；[[跨 batch K‑means 聚类损失]]迫使两种模态在聚类结构上保持一致。\n最终得到泛化性更强的联合表示，供下游分类。',
      },
    ],
    setup: [
      { k: '数据集', v: 'PAM（人体活动识别，17 特征 / 600 时间步 / 8 类，缺失率 60%，5333 样本）\nP12（ICU 住院监护，36 特征 / 215 时间步 / 2 类，缺失率 88.4%，11988 样本）\nP19（脓毒症早期预测，34 特征 / 60 时间步 / 2 类，缺失率 94.9%，38803 样本）' },
      { k: '对比基线', v: 'GRU‑D、SeFT、CARD、Raindrop、PrimeNet、ContiFormer、ViTST 共 [[7 个 SOTA]]，覆盖序列建模与时序成像两条路线' },
      { k: '评测指标', v: 'PAM 采用 Accuracy / Precision / Recall / F1；P12、P19 采用 AUROC / AUPRC.\n另以 [[leave‑sensors‑out]]（传感器整列脱落）与 [[leave‑samples‑out]]（样本随机缺失）两类协议加压评测鲁棒性' },
      { k: '实现细节', v: 'PyTorch 2.4.0 + CUDA 12.4，单卡 RTX 3090；图像统一缩放至 384×384；P12/P19 训练 8 个 epoch、PAM 训练 40 个 epoch' },
    ],
    tables: [
      {
        caption: '表 1 · 主结果：三个临床数据集上相对次优基线的提升',
        headers: ['数据集（任务）', '指标', '次优 SOTA', '本文', '提升'],
        rows: [
          ['PAM · 活动识别', 'Accuracy ↑', '95.2（ViTST）', '98.3', '+3.1'],
          ['PAM · 活动识别', 'F1 ↑', '95.9（ViTST）', '98.5', '+2.6'],
          ['P12 · ICU 监护', 'AUROC ↑', '85.1（PrimeNet）', '86.0', '+0.9'],
          ['P12 · ICU 监护', 'AUPRC ↑', '49.3（PrimeNet）', '50.4', '+1.1'],
          ['P19 · 脓毒症预测', 'AUROC ↑', '89.3（ViTST）', '91.6', '+2.3'],
          ['P19 · 脓毒症预测', 'AUPRC ↑', '53.8（ViTST）', '59.6', '+5.8'],
        ],
        note: '全部 8 项指标均为最优；[[缺失越严重，优势越明显]]——缺失率 94.9% 的 P19 上，AUPRC 较次优基线高出 [[5.8 个百分点]]。',
      },
      {
        caption: '表 2 · 消融实验：各组件贡献（PAM 数据集）',
        headers: ['模型配置', 'Accuracy', 'Precision', 'Recall', 'F1'],
        hlCols: [],
        rows: [
          ['仅图像分支', '95.4', '96.5', '95.4', '95.9'],
          ['仅序列分支', '93.3', '94.4', '93.6', '94.0'],
          ['序列分支（MSE 重构）', '92.5', '93.8', '93.4', '93.5'],
          ['双分支简单拼接', '95.7', '96.7', '96.1', '96.5'],
          ['＋ 跨模态对比学习', '96.8', '97.6', '97.4', '97.5'],
          ['＋ 跨 batch 聚类', '96.9', '97.4', '97.0', '97.3'],
          ['完整模型（默认）', '98.3', '98.7', '98.4', '98.5'],
        ],
        note: '对比学习与聚类分别带来 +1.0 / +0.8 的 F1 增益；重构损失从 MSE 换成 NT‑Xent 对比损失后再涨 0.5%——[[双分支与两种自监督策略缺一不可]]。',
      },
    ],
    figures: [
      {
        src: imgAaaiRobustness,
        caption: '图 · 缺失鲁棒性加压测试（PAM）：leave‑sensors‑out 与 leave‑samples‑out 两种协议把缺失率从 10% 推到 50%，本文方法性能衰减最平缓；[[50% 传感器脱落时各项指标仍保持在 80% 以上]]，大幅领先 ViTST 与 Raindrop。',
      },
      {
        src: imgAaaiImaging,
        caption: '图 · 六种时序成像方式在 PAM 上的单图分类表现：[[折线图最强]]（F1 ≈ 98.5）、递归图次之，马尔可夫转移场最弱——不同成像捕捉的结构模式互补，框架因此保留全部六类联合建模。',
      },
    ],
    conclusion:
      '本文[[首次把序列建模与图像建模两条路线联合起来]]，应对不规则临床时间序列分类：序列编码器以对抗插补刻画时序依赖，图像编码器以六类时序成像 + Swin Transformer 捕捉视觉模式，再由对比学习与聚类两种自监督策略融合为统一表征。\n在 PAM、P12、P19 三个真实临床数据集上，方法[[全面超越 7 个 SOTA 基线]]；在传感器脱落、样本缺失等极端场景下，[[鲁棒性优势进一步拉大]]。',
    tech: ['Self-Supervised Learning', 'Multimodal', 'Irregular Time Series', 'Swin Transformer', 'Adversarial Imputation'],
    links: [
      { label: 'AAAI 论文', icon: 'file-text', href: 'https://doi.org/10.1609/aaai.v39i15.33737' },
      { label: '代码仓库', icon: 'github', href: 'https://github.com/zju-d3/AAAI25-Irregular-Medical-Time-Series' },
    ],
  },
  {
    id: 2,
    title: 'TRIZ-GPT · LLM 增强的创新问题求解',
    tags: ['AI Workflow', 'LLM应用', 'Prompt Engineering'],
    badge: 'IDETC24 设计学B类',
    visualClass: 'pv1',
    visualText: 'TRIZ-GPT',
    visualImg: imgTrizWorkflow,
    frameworkCaption: '图 · TRIZ-GPT 工作流：沿「具体问题 → TRIZ 问题 → TRIZ 解 → 具体解」经典范式展开四步——问题分析、参数映射、矛盾分析、方案推理；矛盾分析阶段采用思维链（CoT）提示，方案推理阶段采用少样本（Few-shot）提示。',
    bgFigure: {
      src: imgTrizOverview,
      caption: '图 · 研究总览：构建 A/B 两套 TRIZ 案例集 → 设计 LLM 增强工作流 → 提示策略量化评估与机械工程案例验证。',
    },
    subtitle: 'TRIZ-GPT: An LLM-Augmented Method For Problem-Solving',
    cat: 'ASME IDETC/CIE 2024 · 设计学 B 类会议 · 学生二作',
    period: '2023.11 — 2024.03',
    kpis: [
    ],
    problem:
      'TRIZ（发明问题解决理论）源自对跨领域专利的系统分析，理论认为发明问题的解法是有限的，因此可以从过往的发明中抽象出规律，再将抽象的规律应用到新的场景。用TRIZ解决问题的核心范式是把「具体问题」抽象为「TRIZ 问题」、找出解决特定的「抽象问题」的「抽象解」，再映射回「具体解」。\n 但[[TRIZ工具抽象，使用难度很高]]：40 个发明原理高度概括（如「嵌套娃娃」「预先缓冲」），从原理到落地机制全靠设计者自行联想，掌握耗时、门槛高。\n· 传统 CAI 软件与专利语义网络只能提供参考刺激，不能直接生成可落地方案；全自动系统又把设计者排除在推理过程之外。\n· LLM 虽然可以生成完整的方案，但直接让 LLM 自由作答虽知识广博，却[[缺乏 TRIZ 的系统性与过程可控性]]。',
    stages: [
      {
        n: '01',
        t: '问题分析与参数映射',
        en: 'Problem Analysis & Mapping',
        d: '设计师输入情境描述，LLM 先[[归纳出问题参数]]，再映射到 39 个标准 TRIZ 工程参数；设计师筛选关键参数后进入下一步。\n这两步对推理要求不高，基础角色定位提示即可获得可用结果。',
      },
      {
        n: '02',
        t: '矛盾分析 · CoT 提示',
        en: 'Contradiction Analysis',
        d: 'LLM [[将工程参数组织为技术矛盾对]]并解释矛盾关系，每次聚焦一对矛盾，给出 TRIZ 推荐的发明原理。\n量化评估显示[[思维链提示召回率最高（0.691）]]，88.2% 的案例在 CoT 下至少一半矛盾参数推理一致。',
      },
      {
        n: '03',
        t: '方案推理 · Few-shot 提示',
        en: 'Solution Reasoning',
        d: 'LLM 依据选定的发明原理与问题情境，[[推理生成具体解决方案]]；少样本提示（3 个教材经典例）输出结构稳定、token 更省。\n84 个案例的生成方案与原文解[[余弦相似度均超过 0.82]]。',
      },
    ],
    setup: [
      { k: 'TRIZ 案例集', v: '案例集 A：37 个经典案例（2023 年 4 月前，覆盖产品设计、机械、制造、可持续、人因、服务 6 大领域）；案例集 B：10 个 2023 年 4 月后新案例，位于 GPT-4 训练集之外，共 47 例' },
      { k: '模型与参数', v: 'GPT-4 为实验组模型：矛盾分析；GPT-3.5-turbo 作对照' },
      { k: '评估方法', v: '矛盾分析：以文献人工标注的矛盾对为正样，计算召回率 / 精确率；方案推理：text-embedding-ada-002 计算生成方案与原文解的余弦相似度' },
      { k: '案例研究', v: '机械工程领域管道机器人设计（减少电机数量、适应不同管径），应用原理「1-分割」与「11-预先缓冲」；每模型每原理生成 10 个方案，人工提取机制关键词，Word2Vec 嵌入 + UMAP 降维可视化语义分布' },
    ],
    tables: [
      {
        caption: '表 1 · 四种提示策略评估（GPT-4，案例集 A）',
        headers: ['提示策略', '矛盾分析 Recall', '矛盾分析 Precision', '方案推理 余弦相似度'],
        hlCols: [],
        rows: [
          ['基础提示', '0.675', '0.259', '0.829'],
          ['思维链 CoT', '0.691', '0.310', '0.823'],
          ['少样本 Few-shot', '0.245', '0.333', '0.824'],
          ['CoT + Few-shot', '0.247', '0.298', '0.824'],
        ],
        note: '矛盾分析以[[召回率为主指标]]（重在覆盖文献中的矛盾对），CoT 最高（0.691）入选；方案推理四策略相似度均超 0.82、差异不显著，Few-shot 因[[输出结构化、token 更省]]入选；二者组合并无叠加增益。',
      },
      {
        caption: '表 2 · GPT-4 vs GPT-3.5（案例集 B，训练集外 10 例）',
        headers: ['提示策略', 'GPT-3.5 Recall', 'GPT-3.5 Precision', 'GPT-4 Recall', 'GPT-4 Precision'],
        hlCols: [],
        rows: [
          ['基础提示', '0.400', '0.357', '0.544', '0.331'],
          ['思维链 CoT', '0.400', '0.328', '0.544', '0.327'],
          ['少样本 Few-shot', '0.304', '0.483', '0.288', '0.400'],
          ['CoT + Few-shot', '0.383', '0.513', '0.275', '0.383'],
        ],
        note: '任务越复杂、模型差距越明显：GPT-4 在 CoT/基础提示下[[召回率 0.544 vs 0.400]]，推理出的矛盾对数量更多（案例平均含 5.5 对），为设计师提供更广探索空间；GPT-3.5 有 [[2/10 次未按要求给出参数编号]]，GPT-4 则始终规范。',
      },
    ],
    figures: [
      {
        src: imgTrizViz,
        caption: '图 · 管道机器人案例的方案语义可视化（Word2Vec 嵌入 + UMAP 降维）：红=原始论文方案、绿=GPT-4、蓝=GPT-3.5；圆点为「1-分割」原理、十字为「11-预先缓冲」原理。放大区可见 GPT-4 精准呼应原文关键词 [[flexible]] 与 [[spring-loaded]]，GPT-3.5 未命中；LLM 方案整体探索了比原文更广的语义空间。',
      },
    ],
    conclusion:
      'TRIZ-GPT 把 TRIZ「具体问题 → TRIZ 问题 → TRIZ 解 → 具体解」的经典范式与 LLM 的知识库、推理能力结合，[[显著降低 TRIZ 的使用门槛与认知负担]]，同时保留设计师对流程的控制。\n47 个案例的量化评估给出明确的提示策略选择：[[矛盾分析用 CoT、方案推理用 Few-shot]]；训练集外案例上 GPT-4 的召回率与输出规范度均优于 GPT-3.5。\n管道机器人案例进一步表明，GPT-4 生成的方案[[与原始高水平解高度契合、并覆盖更广的策略空间]]——面对抽象的发明原理，LLM 能主动提示具体的实现机制。',
    tech: ['LLM', 'TRIZ', 'Prompt Engineering', 'Chain-of-Thought', 'Few-shot'],
    links: [{ label: 'IDETC 论文', icon: 'file-text', href: 'https://doi.org/10.1115/DETC2024-143163' }],
  },
  {
    id: 5,
    title: 'LLM 辅助 VR 文本输入',
    tags: ['人机交互设计', 'LLM应用', 'VR'],
    badge: 'IEEE VR24 CCF-A',
    visualClass: 'pv1',
    visualText: 'VR+LLM',
    visualImg: imgVrTeaser,
    frameworkCaption: '图 · VR 原型与三种 LLM 辅助模式示意：(a) 打字过程示意：双食指在虚拟键盘上空中打字，选句 → 选辅助模式 → 输入 → 请求推荐 → 采纳 → 修正 → 提交；(b) 任务界面示意：灰为上文、橙为用户输入、绿为 LLM 推荐。',
    video: {
      src: `${import.meta.env.BASE_URL}videos/vr-demo.mp4`,
      caption: '演示视频 · Oculus 中的实际输入流程：双食指徒手打字，LLM 实时给出补全/续写/成句推荐，用户一键采纳或修正后提交。',
    },
    subtitle: 'Supporting Text Entry in Virtual Reality with Large Language Models',
    cat: 'IEEE VR 2024 · CCF-A 会议 · 学生三作',
    period: '2023.07 — 2023.10',
    kpis: [
    ],
    problem:
      '在 VR 里连贯打字一直是件苦差事：输入检测不准、虚拟键盘反馈差，输入效率远不及物理世界。已有的解法，如：优化键盘布局、追踪实体设备、眼动/头动等免手交互，均有局限，要么[[效率始终追不上真实打字]]，要么[[额外引入空间与设备约束]]。\n而 LLM 强大的上下文理解与文本生成能力，有潜力被用于辅助 VR 文本输入。能不能让用户[[少击键、甚至只给关键词，就由模型补全整句话]]？',
    stages: [
      {
        n: '01',
        t: '简化拼写 · 词级容错',
        en: 'Simplified Spelling',
        d: '对齐「词」层面的可预测性：用户只需敲出残缺拼写（甚至只打辅音，如 "Wh m bro jhn bcm a tnger"），LLM 即可[[容错补全为正确单词]]。\n认知负担最轻，适合逐字转写场景。',
      },
      {
        n: '02',
        t: '内容预测 · 语法结构级续写',
        en: 'Content Prediction',
        d: '对齐「语法结构」层面：句子写到一半（"Have you heard wh…"），模型[[沿语法结构续写出完整后半句]]，用户一键采纳。',
      },
      {
        n: '03',
        t: '关键词成句 · 句子级生成',
        en: 'Keyword-to-Sentence',
        d: '对齐「句子」层面：用户只输入若干关键词（"graduate computer science, front-end position"），模型[[结合对话上下文扩展为得体完整句]]。\n自由度最高，适合邮件写作、社交对话等创作型任务。',
      },
    ],
    setup: [
      { k: '原型系统', v: '基于 Oculus VR 的徒手打字原型：双食指直接点按虚拟 QWERTY 键盘；界面分任务面板与 LLM 推荐区，LLM 采用 GPT-3.5' },
      { k: '被试与设计', v: '22 名被试（19~26 岁，均无 VR 文本输入经验），被试内设计，条件顺序拉丁方平衡，每种模式均有 ≥15 分钟训练；另有 7 名被试参与连续 5 天延长实验' },
      { k: '实验任务', v: '三个办公场景典型任务：[[文本誊写]]、[[模拟对话]]、[[邮件写作]]，覆盖从逐字抄录到自由创作的输入需求' },
      { k: '评测指标', v: '输入速度 ATS / 理想速度 IATS（WPM）、节省击键比例 SK、修正/未修正错误率 CER/NCER、主客观预测准确率 OPA/SPA；问卷含 NASA-TLX 负荷、SUS 可用性、VRSQ 晕动症' },
    ],
    tables: [
      {
        caption: '表 1 · 三种辅助方法的效果（新手用户，跨任务平均）',
        headers: ['辅助方法', '作用层级', '击键节省 SK', '效率提升', '预测准确率 OPA'],
        hlCols: [],
        rows: [
          ['简化拼写 SS', '词级', '16.4%', '21.4%', '96.9%'],
          ['内容预测 CP', '语法结构级', '49.9%', '74.0%', '89.4%'],
          ['关键词成句 K2SG', '句子级', '43.7%', '76.3%', '88.1%'],
        ],
        note: '关键前提：三种方法的错误率与纯手动输入[[无显著差异]]（CER p=0.485）——省下的击键，不以更高错误率为代价。',
      },
      {
        caption: '表 2 · 场景偏好：各任务中三种方法被选用的比例',
        headers: ['任务场景', '简化拼写 SS', '内容预测 CP', '关键词成句 K2SG'],
        hlCols: [],
        rows: [
          ['文本转写', '88%', '8%', '4%'],
          ['模拟对话', '26%', '26%', '48%'],
          ['邮件写作', '21%', '5%', '74%'],
        ],
        note: '任务越自由、越需要创作，用户越倒向句子级生成；内容预测因[[需频繁手动触发、打断思路]]而在三个场景中都最受冷落。',
      },
    ],
    figures: [
      {
        src: imgVrWpm,
        caption: '图 · 三个任务的输入速度（WPM）：LLM 辅助下 ATS 全面显著提升——[[转写 +16.9%、对话 +72.7%、邮件 +72.6%]]（均 p<0.001）；若剔除网络延迟，理想速度 IATS 提升更达 22.7% / 115.7% / 96.2%。',
      },
      {
        src: imgVrEr,
        caption: '图 · 错误率与预测准确率：三种方法的修正/未修正错误率与手动输入无显著差异；简化拼写的客观预测准确率达 [[96.9%]]，另两种方法虽略低（约 88%~89%），用户仍可用少量修正换取大幅提速。',
      },
      {
        src: imgVrNasa,
        caption: '图 · NASA-TLX 任务负荷：心理负荷 9.87 vs 11.32、体力负荷 10.05 vs 13.45（[[p<0.001]]），时间需求、努力程度、挫败感等维度全面下降；系统可用性 SUS 51.4 vs 46.0（p=0.003），晕动症也更轻。',
      },
      {
        src: imgVrExpert,
        caption: '图 · 连续 5 天延长实验（7 名被试）：熟练后三种方法的输入速度再提升 [[19.1% / 38.6% / 41.8%]]，分别达到 12.8 / 15.9 / 22.2 WPM，击键节省进一步扩大至 21.5% / 56.2% / 57.7%——辅助收益随练习持续放大。',
      },
    ],
    conclusion:
      '本文[[首次将 LLM 引入 VR 文本输入]]，紧扣英语文本在词、语法结构、句子三个层面的可预测性，提出简化拼写、内容预测、关键词成句三种辅助方法，并集成于徒手打字 VR 原型。\n22 人被试内实验表明：方法[[显著提升输入速度、大幅降低任务负荷，且不增加错误率]]；用户会按场景自主选择策略——转写靠拼写容错、对话与邮件靠关键词成句。\n5 天长期观察进一步证实，[[熟练后收益持续放大]]。研究为 VR 文字交互设计提供了新的范式与实证依据。',
    tech: ['LLM', 'VR Text Entry', 'Free-hand Interaction', 'User Study', 'GPT API'],
    links: [{ label: 'IEEE VR 论文', icon: 'file-text', href: 'https://doi.org/10.1109/VR58804.2024.00073' }],
  },
];