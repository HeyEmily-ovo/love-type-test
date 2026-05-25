/* ===== 维度定义 ===== */
const DIMENSIONS = [
    { id: 'anxiety',     name: '依恋焦虑',   emoji: '😰', color: '#FF6B9D',
      desc: '在亲密关系中感到不安、害怕被抛弃的程度',
      highDesc: '你在感情中容易焦虑，总担心对方不够爱你或会离开。这让你很敏感，但也说明你非常重视这段关系。',
      midDesc: '你有适度的情感敏感度，偶尔会担忧但不会失控。',
      lowDesc: '你在感情中内心很稳，不太会为"ta爱不爱我"这种事内耗。' },
    { id: 'avoidance',   name: '依恋回避',   emoji: '🧊', color: '#5B9BD5',
      desc: '对亲密关系和情感依赖感到不适，倾向于保持距离的程度',
      highDesc: '你本能地抗拒过度亲密，对"腻歪"有天然防御。独立是你的保护色，但可能让人误以为你不在乎。',
      midDesc: '你能享受亲密但也会保留个人空间，在拿捏距离方面比较自如。',
      lowDesc: '你不怕靠近，愿意敞开心扉，亲密对你来说是加分项而不是负担。' },
    { id: 'possessive',  name: '占有欲',     emoji: '🦁', color: '#FF8E7A',
      desc: '希望对伴侣拥有主导权、难以容忍"共享"的程度',
      highDesc: '你的爱带着浓浓的"主权宣示"，醋意来得快且明显。这是你的在乎方式，但小心让对感觉窒息。',
      midDesc: '你有正常的占有欲，会吃醋但不至于失控，大多时候能理性处理。',
      lowDesc: '你心态开放，不太会因为"谁和谁走得近"这种事儿纠结，信任感拉满。' },
    { id: 'romantic',    name: '浪漫表达',   emoji: '💐', color: '#FFB347',
      desc: '通过仪式感、情话、惊喜等方式表达爱意的倾向',
      highDesc: '你是行走的恋爱甜宠文主角！仪式感、小作文、surprise——这些是你的本能操作。和你恋爱体验感满分。',
      midDesc: '你有浪漫的一面但不会过度，知道在合适的时机给出合适的表达。',
      lowDesc: '你不擅长或者不太热衷于"花式秀恩爱"，觉得爱靠行动体现，不靠嘴皮子和排场。' },
    { id: 'independence',name: '独立性',     emoji: '🦅', color: '#4ECDC4',
      desc: '在感情中保持自我边界、不因恋爱而失去个人追求的程度',
      highDesc: '你的自我边界感极强，"恋爱是锦上添花不是全部"是你的人生信条。自先沉稳，而后爱人。',
      midDesc: '你在独立和依赖之间找到了不错的平衡，能黏人也能自处。',
      lowDesc: '你容易在恋爱中丢失自我，过度迁就对方。小心：爱别人之前，先爱自己。' },
    { id: 'trust',       name: '信任感',     emoji: '🤝', color: '#7C5CFC',
      desc: '对伴侣的忠诚和可靠性持有积极预期的程度',
      highDesc: '你内心安全感十足，不查岗不翻手机，相信爱就是相信。这种松弛感是你的恋爱超能力。',
      midDesc: '你有基本的信任能力，偶尔会多想但能自我调节。',
      lowDesc: '你很难完全相信一个人，总在"ta会不会骗我"的疑虑中反复横跳。曾经被辜负过吧？' },
];

