import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Share2, BookOpen, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NavigationHeader from '@/components/custom/navigation-header'
import EvolutionTimeline from '@/components/custom/evolution-timeline'
import CharacterMeaning from '@/components/custom/character-meaning'
import { characters } from '@/data/characters'

export default function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const character = characters.find(c => c.id === id)
  
  if (!character) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 opacity-50">❓</div>
          <h2 className="text-2xl font-semibold mb-4">汉字未找到</h2>
          <Button onClick={() => navigate('/')} className="chinese-button">
            返回首页
          </Button>
        </div>
      </div>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `甲骨文字典 - ${character.modern}`,
        text: `了解汉字"${character.modern}"的演变历程`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // 这里可以添加toast提示
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 导航头部 */}
      <NavigationHeader />
      
      {/* 页面头部 */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center space-x-4">
                {/* 汉字展示 */}
                <div className="text-center">
                  <div className="text-6xl font-chinese-serif text-primary mb-1">
                    {character.modern}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {character.pinyin}
                  </div>
                </div>
                
                {/* 基本信息 */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold font-chinese-serif">
                    汉字详情
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{character.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {character.meaning}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="chinese-button"
              >
                <Share2 className="w-4 h-4 mr-2" />
                分享
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 汉字演变时间线 */}
          <section className="animate-fade-in">
            <Card className="chinese-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-chinese-serif">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>字形演变历程</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EvolutionTimeline character={character} />
              </CardContent>
            </Card>
          </section>
          
          {/* 字义解析区域 */}
          <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="chinese-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-chinese-serif">
                  <ImageIcon className="w-5 h-5 text-primary" />
                  <span>字义解析与文化背景</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CharacterMeaning character={character} />
              </CardContent>
            </Card>
          </section>
          
          {/* 相关推荐 */}
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Card className="chinese-card">
              <CardHeader>
                <CardTitle className="font-chinese-serif">相关汉字推荐</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  {characters
                    .filter(c => c.id !== character.id && c.category === character.category)
                    .slice(0, 6)
                    .map(relatedChar => (
                      <div
                        key={relatedChar.id}
                        className="text-center p-4 rounded-lg bg-muted hover:bg-primary/10 cursor-pointer transition-colors duration-300"
                        onClick={() => navigate(`/character/${relatedChar.id}`)}
                      >
                        <div className="text-2xl font-chinese-serif text-primary mb-1">
                          {relatedChar.modern}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {relatedChar.pinyin}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      
      {/* 页脚 */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 甲骨文字典 - 探索汉字演变之美
          </p>
        </div>
      </footer>
    </div>
  )
}