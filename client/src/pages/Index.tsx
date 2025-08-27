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
      <section className="relative bg-hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating shapes for visual appeal */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Active Users Bar - repositioned to top */}
          <div className="flex justify-center mb-12">
            <ActiveUsersBar />
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* Left Column - Hero Content */}
            <div className="xl:col-span-2 text-white animate-slide-in">
              <div className="max-w-4xl">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                  <span className="text-accent font-semibold mr-2">🎓</span>
                  <span className="text-sm font-medium">
                    {t('hero-badge', 'Trusted by 10,000+ Students Worldwide', '10,000+ sinh viên trên toàn thế giới tin tưởng')}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-8 leading-tight">
                  <span className="block">
                    {t('hero-title-line1', 'Expert Academic', 'Chuyên gia học thuật')}
                  </span>
                  <span className="text-accent block">
                    {t('hero-title-line2', 'Writing Solutions', 'Giải pháp viết')}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl">
                  {t('hero-subtitle',
                    'Transform your academic journey with our premium writing services. Expert writers, guaranteed grades, on-time delivery.',
                    'Biến đổi hành trình học thuật của bạn với dịch vụ viết cao cấp. Chuyên gia viết, đảm bảo điểm số, giao hàng đúng hạn.'
                  )}
                </p>
                
                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <a
                    href="https://form.jotform.com/252371351844456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <span>{t('get-started', 'Order Now - 50% OFF', 'Đặt hàng ngay - Giảm 50%')}</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                  
                  <button className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                    <span>{t('learn-more', 'View Samples', 'Xem mẫu')}</span>
                    <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full transform group-hover:translate-x-1 transition-transform duration-300"></div>
                    </div>
                  </button>
                </div>
                
                {/* Enhanced guarantee badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: CheckCircle, text: t('guarantee-1', 'Plagiarism Free', 'Không đạo văn'), color: 'text-green-400' },
                    { icon: Clock, text: t('guarantee-2', 'On-Time Delivery', 'Giao đúng hạn'), color: 'text-blue-400' },
                    { icon: Shield, text: t('guarantee-3', '100% Confidential', '100% Bảo mật'), color: 'text-purple-400' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Order Form */}
            <div className="xl:col-span-1">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl"></div>
                  <div className="relative animate-float">
                    <OrderForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gradient">
              {t('services-title', 'Academic Excellence Delivered', 'Chất lượng học thuật được giao')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services-subtitle', 'From simple assignments to complex dissertations, our expert writers deliver outstanding results across all academic disciplines.', 'Từ bài tập đơn giản đến luận văn phức tạp, các chuyên gia của chúng tôi mang lại kết quả xuất sắc trong tất cả các lĩnh vực học thuật.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 transform group-hover:-translate-y-2 border border-neutral/20">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center justify-center">
                      <button className="text-primary font-semibold hover:text-accent transition-colors duration-300 flex items-center space-x-2 group/btn">
                        <span>Learn More</span>
                        <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center group-hover/btn:border-accent transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full transform group-hover/btn:translate-x-0.5 group-hover/btn:bg-accent transition-all duration-300"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-2 mb-6">
              <span className="text-accent font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gradient">
              {t('features-title', 'Trusted by Students Worldwide', 'Được sinh viên toàn thế giới tin tưởng')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('features-subtitle',
                'Join thousands of successful students who have achieved academic excellence with our premium writing services and expert support.',
                'Tham gia cùng hàng nghìn sinh viên thành công đã đạt được sự xuất sắc trong học tập với dịch vụ viết cao cấp và hỗ trợ chuyên nghiệp của chúng tôi.'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 transform group-hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 text-center">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">{feature.description}</p>
                    
                    {/* Progress indicator for visual appeal */}
                    <div className="mt-6 w-full bg-neutral/20 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                        style={{animationDelay: `${index * 0.2}s`}}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Statistics Row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: t('stat-students', 'Happy Students', 'Sinh viên hài lòng') },
              { number: '98%', label: t('stat-success', 'Success Rate', 'Tỷ lệ thành công') },
              { number: '24/7', label: t('stat-support', 'Support Available', 'Hỗ trợ có sẵn') },
              { number: '50+', label: t('stat-writers', 'Expert Writers', 'Chuyên gia viết') }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
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