/* ===== 恋爱类型定义 ===== */
const LOVE_TYPES = {
    'chaotic': {
        name: '纠结矛盾型',
        emoji: '🎭',
        tagline: '又想要又害怕，内心上演八百集连续剧',
        oneLiner: '你是恋爱中最"纠结"的存在——渴望被爱又害怕靠近，像一只想伸爪又缩回去的猫。这不是矫情，这是你保护自己的方式。',
        analysis: `你属于心理学上的"恐惧型依恋"（Fearful-Avoidant），兼具高焦虑和高回避的特征。

你在感情中最大的矛盾是：<strong>既渴望又逃离</strong>。别人对你好，你怀疑有诈；别人稍微冷淡，你立刻"看吧果然不爱我"。你的内心像在同时播放浪漫喜剧和悬疑惊悚片。

这不是"作"，而是一种深层的不安全感在驱动。你可能在过往经历中受过伤，或者成长环境中缺乏稳定的情感支持。好消息是：<strong>意识到自己的模式，就是改变的开始</strong>。`,
        advice: [
            { title: '学会"暂停"', text: '当你想说伤人的话时，先深呼吸3秒。那个冲动是旧伤在说话，不是真相。' },
            { title: '小步尝试信任', text: '不需要一夜之间变成"安全型"。从"今天我相信ta说的这一句话"开始，一点点来。' },
            { title: '写下你的感受', text: '把脑内的纠结写出来——你会惊讶地发现，写在纸上比在脑子里反复循环清晰得多。' },
        ],
    },
    'anxious': {
        name: '恋爱脑上头型',
        emoji: '💗',
        tagline: '爱到深处自然"黏"，你是我戒不掉的瘾',
        oneLiner: '你的爱情词典里没有"适可而止"——爱就要全部投入，轰轰烈烈。这种热烈很动人，但也要小心别把自己烧没了。',
        analysis: `你属于心理学上的"痴迷型依恋"（Anxious-Preoccupied），典型特征是<strong>高度焦虑+低回避</strong>。

在你眼里，爱情是生活中最重要的事。对方一句"在忙"能让你内耗一整天，一句"想你"又能让你瞬间复活。你的快乐和痛苦高度绑定在伴侣的一举一动上。

你的优势是<strong>情感浓度极高</strong>——你的伴侣永远不会怀疑自己是否"被爱着"。但风险在于，你容易在关系中失去自我边界，把所有情绪鸡蛋放在一个篮子里。

记住：你可以全力去爱，但也请留一点力气给自己。`,
        advice: [
            { title: '培养"我"的时间', text: '每周至少有一天只做自己的事——不是"等ta的消息"，而是画一幅画、跑五公里、学个新技能。' },
            { title: '建立自己的社交圈', text: '不要把伴侣当唯一的情感出口。朋友、家人、兴趣社群——多几个支点，你站得更稳。' },
            { title: '练习"等待"', text: 'ta没回消息的时候，不要脑补灾难片。大概率ta只是在忙/在打游戏/手机没电。真的。' },
        ],
    },
    'avoidant': {
        name: '回避型依恋',
        emoji: '🫧',
        tagline: '靠近会窒息，离开会想念——我就是这么矛盾这么酷',
        oneLiner: '你像是爱情里的"冰山美人"——外表冷若冰霜，内心翻江倒海。不是不爱，是不知道怎么安全地爱。',
        analysis: `你属于心理学上的"疏离型依恋"（Dismissive-Avoidant），核心特征是<strong>高回避+低焦虑</strong>。

你觉得"独立"是你身上最值钱的标签。对方太黏人你会烦，太冷淡你也无所谓。分手？没问题，一个人更自在。当对方想聊"我们之间怎么了"的时候，你的第一反应是——逃。

表面看是酷，底层其实是<strong>对亲密关系的不信任</strong>。你可能从小被教育"不能太依赖别人"，或者曾经的脆弱被辜负过，于是学会了把情绪锁在保险箱里。

独立是优点，但<strong>过于独立会让亲密关系失去"亲密"</strong>。偶尔允许自己"需要一下别人"，天不会塌。`,
        advice: [
            { title: '允许自己"需要"', text: '试着对伴侣说一次"我今天心情不好，能陪陪我吗？"。这不是示弱，这是把围墙打开一扇小门。' },
            { title: '识别"逃跑信号"', text: '当对方想深入沟通而你本能想回避时，告诉自己："这次我留下来，听ta说完"。' },
            { title: '从小事开始分享', text: '不需要一上来就掏心掏肺。今天分享一首歌、一张云的照片，慢慢习惯"被看见"的感觉。' },
        ],
    },
    'secure': {
        name: '安全感满格型',
        emoji: '🏠',
        tagline: '爱得从容，处得舒服——你是恋爱中的"稀有物种"',
        oneLiner: '你在爱情里有让人羡慕的松弛感：不查岗不疑心不内耗，爱得起也放得下。你是行走的"稳稳的幸福"。',
        analysis: `恭喜！你属于心理学上的<strong>"安全型依恋"</strong>（Secure Attachment），是依恋理论中最健康的类型。

你的核心能力是<strong>既敢亲密又不怕独处</strong>。你不会把伴侣的情绪波动当成对自己的否定，也不会因为对方一时冷淡就天塌地陷。你相信"即使吵架，我们之间的关系也是稳定的"。

在恋爱中，你是那个能给伴侣安全感的人——不玩推拉、不搞冷暴力、不喜欢试探。但同时你能守住自己的底线，不会为了维系关系而委屈自己。

<strong>你是很多人口中的"谈过最好的恋爱"</strong>——继续保持，你值得同样安全的人。`,
        advice: [
            { title: '主动选择同频的人', text: '你的安全感是珍贵的能力，请把它给同样安全的人。如果对方让你变得焦虑，不是你的问题，是ta的能量和你不同频。' },
            { title: '帮伴侣成长', text: '你有能力带"焦虑型"或"回避型"的伴侣走向安全。但记住——你只能引导，不能拯救。' },
            { title: '保持自我成长', text: '安全型不代表一成不变。持续探索自己，你会在感情中越活越轻盈。' },
        ],
    },
    'possessive_dominant': {
        name: '强占有欲型',
        emoji: '👑',
        tagline: '你是我的，谁也别想多看一眼——醋王本王驾到',
        oneLiner: '你的爱像一场"主权宣言"——浓烈、霸道、不容置疑。被爱着的人觉得自己像珍宝，但也可能觉得像"囚犯"。',
        analysis: `你的恋爱模式以<strong>高占有欲</strong>为显著特征，俗称"醋王本王"。

你的逻辑是：<strong>我爱你 = 你是我的 = 别人少碰</strong>。对象和别人多说两句话你就不爽，朋友圈有个异性点赞你能想一天，如果发现ta跟异性单独吃饭——那简直是灾难级别。

这种"霸权式恋爱"背后其实藏着<strong>深层的不安全感</strong>。你害怕被取代、害怕自己不够好、害怕对方某天突然发现比你更好的人。占有欲拉满不是在控制ta，是在安抚你自己。

但你要知道：<strong>真正的爱是手里的沙，越紧握越流失；松开了，反而留在掌心。</strong>`,
        advice: [
            { title: '区分"爱"和"控制"', text: '爱是"我愿意为你怎样"，不是"你必须为我怎样"。下次想让ta做什么之前，先问自己：这是爱ta还是控制ta？' },
            { title: '找到你的安全感来源', text: '你的安全感不能全部压在伴侣身上。发展一个让你有成就感的技能、事业或爱好，让自己先"值得被自己信任"。' },
            { title: '练习"松手"', text: '让ta自由地和朋友出去玩一次，不查岗、不追问。然后你会发现——ta自愿回来，比被你绑着不走，甜一万倍。' },
        ],
    },
    'romantic_sweet': {
        name: '甜宠浪漫型',
        emoji: '🌸',
        tagline: '把恋爱过成偶像剧，我就是我自己的编剧',
        oneLiner: '你相信爱情应该"有糖份"——仪式感、小惊喜、蜜语甜言，少了一样都觉得不够味。和你恋爱，每天都像在拍韩剧。',
        analysis: `你是"爱的五种语言"中<strong>"精心时刻"和"肯定的言词"</strong>的高分持有者。

生日要有惊喜、纪念日要有仪式、日常要有情话。你觉得<strong>不说出口的爱就不是完整的爱</strong>，行动固然重要，但"说出来"和"做出来"缺一不可。

你的伴侣可能很幸福（毕竟谁不喜欢被甜到），但也可能有点累（"又过节？？"）。你需要意识到：<strong>每个人表达爱的方式不一样</strong>——有的人爱你是默默帮你修好电脑，而不是写八百字小作文。这不代表他们不爱，只是方式不同。

保持你的浪漫体质，但也学会读懂"不浪漫的人"的爱的语言。`,
        advice: [
            { title: '降低期待但不降低标准', text: '有些人的爱是"做出来的"不是"说出来的"。观察ta为你做的事——那可能才是ta表达爱的方式。' },
            { title: '主动教对方', text: '不是所有人都自带浪漫基因。告诉ta"我喜欢什么"，而不是等着ta自己猜。好恋人也是好教练。' },
            { title: '给自己制造浪漫', text: '不要把所有浪漫期待放在伴侣身上。给自己买花、给自己过纪念日——先学会宠爱自己。' },
        ],
    },
    'independent_solo': {
        name: '独立独美型',
        emoji: '✨',
        tagline: '我自盛开，蝴蝶爱来不来——独自美丽才是我的人生底色',
        oneLiner: '爱情对你来说是加分项而不是必答题。你来这世界不是为了找谁，先把自己活成一道风景线。',
        analysis: `你的核心词是"<strong>独立</strong>"。在恋爱中保持自我、不改人生规划、不因谁而放弃追求——这是你的本能，也是你的铠甲。

有人说你"太硬了不适合恋爱"——放屁。你只是把<strong>自我保护</strong>做得太好了。你知道自己一个人的状态有多爽，所以对关系的品质要求很高："如果恋爱不能让我变得更好，那我不如单着。"

这是非常健康的恋爱观。但需要注意的是：<strong>独立和冷漠之间有一条线</strong>。有时候你为了保持独立，可能会把对方推开太远。真正的强大不是不需要任何人，而是可以坦然需要，也有能力承担被拒绝的风险。`,
        advice: [
            { title: '区分"独立"和"不敢依赖"', text: '问自己：我不需要ta帮忙，是真的不需要，还是害怕开口了被拒绝？前者是独立，后者是防御。' },
            { title: '给对方一个"被需要"的机会', text: '你不需要变弱，但可以让对方偶尔"帮到你"。被人需要的感觉，也是爱的一种。' },
            { title: '找到一样独立的伴侣', text: '你需要的是和你一样有自己的世界的人——你们各自精彩，在一起更加闪耀，而不是互相消耗。' },
        ],
    },
    'rational_calm': {
        name: '理性冷静型',
        emoji: '🧘',
        tagline: '佛系恋爱代言人：缘分来了接着，走了也不强求',
        oneLiner: '你是恋爱中的"人间清醒"——不玩套路不做作，该爱的时候认真爱，不该爱的时候转身走。这份通透，很多人一辈子都学不会。',
        analysis: `你在情感世界里的最大特点是：<strong>稳</strong>。不焦虑、不回避、不占有、不过度浪漫——你像是恋爱中那个"旁观者清"的人，同时又参与其中。

你喜欢<strong>自然舒服</strong>的关系，讨厌试探、拉扯、欲擒故纵。你觉得爱就是两个人在一起开心，如果在一起不开心那就分开——简简单单，别搞太复杂。

别人可能会说你"不够爱"——其实不是。你的爱不华丽但扎实，不炙热但恒温。<strong>你用行动而非言语来爱一个人</strong>，是那种"细水长流"型选手。

这种佛系态度很棒，但有时候不妨也让对方看到你"不冷静"的一面——偶尔的冲动和热烈，是爱情的调味剂。`,
        advice: [
            { title: '偶尔"不理性"一下', text: '计划之外的惊喜、心血来潮的告白、说走就走的约会——这些"不冷静"的瞬间，往往是感情最甜的回忆。' },
            { title: '别太佛系', text: '顺其自然是好事，但太"无所谓"可能让对方觉得你不在乎。主动表达爱意，不是丢脸的事。' },
            { title: '保持你的通透', text: '你有一种很多人没有的能力——看清关系本质。继续保持这份清醒，它会帮你避开很多烂桃花。' },
        ],
    },
};

