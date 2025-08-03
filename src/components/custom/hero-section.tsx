export default function HeroSection() {
  return (
    <section className="relative py-20 pattern-bg overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* 内容区域 */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl font-bold font-chinese-serif gradient-text animate-fade-in">
            甲骨文字典
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up font-chinese-serif">
            探索汉字从甲骨文到现代楷书的演变历程
          </p>
          
          {/* 描述文字 */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" 
             style={{ animationDelay: '0.2s' }}>
            深入了解每个汉字背后的文化内涵和历史故事，感受中华文字的博大精深
          </p>
          
          {/* 装饰性汉字展示 */}
          <div className="flex justify-center items-center space-x-8 mt-12 animate-scale-in" 
               style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-6xl font-chinese-serif text-primary">☉</div>
              <div className="text-sm text-muted-foreground">甲骨文</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-6xl font-chinese-serif text-secondary">𝌇</div>
              <div className="text-sm text-muted-foreground">金文</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-6xl font-chinese-serif text-primary">日</div>
              <div className="text-sm text-muted-foreground">楷书</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}