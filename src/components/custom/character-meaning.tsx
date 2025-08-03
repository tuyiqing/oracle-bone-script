import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Character } from '@/data/characters'

interface CharacterMeaningProps {
  character: Character
}

export default function CharacterMeaning({ character }: CharacterMeaningProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 左侧：字义解析 */}
      <div className="space-y-6">
        {/* 基本信息 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-semibold font-chinese-serif">基本信息</h3>
            <Badge variant="secondary">{character.category}</Badge>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-sm font-medium text-muted-foreground min-w-16">现代字：</span>
              <span className="text-2xl font-chinese-serif text-primary">{character.modern}</span>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-sm font-medium text-muted-foreground min-w-16">拼音：</span>
              <span className="text-lg">{character.pinyin}</span>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-sm font-medium text-muted-foreground min-w-16">含义：</span>
              <span className="text-base leading-relaxed">{character.meaning}</span>
            </div>
          </div>
        </div>
        
        {/* 字源解析 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">字源解析</h3>
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-4">
              <p className="text-base leading-relaxed text-foreground">
                {character.origin}
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* 文化背景 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">文化背景</h3>
          <Card className="bg-muted/30 border-secondary/20">
            <CardContent className="p-4">
              <p className="text-base leading-relaxed text-foreground">
                {character.culturalBackground}
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* 演变概览 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">演变概览</h3>
          <div className="flex flex-wrap gap-3">
            {character.evolution.map((evolution, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="text-2xl font-chinese-serif text-primary mb-1">
                  {evolution.character}
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  {evolution.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 右侧：相关图片和扩展信息 */}
      <div className="space-y-6">
        {/* 相关图片 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">相关图片</h3>
          <Card className="chinese-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted">
                <img
                  src={character.imageUrl}
                  alt={`与汉字"${character.modern}"相关的图片`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg?height=300&width=400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    与"{character.modern}"字相关的文化意象
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 使用示例 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">常用词汇</h3>
          <div className="grid grid-cols-2 gap-3">
            {getCommonWords(character.modern).map((word, index) => (
              <Card key={index} className="bg-muted/30 hover:bg-primary/10 transition-colors duration-300">
                <CardContent className="p-3 text-center">
                  <div className="font-chinese-serif text-primary mb-1">
                    {word.word}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {word.meaning}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 相关成语 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-chinese-serif">相关成语</h3>
          <div className="space-y-2">
            {getRelatedIdioms(character.modern).map((idiom, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-chinese-serif text-primary">
                      {idiom.idiom}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {idiom.meaning}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 获取常用词汇的辅助函数
function getCommonWords(character: string) {
  const wordMap: Record<string, Array<{word: string, meaning: string}>> = {
    '日': [
      { word: '日出', meaning: '太阳升起' },
      { word: '日落', meaning: '太阳下山' },
      { word: '日记', meaning: '记录日常' },
      { word: '日历', meaning: '时间表' }
    ],
    '月': [
      { word: '月亮', meaning: '天体' },
      { word: '月光', meaning: '月的光芒' },
      { word: '月饼', meaning: '传统食品' },
      { word: '岁月', meaning: '时光' }
    ],
    '水': [
      { word: '水果', meaning: '植物果实' },
      { word: '水流', meaning: '流动的水' },
      { word: '水滴', meaning: '小水珠' },
      { word: '清水', meaning: '干净的水' }
    ],
    '火': [
      { word: '火焰', meaning: '燃烧现象' },
      { word: '火车', meaning: '交通工具' },
      { word: '火热', meaning: '温度高' },
      { word: '烟火', meaning: '燃放物' }
    ],
    '山': [
      { word: '山峰', meaning: '山的顶部' },
      { word: '山水', meaning: '自然景观' },
      { word: '山林', meaning: '山中森林' },
      { word: '高山', meaning: '海拔高的山' }
    ],
    '人': [
      { word: '人民', meaning: '民众' },
      { word: '人类', meaning: '人的总称' },
      { word: '人生', meaning: '生命历程' },
      { word: '人情', meaning: '人际关系' }
    ]
  }
  
  return wordMap[character] || [
    { word: `${character}字`, meaning: '汉字' },
    { word: `${character}形`, meaning: '字形' },
    { word: `${character}义`, meaning: '字义' },
    { word: `${character}音`, meaning: '字音' }
  ]
}

// 获取相关成语的辅助函数
function getRelatedIdioms(character: string) {
  const idiomMap: Record<string, Array<{idiom: string, meaning: string}>> = {
    '日': [
      { idiom: '日新月异', meaning: '每天都有新变化' },
      { idiom: '日积月累', meaning: '长期积累' }
    ],
    '月': [
      { idiom: '花好月圆', meaning: '美好圆满' },
      { idiom: '日月如梭', meaning: '时间过得很快' }
    ],
    '水': [
      { idiom: '水滴石穿', meaning: '坚持不懈' },
      { idiom: '上善若水', meaning: '最高境界如水' }
    ],
    '火': [
      { idiom: '火上浇油', meaning: '使情况更糟' },
      { idiom: '水火不容', meaning: '完全对立' }
    ],
    '山': [
      { idiom: '山清水秀', meaning: '风景优美' },
      { idiom: '移山倒海', meaning: '力量巨大' }
    ],
    '人': [
      { idiom: '人山人海', meaning: '人很多' },
      { idiom: '人才辈出', meaning: '人才很多' }
    ]
  }
  
  return idiomMap[character] || [
    { idiom: `${character}字相关`, meaning: '相关成语' }
  ]
}