/* ===== 题目定义（30题，6维度 x 5题） ===== */
const QUESTIONS = [
    // --- 依恋焦虑 (5题) ---
    { id: 1,  dim: 'anxiety',    text: '对象超过3小时不回消息，我脑子里已经自动上演了"ta是不是不爱我了"的连续剧', dimension: '依恋焦虑' },
    { id: 2,  dim: 'anxiety',    text: '我需要对方经常说"我喜欢你/我爱你"才能确定这段关系是安全的', dimension: '依恋焦虑' },
    { id: 3,  dim: 'anxiety',    text: '如果ta和异性聊得很开心，我会立刻脑补出一整部劈腿大戏', dimension: '依恋焦虑' },
    { id: 4,  dim: 'anxiety',    text: '吵架冷战的时候，我会疯狂想联系对方，什么都做不下去', dimension: '依恋焦虑' },
    { id: 5,  dim: 'anxiety',    text: '我经常怀疑自己"是不是不够好"，配不上这段感情', dimension: '依恋焦虑' },

    // --- 依恋回避 (5题) ---
    { id: 6,  dim: 'avoidance',  text: '当对方想聊"我们之间的关系怎么样"这种话题时，我第一反应是——好麻烦，快逃', dimension: '依恋回避' },
    { id: 7,  dim: 'avoidance',  text: '看到别的情侣腻腻歪歪，我会有种生理性的尴尬和不适', dimension: '依恋回避' },
    { id: 8,  dim: 'avoidance',  text: '恋爱中如果没有足够的独处时间，我会感到窒息和疲惫', dimension: '依恋回避' },
    { id: 9,  dim: 'avoidance',  text: '让我对人敞开心扉说出真实的感受？比让我跑十公里还难', dimension: '依恋回避' },
    { id: 10, dim: 'avoidance',  text: '分手后我反而有种"呼——终于自由了"的解脱感', dimension: '依恋回避' },

    // --- 占有欲 (5题) ---
    { id: 11, dim: 'possessive', text: '我会忍不住想去翻看对象的手机/社交账号/聊天记录（哪怕没证据也会想）', dimension: '占有欲' },
    { id: 12, dim: 'possessive', text: '对象跟朋友出去玩没带我，我会很不爽且全程关注动态', dimension: '占有欲' },
    { id: 13, dim: 'possessive', text: '我觉得谈恋爱后，对象就不该再有异性好友了', dimension: '占有欲' },
    { id: 14, dim: 'possessive', text: '在街上ta多看了别人两眼，我能立刻变脸开启冷脸模式', dimension: '占有欲' },
    { id: 15, dim: 'possessive', text: '如果给对象发消息ta在忙没回，但发现ta在社交平台上活跃，我会炸', dimension: '占有欲' },

    // --- 浪漫表达 (5题) ---
    { id: 16, dim: 'romantic',   text: '我超喜欢给对象制造各种小惊喜——手写信、藏宝图式礼物、突然出现在ta公司楼下', dimension: '浪漫表达' },
    { id: 17, dim: 'romantic',   text: '情人节/纪念日/生日必须有仪式感，敷衍了事等于不够爱我', dimension: '浪漫表达' },
    { id: 18, dim: 'romantic',   text: '"我好想你""你今天好好看""有你真好"——这种话我一天能说八百遍', dimension: '浪漫表达' },
    { id: 19, dim: 'romantic',   text: '看到甜甜的恋爱vlog/帖子，我会标记下来"以后要和ta一起做"', dimension: '浪漫表达' },
    { id: 20, dim: 'romantic',   text: '我享受公开秀恩爱——朋友圈发合照、用情侣头像、让全世界知道我们在一起', dimension: '浪漫表达' },

    // --- 独立性 (5题) ---
    { id: 21, dim: 'independence',text: '谈恋爱不能阻止我搞事业/学业——恋爱脑退退退，个人成长才是王道', dimension: '独立性' },
    { id: 22, dim: 'independence',text: '即使热恋期，我也有自己独立的朋友圈和社交生活', dimension: '独立性' },
    { id: 23, dim: 'independence',text: '如果一段关系严重影响我的个人发展，我会果断选择分手', dimension: '独立性' },
    { id: 24, dim: 'independence',text: '我觉得"高质量单身"比"凑合谈恋爱"爽一百倍', dimension: '独立性' },
    { id: 25, dim: 'independence',text: '恋爱只是我精彩人生的一部分，不是全部', dimension: '独立性' },

    // --- 信任感 (5题) ---
    { id: 26, dim: 'trust',      text: '即使大吵一架，我内心也相信"我们不会因为吵架就分手"', dimension: '信任感' },
    { id: 27, dim: 'trust',      text: '对方说"在忙/在开会/在打游戏"的时候，我真的会信，而不是觉得是借口', dimension: '信任感' },
    { id: 28, dim: 'trust',      text: '我完全OK伴侣有自己的隐私空间（比如不给手机密码、有自己的小秘密）', dimension: '信任感' },
    { id: 29, dim: 'trust',      text: '我不需要通过"考验"来证明对方爱我——真心不需要被测试', dimension: '信任感' },
    { id: 30, dim: 'trust',      text: '我相信即使ta身边出现比我优秀的人，ta也不会因此离开我', dimension: '信任感' },
];

