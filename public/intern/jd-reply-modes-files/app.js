const modes = [
  {
    stage: 'pre', stageName: '发现与探索', title: '知识科普型', icon: 'book-open',
    query: '扫地机器人上下水版是什么意思？',
    desc: '只输出文本，用最短路径把陌生概念翻译成用户能理解、能用于选购的知识。',
    signals: ['是什么', '区别在哪', '参数看不懂'],
    structure: ['一句话定义概念', '解释实际体验差异', '说明适合与不适合', '给出购买前检查项'],
    metric: ['知识有用率', '86%'],
    doText: '保持纯文本，重点词加粗，三屏内讲清楚。',
    dontText: '插入商品卡打断理解，或堆砌行业术语。',
    answer: `<p><b>上下水版</b>，就是能自动给基站加清水、排脏水的扫地机器人。</p><p>你可以把它理解成给机器人接上了“自来水和下水道”：普通水箱版大约每 2–4 天需要手动换水，上下水版基本不用提水箱，更适合大户型、每天拖地，或不想频繁维护的人。</p><p>购买前要确认安装位置附近有<b>进水口、排水口和电源</b>。如果是租房、安装位离水管较远，普通水箱版会更省事。</p>`
  },
  {
    stage: 'pre', stageName: '发现与探索', title: '需求澄清型', icon: 'sliders-horizontal',
    query: '想买台适合家用的咖啡机',
    desc: '用一张可翻页的大筛选卡，每页只问一个真正影响推荐结果的问题。',
    signals: ['求推荐', '条件不足', '品类范围宽'],
    structure: ['说明只需回答几个问题', '逐页询问关键偏好', '展示当前筛选进度', '完成后自动生成推荐'],
    metric: ['筛选完成率', '74%'],
    doText: '一页一问、选项够大，并允许返回修改。',
    dontText: '一次展示十几个筛选条件，造成填写压力。',
    answer: `<p>可以，回答 3 个问题，我就能帮你把范围缩到最适合的 3 款。</p>
      <div class="filter-card" data-page="0">
        <div class="filter-top"><span>帮我挑咖啡机</span><b><i class="filter-current">1</i> / 3</b></div>
        <div class="filter-progress"><i></i></div>
        <div class="filter-page active"><small>第 1 题</small><h4>平时最常喝什么？</h4><button class="choice selected">拿铁 / 奶咖</button><button class="choice">美式 / 黑咖</button><button class="choice">两种都喝</button></div>
        <div class="filter-page"><small>第 2 题</small><h4>你希望操作多简单？</h4><button class="choice selected">一键完成</button><button class="choice">愿意手动打奶泡</button><button class="choice">想学专业萃取</button></div>
        <div class="filter-page"><small>第 3 题</small><h4>预算大约是多少？</h4><button class="choice">1000 元内</button><button class="choice selected">1000–3000 元</button><button class="choice">3000 元以上</button></div>
        <button class="filter-next">下一题 <span>→</span></button>
      </div>`
  },
  {
    stage: 'pre', stageName: '发现与探索', title: '清单表单型', icon: 'table-2',
    query: '新手露营需要买哪些装备？预算 1000',
    desc: '先用一段文字交代方案，再用表格清单讲清物品、优先级、规格和预算。',
    signals: ['需要买什么', '一套配齐', '任务型采购'],
    structure: ['首段总结方案原则', '表格列出采购项', '标记必买与可选', '合计预算并留余量'],
    metric: ['清单加购率', '38%'],
    doText: '表格字段少而关键，优先级一眼能看懂。',
    dontText: '使用多个散卡，让完整清单难以浏览和比较。',
    answer: `<p>按 2 人、不过夜、预算 1000 元，建议先把钱花在<b>遮阳、坐卧和照明</b>上；帐篷、炊具和户外电源第一次可以先不买。</p>
      <div class="list-table"><div class="list-head"><span>装备</span><span>优先级</span><span>建议规格</span><span>预算</span></div>
      <div><b>蝶形天幕</b><span class="must">必买</span><small>UPF50+</small><strong>¥260</strong></div>
      <div><b>折叠椅 ×2</b><span class="must">必买</span><small>承重 120kg</small><strong>¥240</strong></div>
      <div><b>防潮垫</b><span class="must">必买</span><small>2m × 2m</small><strong>¥120</strong></div>
      <div><b>营灯</b><span class="must">必买</span><small>续航 8h+</small><strong>¥80</strong></div>
      <div><b>折叠桌</b><span class="optional">可选</span><small>铝合金</small><strong>¥160</strong></div>
      <div class="list-total"><b>建议合计</b><span>预留 ¥140</span><strong>¥860</strong></div></div>`
  },
  {
    stage: 'pre', stageName: '发现与探索', title: '基础推荐型', icon: 'layout-list',
    query: '男士保湿护肤品',
    desc: '首段建立选购标准，下面用三个不同方向的方案楼层承接，每层包含简单概括和 3 张横向商品卡。',
    signals: ['宽泛品类词', '可直接推荐', '存在多种解决方向'],
    structure: ['首段给出选择标准', '拆成三个解决方向', '每层概括适合人群', '每层纵向排列三张横卡'],
    metric: ['方案楼层点击率', '35%'],
    doText: '三个楼层必须有明显差异；横卡要突出商品名、理由和价格。',
    dontText: '使用竖卡挤压商品信息，或把所有商品混成一条瀑布流。',
    answer: `<p>应对干燥天气，男士护肤可按肤感和需求分成 3 个方向：<b>清爽补水、强韧屏障、长效锁水</b>。</p>
      <div class="solution-floor"><div class="floor-title"><div><b>清爽补水</b><small>油皮、怕黏腻，适合日常快速保湿</small></div><span>01</span></div><div class="horizontal-products"><article><i class="bottle cyan">▮</i><div><b>屈臣氏男士保湿乳</b><small>三合一保湿，吸收快不紧绷</small><strong>¥35</strong></div></article><article><i class="bottle blue">▮</i><div><b>欧莱雅男士水凝露</b><small>清爽水感，油皮日常可用</small><strong>¥69</strong></div></article><article><i class="bottle navy">▮</i><div><b>自然堂冰川保湿露</b><small>冰川水配方，补水不黏腻</small><strong>¥44</strong></div></article></div></div>
      <div class="solution-floor"><div class="floor-title"><div><b>强韧屏障</b><small>干敏、换季紧绷，优先神经酰胺</small></div><span>02</span></div><div class="horizontal-products"><article><i class="bottle amber">▮</i><div><b>珂润润浸保湿乳</b><small>神经酰胺护理，敏感肌友好</small><strong>¥98</strong></div></article><article><i class="bottle cream">▮</i><div><b>适乐肤修护乳液</b><small>长效保湿，身体面部可用</small><strong>¥89</strong></div></article><article><i class="bottle green">▮</i><div><b>玉泽屏障修护乳</b><small>换季泛红干痒优先</small><strong>¥129</strong></div></article></div></div>
      <div class="solution-floor"><div class="floor-title"><div><b>长效锁水</b><small>秋冬干燥、起皮，适合面霜质地</small></div><span>03</span></div><div class="horizontal-products"><article><i class="bottle red">▮</i><div><b>UNO 男士多效面霜</b><small>一罐多效，适合懒人护肤</small><strong>¥72</strong></div></article><article><i class="bottle violet">▮</i><div><b>科颜氏高保湿面霜</b><small>秋冬强保湿，适合干皮</small><strong>¥245</strong></div></article><article><i class="bottle gray">▮</i><div><b>碧欧泉男士面霜</b><small>滋润与肤感更均衡</small><strong>¥329</strong></div></article></div></div>`
  },
  {
    stage: 'pre', stageName: '发现与探索', title: '风格推荐型', icon: 'palette',
    query: '适合秋天通勤的女士包包',
    desc: '简短定调后，一行两个展示“商品大图＋风格说明”的内容入口；点击后再拉起商品弹层。',
    signals: ['风格表达', '穿搭场景', '审美偏好'],
    structure: ['一句话给风格建议', '双列展示风格内容', '大图与风格词建立认知', '点击后弹层承接商品'],
    metric: ['风格入口点击率', '51%'],
    doText: '主页面只帮助选风格，商品价格等交易信息放进弹层。',
    dontText: '把风格入口直接做成商卡，提前塞入商品名和价格。',
    answer: `<p>秋天通勤可以从 4 种耐看风格入手：选低饱和颜色，更容易搭西装、风衣和针织衫。</p>
      <div class="style-grid">
        <button class="style-tile" data-style="静奢通勤"><div class="style-visual camel"><span>QUIET<br>LUXURY</span><i>👜</i></div><div class="style-info"><small>风格 01</small><h4>静奢通勤</h4><p>焦糖棕 · 真皮<br>简洁金属件</p><em>查看同风格好物 →</em></div></button>
        <button class="style-tile" data-style="复古学院"><div class="style-visual olive"><span>VINTAGE<br>COLLEGE</span><i>💼</i></div><div class="style-info"><small>风格 02</small><h4>复古学院</h4><p>橄榄绿 · 方正<br>翻盖与锁扣</p><em>查看同风格好物 →</em></div></button>
        <button class="style-tile" data-style="极简都市"><div class="style-visual graphite"><span>URBAN<br>MINIMAL</span><i>👜</i></div><div class="style-info"><small>风格 03</small><h4>极简都市</h4><p>石墨灰 · 廓形<br>少装饰设计</p><em>查看同风格好物 →</em></div></button>
        <button class="style-tile" data-style="柔和知性"><div class="style-visual blush"><span>SOFT<br>ELEGANCE</span><i>👝</i></div><div class="style-info"><small>风格 04</small><h4>柔和知性</h4><p>燕麦色 · 圆润<br>细腻皮质</p><em>查看同风格好物 →</em></div></button>
      </div>`
  },
  {
    stage: 'during', stageName: '对比与决策', title: '横向对比型', icon: 'columns-3',
    query: 'Mate 70 和 iPhone 16，哪个更适合我？',
    desc: '用复杂对比表承载多个维度，同时固定商品列与关键结论，支持快速扫读。',
    signals: ['A 和 B 哪个好', '多商品比较', '参数差异'],
    structure: ['先给条件式结论', '复杂表格对齐维度', '高亮胜出项', '补充适合人群'],
    metric: ['对比后决策率', '56%'],
    doText: '比较用户真正关心的维度，并把胜出原因写进单元格。',
    dontText: '把规格表直接搬过来，不提供判断。',
    answer: `<p><b>重视长焦拍照和续航选 Mate 70；苹果生态与视频创作选 iPhone 16。</b></p>
      <div class="complex-table"><div class="ct-row ct-head"><span>关键维度</span><b>Mate 70</b><b>iPhone 16</b></div>
      <div class="ct-row"><span>影像<br><small>权重 30%</small></span><b class="win">长焦更强<br><i>5× 光学变焦</i></b><b>视频更稳<br><i>4K 杜比视界</i></b></div>
      <div class="ct-row"><span>续航<br><small>权重 25%</small></span><b class="win">约 1.3 天<br><i>充电更快</i></b><b>约 1 天<br><i>无线生态好</i></b></div>
      <div class="ct-row"><span>生态<br><small>权重 25%</small></span><b>鸿蒙互联<br><i>多屏协同</i></b><b class="win">苹果生态<br><i>设备接力</i></b></div>
      <div class="ct-row"><span>价格<br><small>权重 20%</small></span><b class="win">¥5,499<br><i>同存储低 ¥500</i></b><b>¥5,999<br><i>保值率较高</i></b></div>
      <div class="ct-score"><span>按当前权重</span><b>Mate 70　89 分</b><b>iPhone 16　86 分</b></div></div>`
  },
  {
    stage: 'during', stageName: '对比与决策', title: '单品决策型', icon: 'badge-check',
    query: '这款 6599 元的游戏本值得买吗？',
    desc: '只输出文本，围绕单个商品直接回答是否值得，并坦诚说明妥协项。',
    signals: ['值得买吗', '适合我吗', '详情页提问'],
    structure: ['直接给结论', '说明三个核心理由', '揭示主要代价', '给出适合与不适合人群'],
    metric: ['决策有用率', '82%'],
    doText: '保持纯文本，把“不适合谁”说清楚。',
    dontText: '重复商品页卖点，或回避重量、噪音等代价。',
    answer: `<p><b>值得买，但更适合插电使用、看重游戏性能的人。</b></p><p>这款的 RTX 5060、高刷屏和散热释放在 6599 元价位有竞争力，主流 3A 游戏可以在 2K 分辨率下流畅运行，同配置里大约便宜 400 元。</p><p>你需要接受的代价是：整机约 2.4kg，高负载时风扇声较明显，离电续航约 4–5 小时。如果你经常背电脑通勤或全天不插电，建议换轻薄全能本；如果主要放在宿舍或家里玩游戏，它是当前价位比较稳的选择。</p>`
  },
  {
    stage: 'during', stageName: '对比与决策', title: '辅助决策型', icon: 'list-ordered',
    query: '最好的三款扫地机',
    desc: '用户需要快速收敛时，只保留首段说明和有限个有优先级的商品卡。',
    signals: ['最好的三款', '帮我收敛', '直接给结论'],
    structure: ['首段声明选择口径', '展示有限个优先级商卡', '每款承担不同角色', '明确首选及替代条件'],
    metric: ['首选商品点击率', '49%'],
    doText: '卡片数量严格有限，排序有依据，第一名结论明确。',
    dontText: '扩展成长榜单，重新增加用户选择负担。',
    answer: `<p>综合清洁能力、避障、基站自动化和近 30 天口碑，我把选择收敛成 3 款：<b>首选追觅 X60，预算优先选石头 P20，毛发家庭选科沃斯 T80。</b></p>
      <div class="priority-card first"><span class="priority">首选</span><div class="priority-pic cyan">◉</div><div><small>综合最均衡</small><h4>追觅 X60 Ultra</h4><p>低矮空间覆盖好，边角清洁和避障稳定</p><strong>¥4,299</strong><em>匹配度 94%</em></div></div>
      <div class="priority-card"><span class="priority">02</span><div class="priority-pic gray">◉</div><div><small>预算优先</small><h4>石头 P20 Pro</h4><p>核心清洁能力完整，价格低约 ¥800</p><strong>¥3,499</strong><em>匹配度 90%</em></div></div>
      <div class="priority-card"><span class="priority">03</span><div class="priority-pic violet">◉</div><div><small>养宠家庭</small><h4>科沃斯 T80 Max</h4><p>滚刷防缠绕更强，适合长发和宠物毛</p><strong>¥3,899</strong><em>匹配度 88%</em></div></div>`
  }
];

