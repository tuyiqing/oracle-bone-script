// 扩展的甲骨文字符数据
export const extendedCharacters = [
  {
    id: "sun",
    character: "日",
    oracleScript: "☉",
    meaning: "太阳、日子、白天",
    pronunciation: "rì",
    category: "天文",
    description: "象形字，像太阳的形状，中间有一点表示太阳黑子",
    evolution: [
      { period: "甲骨文", form: "☉", description: "圆形中有一点，象太阳形" },
      { period: "金文", form: "🌞", description: "形状更加规整" },
      { period: "小篆", form: "日", description: "变为方形" },
      { period: "楷书", form: "日", description: "现代汉字形态" }
    ],
    relatedCharacters: ["月", "明", "时"],
    historicalContext: "甲骨文中的日字是最早的象形文字之一，反映了古人对太阳的观察和崇拜",
    usage: "常用于表示时间、日期等概念",
    frequency: "高频"
  },
  {
    id: "moon",
    character: "月",
    oracleScript: "🌙",
    meaning: "月亮、月份",
    pronunciation: "yuè",
    category: "天文",
    description: "象形字，像弯月的形状",
    evolution: [
      { period: "甲骨文", form: "🌙", description: "弯月形状" },
      { period: "金文", form: "🌛", description: "形状略有变化" },
      { period: "小篆", form: "月", description: "笔画化" },
      { period: "楷书", form: "月", description: "现代汉字形态" }
    ],
    relatedCharacters: ["日", "明", "夕"],
    historicalContext: "月字体现了古人对月相变化的细致观察",
    usage: "表示月亮、时间单位等",
    frequency: "高频"
  },
  {
    id: "water",
    character: "水",
    oracleScript: "💧",
    meaning: "水、液体",
    pronunciation: "shuǐ",
    category: "自然",
    description: "象形字，像水流的样子",
    evolution: [
      { period: "甲骨文", form: "💧", description: "像水流形状" },
      { period: "金文", form: "🌊", description: "更像波浪" },
      { period: "小篆", form: "水", description: "笔画规整" },
      { period: "楷书", form: "水", description: "现代汉字形态" }
    ],
    relatedCharacters: ["火", "土", "木"],
    historicalContext: "五行之一，古人认为水是万物之源",
    usage: "表示水、液体等概念",
    frequency: "高频"
  },
  {
    id: "fire",
    character: "火",
    oracleScript: "🔥",
    meaning: "火、燃烧",
    pronunciation: "huǒ",
    category: "自然",
    description: "象形字，像火焰燃烧的样子",
    evolution: [
      { period: "甲骨文", form: "🔥", description: "像火焰形状" },
      { period: "金文", form: "🔥", description: "形状相似" },
      { period: "小篆", form: "火", description: "笔画化" },
      { period: "楷书", form: "火", description: "现代汉字形态" }
    ],
    relatedCharacters: ["水", "土", "木"],
    historicalContext: "人类最早掌握的自然力量之一",
    usage: "表示火、热等概念",
    frequency: "高频"
  },
  {
    id: "tree",
    character: "木",
    oracleScript: "🌳",
    meaning: "树木、木材",
    pronunciation: "mù",
    category: "植物",
    description: "象形字，像树的形状，有根、干、枝",
    evolution: [
      { period: "甲骨文", form: "🌳", description: "像完整的树形" },
      { period: "金文", form: "🌲", description: "简化的树形" },
      { period: "小篆", form: "木", description: "抽象化" },
      { period: "楷书", form: "木", description: "现代汉字形态" }
    ],
    relatedCharacters: ["林", "森", "本"],
    historicalContext: "五行之一，代表生长和生命力",
    usage: "表示树木、木材等",
    frequency: "高频"
  },
  {
    id: "mountain",
    character: "山",
    oracleScript: "⛰️",
    meaning: "山、高地",
    pronunciation: "shān",
    category: "地理",
    description: "象形字，像山峰的轮廓",
    evolution: [
      { period: "甲骨文", form: "⛰️", description: "三个山峰" },
      { period: "金文", form: "🏔️", description: "山峰形状" },
      { period: "小篆", form: "山", description: "简化形状" },
      { period: "楷书", form: "山", description: "现代汉字形态" }
    ],
    relatedCharacters: ["川", "石", "岩"],
    historicalContext: "古人对山川地貌的直观表达",
    usage: "表示山、高地等地理概念",
    frequency: "高频"
  },
  {
    id: "person",
    character: "人",
    oracleScript: "🚶",
    meaning: "人、人类",
    pronunciation: "rén",
    category: "人物",
    description: "象形字，像人的侧面形状",
    evolution: [
      { period: "甲骨文", form: "🚶", description: "人的侧面" },
      { period: "金文", form: "👤", description: "更抽象" },
      { period: "小篆", form: "人", description: "简化形状" },
      { period: "楷书", form: "人", description: "现代汉字形态" }
    ],
    relatedCharacters: ["大", "天", "众"],
    historicalContext: "最基本的汉字之一，体现人本思想",
    usage: "表示人、人类等概念",
    frequency: "最高频"
  },
  {
    id: "big",
    character: "大",
    oracleScript: "🤸",
    meaning: "大、巨大",
    pronunciation: "dà",
    category: "形容",
    description: "象形字，像人张开双臂的样子，表示大",
    evolution: [
      { period: "甲骨文", form: "🤸", description: "人张开双臂" },
      { period: "金文", form: "🤸‍♂️", description: "形状相似" },
      { period: "小篆", form: "大", description: "简化" },
      { period: "楷书", form: "大", description: "现代汉字形态" }
    ],
    relatedCharacters: ["小", "人", "天"],
    historicalContext: "通过人体姿态表达抽象概念",
    usage: "表示大小、程度等",
    frequency: "高频"
  },
  {
    id: "small",
    character: "小",
    oracleScript: "•",
    meaning: "小、微小",
    pronunciation: "xiǎo",
    category: "形容",
    description: "象形字，像细小的颗粒",
    evolution: [
      { period: "甲骨文", form: "•", description: "小点" },
      { period: "金文", form: "⚫", description: "小圆点" },
      { period: "小篆", form: "小", description: "三点形状" },
      { period: "楷书", form: "小", description: "现代汉字形态" }
    ],
    relatedCharacters: ["大", "少", "微"],
    historicalContext: "与大字形成对比，表达相对概念",
    usage: "表示大小、年龄等",
    frequency: "高频"
  },
  {
    id: "eye",
    character: "目",
    oracleScript: "👁️",
    meaning: "眼睛、目标",
    pronunciation: "mù",
    category: "身体",
    description: "象形字，像眼睛的形状",
    evolution: [
      { period: "甲骨文", form: "👁️", description: "眼睛形状" },
      { period: "金文", form: "👀", description: "更抽象" },
      { period: "小篆", form: "目", description: "方形化" },
      { period: "楷书", form: "目", description: "现代汉字形态" }
    ],
    relatedCharacters: ["看", "见", "视"],
    historicalContext: "人体器官的直观表达",
    usage: "表示眼睛、视觉等",
    frequency: "中频"
  },
  {
    id: "mouth",
    character: "口",
    oracleScript: "👄",
    meaning: "嘴巴、开口",
    pronunciation: "kǒu",
    category: "身体",
    description: "象形字，像张开的嘴巴",
    evolution: [
      { period: "甲骨文", form: "👄", description: "嘴巴形状" },
      { period: "金文", form: "⭕", description: "圆形开口" },
      { period: "小篆", form: "口", description: "方形" },
      { period: "楷书", form: "口", description: "现代汉字形态" }
    ],
    relatedCharacters: ["言", "说", "吃"],
    historicalContext: "语言和饮食的基础器官",
    usage: "表示嘴巴、说话等",
    frequency: "高频"
  },
  {
    id: "hand",
    character: "手",
    oracleScript: "✋",
    meaning: "手、手掌",
    pronunciation: "shǒu",
    category: "身体",
    description: "象形字，像手的形状",
    evolution: [
      { period: "甲骨文", form: "✋", description: "手掌形状" },
      { period: "金文", form: "🤚", description: "五指分明" },
      { period: "小篆", form: "手", description: "简化" },
      { period: "楷书", form: "手", description: "现代汉字形态" }
    ],
    relatedCharacters: ["拿", "持", "握"],
    historicalContext: "人类劳动和创造的工具",
    usage: "表示手、动作等",
    frequency: "高频"
  }
];

// 字符分类
export const categories = [
  { id: "天文", name: "天文", description: "与天体、时间相关的字符" },
  { id: "自然", name: "自然", description: "自然现象和元素" },
  { id: "植物", name: "植物", description: "植物相关字符" },
  { id: "地理", name: "地理", description: "地形地貌相关" },
  { id: "人物", name: "人物", description: "人类相关字符" },
  { id: "身体", name: "身体", description: "人体器官相关" },
  { id: "形容", name: "形容", description: "形容词性字符" }
];

// 历史时期
export const periods = [
  { id: "甲骨文", name: "甲骨文", period: "商朝（约公元前1600-1046年）" },
  { id: "金文", name: "金文", period: "西周-春秋（约公元前1046-476年）" },
  { id: "小篆", name: "小篆", period: "秦朝（公元前221-206年）" },
  { id: "楷书", name: "楷书", period: "汉朝至今（公元前206年-）" }
];