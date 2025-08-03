// 临时脚本：添加单个字符到 TCB 数据库进行测试
const characterData = {
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
  imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

console.log('准备添加字符数据：', characterData);