let current = 3;
const modeParam = new URLSearchParams(window.location.search).get('mode');
const requestedMode = modeParam === null ? NaN : Number(modeParam);
if (Number.isInteger(requestedMode) && requestedMode >= 0 && requestedMode < modes.length) current = requestedMode;
const $ = selector => document.querySelector(selector);

function renderList() {
  const list = $('#modeList');
  list.innerHTML = modes.map((m, i) => `<button class="mode-item ${i === current ? 'active' : ''}" data-index="${i}"><span class="number">${String(i + 1).padStart(2, '0')}</span><span class="mini-icon"><i data-lucide="${m.icon}"></i></span><span><strong>${m.title}</strong><small>${m.stageName}</small></span><i class="arrow" data-lucide="chevron-right"></i></button>`).join('');
  list.querySelectorAll('button').forEach(button => button.addEventListener('click', () => selectMode(+button.dataset.index)));
}

function setupFilterCard() {
  const card = document.querySelector('.filter-card');
  if (!card) return;
  card.querySelectorAll('.choice').forEach(choice => choice.addEventListener('click', () => {
    choice.parentElement.querySelectorAll('.choice').forEach(item => item.classList.remove('selected'));
    choice.classList.add('selected');
  }));
  card.querySelector('.filter-next').addEventListener('click', event => {
    let page = Number(card.dataset.page);
    if (page === 2) { event.currentTarget.innerHTML = '筛选完成 ✓'; return; }
    page += 1;
    card.dataset.page = page;
    card.querySelectorAll('.filter-page').forEach((item, index) => item.classList.toggle('active', index === page));
    card.querySelector('.filter-current').textContent = page + 1;
    card.querySelector('.filter-progress i').style.width = `${(page + 1) * 33.33}%`;
    event.currentTarget.innerHTML = page === 2 ? '生成推荐 <span>→</span>' : '下一题 <span>→</span>';
  });
}

