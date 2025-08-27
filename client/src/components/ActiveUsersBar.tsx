import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, TrendingUp, Eye, Sparkles } from 'lucide-react';

const ActiveUsersBar = () => {
  const { t } = useLanguage();
  const [userCount, setUserCount] = useState(156);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Real human avatars with fallback
  const avatars = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
      fallback: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=80&h=80&fit=crop&crop=face&auto=format',
      fallback: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
      fallback: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format',
      fallback: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&auto=format',
      fallback: 'https://randomuser.me/api/portraits/men/5.jpg'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    e.currentTarget.src = fallback;
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl animate-pulse opacity-50"></div>
      <div className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 flex items-center space-x-6 shadow-2xl hover:shadow-glow transition-all duration-300 animate-fade-in">
        
        {/* Live indicator */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-50"></div>
          </div>
          <Eye className="w-5 h-5 text-white animate-pulse" />
        </div>

        {/* User count with enhanced styling */}
        <div className="flex items-center space-x-3 bg-black/20 rounded-full px-4 py-2 border border-white/20">
          <Users className="w-5 h-5 text-primary animate-pulse" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tabular-nums">
              {userCount.toLocaleString()}
            </span>
            <span className="text-xs text-white/80 -mt-1">
              {t('active-users-label', 'users online', 'người trực tuyến')}
            </span>
          </div>
        </div>

        {/* Enhanced avatars with hover effects */}
        <div className="flex items-center -space-x-3">
          {avatars.slice(0, 4).map((avatar, index) => (
            <div
              key={avatar.id}
              className="relative group/avatar"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 scale-110"></div>
              <img
                src={avatar.src}
                alt={`Active user ${index + 1}`}
                className="relative w-10 h-10 rounded-full border-3 border-white/60 shadow-lg hover:scale-125 hover:border-accent transition-all duration-300 hover:z-10 bg-white/10 animate-fade-in"
                onError={(e) => handleImageError(e, avatar.fallback)}
                loading="lazy"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
          
          {/* More users indicator */}
          <div className="relative ml-2">
            <div className="w-10 h-10 rounded-full border-3 border-white/60 bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer">
              +{Math.floor(userCount - 4)}
            </div>
          </div>
        </div>

        {/* Trending indicator with sparkles */}
        <div className="flex items-center space-x-2 bg-accent/20 rounded-full px-3 py-2 border border-accent/30">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <TrendingUp className="w-4 h-4 text-accent animate-bounce" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-30 animate-ping"
              style={{
                left: `${20 + i * 25}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersBar;