import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  const musicTracks = [
    { id: 1, title: "Cosmic Dreams", artist: "StarWave", genre: "Electronic", duration: "3:42" },
    { id: 2, title: "Midnight Jazz", artist: "SoulFlow", genre: "Jazz", duration: "4:15" },
    { id: 3, title: "Digital Hearts", artist: "TechBeat", genre: "Techno", duration: "5:20" },
    { id: 4, title: "Acoustic Sunrise", artist: "EcoSound", genre: "Folk", duration: "3:58" },
  ];

  const users = [
    { id: 1, name: "Alex Music", avatar: "/api/placeholder/40/40", status: "online" },
    { id: 2, name: "DJ Maria", avatar: "/api/placeholder/40/40", status: "recording" },
    { id: 3, name: "Beat Maker", avatar: "/api/placeholder/40/40", status: "online" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              <Icon name="Music" className="inline mr-2 text-blue-400" size={32} />
              MusicNet
            </CardTitle>
            <p className="text-gray-400">Музична соціальна мережа</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentView === 'login' ? (
              <>
                <div className="space-y-3">
                  <Input 
                    placeholder="Email або нікнейм" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Input 
                    type="password" 
                    placeholder="Пароль" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <Button 
                  type="button"
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Увійти
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => setCurrentView('register')}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Зареєструватися
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <Input 
                    placeholder="Ім'я" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Email" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Input 
                    type="password" 
                    placeholder="Пароль" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <Button 
                  type="button"
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Створити акаунт
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => setCurrentView('login')}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Вже маю акаунт
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Music" className="text-blue-400" size={32} />
            <h1 className="text-xl font-bold">MusicNet</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Button type="button" variant="ghost" className="text-gray-300 hover:text-white">
              <Icon name="Home" size={18} className="mr-2" />
              Головна
            </Button>
            <Button type="button" variant="ghost" className="text-gray-300 hover:text-white">
              <Icon name="Search" size={18} className="mr-2" />
              Пошук
            </Button>
            <Button type="button" variant="ghost" className="text-gray-300 hover:text-white">
              <Icon name="Users" size={18} className="mr-2" />
              Друзі
            </Button>
            <Button 
              type="button"
              onClick={() => setIsLoggedIn(false)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Icon name="User" size={18} className="mr-2" />
              Профіль
            </Button>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Music Sharing Section */}
          <Card className="bg-card/80 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Icon name="Upload" className="mr-2 text-blue-400" size={24} />
                Поділитися музикою
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button type="button" className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                    <Icon name="Upload" size={18} className="mr-2" />
                    Завантажити трек
                  </Button>
                  <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Icon name="Video" size={18} className="mr-2" />
                    Додати відео
                  </Button>
                  <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Icon name="Camera" size={18} className="mr-2" />
                    Фото
                  </Button>
                </div>
                <Input 
                  placeholder="Опишіть ваш трек..."
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Music Feed */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Icon name="Music" className="mr-2 text-blue-400" size={24} />
              Останні треки
            </h2>
            
            {musicTracks.map((track) => (
              <Card key={track.id} className="bg-card/80 backdrop-blur-sm border-gray-800 hover:bg-card/90 transition-all duration-200 hover:scale-[1.02]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon name="Play" size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{track.title}</h3>
                        <p className="text-gray-400">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                        {track.genre}
                      </Badge>
                      <span className="text-gray-400">{track.duration}</span>
                      <Button type="button" size="sm" className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                        <Icon name="Heart" size={16} className="mr-1" />
                        Лайк
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaborative Singing Section */}
          <Card className="bg-card/80 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Icon name="Mic" className="mr-2 text-blue-400" size={24} />
                Спільний спів
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-400">Приєднуйтесь до живих сесій співу з іншими музикантами</p>
                <div className="flex space-x-4">
                  <Button type="button" className="bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105">
                    <Icon name="Radio" size={18} className="mr-2" />
                    Створити сесію
                  </Button>
                  <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Icon name="Users" size={18} className="mr-2" />
                    Приєднатися
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* User Profile */}
          <Card className="bg-card/80 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Мій профіль</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/api/placeholder/64/64" />
                  <AvatarFallback className="bg-blue-600 text-white">МЮ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white">Музикант Юра</h3>
                  <p className="text-gray-400">Електронна музика</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button type="button" size="sm" className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Редагувати
                </Button>
                <Button type="button" size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Налаштування
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Online Users */}
          <Card className="bg-card/80 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Users" className="mr-2 text-blue-400" size={20} />
                Онлайн музиканти
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-blue-600 text-white text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.status}</p>
                    </div>
                    <Button type="button" size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Icon name="MessageCircle" size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Find Friends */}
          <Card className="bg-card/80 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Search" className="mr-2 text-blue-400" size={20} />
                Знайти друзів
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input 
                  placeholder="Пошук музикантів..."
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Шукати
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;