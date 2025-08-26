import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Clock, Gift } from 'lucide-react';

const PromotionalPopup = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    // Show popup after 3 seconds
    const showTimer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-white border-none p-0 overflow-hidden">
        <div className="relative bg-hero-gradient p-6 text-white text-center">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="animate-bounce-gentle mb-4">
            <Gift className="w-16 h-16 mx-auto text-accent" />
          </div>
          
          <h2 className="text-2xl font-poppins font-bold mb-2">
            {t('popup-title', 'LIMITED TIME OFFER!', 'ƯU ĐÃI CÓ HẠN!')}
          </h2>
          
          <p className="text-lg mb-4 text-white/90">
            {t('popup-discount', '50% OFF on All Services', 'GIẢM 50% cho tất cả dịch vụ')}
          </p>
          
          <div className="bg-white/20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold">
                {t('popup-countdown', 'Time Remaining:', 'Thời gian còn lại:')}
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/30 rounded p-2">
                  <div className="text-2xl font-bold">{String(value).padStart(2, '0')}</div>
                  <div className="text-xs uppercase">
                    {t(`time-${unit}`, unit, 
                      unit === 'days' ? 'ngày' : 
                      unit === 'hours' ? 'giờ' : 
                      unit === 'minutes' ? 'phút' : 'giây'
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <a
            href="https://form.jotform.com/252371351844456"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block w-full"
            onClick={() => setIsOpen(false)}
          >
            {t('popup-cta', 'GET 50% DISCOUNT NOW!', 'NHẬN GIẢM GIÁ 50% NGAY!')}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalPopup;