import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Award, BookOpen } from 'lucide-react';

const WritersSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const writers = [
    {
      name: 'Dr. Minh Tran',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-economics', 'Economics & Business', 'Kinh tế & Kinh doanh'),
      experience: '8 years',
      papers: '1,247',
      rating: 4.9,
      commitment: t('commitment-minh', 'Specializing in advanced economic analysis and business strategy papers with proven academic excellence.', 'Chuyên về phân tích kinh tế tiên tiến và các bài báo chiến lược kinh doanh với xuất sắc học thuật đã được chứng minh.')
    },
    {
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-literature', 'Literature & English', 'Văn học & Tiếng Anh'),
      experience: '12 years',
      papers: '2,156',
      rating: 4.8,
      commitment: t('commitment-sarah', 'Expert in literary analysis and English composition with extensive publishing experience in academic journals.', 'Chuyên gia phân tích văn học và sáng tác tiếng Anh với kinh nghiệm xuất bản phong phú trong các tạp chí học thuật.')
    },
    {
      name: 'Prof. David Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-engineering', 'Engineering & Technology', 'Kỹ thuật & Công nghệ'),
      experience: '15 years',
      papers: '3,421',
      rating: 4.9,
      commitment: t('commitment-david', 'Leading researcher in engineering solutions with multiple patents and international recognition.', 'Nhà nghiên cứu hàng đầu về giải pháp kỹ thuật với nhiều bằng sáng chế và được công nhận quốc tế.')
    },
    {
      name: 'Dr. Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-psychology', 'Psychology & Social Sciences', 'Tâm lý học & Khoa học xã hội'),
      experience: '10 years',
      papers: '1,893',
      rating: 4.8,
      commitment: t('commitment-emily', 'Specialized in behavioral psychology research with extensive fieldwork and quantitative analysis expertise.', 'Chuyên về nghiên cứu tâm lý học hành vi với kinh nghiệm thực địa phong phú và chuyên môn phân tích định lượng.')
    },
    {
      name: 'Dr. James Morrison',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-medicine', 'Medicine & Healthcare', 'Y học & Chăm sóc sức khỏe'),
      experience: '18 years',
      papers: '2,847',
      rating: 4.9,
      commitment: t('commitment-james', 'Distinguished medical researcher with expertise in clinical studies and healthcare policy analysis.', 'Nhà nghiên cứu y học xuất sắc với chuyên môn về nghiên cứu lâm sàng và phân tích chính sách chăm sóc sức khỏe.')
    },
    {
      name: 'Dr. Linh Nguyen',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      expertise: t('expertise-computer', 'Computer Science & AI', 'Khoa học máy tính & AI'),
      experience: '9 years',
      papers: '1,654',
      rating: 4.8,
      commitment: t('commitment-linh', 'AI and machine learning specialist with cutting-edge research in computational intelligence.', 'Chuyên gia AI và học máy với nghiên cứu tiên tiến về trí tuệ tính toán.')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % writers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [writers.length]);

  return (
    <section className="py-16 bg-neutral/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gradient">
          {t('writers-title', 'Our Expert Writers', 'Các chuyên gia viết của chúng tôi')}
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {writers.map((writer, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
                <div className="feature-card text-center h-full">
                  <div className="relative mb-6">
                    <img
                      src={writer.avatar}
                      alt={writer.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-elegant"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {writer.expertise}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{writer.name}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{t('experience', 'Experience:', 'Kinh nghiệm:')} {writer.experience}</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{t('papers-completed', 'Papers completed:', 'Bài báo hoàn thành:')} {writer.papers}</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(writer.rating) ? 'text-accent fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{writer.rating}/5</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                    "{writer.commitment}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {writers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritersSlider;