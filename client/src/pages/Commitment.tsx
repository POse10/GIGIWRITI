import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Shield, Clock, Award, RefreshCw, DollarSign } from 'lucide-react';

const Commitment = () => {
  const { t } = useLanguage();

  const orderProcess = [
    {
      step: 1,
      title: t('process-1', 'Place Order', 'Đặt đơn hàng'),
      description: t('process-1-desc', 'Place an order via WhatsApp, Zalo, Facebook, or Instagram. Our 24/7 support team is always ready to help.', 'Đặt đơn hàng qua WhatsApp, Zalo, Facebook hoặc Instagram. Đội ngũ hỗ trợ 24/7 của chúng tôi luôn sẵn sàng giúp đỡ.'),
      icon: CheckCircle
    },
    {
      step: 2,
      title: t('process-2', 'Confirmation', 'Xác nhận'),
      description: t('process-2-desc', 'Wait for feedback confirming that we have received all your order information and requirements.', 'Chờ phản hồi xác nhận rằng chúng tôi đã nhận được tất cả thông tin và yêu cầu đơn hàng của bạn.'),
      icon: Shield
    },
    {
      step: 3,
      title: t('process-3', 'Deposit', 'Đặt cọc'),
      description: t('process-3-desc', 'Transfer 50% deposit after receiving payment information so we can proceed with your order.', 'Chuyển 50% tiền cọc sau khi nhận thông tin thanh toán để chúng tôi có thể tiến hành đơn hàng của bạn.'),
      icon: DollarSign
    },
    {
      step: 4,
      title: t('process-4', 'Final Payment', 'Thanh toán cuối'),
      description: t('process-4-desc', 'Transfer the remaining 50% after receiving and reviewing the draft version of your work.', 'Chuyển 50% còn lại sau khi nhận và xem xét bản nháp của công việc.'),
      icon: RefreshCw
    },
    {
      step: 5,
      title: t('process-5', 'Delivery', 'Giao hàng'),
      description: t('process-5-desc', 'Receive your final product on the agreed deadline with plagiarism and AI check reports.', 'Nhận sản phẩm cuối cùng đúng hạn với báo cáo kiểm tra đạo văn và AI.'),
      icon: Award
    }
  ];

  const commitments = [
    {
      title: t('commitment-security', 'Absolute Security', 'Bảo mật tuyệt đối'),
      description: t('commitment-security-desc', 'Complete confidentiality of customer information and academic integrity.', 'Hoàn toàn bảo mật thông tin khách hàng và tính toàn vẹn học thuật.'),
      icon: Shield
    },
    {
      title: t('commitment-deadline', 'On-Time Delivery', 'Giao đúng hạn'),
      description: t('commitment-deadline-desc', 'We guarantee delivery on or before your specified deadline.', 'Chúng tôi đảm bảo giao hàng đúng hoặc trước thời hạn bạn chỉ định.'),
      icon: Clock
    },
    {
      title: t('commitment-quality', 'Quality Assurance', 'Đảm bảo chất lượng'),
      description: t('commitment-quality-desc', 'Plagiarism check (<20%) and AI check (0%) with Turnitin reports included.', 'Kiểm tra đạo văn (<20%) và kiểm tra AI (0%) với báo cáo Turnitin đi kèm.'),
      icon: Award
    },
    {
      title: t('commitment-experience', 'Expert Writers', 'Chuyên gia viết'),
      description: t('commitment-experience-desc', 'Team of professional writers with over 3 years of academic writing experience.', 'Đội ngũ chuyên gia viết với hơn 3 năm kinh nghiệm viết học thuật.'),
      icon: CheckCircle
    }
  ];

  const refundPolicy = [
    {
      condition: t('refund-fail', '100% refund if order fails (no pass)', 'Hoàn 100% nếu đơn hàng thất bại (không đạt)'),
      percentage: '100%'
    },
    {
      condition: t('refund-aim', '30% refund if aim is not achieved (CR/DI)', 'Hoàn 30% nếu không đạt mục tiêu (CR/DI)'),
      percentage: '30%'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 animate-slide-in">
            {t('commitment-title', 'Our Commitment', 'Cam kết của chúng tôi')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('commitment-subtitle',
              'Transparent process, guaranteed quality, and complete satisfaction. See how we deliver excellence in every step.',
              'Quy trình minh bạch, chất lượng đảm bảo và sự hài lòng hoàn toàn. Xem cách chúng tôi mang lại sự xuất sắc trong từng bước.'
            )}
          </p>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
            {t('process-title', 'Order Process', 'Quy trình đặt hàng')}
          </h2>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {orderProcess.map((process, index) => {
                const Icon = process.icon;
                return (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-primary">
                      <span className="text-primary font-bold text-sm">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{process.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 bg-neutral/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
            {t('commitments-title', 'Our Commitments', 'Cam kết của chúng tôi')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{commitment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
            {t('refund-title', 'Refund Policy', 'Chính sách hoàn tiền')}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {refundPolicy.map((policy, index) => (
              <div key={index} className="glass-card p-6 mb-6">
                <div className="flex items-center justify-between">
                  <p className="text-foreground font-medium flex-1">{policy.condition}</p>
                  <span className="text-2xl font-bold text-accent ml-4">{policy.percentage}</span>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8 p-6 bg-accent/10 rounded-xl">
              <p className="text-muted-foreground text-sm">
                {t('refund-note',
                  '* Customers need to provide clear information and evidence of the paper results for refund processing.',
                  '* Khách hàng cần cung cấp thông tin rõ ràng và bằng chứng về kết quả bài báo để xử lý hoàn tiền.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4 text-gradient">
            {t('final-cta-title', 'Ready to Experience Excellence?', 'Sẵn sàng trải nghiệm sự xuất sắc?')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('final-cta-desc',
              'Join thousands of satisfied students who have achieved academic success with our professional writing service.',
              'Tham gia cùng hàng nghìn sinh viên hài lòng đã đạt được thành công học thuật với dịch vụ viết chuyên nghiệp của chúng tôi.'
            )}
          </p>
          
          <a
            href="https://form.jotform.com/252371351844456"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            {t('start-order', 'Start Your Order Now - 50% OFF', 'Bắt đầu đơn hàng ngay - Giảm 50%')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Commitment;