import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Feedbacks = () => {
  const { t } = useLanguage();

  const gradeResults = [
    {
      image: "https://i.ibb.co/HpNxVVFT/RMIT-Global-Brand-s-Equity-Internaitonal.png",
      text: t('result-1', 
        "🎓 Proud to support RMIT University students achieving Distinction grades in Australia!",
        "🎓 Tự hào hỗ trợ sinh viên Đại học RMIT đạt điểm Xuất sắc tại Úc!"
      )
    },
    {
      image: "https://i.ibb.co/1Gb9xgpP/RMIT-Global-Brand-s-Equity-Internaitonal-2.png",
      text: t('result-2',
        "🌟 Excellent support from Northampton University students in U.K!",
        "🌟 Hỗ trợ tuyệt vời từ sinh viên Đại học Northampton tại Anh!"
      )
    },
    {
      image: "https://i.ibb.co/s9bQhLxr/RMIT-Global-Brand-s-Equity-Internaitonal-3.png",
      text: t('result-3',
        "📚 High-quality assignments helping Bedfordshire students consistently earn High-Distinctions!",
        "📚 Bài tập chất lượng cao giúp sinh viên Bedfordshire liên tục đạt điểm Xuất sắc!"
      )
    }
  ];

  const clientFeedbacks = [
    t('feedback-1',
      "Really satisfied with GIGI WRITI's academic writing service. The paper was delivered before the deadline, cheap price but high quality. They also provide free revision support, not a scam as I initially worried.",
      "Thật sự hài lòng với dịch vụ academic writing của GIGI WRITI. Bài được gửi trước ngày hẹn, giá rẻ mà chất lượng cao. Họ còn hỗ trợ sửa chữa miễn phí, không hề scam như mình lo ban đầu."
    ),
    t('feedback-2',
      "I used GIGI WRITI for my essay and the service was amazing. They delivered earlier than the deadline, super supportive team, and the price was much cheaper compared to other services. Totally worth it!",
      "Mình dùng GIGI WRITI để viết essay và dịch vụ thật tuyệt vời. Họ giao trước deadline, đội ngũ cực kỳ hỗ trợ, và giá cả rẻ hơn nhiều so với các dịch vụ khác. Rất đáng tiền!"
    ),
    t('feedback-3',
      "Very reputable service, good commitment and extremely enthusiastic support. I asked them to write a report, the result exceeded expectations, high quality but very cheap price.",
      "Dịch vụ rất uy tín, cam kết tốt và hỗ trợ siêu nhiệt tình. Mình nhờ viết report, kết quả vượt ngoài mong đợi, chất lượng cao nhưng giá lại rất rẻ."
    )
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 animate-slide-in">
            {t('feedbacks-title', 'Student Success Stories', 'Câu chuyện thành công của sinh viên')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('feedbacks-subtitle',
              'See how our expert writers have helped thousands of students achieve academic excellence worldwide.',
              'Xem cách các chuyên gia của chúng tôi đã giúp hàng nghìn sinh viên đạt được sự xuất sắc trong học tập trên toàn thế giới.'
            )}
          </p>
        </div>
      </section>

      {/* Grade Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
            {t('grade-results', 'Academic Results', 'Kết Quả Điểm Số')}
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-slide-in">
              {gradeResults.map((result, index) => (
                <div key={index} className="flex-shrink-0 w-80 feature-card">
                  <img
                    src={result.image}
                    alt={`Grade result ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-foreground font-medium">{result.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://form.jotform.com/252371351844456"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              {t('place-order', 'Place an Order', 'Đặt đơn hàng')}
            </a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-neutral/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
            {t('client-feedbacks', "Clients' Feedbacks", 'Phản hồi của khách hàng')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientFeedbacks.map((feedback, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">"{feedback}"</p>
                <div className="mt-4 pt-4 border-t border-neutral">
                  <p className="font-semibold text-primary">
                    {t('verified-client', 'Verified Client', 'Khách hàng đã xác thực')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://form.jotform.com/252371351844456"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              {t('place-order', 'Place an Order', 'Đặt đơn hàng')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedbacks;