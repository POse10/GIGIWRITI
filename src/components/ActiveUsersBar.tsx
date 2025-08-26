import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, TrendingUp } from 'lucide-react';

const ActiveUsersBar = () => {
  const { t } = useLanguage();
  const [userCount, setUserCount] = useState(156);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face'
  ];

  return (
    <div className="bg-white border border-neutral rounded-xl p-4 shadow-card animate-float">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-foreground">
            {t('live-activity', 'Live Activity', 'Hoạt động trực tiếp')}
          </span>
        </div>
        <TrendingUp className="w-4 h-4 text-accent" />
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex -space-x-2">
          {avatars.slice(0, 4).map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs text-white font-semibold">+</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-bold text-primary text-lg">{userCount}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t('users-online', 'users getting academic help now', 'người dùng đang nhận trợ giúp học thuật')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersBar;