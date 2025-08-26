import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Users, BookOpen, PenTool, FileText } from 'lucide-react';

const AskGPT = () => {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');
  const [activeUsers, setActiveUsers] = useState(156);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);

  // Simulate active users counter
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        t('ai-response-1', 
          "I'd be happy to help you with your academic writing! Could you please provide more details about your assignment?",
          "Tôi rất vui được giúp bạn với việc viết học thuật! Bạn có thể cung cấp thêm chi tiết về bài tập của mình không?"
        ),
        t('ai-response-2',
          "That's a great topic! I can help you structure your essay. For a more comprehensive solution, consider our expert writing service.",
          "Đó là một chủ đề tuyệt vời! Tôi có thể giúp bạn cấu trúc bài luận. Để có giải pháp toàn diện hơn, hãy cân nhắc dịch vụ viết chuyên nghiệp của chúng tôi."
        )
      ];
      
      setMessages(prev => [...prev, { 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isUser: false 
      }]);
    }, 1000);
    
    setMessage('');
  };

  const academicTools = [
    {
      icon: BookOpen,
      title: t('tool-research', 'Research Assistant', 'Trợ lý nghiên cứu'),
      description: t('tool-research-desc', 'Get help with academic research and citations', 'Nhận hỗ trợ về nghiên cứu học thuật và trích dẫn')
    },
    {
      icon: PenTool,
      title: t('tool-writing', 'Writing Helper', 'Trợ lý viết'),
      description: t('tool-writing-desc', 'Improve your writing style and structure', 'Cải thiện phong cách và cấu trúc viết của bạn')
    },
    {
      icon: FileText,
      title: t('tool-formatting', 'Format Checker', 'Kiểm tra định dạng'),
      description: t('tool-formatting-desc', 'Ensure proper academic formatting', 'Đảm bảo định dạng học thuật chính xác')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 animate-slide-in">
            {t('askgpt-title', 'Academic Writing Tools', 'Công cụ viết học thuật')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('askgpt-subtitle',
              'Get instant help with your academic writing using our AI-powered tools. Try our free assistant or get expert human writers for comprehensive solutions.',
              'Nhận hỗ trợ tức thì với việc viết học thuật bằng các công cụ AI của chúng tôi. Thử trợ lý miễn phí hoặc nhận các chuyên gia viết chuyên nghiệp cho giải pháp toàn diện.'
            )}
          </p>
          
          {/* Active Users Counter */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">
              {activeUsers} {t('users-searching', 'users currently searching for academic help', 'người dùng hiện đang tìm kiếm trợ giúp học thuật')}
            </span>
          </div>
        </div>
      </section>

      {/* Academic Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {academicTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.title}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-16 bg-neutral/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-6">
            <h2 className="text-2xl font-poppins font-bold text-center mb-8 text-gradient">
              {t('chat-title', 'Chat with Academic AI Assistant', 'Trò chuyện với Trợ lý AI Học thuật')}
            </h2>
            
            {/* Chat Messages */}
            <div className="bg-white rounded-lg p-4 h-96 overflow-y-auto mb-4 border">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p>{t('chat-welcome', 'Welcome! Ask me anything about academic writing.', 'Chào mừng! Hỏi tôi bất cứ điều gì về viết học thuật.')}</p>
                </div>
              )}
              
              {messages.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
                    msg.isUser 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral text-foreground'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="flex space-x-2">
              <Textarea
                placeholder={t('chat-placeholder', 'Ask about essays, assignments, research...', 'Hỏi về luận văn, bài tập, nghiên cứu...')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                className="resize-none"
                rows={2}
              />
              <Button onClick={handleSendMessage} className="accent-button flex items-center space-x-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              {t('cta-title', 'Need More Comprehensive Help?', 'Cần trợ giúp toàn diện hơn?')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('cta-description',
                'Get professional writers with 3+ years experience to create high-quality academic papers tailored to your needs.',
                'Nhận các chuyên gia viết với hơn 3 năm kinh nghiệm để tạo ra các bài báo học thuật chất lượng cao phù hợp với nhu cầu của bạn.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://form.jotform.com/252371351844456"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
              >
                {t('get-expert-help', 'Get Expert Help - 50% OFF', 'Nhận trợ giúp chuyên gia - Giảm 50%')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskGPT;