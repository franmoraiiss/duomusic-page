import { useState } from 'react'
import logo from './assets/logo-without-bg.png'
import androidLogo from './assets/android-logo.png'
import appleLogo from './assets/apple-logo.png'
import './App.css'

function App() {
  const [activePlatform, setActivePlatform] = useState<'android' | 'ios' | null>(null)

  const handleDownload = (platform: 'android' | 'ios') => {
    setActivePlatform(platform)
    
    const downloadUrls = {
      android: 'https://github.com/franmoraiiss/duomusic-pwa/releases/download/v1.0.0/DuoMusic-Android.apk',
      ios: 'https://github.com/franmoraiiss/duomusic-pwa/releases/download/v1.0.0/DuoMusic-iOS.zip'
    }
    
    window.open(downloadUrls[platform], '_blank')
    
    setTimeout(() => {
      setActivePlatform(null)
    }, 2000)
  }

  const handlePWAOpen = () => {
    window.open('https://duomusic-pwa.vercel.app/', '_blank')
  }

  const handleGitHubRelease = () => {
    window.open('https://github.com/franmoraiiss/duomusic-pwa/releases/tag/v1.0.0', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Logo DuoMusic" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DuoMusic
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 overflow-hidden">
              <img src={logo} alt="Ícone do App DuoMusic" className="w-20 h-20 object-contain" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Aprenda Música com
            <span className="block text-purple-400">DuoMusic</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Domine o piano através de aulas interativas, feedback em tempo real e caminhos de aprendizado personalizados projetados para músicos de todos os níveis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Aulas Interativas</h3>
              <p className="text-gray-400">Aprenda com feedback em tempo real e tutoriais guiados</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Aprendizado Personalizado</h3>
              <p className="text-gray-400">Currículo adaptativo que cresce com suas habilidades</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Acompanhe o Progresso</h3>
              <p className="text-gray-400">Monitore sua evolução com análises detalhadas</p>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8">Baixe o DuoMusic</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <button
                onClick={() => handleDownload('android')}
                disabled={activePlatform === 'android'}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  activePlatform === 'android'
                    ? 'bg-green-500/20 border-green-500 text-green-400'
                    : 'bg-gray-700/50 border-gray-600 hover:border-purple-500 hover:bg-purple-500/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={androidLogo} alt="Logo Android" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Android</h3>
                    <p className="text-sm text-gray-400">
                      {activePlatform === 'android' ? 'Baixando...' : 'Baixar APK'}
                    </p>
                  </div>
                </div>
                {activePlatform === 'android' && (
                  <div className="absolute inset-0 bg-green-500/10 rounded-2xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
                  </div>
                )}
              </button>

              <button
                onClick={() => handleDownload('ios')}
                disabled={activePlatform === 'ios'}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  activePlatform === 'ios'
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-gray-700/50 border-gray-600 hover:border-purple-500 hover:bg-purple-500/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={appleLogo} alt="Logo Apple" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">iOS</h3>
                    <p className="text-sm text-gray-400">
                      {activePlatform === 'ios' ? 'Baixando...' : 'Baixar ZIP'}
                    </p>
                  </div>
                </div>
                {activePlatform === 'ios' && (
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                  </div>
                )}
              </button>
            </div>

            <div className="max-w-md mx-auto">
              <div className="text-center mb-4">
                <span className="text-gray-400 text-sm">ou</span>
              </div>
              <button
                onClick={handlePWAOpen}
                className="w-full p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Acessar diretamente no navegador</h3>
                    <p className="text-sm text-gray-400">Abrir em nova guia</p>
                  </div>
                </div>
              </button>
              
              {/* DevTools Note */}
              <div className="mt-4 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <p className="text-xs text-gray-300">
                  💡 <strong>Dica:</strong> Para a melhor experiência no navegador, use o modo celular do DevTools (F12 → Toggle device toolbar).
                </p>
              </div>
            </div>

            {/* PWA Information Section */}
            <div className="mt-8 p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚠️</span>
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-300">Aplicação PWA em Desenvolvimento</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    O DuoMusic é um Progressive Web App (PWA) que ainda não foi publicado nas lojas oficiais. 
                    Para instalar no seu dispositivo, você precisará ativar o modo desenvolvedor.
                  </p>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                    <h4 className="text-sm font-semibold mb-2 text-yellow-200">Documentação para rodar:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• <strong>Android:</strong> Ativar "Fontes desconhecidas" nas configurações</li>
                      <li>• <strong>iOS:</strong> Não é possível instalar aplicações externas da AppStore no iOS, portanto para rodar o DuoMusic no iOS, você precisará de um Macbook e usar o XCode para rodar o projeto no Simulator. Siga a seguinte documentação: <a href="https://docs.pwabuilder.com/#/builder/app-store" target="_blank" rel="noopener noreferrer" className='text-blue-500'>docs.pwabuilder</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-700/30 rounded-2xl border border-gray-600">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📦</span>
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-2 text-gray-200">Release v1.0.0 Disponível</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Encontre a versão mais recente do DuoMusic no GitHub, incluindo arquivos APK para Android e instruções de instalação.
                  </p>
                  <button
                    onClick={handleGitHubRelease}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors duration-200"
                  >
                    <span className="text-lg">🐙</span>
                    <span className="text-sm font-medium">Ver Release no GitHub</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <p className="text-sm text-gray-300">
                💡 <strong>PWA:</strong> O DuoMusic funciona offline.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 mt-16">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 DuoMusic. Um projeto de graduação para aprender música através de aulas interativas de piano.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