/* ===== 全局状态 ===== */
let currentQuestion = 0;
let answers = {};
let selectedOption = null;
const HISTORY_KEY = 'love_type_test_history';
const MAX_HISTORY = 20;
let viewingHistoryId = null;
let resultsShown = false;

/* ===== 测试流程 ===== */
function startTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    resultsShown = false;

    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'flex';

    initDotGrid();
    showQuestion(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initDotGrid() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    for (let i = 0; i < QUESTIONS.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.textContent = i + 1;
        dot.onclick = () => {
            currentQuestion = i;
            selectedOption = answers[QUESTIONS[i].id] !== undefined ? answers[QUESTIONS[i].id] : null;
            showQuestion(i);
        };
        grid.appendChild(dot);
    }
}

function showQuestion(index) {
    currentQuestion = index;
    const q = QUESTIONS[index];
    selectedOption = answers[q.id] !== undefined ? answers[q.id] : null;

    // 更新进度
    document.getElementById('progress-fill').style.width = ((index + 1) / QUESTIONS.length * 100) + '%';
    document.getElementById('progress-current').textContent = index + 1;
    document.getElementById('progress-total').textContent = QUESTIONS.length;

    // 更新题目
    const badge = document.getElementById('question-badge');
    badge.textContent = '自评量表';
    badge.className = 'question-badge likert';

    document.getElementById('question-num').textContent = `第 ${index + 1} 题`;
    document.getElementById('question-text').textContent = q.text;
    // 渲染选项
    const optionsArea = document.getElementById('options-area');
    const labels = ['完全符合', '比较符合', '一般', '比较不符合', '完全不符合'];
    optionsArea.innerHTML = '';

    labels.forEach((label, i) => {
        const score = 5 - i; // 完全符合=5, 完全不符合=1
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (selectedOption === score) btn.classList.add('selected');

        const indicator = document.createElement('span');
        indicator.className = 'option-indicator';
        indicator.textContent = selectedOption === score ? '✓' : '';

        const text = document.createElement('span');
        text.textContent = label;

        btn.appendChild(indicator);
        btn.appendChild(text);
        btn.onclick = () => selectOption(index, score, btn);
        optionsArea.appendChild(btn);
    });

    // 更新导航按钮
    updateNavButtons();

    // 更新导航点
    updateDots();

    // 动画效果
    document.getElementById('question-card').style.animation = 'none';
    document.getElementById('question-card').offsetHeight;
    document.getElementById('question-card').style.animation = 'fadeInUp 0.35s ease';
}

function selectOption(qIndex, score, btn) {
    selectedOption = score;
    answers[QUESTIONS[qIndex].id] = score;

    // 更新选项样式
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // 更新选中标记
    document.querySelectorAll('.option-indicator').forEach(ind => ind.textContent = '');
    btn.querySelector('.option-indicator').textContent = '✓';

    // 更新导航状态
    updateNavButtons();
    updateDots();

    // 自动跳转下一题
    if (qIndex < QUESTIONS.length - 1) {
        setTimeout(() => {
            currentQuestion = qIndex + 1;
            selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
            showQuestion(currentQuestion);
            document.getElementById('test-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 180);
    }

    // 全部答完自动跳转结果
    if (Object.keys(answers).length === QUESTIONS.length) {
        setTimeout(() => showResults(), 350);
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
    nextBtn.disabled = selectedOption === null;
    nextBtn.innerHTML = '下一题 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('answered', 'current');
        if (answers[QUESTIONS[i].id] !== undefined) dot.classList.add('answered');
        if (i === currentQuestion) dot.classList.add('current');
    });
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        showQuestion(currentQuestion);
    }
}

function nextQuestion() {
    if (selectedOption === null) return;

    if (currentQuestion === QUESTIONS.length - 1) {
        // 所有题都答完了，显示结果
        if (Object.keys(answers).length === QUESTIONS.length) {
            showResults();
        }
    } else {
        currentQuestion++;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        showQuestion(currentQuestion);
    }
}

/* ===== 计分 ===== */
function calculateScores() {
    const dimScores = {};
    DIMENSIONS.forEach(dim => {
        const dimQuestions = QUESTIONS.filter(q => q.dim === dim.id);
        const total = dimQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
        // 原始分 5-25 → 归一化 0-100
        dimScores[dim.id] = Math.round((total / (dimQuestions.length * 5)) * 100);
    });
    return dimScores;
}

/* ===== 类型判定 ===== */
function determineLoveType(scores) {
    const { anxiety, avoidance, possessive, romantic, independence, trust } = scores;

    // 安全型优先判断
    if (anxiety <= 40 && avoidance <= 40 && trust >= 55) {
        return 'secure';
    }

    // 焦虑 + 回避 都高 → 纠结矛盾型 (恐惧型)
    if (anxiety >= 55 && avoidance >= 55) {
        return 'chaotic';
    }

    // 高焦虑 + 低回避 → 恋爱脑/痴迷型
    if (anxiety >= 55 && avoidance <= 45) {
        // 加上高浪漫 → 强调甜宠
        if (romantic >= 60) return 'romantic_sweet';
        return 'anxious';
    }

    // 低焦虑 + 高回避 → 回避型
    if (anxiety <= 45 && avoidance >= 55) {
        // 加上高独立 → 可能偏"独立独美"
        if (independence >= 65) return 'independent_solo';
        return 'avoidant';
    }

    // 高占有欲
    if (possessive >= 60) {
        return 'possessive_dominant';
    }

    // 高浪漫
    if (romantic >= 60 && independence <= 55) {
        return 'romantic_sweet';
    }

    // 高独立
    if (independence >= 60) {
        return 'independent_solo';
    }

    // 低焦虑 + 低回避 + 高信任 → 安全型
    if (anxiety <= 50 && avoidance <= 50 && trust >= 50) {
        return 'secure';
    }

    // 默认：理性冷静型
    return 'rational_calm';
}

/* ===== 结果展示 ===== */
function showResults(storedScores, storedTypeKey) {
    // 防止重复调用（如答题完成自动跳转 + 手动点下一题同时触发）
    if (resultsShown && !storedScores) return;
    resultsShown = true;

    const isHistory = !!storedScores;

    document.getElementById('test-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';

    const scores = storedScores || calculateScores();
    const typeKey = storedTypeKey || determineLoveType(scores);
    const typeData = LOVE_TYPES[typeKey];

    // 非历史模式：保存到历史记录
    if (!isHistory) {
        saveResultToHistory(scores, typeKey);
    }

    // 综合分
    const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6);

    // 最高维度 & 最低维度
    const sortedDims = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topDim = DIMENSIONS.find(d => d.id === sortedDims[0][0]);
    const bottomDim = DIMENSIONS.find(d => d.id === sortedDims[5][0]);

    // ---- 渲染头部 ----
    document.getElementById('badge-icon').textContent = typeData.emoji;
    document.getElementById('badge-title').textContent = typeData.name;
    document.getElementById('badge-subtitle').textContent = typeData.tagline;
    document.getElementById('result-one-liner').textContent = '💬 ' + typeData.oneLiner;

    // ---- 评分概览 ----
    document.getElementById('score-overview').innerHTML = `
        <div class="score-card">
            <div class="score-value">${overallScore}</div>
            <div class="score-label">综合得分</div>
        </div>
        <div class="score-card">
            <div class="score-value">${topDim.emoji}</div>
            <div class="score-label">最突出 · ${topDim.name}</div>
        </div>
        <div class="score-card">
            <div class="score-value">${bottomDim.emoji}</div>
            <div class="score-label">最不明显 · ${bottomDim.name}</div>
        </div>
        <div class="score-card">
            <div class="score-value">${sortedDims.length}</div>
            <div class="score-label">分析维度</div>
        </div>
    `;

    // ---- 雷达图 ----
    renderRadarChart(scores);

    // ---- 柱状图 ----
    renderBarChart(scores);

    // ---- 深度分析 ----
    renderDetailAnalysis(scores, typeData);

    // ---- 恋爱建议 ----
    renderLoveAdvice(typeData);

    // ---- 匹配分析 ----
    renderMatchAnalysis(typeKey, scores);

    // ---- 按钮区（历史模式 vs 正常模式） ----
    const actionsEl = document.getElementById('result-actions');
    if (isHistory) {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="backToHistory()">← 返回历史</button>
            <button class="action-btn retry-btn" onclick="retryTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📤 分享结果</button>
        `;
    } else {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="retryTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📤 分享结果</button>
            <button class="action-btn history-btn" onclick="showHistory()">📋 历史记录</button>
        `;
    }

    // ---- 滚动到顶部 ----
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 窗口大小改变时重绘图表
    const resizeHandler = () => {
        const radarDom = document.getElementById('radar-chart');
        const barDom = document.getElementById('bar-chart');
        if (radarDom._echart) radarDom._echart.resize();
        if (barDom._echart) barDom._echart.resize();
    };
    window.addEventListener('resize', resizeHandler, { once: true });
}

/* ===== 雷达图 ===== */
function renderRadarChart(scores) {
    const dom = document.getElementById('radar-chart');
    if (dom._echart) dom._echart.dispose();
    const chart = echarts.init(dom);
    dom._echart = chart;

    const dimData = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        max: 100,
        value: scores[d.id],
    }));

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: params => `${params.name}<br/>得分: <b>${params.value}</b>`,
            backgroundColor: '#fff',
            borderColor: '#E8DFF0',
            textStyle: { color: '#2D1B3E', fontSize: 13 },
            boxShadow: '0 4px 16px rgba(124,92,252,0.1)',
        },
        legend: { show: false },
        radar: {
            center: ['50%', '52%'],
            radius: '65%',
            indicator: dimData,
            axisName: {
                color: '#6B5B7B',
                fontSize: 12,
                fontWeight: 600,
            },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            splitLine: { lineStyle: { color: '#E8DFF0' } },
            splitArea: {
                areaStyle: { color: ['rgba(124,92,252,0.02)', 'rgba(124,92,252,0.04)'] },
            },
        },
        series: [{
            type: 'radar',
            data: [{
                value: dimData.map(d => d.value),
                name: '你的得分',
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(124,92,252,0.35)' },
                            { offset: 1, color: 'rgba(255,107,157,0.15)' },
                        ],
                    },
                },
                lineStyle: { color: '#7C5CFC', width: 2.5 },
                itemStyle: {
                    color: '#7C5CFC',
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                symbol: 'circle',
                symbolSize: 8,
            }],
        }],
    };
    chart.setOption(option);
}

/* ===== 柱状图 ===== */
function renderBarChart(scores) {
    const dom = document.getElementById('bar-chart');
    if (dom._echart) dom._echart.dispose();
    const chart = echarts.init(dom);
    dom._echart = chart;

    const sorted = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        value: scores[d.id],
        color: d.color,
    })).sort((a, b) => b.value - a.value);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: '#fff',
            borderColor: '#E8DFF0',
            textStyle: { color: '#2D1B3E', fontSize: 13 },
            formatter: params => `<b>${params[0].name}</b><br/>得分: <b>${params[0].value}</b>`,
        },
        grid: { left: '3%', right: '8%', top: '5%', bottom: '8%', containLabel: true },
        xAxis: {
            type: 'value',
            max: 100,
            axisLabel: { color: '#9B8BAB', fontSize: 11, formatter: '{value}' },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            splitLine: { lineStyle: { color: '#F5F0FA' } },
        },
        yAxis: {
            type: 'category',
            data: sorted.map(d => d.name),
            axisLabel: { color: '#6B5B7B', fontSize: 13, fontWeight: 600 },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            inverse: true,
        },
        series: [{
            type: 'bar',
            data: sorted.map((d, i) => ({
                value: d.value,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: d.color + '99' },
                        { offset: 1, color: d.color },
                    ]),
                    borderRadius: [0, 8, 8, 0],
                },
            })),
            barWidth: 22,
            label: {
                show: true,
                position: 'right',
                color: '#6B5B7B',
                fontSize: 12,
                fontWeight: 700,
                formatter: '{c}',
            },
        }],
    };
    chart.setOption(option);
}

