import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Upload, DollarSign } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
const OrderForm = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    type: '',
    topic: '',
    words: '',
    dueDate: null as Date | null,
    aim: '',
    discountCode: ''
  });
  const [discountApplied, setDiscountApplied] = useState(false);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState<'USD' | 'VND'>('USD');
  const serviceTypes = [{
    value: 'assignment',
    label: t('service-assignment', 'Assignment', 'Bài tập')
  }, {
    value: 'essay',
    label: t('service-essay', 'Essay', 'Tiểu luận')
  }, {
    value: 'report',
    label: t('service-report', 'Report', 'Báo cáo')
  }, {
    value: 'dissertation',
    label: t('service-dissertation', 'Dissertation', 'Luận văn')
  }, {
    value: 'thesis',
    label: t('service-thesis', 'Thesis', 'Luận án')
  }, {
    value: 'slides',
    label: t('service-slides', 'Slide Generation', 'Tạo slide')
  }, {
    value: 'script',
    label: t('service-script', 'Script Generation', 'Tạo kịch bản')
  }, {
    value: 'editing',
    label: t('service-editing', 'Editing/Proofreading', 'Chỉnh sửa/Hiệu đính')
  }, {
    value: 'cv',
    label: t('service-cv', 'CV/Resume Design', 'Thiết kế CV/Hồ sơ')
  }];
  const aimLevels = [{
    value: 'PA',
    label: 'PA (Pass)'
  }, {
    value: 'CR',
    label: 'CR (Credit)'
  }, {
    value: 'DI',
    label: 'DI (Distinction)'
  }];
  const calculatePrice = () => {
    if (!formData.type || !formData.words || !formData.dueDate || !formData.aim) return 0;
    const words = parseInt(formData.words);
    const pages = Math.ceil(words / 250);
    const daysUntilDue = Math.ceil((formData.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    let basePrice = 0;

    // Calculate base price based on service type and urgency
    if (['assignment', 'essay', 'report'].includes(formData.type)) {
      if (daysUntilDue > 8) {
        basePrice = formData.aim === 'PA' ? 15 : formData.aim === 'CR' ? 20 : 25;
      } else if (daysUntilDue >= 3) {
        basePrice = formData.aim === 'PA' ? 18 : formData.aim === 'CR' ? 23 : 28;
      } else {
        basePrice = formData.aim === 'PA' ? 21 : formData.aim === 'CR' ? 26 : 31;
      }
    } else if (['dissertation', 'thesis'].includes(formData.type)) {
      if (daysUntilDue > 8) {
        basePrice = 20;
      } else if (daysUntilDue >= 3) {
        basePrice = 23;
      } else {
        basePrice = 26;
      }
    } else if (formData.type === 'editing') {
      if (daysUntilDue > 8) {
        basePrice = 9;
      } else if (daysUntilDue >= 3) {
        basePrice = 12;
      } else {
        basePrice = 15;
      }
    } else if (formData.type === 'cv') {
      if (daysUntilDue > 3) {
        basePrice = 80;
      } else if (daysUntilDue >= 2) {
        basePrice = 90;
      } else {
        basePrice = 100;
      }
      return basePrice; // CV pricing is per project, not per page
    } else if (formData.type === 'slides') {
      const slides = Math.ceil(words / 50); // Assuming 50 words per slide
      if (daysUntilDue > 3) {
        basePrice = slides * 6;
      } else if (daysUntilDue >= 2) {
        basePrice = slides * 7;
      } else {
        basePrice = slides * 8;
      }
      return basePrice;
    } else if (formData.type === 'script') {
      if (daysUntilDue > 8) {
        basePrice = 12;
      } else if (daysUntilDue >= 3) {
        basePrice = 15;
      } else {
        basePrice = 18;
      }
    }
    let totalPrice = basePrice * pages;

    // Apply discount if valid code
    if (discountApplied) {
      totalPrice *= 0.5; // 50% discount
    }
    return totalPrice;
  };
  useEffect(() => {
    setPrice(calculatePrice());
  }, [formData, discountApplied]);
  
  const handleDiscountCodeChange = (value: string) => {
    setFormData({
      ...formData,
      discountCode: value
    });
    
    // Check if the entered code matches the correct discount code
    if (value === '#WELCOMETOSTUDYHUB748') {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };
  const convertPrice = (usdPrice: number) => {
    return currency === 'USD' ? usdPrice : Math.round(usdPrice * 26225);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.type || !formData.topic || !formData.words || !formData.dueDate || !formData.aim) {
      alert(t('please-fill-required', 'Please fill in all required fields', 'Vui lòng điền vào tất cả các trường bắt buộc'));
      return;
    }

    try {
      const orderPayload = {
        serviceType: formData.type,
        topic: formData.topic,
        wordCount: parseInt(formData.words),
        dueDate: formData.dueDate,
        aimLevel: formData.aim,
        totalPrice: price.toString(),
        currency: currency,
        discountApplied: discountApplied,
        discountCode: discountApplied ? formData.discountCode : null,
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      });

      const result = await response.json();

      if (result.success) {
        alert(t('order-success', 
          `Order submitted successfully! Order ID: ${result.orderId}. We will contact you soon.`, 
          `Đơn hàng đã được gửi thành công! Mã đơn hàng: ${result.orderId}. Chúng tôi sẽ liên hệ với bạn sớm.`
        ));
        
        // Reset form
        setFormData({
          type: '',
          topic: '',
          words: '',
          dueDate: null,
          aim: '',
          discountCode: ''
        });
        setDiscountApplied(false);
      } else {
        alert(t('order-error', 'Failed to submit order. Please try again.', 'Không thể gửi đơn hàng. Vui lòng thử lại.'));
      }
    } catch (error) {
      console.error('Order submission error:', error);
      alert(t('order-error', 'Failed to submit order. Please try again.', 'Không thể gửi đơn hàng. Vui lòng thử lại.'));
    }
  };
  return <Card className="glass-card animate-slide-in">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-poppins font-bold text-gradient flex items-center justify-center space-x-2">
          
          <span>{t('order-form-title', 'Place an Order', 'Đặt đơn hàng')}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Type */}
          <div className="space-y-2">
            <Label>{t('service-type', 'Service Type', 'Loại dịch vụ')} *</Label>
            <Select onValueChange={value => setFormData({
            ...formData,
            type: value
          })}>
              <SelectTrigger>
                <SelectValue placeholder={t('select-service', 'Select a service', 'Chọn dịch vụ')} />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map(service => <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <Label>{t('topic', 'Topic/Subject', 'Chủ đề/Môn học')} *</Label>
            <Input placeholder={t('topic-placeholder', 'Enter your topic or subject', 'Nhập chủ đề hoặc môn học')} value={formData.topic} onChange={e => setFormData({
            ...formData,
            topic: e.target.value
          })} />
          </div>

          {/* Number of Words */}
          <div className="space-y-2">
            <Label>{t('words', 'Number of Words', 'Số từ')} *</Label>
            <Input type="number" placeholder={t('words-placeholder', 'Enter number of words', 'Nhập số từ')} value={formData.words} onChange={e => setFormData({
            ...formData,
            words: e.target.value
          })} />
          </div>

          {/* Due Date */}
          <div className="space-y-2">
            <Label>{t('due-date', 'Due Date', 'Ngày hết hạn')} *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.dueDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.dueDate ? format(formData.dueDate, "PPP") : t('pick-date', 'Pick a date', 'Chọn ngày')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={formData.dueDate || undefined} onSelect={date => setFormData({
                ...formData,
                dueDate: date || null
              })} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Aim Level */}
          <div className="space-y-2">
            <Label>{t('aim-level', 'Aim Level', 'Mức độ mục tiêu')} *</Label>
            <Select onValueChange={value => setFormData({
            ...formData,
            aim: value
          })}>
              <SelectTrigger>
                <SelectValue placeholder={t('select-aim', 'Select aim level', 'Chọn mức độ mục tiêu')} />
              </SelectTrigger>
              <SelectContent>
                {aimLevels.map(level => <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label>{t('documents', 'Documents Upload', 'Tải lên tài liệu')}</Label>
            <div className="border-2 border-dashed border-neutral rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {t('upload-text', 'Click to upload or drag and drop', 'Nhấp để tải lên hoặc kéo thả')}
              </p>
            </div>
          </div>

          {/* Discount Code */}
          <div className="space-y-2">
            <Label>{t('discount-code', 'Discount Code', 'Mã giảm giá')}</Label>
            <Input 
              placeholder={t('discount-placeholder', 'Enter discount code', 'Nhập mã giảm giá')}
              value={formData.discountCode} 
              onChange={e => handleDiscountCodeChange(e.target.value)}
            />
            {discountApplied && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-accent font-medium text-sm">
                    🎉 {t('discount-applied', '50% discount applied!', 'Đã áp dụng giảm giá 50%!')}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Price Display */}
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{t('total-price', 'Total Price:', 'Tổng giá:')}</span>
              <div className="flex items-center space-x-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setCurrency(currency === 'USD' ? 'VND' : 'USD')}>
                  {currency}
                </Button>
              </div>
            </div>
            <div className="text-2xl font-bold text-primary">
              {currency === 'USD' ? '$' : ''}{convertPrice(price).toLocaleString()}{currency === 'VND' ? ' VND' : ''}
            </div>
            {discountApplied && (
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-muted-foreground line-through">
                  {t('original-price', 'Original:', 'Giá gốc:')} {currency === 'USD' ? '$' : ''}{convertPrice(price * 2).toLocaleString()}{currency === 'VND' ? ' VND' : ''}
                </div>
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  50% OFF
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full hero-button">
            {t('submit-order', 'Submit Order', 'Gửi đơn hàng')}
          </Button>
        </form>
      </CardContent>
    </Card>;
};
export default OrderForm;