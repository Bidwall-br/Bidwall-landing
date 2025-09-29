import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Paintbrush, 
  Gavel, 
  Star, 
  MapPin, 
  Mail, 
  Phone, 
  Play,
  CheckCircle,
  Users,
  Clock,
  Shield
} from 'lucide-react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              BIDWALL
            </h1>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            <MapPin className="w-3 h-3 mr-1" />
            Copacabana
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0.3, 1 - scrollY * 0.002)
            }}
          >
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
              🚀 MVP em Teste
            </Badge>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
              Em breve,<br />
              <span className="text-blue-600">com vocês!</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Testando nosso MVP em Copacabana - A revolução dos leilões dinâmicos 
              para serviços de pintura está chegando!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Quero ser notificado
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full"
                onClick={() => document.getElementById('video').scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2" />
                Ver como funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que é a BIDWALL?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conectamos você aos melhores pintores através de um sistema inovador 
              de leilões dinâmicos. Qualidade garantida, preços justos e transparência total.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Leilões Dinâmicos</h4>
                <p className="text-gray-600">
                  Pintores qualificados competem pelo seu projeto, garantindo o melhor preço e qualidade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Alta Qualidade</h4>
                <p className="text-gray-600">
                  Apenas pintores verificados e com excelente reputação fazem parte da nossa rede.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Transparência Total</h4>
                <p className="text-gray-600">
                  Acompanhe todo o processo em tempo real, desde o leilão até a conclusão do serviço.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Como Funciona a BIDWALL
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Vídeo Explicativo</h4>
                    <p className="text-blue-100 max-w-md mx-auto">
                      Em breve, um pintor profissional explicará como nossa plataforma revoluciona 
                      o mercado de serviços de pintura.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Testando em Copacabana
            </Badge>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Começando pelo Coração do Rio
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Escolhemos Copacabana para testar nosso MVP por ser uma região com alta demanda 
              por serviços de pintura e pintores experientes. Seja o primeiro a experimentar 
              a revolução dos leilões dinâmicos!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Pintores Locais</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Resposta Rápida</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Qualidade Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seja o Primeiro a Saber!
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cadastre seu e-mail e receba em primeira mão todas as novidades sobre o lançamento da BIDWALL.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
                required
              />
              <Button 
                type="submit" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-2 font-semibold"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Cadastrado!
                  </>
                ) : (
                  'Cadastrar'
                )}
              </Button>
            </div>
          </form>
          
          {isSubmitted && (
            <p className="text-blue-100 mt-4 animate-fade-in">
              ✨ Obrigado! Você será o primeiro a saber quando lançarmos!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BIDWALL</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@bidwall.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(21) 9999-9999</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BIDWALL. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Revolucionando o mercado de serviços de pintura através de leilões dinâmicos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