/* ===== 深度分析 ===== */
function renderDetailAnalysis(scores, typeData) {
    const container = document.getElementById('detail-analysis');

    // 类型分析
    let html = `<div class="dimension-card" style="border-left-color: #7C5CFC;">
        <div class="dim-card-header">
            <span class="dim-name">${typeData.emoji} 你的恋爱画像</span>
        </div>
        <div class="dim-desc">${typeData.analysis}</div>
    </div>`;

    // 各维度分析
    const sortedDims = DIMENSIONS.map(d => ({
        ...d,
        score: scores[d.id],
    })).sort((a, b) => b.score - a.score);

    sortedDims.forEach(dim => {
        let level, levelClass;
        if (dim.score >= 65) { level = '偏高'; levelClass = 'high'; }
        else if (dim.score >= 40) { level = '适中'; levelClass = 'mid'; }
        else { level = '偏低'; levelClass = 'low'; }

        const desc = dim.score >= 65 ? dim.highDesc : dim.score >= 40 ? dim.midDesc : dim.lowDesc;

        html += `<div class="dimension-card" style="border-left-color: ${dim.color};">
            <div class="dim-card-header">
                <span class="dim-name">${dim.emoji} ${dim.name} · <span style="font-weight:400;font-size:13px;color:var(--text-secondary);">${dim.desc}</span></span>
                <span class="dim-score-tag ${levelClass}">${dim.score}分 · ${level}</span>
            </div>
            <div class="dim-desc">${desc}</div>
        </div>`;
    });

    container.innerHTML = html;
}

/* ===== 恋爱建议 ===== */
function renderLoveAdvice(typeData) {
    const container = document.getElementById('love-advice');
    let html = '';

    typeData.advice.forEach(a => {
        html += `<div class="advice-card">
            <h4>💡 ${a.title}</h4>
            <p>${a.text}</p>
        </div>`;
    });

    container.innerHTML = html;
}

/* ===== 匹配分析 ===== */
function renderMatchAnalysis(myType, scores) {
    const container = document.getElementById('match-analysis');

    // 匹配映射
    const matchMap = {
        'chaotic': {
            best: 'secure',
            good: 'rational_calm',
            bestReason: '安全型能给你稳定的安全感，让你慢慢卸下防备学',
            goodReason: '理性型不会给你太多情绪波动，相处起来不用猜来猜去',
        },
        'anxious': {
            best: 'secure',
            good: 'romantic_sweet',
            bestReason: '安全型能接住你的所有情绪，给你最需要的 reassurance',
            goodReason: '两个浪漫灵魂在一起，甜度翻倍！但注意别互相消耗',
        },
        'avoidant': {
            best: 'secure',
            good: 'independent_solo',
            bestReason: '安全型懂你的独立需求，不会过度黏人但一直在身边',
            goodReason: '你们都独立，各有空间，聚是一团火散是满天星',
        },
        'secure': {
            best: 'secure',
            good: 'rational_calm',
            bestReason: '两个安全型的恋爱就像两个高手对弈——势均力敌，互相成就',
            goodReason: '你们都不作不闹，在一起只有舒服没有内耗',
        },
        'possessive_dominant': {
            best: 'romantic_sweet',
            good: 'secure',
            bestReason: '爱表达的甜宠型正好满足你"需要被关注"的需求，一拍即合',
            goodReason: '安全型能理解你的占有欲背后是不安，用稳定的爱抚平你的焦躁',
        },
        'romantic_sweet': {
            best: 'romantic_sweet',
            good: 'possessive_dominant',
            bestReason: '两个浪漫脑在一起就是偶像剧现场，每天都是情人节',
            goodReason: '占有欲强的人恰好能满足你需要"被在乎"的感觉',
        },
        'independent_solo': {
            best: 'independent_solo',
            good: 'rational_calm',
            bestReason: '两个独立灵魂的碰撞——我们各自发光，在一起就是银河',
            goodReason: '理性型不会给你压力，你们的关系松弛又自然',
        },
        'rational_calm': {
            best: 'secure',
            good: 'independent_solo',
            bestReason: '安全型和理性型都走"踏实风"，你们的恋爱是保温杯不是烟花',
            goodReason: '你们都懂得尊重边界，关系健康得像教科书',
        },
    };

    const mm = matchMap[myType];
    const bestType = LOVE_TYPES[mm.best];
    const goodType = LOVE_TYPES[mm.good];

    container.innerHTML = `
        <div class="match-cards">
            <div class="match-card best">
                <div class="match-emoji">${bestType.emoji}</div>
                <div class="match-type">${bestType.name}</div>
                <div class="match-reason">${mm.bestReason}</div>
            </div>
            <div class="match-card">
                <div class="match-emoji">${goodType.emoji}</div>
                <div class="match-type">${goodType.name}</div>
                <div class="match-reason">${mm.goodReason}</div>
            </div>
        </div>
    `;
}