function setupStyleTiles() {
  const tiles = document.querySelectorAll('.style-tile');
  if (!tiles.length) return;
  const products = {
    '静奢通勤': [['Songmont 托特包', '真皮大容量', '¥1,699'], ['半坡饰族腋下包', '焦糖棕头层牛皮', '¥899'], ['莱夫托特包', '简洁金属扣', '¥729']],
    '复古学院': [['CHARLES & KEITH', '方正翻盖包', '¥599'], ['PEDRO 邮差包', '复古锁扣', '¥729'], ['Fossil 剑桥包', '植鞣牛皮', '¥1,299']],
    '极简都市': [['古良吉吉托特包', '石墨灰廓形', '¥869'], ['Cafuné 通勤包', '极简弧线', '¥2,380'], ['北山制包方包', '无标识设计', '¥639']],
    '柔和知性': [['DISSONA 贝壳包', '燕麦柔雾色', '¥1,259'], ['Colette 单肩包', '圆润包型', '¥799'], ['Maison 方糖包', '细腻粒面皮', '¥999']]
  };
  tiles.forEach(tile => tile.addEventListener('click', () => {
    const style = tile.dataset.style;
    document.querySelector('.style-modal')?.remove();
    const rows = products[style].map((item, index) => `<article><i class="sheet-pic tone-${index + 1}">👜</i><div><small>京东自营 · 明日达</small><b>${item[0]}</b><p>${item[1]}</p><strong>${item[2]}</strong></div></article>`).join('');
    document.querySelector('.phone').insertAdjacentHTML('beforeend', `<div class="style-modal"><button class="sheet-backdrop" aria-label="关闭弹层"></button><section class="style-sheet"><div class="sheet-handle"></div><div class="sheet-head"><div><small>同风格好物</small><h3>${style}</h3></div><button class="sheet-close">×</button></div><div class="sheet-products">${rows}</div><button class="sheet-more">查看全部 ${style} 商品</button></section></div>`);
    const modal = document.querySelector('.style-modal');
    requestAnimationFrame(() => modal.classList.add('open'));
    modal.querySelectorAll('.sheet-close,.sheet-backdrop').forEach(button => button.addEventListener('click', () => {
      modal.classList.remove('open');
      setTimeout(() => modal.remove(), 250);
    }));
  }));
}

