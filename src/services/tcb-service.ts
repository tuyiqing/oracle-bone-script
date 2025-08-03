// TCB 数据服务
export interface ExtendedCharacter {
  _id?: string;
  character: string;
  oracleScript: string;
  pronunciation: string;
  meaning: string;
  category: string;
  frequency: string;
  period: string;
  evolution: Array<{
    period: string;
    form: string;
    description: string;
  }>;
  etymology: string;
  relatedCharacters: string[];
  examples: Array<{
    text: string;
    translation: string;
  }>;
  archaeologicalSites: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// 模拟 TCB 数据（实际项目中会从 TCB 数据库获取）
const mockTCBData: ExtendedCharacter[] = [
  {
    _id: "sun_extended",
    character: "日",
    oracleScript: "☉",
    pronunciation: "rì",
    meaning: "太阳，白天，日子",
    category: "天文",
    frequency: "高频",
    period: "商代晚期",
    evolution: [
      {
        period: "甲骨文",
        form: "☉",
        description: "圆形中间有一点，象征太阳"
      },
      {
        period: "金文",
        form: "日",
        description: "形状逐渐方正化"
      },
      {
        period: "小篆",
        form: "日",
        description: "进一步规范化"
      },
      {
        period: "现代汉字",
        form: "日",
        description: "标准楷书形态"
      }
    ],
    etymology: "象形字，描绘太阳的形状。最初为圆形，中间有一点表示太阳黑子或太阳的实体。",
    relatedCharacters: ["月", "明", "晨", "昏"],
    examples: [
      {
        text: "日出东方",
        translation: "太阳从东方升起"
      },
      {
        text: "三日不见",
        translation: "三天没有见面"
      }
    ],
    archaeologicalSites: ["安阳殷墟", "郑州商城"]
  },
  {
    _id: "moon_extended",
    character: "月",
    oracleScript: "☽",
    pronunciation: "yuè",
    meaning: "月亮，月份，时间单位",
    category: "天文",
    frequency: "高频",
    period: "商代晚期",
    evolution: [
      {
        period: "甲骨文",
        form: "☽",
        description: "弯月形状，象征月亮"
      },
      {
        period: "金文",
        form: "月",
        description: "保持弯月特征"
      },
      {
        period: "小篆",
        form: "月",
        description: "形状更加规整"
      },
      {
        period: "现代汉字",
        form: "月",
        description: "标准楷书形态"
      }
    ],
    etymology: "象形字，描绘月亮的弯曲形状。古人观察月相变化，用弯月形来表示。",
    relatedCharacters: ["日", "明", "夕", "夜"],
    examples: [
      {
        text: "月圆人团圆",
        translation: "月亮圆满时人们团聚"
      },
      {
        text: "一月之期",
        translation: "一个月的期限"
      }
    ],
    archaeologicalSites: ["安阳殷墟", "偃师商城"]
  },
  {
    _id: "water_extended",
    character: "水",
    oracleScript: "氵",
    pronunciation: "shuǐ",
    meaning: "水，液体，河流",
    category: "自然",
    frequency: "高频",
    period: "商代早期",
    evolution: [
      {
        period: "甲骨文",
        form: "氵",
        description: "流水的形状，中间一道，两边水花"
      },
      {
        period: "金文",
        form: "水",
        description: "保持流动特征"
      },
      {
        period: "小篆",
        form: "水",
        description: "笔画更加规范"
      },
      {
        period: "现代汉字",
        form: "水",
        description: "标准楷书形态"
      }
    ],
    etymology: "象形字，描绘流水的形状。中间一条主流，两边是水花或支流。",
    relatedCharacters: ["河", "江", "海", "湖"],
    examples: [
      {
        text: "水能载舟",
        translation: "水能够承载船只"
      },
      {
        text: "饮水思源",
        translation: "喝水时想到水的来源"
      }
    ],
    archaeologicalSites: ["安阳殷墟", "郑州商城", "偃师商城"]
  },
  {
    _id: "fire_extended",
    character: "火",
    oracleScript: "🔥",
    pronunciation: "huǒ",
    meaning: "火，火焰，热能",
    category: "自然",
    frequency: "高频",
    period: "商代早期",
    evolution: [
      {
        period: "甲骨文",
        form: "🔥",
        description: "火焰向上燃烧的形状"
      },
      {
        period: "金文",
        form: "火",
        description: "保持火焰特征"
      },
      {
        period: "小篆",
        form: "火",
        description: "笔画规范化"
      },
      {
        period: "现代汉字",
        form: "火",
        description: "标准楷书形态"
      }
    ],
    etymology: "象形字，描绘火焰燃烧时向上跳跃的形状。",
    relatedCharacters: ["炎", "焰", "烧", "热"],
    examples: [
      {
        text: "水火不容",
        translation: "水和火不能相容"
      },
      {
        text: "星火燎原",
        translation: "小火花可以燃烧整个原野"
      }
    ],
    archaeologicalSites: ["安阳殷墟", "郑州商城"]
  },
  {
    _id: "mountain_extended",
    character: "山",
    oracleScript: "⛰",
    pronunciation: "shān",
    meaning: "山，高地，山脉",
    category: "地理",
    frequency: "高频",
    period: "商代中期",
    evolution: [
      {
        period: "甲骨文",
        form: "⛰",
        description: "三个山峰的形状"
      },
      {
        period: "金文",
        form: "山",
        description: "保持三峰特征"
      },
      {
        period: "小篆",
        form: "山",
        description: "形状更加规整"
      },
      {
        period: "现代汉字",
        form: "山",
        description: "标准楷书形态"
      }
    ],
    etymology: "象形字，描绘山峰连绵的形状，通常表现为三个山峰。",
    relatedCharacters: ["岭", "峰", "岩", "崖"],
    examples: [
      {
        text: "山高水长",
        translation: "山高水远，比喻情谊深厚"
      },
      {
        text: "移山倒海",
        translation: "能够移动山岳，倒转大海"
      }
    ],
    archaeologicalSites: ["安阳殷墟", "偃师商城"]
  }
];

// TCB 数据服务类
export class TCBService {
  private static instance: TCBService;
  private characters: ExtendedCharacter[] = mockTCBData;

