import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PromotionalPopup from '@/components/PromotionalPopup';
import OrderForm from '@/components/OrderForm';
import WritersSlider from '@/components/WritersSlider';
import ActiveUsersBar from '@/components/ActiveUsersBar';
import { CheckCircle, Shield, Award, Clock, BookOpen, PenTool, FileText, Users, Star } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BookOpen,
      title: t('service-assignment', 'Assignment', 'Bài tập'),
      description: t('service-assignment-desc', 'Professional assignment writing with guaranteed quality', 'Viết bài tập chuyên nghiệp với chất lượng đảm bảo')
    },
    {
      icon: PenTool,
      title: t('service-essay', 'Essay', 'Tiểu luận'),
      description: t('service-essay-desc', 'Well-structured essays with proper citations', 'Tiểu luận có cấu trúc tốt với trích dẫn chính xác')
    },
    {
      icon: FileText,
      title: t('service-report', 'Report', 'Báo cáo'),
      description: t('service-report-desc', 'Comprehensive reports with data analysis', 'Báo cáo toàn diện với phân tích dữ liệu')
    },
    {
      icon: Award,
      title: t('service-dissertation', 'Dissertation', 'Luận văn'),
      description: t('service-dissertation-desc', 'Research-based dissertations by PhD experts', 'Luận văn dựa trên nghiên cứu bởi các chuyên gia PhD')
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('feature-security', 'Absolute Security', 'Bảo mật tuyệt đối'),
      description: t('feature-security-desc', 'Your information is completely secure and confidential', 'Thông tin của bạn hoàn toàn an toàn và bảo mật')
    },
    {
      icon: Clock,
      title: t('feature-delivery', 'On-Time Delivery', 'Giao đúng hạn'),
      description: t('feature-delivery-desc', 'We guarantee delivery before your deadline', 'Chúng tôi đảm bảo giao hàng trước thời hạn của bạn')
    },
    {
      icon: CheckCircle,
      title: t('feature-quality', 'Quality Guaranteed', 'Chất lượng đảm bảo'),
      description: t('feature-quality-desc', 'Plagiarism-free content with Turnitin report', 'Nội dung không đạo văn với báo cáo Turnitin')
    },
    {
      icon: Users,
      title: t('feature-support', '24/7 Support', 'Hỗ trợ 24/7'),
      description: t('feature-support-desc', 'Round-the-clock customer support and revisions', 'Hỗ trợ khách hàng và chỉnh sửa 24/7')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PromotionalPopup />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-in">
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
                {t('hero-title', 
                  'Professional Academic Writing Solutions', 
                  'Giải pháp viết học thuật chuyên nghiệp'
                )}
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {t('hero-subtitle',
                  'Get high-quality academic papers written by expert writers. From assignments to dissertations, we deliver excellence on time.',
                  'Nhận các bài báo học thuật chất lượng cao được viết bởi các chuyên gia. Từ bài tập đến luận văn, chúng tôi mang lại sự xuất sắc đúng hạn.'
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://form.jotform.com/252371351844456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button text-center"
                >
                  {t('get-started', 'Get Started - 50% OFF', 'Bắt đầu ngay - Giảm 50%')}
                </a>
                
                <Button variant="outline" size="lg" className="hero-secondary">
                  {t('learn-more', 'Learn More', 'Tìm hiểu thêm')}
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('guarantee-1', 'Plagiarism Free', 'Không đạo văn')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('guarantee-2', 'On-Time Delivery', 'Giao đúng hạn')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('guarantee-3', '24/7 Support', 'Hỗ trợ 24/7')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4">
                <ActiveUsersBar />
              </div>
              <div className="animate-float">
                <OrderForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
              {t('services-title', 'Our Academic Services', 'Dịch vụ học thuật của chúng tôi')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services-subtitle',
                'Comprehensive academic writing solutions tailored to meet your specific requirements and academic standards.',
                'Giải pháp viết học thuật toàn diện được thiết kế riêng để đáp ứng các yêu cầu cụ thể và tiêu chuẩn học thuật của bạn.'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="feature-card text-center group">
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
              {t('features-title', 'Why Choose GIGI WRITI?', 'Tại sao chọn GIGI WRITI?')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('features-subtitle',
                'We are committed to providing the highest quality academic writing services with complete transparency and guaranteed satisfaction.',
                'Chúng tôi cam kết cung cấp dịch vụ viết học thuật chất lượng cao nhất với tính minh bạch hoàn toàn và sự hài lòng được đảm bảo.'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writers Section */}
      <WritersSlider />

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-gradient">
            {t('cta-title', 'Ready to Achieve Academic Excellence?', 'Sẵn sàng đạt được sự xuất sắc trong học tập?')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            {t('cta-subtitle',
              'Join thousands of satisfied students worldwide. Get your high-quality academic paper today with our limited-time 50% discount.',
              'Tham gia cùng hàng nghìn sinh viên hài lòng trên toàn thế giới. Nhận bài báo học thuật chất lượng cao của bạn ngay hôm nay với ưu đãi giảm giá 50% có thời hạn.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://form.jotform.com/252371351844456"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              {t('place-order-now', 'Place Your Order Now - 50% OFF', 'Đặt đơn hàng ngay - Giảm 50%')}
            </a>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <span>4.9/5 {t('rating-text', 'from 2,500+ students', 'từ hơn 2,500 sinh viên')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;