/* ===== 操作按钮 ===== */
function retryTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    viewingHistoryId = null;
    resultsShown = false;
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
    const badgeTitle = document.getElementById('badge-title').textContent;
    const oneLiner = document.getElementById('result-one-liner').textContent.replace('💬 ', '');
    const shareText = `💘 我在恋爱类型测试中的结果是：${badgeTitle}！\n${oneLiner}\n\n快来测测你的恋爱类型吧～`;

    // 兼容移动端和桌面端分享
    if (navigator.share) {
        navigator.share({
            title: '恋爱类型测试',
            text: shareText,
        }).catch(() => {});
    } else {
        // 降级：复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            const btn = document.querySelector('.share-btn');
            const origText = btn.textContent;
            btn.textContent = '✅ 已复制！';
            setTimeout(() => { btn.textContent = origText; }, 2000);
        }).catch(() => {});
    }
}

/* ===== 历史记录 ===== */
function saveResultToHistory(scores, typeKey) {
    try {
        const history = loadHistory();
        const sortedDims = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topDim = DIMENSIONS.find(d => d.id === sortedDims[0][0]);
        const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6);

        const record = {
            id: Date.now(),
            date: new Date().toLocaleString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            typeKey: typeKey,
            scores: scores,
            overallScore: overallScore,
            topDim: { id: topDim.id, name: topDim.name, emoji: topDim.emoji },
        };

        history.unshift(record);
        if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
        // localStorage 不可用时静默失败
    }
}

function loadHistory() {
    try {
        const data = localStorage.getItem(HISTORY_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function showHistory() {
    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'block';
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHistoryList() {
    const history = loadHistory();
    const listEl = document.getElementById('history-list');
    const emptyEl = document.getElementById('history-empty');

    if (history.length === 0) {
        listEl.innerHTML = '';
        emptyEl.style.display = 'block';
        document.getElementById('history-clear-all').style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    document.getElementById('history-clear-all').style.display = '';

    let html = '';
    history.forEach(record => {
        const typeData = LOVE_TYPES[record.typeKey] || { name: '未知类型', emoji: '❓' };
        html += `
            <div class="history-card" onclick="viewHistoryResult(${record.id})">
                <div class="history-card-main">
                    <div class="history-type-emoji">${typeData.emoji}</div>
                    <div class="history-type-info">
                        <div class="history-type-name">${typeData.name}</div>
                        <div class="history-type-date">${record.date}</div>
                    </div>
                </div>
                <div class="history-card-scores">
                    <span class="history-overall">综合 ${record.overallScore}分</span>
                    <span class="history-top-dim">${record.topDim.emoji} ${record.topDim.name} ${record.scores[record.topDim.id]}分</span>
                </div>
                <button class="history-delete-btn" onclick="event.stopPropagation(); deleteHistoryItem(${record.id})" title="删除">✕</button>
            </div>
        `;
    });

    listEl.innerHTML = html;
}

function viewHistoryResult(id) {
    const history = loadHistory();
    const record = history.find(r => r.id === id);
    if (!record) return;

    viewingHistoryId = id;
    showResults(record.scores, record.typeKey);
}

function backToHistory() {
    viewingHistoryId = null;
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'block';
    // 清理图表实例，避免残留
    ['radar-chart', 'bar-chart'].forEach(id => {
        const dom = document.getElementById(id);
        if (dom._echart) { dom._echart.dispose(); dom._echart = null; }
    });
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLanding() {
    viewingHistoryId = null;
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条记录吗？')) return;
    const history = loadHistory();
    const filtered = history.filter(r => r.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
    // 如果正在查看被删除的记录，返回历史列表
    if (viewingHistoryId === id) viewingHistoryId = null;
    renderHistoryList();
}

function clearAllHistory() {
    if (!confirm('确定要清空全部历史记录吗？此操作不可恢复。')) return;
    localStorage.removeItem(HISTORY_KEY);
    viewingHistoryId = null;
    renderHistoryList();
}
