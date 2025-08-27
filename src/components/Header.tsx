import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { href: '/', label: t('nav-home', 'Home', 'Trang chủ') },
    { href: '/feedbacks', label: t('nav-feedbacks', 'Feedbacks', 'Đánh giá') },
    { href: '/ask-gpt', label: t('nav-askgpt', 'Ask GPT', 'Hỏi GPT') },
    { href: '/commitment', label: t('nav-commitment', 'Our Commitment', 'Cam kết') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GW</span>
            </div>
            <span className="font-poppins font-bold text-xl text-gradient">GIGI WRITI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-2 py-2 shadow-glow">
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden ${
                      location.pathname === item.href
                        ? 'bg-primary text-white shadow-lg transform scale-105'
                        : 'text-foreground hover:bg-white/20 hover:text-primary hover:scale-105'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {location.pathname === item.href && (
                      <div className="absolute inset-0 bg-[#FF8040] shadow-lg shadow-[#FF8040]/50 animate-pulse opacity-80"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'VIE' : 'ENG'}</span>
            </Button>
            
            <a
              href="https://form.jotform.com/252371351844456"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              {t('place-order', 'Place an Order', 'Đặt đơn hàng')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral animate-slide-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-neutral">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'VIE' : 'ENG'}</span>
                </Button>
                
                <a
                  href="https://form.jotform.com/252371351844456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button"
                >
                  {t('place-order', 'Place an Order', 'Đặt đơn hàng')}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;