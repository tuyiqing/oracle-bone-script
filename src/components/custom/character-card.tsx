import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Character } from '@/data/characters'

interface CharacterCardProps {
  character: Character | any // 支持扩展的字符数据格式
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/character/${character.id}`)
  }

  return (
    <Card 
      className="chinese-card cursor-pointer group h-full"
      onClick={handleClick}
    >
      <CardContent className="p-6 h-full flex flex-col">
        {/* 汉字展示区域 */}
        <div className="text-center mb-4">
          {/* 甲骨文字形 */}
          <div className="text-4xl md:text-5xl font-chinese-serif text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
            {character.oracleScript || character.evolution?.[0]?.character || character.evolution?.[0]?.form || '○'}
          </div>
          
          {/* 现代汉字 */}
          <div className="text-2xl md:text-3xl font-chinese-serif text-foreground mb-1">
            {character.character || character.modern}
          </div>
          
          {/* 拼音 */}
          <div className="text-sm text-muted-foreground">
            {character.pronunciation || character.pinyin}
          </div>
        </div>
        
        {/* 分类标签和频率 */}
        <div className="flex justify-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {character.category}
          </Badge>
          {character.frequency && (
            <Badge variant="outline" className="text-xs">
              {character.frequency}
            </Badge>
          )}
        </div>
        
        {/* 含义简介 */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-sm text-muted-foreground text-center line-clamp-2 mb-3">
            {character.meaning}
          </p>
          
          {/* 演变阶段指示器 */}
          <div className="flex justify-center space-x-1">
            {(character.evolution || []).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>
        
        {/* 悬停效果提示 */}
        <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-primary">点击查看详细演变过程</p>
        </div>
      </CardContent>
    </Card>
  )
}