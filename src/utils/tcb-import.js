// TCB 数据导入脚本
// 这个脚本用于将扩展的甲骨文字符数据导入到腾讯云开发数据库

const extendedCharacters = [
  {
    _id: "sun_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    _id: "moon_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop"
  },
  {
    _id: "water_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
  },
  {
    _id: "fire_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1525920980995-804834e5b3bb?w=400&h=300&fit=crop"
  },
  {
    _id: "tree_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
  },
  {
    _id: "mountain_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    _id: "person_extended",
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
    frequency: "最高频",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    _id: "big_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop"
  },
  {
    _id: "eye_extended",
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
    frequency: "中频",
    imageUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop"
  },
  {
    _id: "mouth_extended",
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
    frequency: "高频",
    imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
  }
];

console.log('准备导入的甲骨文字符数据：', extendedCharacters.length, '个字符');