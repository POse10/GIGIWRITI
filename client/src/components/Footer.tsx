import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61576036981148&locale=vi_VN',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/gigi_assignment_support/',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GW</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">GIGI WRITI</span>
            </div>
            <p className="text-neutral mb-6 max-w-md">
              {t('footer-desc', 
                'Professional academic writing service powered by top global experts. We deliver high-quality academic solutions with guaranteed satisfaction.',
                'Dịch vụ viết học thuật chuyên nghiệp được hỗ trợ bởi các chuyên gia hàng đầu thế giới. Chúng tôi cung cấp các giải pháp học thuật chất lượng cao với sự hài lòng được đảm bảo.'
              )}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              {t('footer-contact', 'Contact Info', 'Thông tin liên hệ')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-sm text-neutral">
                  Timesquare Building, District 1, Ho Chi Minh City, Vietnam
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:gigi.edu.writing.service@gmail.com"
                  className="text-sm text-neutral hover:text-white transition-colors"
                >
                  gigi.edu.writing.service@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+84703856495"
                  className="text-sm text-neutral hover:text-white transition-colors"
                >
                  +84 703 856 495
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              {t('footer-services', 'Services', 'Dịch vụ')}
            </h4>
            <div className="space-y-2">
              {[
                t('service-assignment', 'Assignment Writing', 'Viết bài tập'),
                t('service-essay', 'Essay Writing', 'Viết luận'),
                t('service-dissertation', 'Dissertation', 'Luận văn'),
                t('service-editing', 'Editing & Proofreading', 'Chỉnh sửa & Hiệu đính')
              ].map((service) => (
                <div key={service} className="text-sm text-neutral hover:text-white transition-colors cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Additional Contact */}
        <div className="border-t border-neutral/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-neutral">
              <span>WhatsApp: +84 703856495</span>
              <span>Zalo: +84 703856495</span>
              <span>TikTok: @gigi.asm.writing</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral/30 pt-6 mt-6 text-center">
          <p className="text-sm text-neutral">
            © 2025 GIGI WRITI. {t('footer-copyright', 'Powered by top global experts.', 'Được hỗ trợ bởi các chuyên gia hàng đầu thế giới.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;