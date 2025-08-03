import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, Database, RefreshCw } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import CharacterCard from '@/components/custom/character-card'
import NavigationHeader from '@/components/custom/navigation-header'
import HeroSection from '@/components/custom/hero-section'
import { characters, categories } from '@/data/characters'
import { extendedCharacters } from '@/data/extended-characters'
import { tcbService, ExtendedCharacter } from '@/services/tcb-service'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [useLocalData, setUseLocalData] = useState(false)
  const [tcbCharacters, setTcbCharacters] = useState<ExtendedCharacter[]>([])
  const [tcbLoading, setTcbLoading] = useState(false)
  const [tcbError, setTcbError] = useState<string | null>(null)
  
  // 从 TCB 加载数据
  const loadTCBData = async () => {
    setTcbLoading(true)
    setTcbError(null)
    try {
      const data = await tcbService.getAllCharacters()
      setTcbCharacters(data)
    } catch (error) {
      setTcbError('加载 TCB 数据失败')
      console.error('TCB 数据加载错误:', error)
    } finally {
      setTcbLoading(false)
    }
  }
  
  // 组件挂载时加载数据
  useEffect(() => {
    if (!useLocalData) {
      loadTCBData()
    }
  }, [useLocalData])
  
  // 合并本地数据和扩展数据作为备用
  const localCharacters = useMemo(() => {
    const transformedCharacters = characters.map(char => ({
      _id: char.id,
      id: char.id,
      character: char.modern,
      oracleScript: char.evolution[0]?.character || char.modern,
      meaning: char.meaning,
      pronunciation: char.pinyin,
      category: char.category,
      frequency: "高频",
      period: "商代晚期",
      evolution: char.evolution.map(evo => ({
        period: evo.period,
        form: evo.character,
        description: evo.description
      })),
      etymology: char.origin || "",
      relatedCharacters: [],
      examples: [],
      archaeologicalSites: ["安阳殷墟"],
      imageUrl: char.imageUrl,
      modern: char.modern,
      pinyin: char.pinyin
    }))
    
    return [...transformedCharacters, ...extendedCharacters]
  }, [])
  
  // 选择使用的数据源
  const activeCharacters = useLocalData || tcbError ? localCharacters : tcbCharacters
  
  // 计算分类统计
  const activeCategories = useMemo(() => {
    const categoryMap = new Map()
    
    // 添加"全部"选项
    categoryMap.set('all', { id: 'all', name: '全部', count: activeCharacters.length })
    
    // 统计各分类数量
    activeCharacters.forEach(char => {
      const category = char.category
      if (categoryMap.has(category)) {
        categoryMap.get(category).count++
      } else {
        categoryMap.set(category, { id: category, name: category, count: 1 })
      }
    })
    
    return Array.from(categoryMap.values())
  }, [activeCharacters])

  // 过滤汉字数据
  const filteredCharacters = useMemo(() => {
    return activeCharacters.filter(character => {
      const matchesSearch = 
        character.character?.includes(searchTerm) ||
        character.modern?.includes(searchTerm) ||
        character.pronunciation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.pinyin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.meaning?.includes(searchTerm)
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        character.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [activeCharacters, searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* 导航头部 */}
      <NavigationHeader />
      
      {/* 英雄区域 */}
      <HeroSection />
      
      {/* 搜索和筛选区域 */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="搜索汉字、拼音或含义..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="chinese-search pl-10 text-lg h-12"
            />
          </div>
          
          {/* 数据源状态和控制 */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-card rounded-lg border">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-primary" />
              <div className="text-sm">
                <span className="font-medium">数据源：</span>
                <span className={`ml-2 ${tcbError ? 'text-destructive' : 'text-primary'}`}>
                  {tcbLoading ? '加载中...' : 
                   tcbError ? '本地数据' : 
                   useLocalData ? '本地数据' : 'TCB 云数据库'}
                </span>
                <span className="ml-2 text-muted-foreground">
                  ({activeCharacters.length} 个字符)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setUseLocalData(!useLocalData)}
                className="text-xs"
              >
                {useLocalData ? '切换到云数据' : '切换到本地数据'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={loadTCBData}
                disabled={tcbLoading}
                className="text-xs"
              >
                <RefreshCw className={`w-3 h-3 mr-1 ${tcbLoading ? 'animate-spin' : ''}`} />
                刷新
              </Button>
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>分类筛选：</span>
            </div>
            {activeCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`chinese-button ${
                  selectedCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card hover:bg-muted'
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* 汉字卡片网格 */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* 结果统计 */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              找到 <span className="text-primary font-semibold">{filteredCharacters.length}</span> 个汉字
            </p>
          </div>
          
          {/* 汉字卡片网格 */}
          {filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {filteredCharacters.map((character, index) => (
                <div
                  key={character.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CharacterCard character={character} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-xl font-semibold mb-2">未找到相关汉字</h3>
              <p className="text-muted-foreground">
                请尝试其他搜索词或选择不同的分类
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 甲骨文字典 - 探索汉字演变之美
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            传承中华文化，弘扬汉字之美
          </p>
        </div>
      </footer>
    </div>
  )
}