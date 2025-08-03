import { useState } from 'react'
import { Menu, X, Home, BookOpen, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { icon: Home, label: '首页', href: '/' },
    { icon: BookOpen, label: '字典', href: '/' },
    { icon: Info, label: '关于', href: '/about' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo 和标题 */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-chinese-serif">甲</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-chinese-serif gradient-text">
                  甲骨文字典
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  探索汉字演变之美
                </p>
              </div>
            </div>
          </div>

          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="flex items-center space-x-2 text-foreground hover:text-primary hover:bg-primary/10"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* 移动端菜单按钮 */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold font-chinese-serif">菜单</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start space-x-3 text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}