function selectMode(index) {
  current = index;
  const mode = modes[index];
  renderList();
  $('#modeNumber').textContent = String(index + 1).padStart(2, '0');
  $('#stageName').textContent = mode.stageName;
  $('#modeTitle').textContent = mode.title;
  $('#modeDescription').textContent = mode.desc;
  $('#queryText').textContent = mode.query;
  $('#signals').innerHTML = mode.signals.map(signal => `<span>${signal}</span>`).join('');
  $('#structureList').innerHTML = mode.structure.map(item => `<li>${item}</li>`).join('');
  $('#doText').textContent = mode.doText;
  $('#dontText').textContent = mode.dontText;
  $('#modeIcon').innerHTML = `<i data-lucide="${mode.icon}"></i>`;
  $('#conversation').innerHTML = `<div class="ai-row"><div class="ai-avatar">JD</div><div class="ai-content">${mode.answer}<div class="quick-actions"><button>👍 有帮助</button><button>👎 需改进</button></div></div></div>`;
  document.querySelectorAll('.stage').forEach(stage => stage.classList.toggle('active', stage.dataset.stage === mode.stage));
  $('#journeyProgress').style.width = mode.stage === 'pre' ? '18%' : '100%';
  setupFilterCard();
  setupStyleTiles();
  lucide.createIcons();
}

document.querySelectorAll('.stage').forEach(button => button.addEventListener('click', () => {
  selectMode(modes.findIndex(mode => mode.stage === button.dataset.stage));
}));
document.querySelectorAll('.view-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.view-tabs button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  $('#conversation').classList.toggle('structure-overlay', button.dataset.view === 'structure');
}));
$('#helpBtn').addEventListener('click', () => {
  const toast = $('#toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
});
renderList();
selectMode(current);
setTimeout(() => $('#toast').classList.add('show'), 700);
setTimeout(() => $('#toast').classList.remove('show'), 4200);