import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Character } from '@/data/characters'

interface EvolutionTimelineProps {
  character: Character
}

export default function EvolutionTimeline({ character }: EvolutionTimelineProps) {
  const [selectedEvolution, setSelectedEvolution] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* 时间线主体 */}
      <div className="relative">
        {/* 水平时间线 */}
        <div className="flex items-center justify-between relative">
          {/* 连接线 */}
          <div className="absolute top-1/2 left-0 right-0 timeline-line transform -translate-y-1/2 z-0" />
          
          {/* 演变节点 */}
          {character.evolution.map((evolution, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* 时间线节点 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="timeline-node p-0 w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
                    onClick={() => setSelectedEvolution(index)}
                  >
                    <span className="text-xl md:text-2xl font-chinese-serif text-primary-foreground">
                      {evolution.character}
                    </span>
                  </Button>
                </DialogTrigger>
                
                {/* 详细信息弹窗 */}
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-chinese-serif text-center">
                      {evolution.period} - {evolution.dynasty}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-center">
                    <div className="text-6xl font-chinese-serif text-primary">
                      {evolution.character}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {evolution.description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* 节点标签 */}
              <div className="mt-4 text-center space-y-1">
                <div className="text-sm font-medium font-chinese-serif">
                  {evolution.period}
                </div>
                <div className="text-xs text-muted-foreground">
                  {evolution.dynasty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 演变说明卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {character.evolution.map((evolution, index) => (
          <Card 
            key={index} 
            className="chinese-card cursor-pointer hover:border-primary/50 transition-colors duration-300"
            onClick={() => setSelectedEvolution(index)}
          >
            <CardContent className="p-4 text-center space-y-3">
              <div className="text-3xl font-chinese-serif text-primary">
                {evolution.character}
              </div>
              <div className="space-y-1">
                <h4 className="font-medium font-chinese-serif">
                  {evolution.period}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {evolution.dynasty}
                </p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {evolution.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* 演变动画提示 */}
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground">
          点击时间线节点或卡片查看详细信息
        </p>
        <div className="flex justify-center items-center space-x-2 mt-2 text-xs text-muted-foreground">
          <span>演变过程：</span>
          {character.evolution.map((evolution, index) => (
            <div key={index} className="flex items-center">
              <span className="font-chinese-serif">{evolution.period}</span>
              {index < character.evolution.length - 1 && (
                <span className="mx-1">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}