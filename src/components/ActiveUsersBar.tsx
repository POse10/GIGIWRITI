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
  return;
};
export default ActiveUsersBar;