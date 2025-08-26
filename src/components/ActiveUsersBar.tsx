import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, TrendingUp } from 'lucide-react';
const ActiveUsersBar = () => {
  const {
    t
  } = useLanguage();
  const [userCount, setUserCount] = useState(156);
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const avatars = ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', 'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=40&h=40&fit=crop&crop=face', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face'];
  
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-4 animate-fade-in">
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-primary animate-pulse" />
        <span className="text-sm font-medium text-foreground">
          {t('active-users', `${userCount} users online`, `${userCount} người đang trực tuyến`)}
        </span>
      </div>
      <div className="flex -space-x-2">
        {avatars.slice(0, 4).map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`User ${index + 1}`}
            className="w-8 h-8 rounded-full border-2 border-white/50 hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
      <TrendingUp className="w-4 h-4 text-accent animate-bounce" />
    </div>
  );
};
export default ActiveUsersBar;