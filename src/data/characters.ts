export interface CharacterEvolution {
  period: string;
  dynasty: string;
  character: string;
  description: string;
}

export interface Character {
  id: string;
  modern: string;
  pinyin: string;
  category: string;
  meaning: string;
  origin: string;
  culturalBackground: string;
  imageUrl: string;
  evolution: CharacterEvolution[];
}

export const characters: Character[] = [
  {
    id: "sun",
    modern: "日",
    pinyin: "rì",
    category: "自然",
    meaning: "太阳，白天，日子",
    origin: "象形字，像太阳的形状。古人观察太阳圆形的外观，中间有黑点（太阳黑子），创造了这个字。",
    culturalBackground: "日是中华文化中最重要的自然符号之一，代表光明、温暖和生命力。在古代，太阳被视为至高无上的神灵，是时间和季节的标志。",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "☉",
        description: "圆形中有一点，直接模拟太阳的外观"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌇",
        description: "保持圆形特征，笔画更加规整"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌇",
        description: "形状趋于方正，但仍保持中心一点"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "日",
        description: "演变为长方形，中间横画与边框相连"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "日",
        description: "现代标准字形，长方形结构稳定"
      }
    ]
  },
  {
    id: "moon",
    modern: "月",
    pinyin: "yuè",
    category: "自然",
    meaning: "月亮，月份，时间单位",
    origin: "象形字，像弯月的形状。古人观察月亮的盈亏变化，以弯月形状作为字形基础。",
    culturalBackground: "月在中华文化中象征阴柔、团圆和思念。月圆月缺的周期性变化，成为古人计时的重要依据，也寄托了无数文人墨客的情感。",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "☽",
        description: "弯月形状，两端尖锐"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌙",
        description: "弯月形状更加规整，笔画圆润"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌙",
        description: "保持弯月特征，笔画标准化"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "月",
        description: "演变为方形框架，内有两横"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "月",
        description: "现代标准字形，左边竖画略弯"
      }
    ]
  },
  {
    id: "water",
    modern: "水",
    pinyin: "shuǐ",
    category: "自然",
    meaning: "水，液体，河流",
    origin: "象形字，像水流的形状。中间一竖代表主流，两边的点代表水花飞溅。",
    culturalBackground: "水是生命之源，在中华文化中代表柔韧、智慧和包容。老子说'上善若水'，以水的品格比喻最高的道德境界。",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "𝌊",
        description: "中间一条主线，两边有支流，像水流形状"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌊",
        description: "保持流水特征，笔画更加流畅"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌊",
        description: "中间竖画明显，两边点画规整"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "水",
        description: "中间竖画，左右各有一点一撇"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "水",
        description: "现代标准字形，四点水的基本结构"
      }
    ]
  },
  {
    id: "fire",
    modern: "火",
    pinyin: "huǒ",
    category: "自然",
    meaning: "火，火焰，热情",
    origin: "象形字，像火焰燃烧的形状。中间是火苗，两边是火花。",
    culturalBackground: "火代表光明、温暖和文明的进步。在中华文化中，火象征热情、活力和创造力，是人类文明发展的重要标志。",
    imageUrl: "https://images.unsplash.com/photo-1525920980995-804834e5b3bb?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "𝌋",
        description: "中间火苗向上，两边有火花飞溅"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌋",
        description: "火焰形状更加生动，笔画流畅"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌋",
        description: "保持火焰特征，结构规整化"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "火",
        description: "中间竖画，两边撇捺，下有两点"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "火",
        description: "现代标准字形，上尖下宽的稳定结构"
      }
    ]
  },
  {
    id: "mountain",
    modern: "山",
    pinyin: "shān",
    category: "自然",
    meaning: "山，高地，山脉",
    origin: "象形字，像山峰的轮廓。三个竖画代表三座山峰连绵起伏。",
    culturalBackground: "山在中华文化中象征稳重、永恒和崇高。古人常以山比喻君子的品格，'仁者乐山'体现了对山的崇敬之情。",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "𝌌",
        description: "三个尖峰，像山脉连绵的轮廓"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌌",
        description: "保持三峰特征，笔画更加规整"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌌",
        description: "三竖相连，形成稳定的山形结构"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "山",
        description: "中间竖画最高，两边较短，底部相连"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "山",
        description: "现代标准字形，三竖一横的稳定结构"
      }
    ]
  },
  {
    id: "person",
    modern: "人",
    pinyin: "rén",
    category: "人物",
    meaning: "人，人类，个体",
    origin: "象形字，像一个人侧立的形状。一撇一捺代表人的两条腿。",
    culturalBackground: "人是万物之灵，在中华文化中强调人的主体性和社会性。'人'字的结构体现了相互支撑、和谐共存的理念。",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    evolution: [
      {
        period: "甲骨文",
        dynasty: "商朝 (约公元前1600-1046年)",
        character: "𝌍",
        description: "像一个人侧立，头、身、腿清晰可见"
      },
      {
        period: "金文",
        dynasty: "西周-春秋 (公元前1046-476年)",
        character: "𝌍",
        description: "人形更加抽象化，保持基本轮廓"
      },
      {
        period: "小篆",
        dynasty: "秦朝 (公元前221-206年)",
        character: "𝌍",
        description: "简化为两笔，一撇一捺"
      },
      {
        period: "隶书",
        dynasty: "汉朝 (公元前206-220年)",
        character: "人",
        description: "撇捺分明，结构稳定"
      },
      {
        period: "楷书",
        dynasty: "魏晋以后 (公元220年-)",
        character: "人",
        description: "现代标准字形，一撇一捺相互支撑"
      }
    ]
  }
];

export const categories = [
  { id: "all", name: "全部", count: characters.length },
  { id: "nature", name: "自然", count: characters.filter(c => c.category === "自然").length },
  { id: "person", name: "人物", count: characters.filter(c => c.category === "人物").length },
  { id: "animal", name: "动物", count: 0 },
  { id: "object", name: "器物", count: 0 }
];