  private constructor() {}

  public static getInstance(): TCBService {
    if (!TCBService.instance) {
      TCBService.instance = new TCBService();
    }
    return TCBService.instance;
  }

  // 获取所有字符
  async getAllCharacters(): Promise<ExtendedCharacter[]> {
    // 模拟异步操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.characters);
      }, 500);
    });
  }

  // 根据分类获取字符
  async getCharactersByCategory(category: string): Promise<ExtendedCharacter[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.characters.filter(char => char.category === category);
        resolve(filtered);
      }, 300);
    });
  }

  // 搜索字符
  async searchCharacters(query: string): Promise<ExtendedCharacter[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.characters.filter(char => 
          char.character.includes(query) ||
          char.meaning.includes(query) ||
          char.pronunciation.includes(query)
        );
        resolve(filtered);
      }, 300);
    });
  }

  // 根据ID获取字符详情
  async getCharacterById(id: string): Promise<ExtendedCharacter | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const character = this.characters.find(char => char._id === id);
        resolve(character || null);
      }, 200);
    });
  }

  // 获取所有分类
  async getCategories(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = [...new Set(this.characters.map(char => char.category))];
        resolve(categories);
      }, 200);
    });
  }

  // 获取统计信息
  async getStatistics(): Promise<{
    totalCharacters: number;
    categoriesCount: number;
    periodsCount: number;
  }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = new Set(this.characters.map(char => char.category));
        const periods = new Set(this.characters.map(char => char.period));
        
        resolve({
          totalCharacters: this.characters.length,
          categoriesCount: categories.size,
          periodsCount: periods.size
        });
      }, 200);
    });
  }
}

// 导出服务实例
export const tcbService = TCBService.getInstance();