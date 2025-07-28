import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Recycle, 
  Sun, 
  Droplets, 
  TreePine, 
  Wind,
  ArrowRight,
  Play,
  Users,
  Target,
  Award,
  ChevronDown,
  Globe,
  Heart,
  Shield,
  CalendarIcon,
  MapPin,
  Clock,
  Gift,
  Star,
  TrendingUp,
  Zap,
  Handshake,
  ExternalLink,
  Languages
} from 'lucide-react';
import { MOCK_EVENTS, MOCK_PARTNERS, MOCK_REWARDS, MOCK_ACTIONS } from '@/lib/constants';

// Language support
const translations = {
  en: {
    title: "GreeAlex",
    subtitle: "Build a sustainable future with cutting-edge technology and environmental consciousness",
    startJourney: "Start Your Journey",
    watchDemo: "Watch Demo",
    activeMembers: "Active Members",
    actionsCompleted: "Actions Completed", 
    pointsEarned: "Genz Points Earned",
    citiesConnected: "Cities Connected",
    ourSolutions: "Our Solutions",
    sustainableSolutions: "Sustainable Solutions for Tomorrow",
    discoverTools: "Discover innovative tools and strategies to create a more sustainable world",
    upcomingEvents: "Upcoming Events",
    joinActivities: "Join Environmental Activities",
    participateEvents: "Participate in community events and make a real impact on the environment",
    ecoActions: "Eco Actions",
    dailyActions: "Daily Actions for Planet Earth",
    smallActions: "Small actions, big impact. Complete these activities to earn Genz Points and help the environment",
    ourPartners: "Our Partners",
    workingTogether: "Working Together for Change",
    collaborating: "Collaborating with leading organizations to create a sustainable future",
    ecoRewards: "Eco Rewards", 
    earnPoints: "Earn Genz Points, Get Rewards",
    turnActions: "Turn your environmental actions into amazing rewards and exclusive offers",
    joinRevolution: "Join the Sustainability Revolution",
    togetherCreate: "Together, we can create a cleaner, greener, and more sustainable planet for future generations",
    getStarted: "Get Started Today",
    learnMore: "Learn More",
    secureBank: "Secure & Sustainable with Alex Bank",
    viewAllEvents: "View All Events",
    viewAllPartners: "View All Partners", 
    browseAllRewards: "Browse All Rewards",
    joinEvent: "Join Event",
    startAction: "Start Action",
    points: "Points",
    redeemNow: "Redeem Now",
    contact: "Contact",
    supportedActivities: "Supported Activities",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    inStock: "In Stock",
    limitedStock: "Limited Stock",
    byPartner: "by",
    contactLabel: "Contact:",
    attendees: "attendees",
    buildingSustainable: "Building a sustainable future"
  },
  ar: {
    title: "جري أليكس",
    subtitle: "ابني مستقبل مستدام بالتكنولوجيا المتطورة والوعي البيئي",
    startJourney: "ابدأ رحلتك",
    watchDemo: "شاهد العرض",
    activeMembers: "عضو نشط",
    actionsCompleted: "نشاط مكتمل",
    pointsEarned: "نقطة جينز مكتسبة", 
    citiesConnected: "مدينة متصلة",
    ourSolutions: "حلولنا",
    sustainableSolutions: "حلول مستدامة للغد",
    discoverTools: "اكتشف الأدوات والاستراتيجيات المبتكرة لإنشاء عالم أكثر استدامة",
    upcomingEvents: "الفعاليات القادمة",
    joinActivities: "انضم للأنشطة البيئية",
    participateEvents: "شارك في فعاليات المجتمع واصنع تأثيراً حقيقياً على البيئة",
    ecoActions: "الأعمال البيئية",
    dailyActions: "أعمال يومية لكوكب الأرض",
    smallActions: "أعمال صغيرة، تأثير كبير. أكمل هذه الأنشطة لتحصل على نقاط جينز وساعد البيئة",
    ourPartners: "شركاؤنا",
    workingTogether: "نعمل معاً من أجل التغيير",
    collaborating: "نتعاون مع المنظمات الرائدة لإنشاء مستقبل مستدام",
    ecoRewards: "مكافآت بيئية",
    earnPoints: "احصل على نقاط جينز، احصل على مكافآت",
    turnActions: "حول أعمالك البيئية إلى مكافآت مدهشة وعروض حصرية",
    joinRevolution: "انضم لثورة الاستدامة",
    togetherCreate: "معاً، يمكننا إنشاء كوكب أنظف وأخضر وأكثر استدامة للأجيال القادمة",
    getStarted: "ابدأ اليوم",
    learnMore: "اعرف أكثر",
    secureBank: "آمن ومستدام مع بنك الإسكندرية",
    viewAllEvents: "عرض كل الفعاليات",
    viewAllPartners: "عرض كل الشركاء",
    browseAllRewards: "تصفح كل المكافآت", 
    joinEvent: "انضم للفعالية",
    startAction: "ابدأ النشاط",
    points: "نقطة",
    redeemNow: "استرد الآن",
    contact: "الاتصال",
    supportedActivities: "الأنشطة المدعومة",
    easy: "سهل",
    medium: "متوسط",
    hard: "صعب",
    inStock: "متوفر",
    limitedStock: "مخزون محدود",
    byPartner: "بواسطة",
    contactLabel: "الاتصال:",
    attendees: "مشارك",
    buildingSustainable: "نبني مستقبلاً مستداماً"
  }
};

// Updated rewards with Alex Bank partnership
const alexBankRewards = [
  {
    id: '1',
    title: { en: 'Savings Bonus', ar: 'مكافأة توفير' },
    description: { en: 'Get a bonus on your savings account with Alex Bank', ar: 'احصل على مكافأة على حساب التوفير مع بنك الإسكندرية' },
    points: 2000,
    category: { en: 'Banking', ar: 'مصرفية' },
    partner: { en: 'Alex Bank', ar: 'بنك الإسكندرية' },
    availability: { en: 'In Stock', ar: 'متوفر' },
    image: '/images/SolarCharger.jpg'
  },
  {
    id: '2', 
    title: { en: 'Fee Waiver', ar: 'إعفاء من الرسوم' },
    description: { en: 'Waive fees on your next banking transaction', ar: 'إعفاء من رسوم معاملتك المصرفية القادمة' },
    points: 1500,
    category: { en: 'Banking', ar: 'مصرفية' },
    partner: { en: 'Alex Bank', ar: 'بنك الإسكندرية' },
    availability: { en: 'In Stock', ar: 'متوفر' },
    image: '/images/Discount.jpg'
  },
  {
    id: '3',
    title: { en: 'Plant a Tree', ar: 'ازرع شجرة' },
    description: { en: 'Alex Bank will plant a tree in your name through our Green Initiative', ar: 'سيزرع بنك الإسكندرية شجرة باسمك من خلال مبادرتنا الخضراء' },
    points: 1000,
    category: { en: 'Sustainability', ar: 'استدامة' },
    partner: { en: 'Alex Bank Green Initiative', ar: 'مبادرة بنك الإسكندرية الخضراء' },
    availability: { en: 'In Stock', ar: 'متوفر' },
    image: '/images/TreePlanting.jpg'
  },
  {
    id: '4',
    title: { en: 'Free Coffee', ar: 'قهوة مجانية' },
    description: { en: 'Enjoy a free coffee from our partner local coffee shops', ar: 'استمتع بقهوة مجانية من مقاهي الشركاء المحليين' },
    points: 500,
    category: { en: 'Lifestyle', ar: 'نمط حياة' },
    partner: { en: 'Local Coffee', ar: 'القهوة المحلية' },
    availability: { en: 'In Stock', ar: 'متوفر' },
    image: '/images/waterbottle.jpg'
  },
  {
    id: '5',
    title: { en: 'Investment Consultation', ar: 'استشارة استثمارية' },
    description: { en: 'Free investment consultation session with Alex Bank experts', ar: 'جلسة استشارة استثمارية مجانية مع خبراء بنك الإسكندرية' },
    points: 3000,
    category: { en: 'Banking', ar: 'مصرفية' },
    partner: { en: 'Alex Bank', ar: 'بنك الإسكندرية' },
    availability: { en: 'Limited Stock', ar: 'مخزون محدود' },
    image: '/images/SustainableFashion.jpg'
  },
  {
    id: '6',
    title: { en: 'Shopping Voucher', ar: 'قسيمة تسوق' },
    description: { en: '20% discount voucher for eco-friendly products', ar: 'قسيمة خصم 20% للمنتجات الصديقة للبيئة' },
    points: 800,
    category: { en: 'Shopping', ar: 'تسوق' },
    partner: { en: 'Green Shopping', ar: 'التسوق الأخضر' },
    availability: { en: 'In Stock', ar: 'متوفر' },
    image: '/images/RecyclingArt.jpg'
  }
];

const stats = [
  { 
    icon: Users, 
    value: '10,000', 
    unit: '+',
    label: { en: 'Active Members', ar: 'عضو نشط' }
  },
  { 
    icon: Target, 
    value: '50,000', 
    unit: '+',
    label: { en: 'Actions Completed', ar: 'نشاط مكتمل' }
  },
  { 
    icon: Award, 
    value: '2.5M', 
    unit: '',
    label: { en: 'Genz Points Earned', ar: 'نقطة جينز مكتسبة' }
  },
  { 
    icon: Globe, 
    value: '25', 
    unit: '',
    label: { en: 'Cities Connected', ar: 'مدينة متصلة' }
  },
];

const features = [
  {
    icon: Recycle,
    title: { en: 'Smart Recycling', ar: 'إعادة التدوير الذكي' },
    description: { en: 'AI-powered recycling guidance and tracking to maximize your environmental impact.', ar: 'إرشادات إعادة التدوير المدعومة بالذكاء الاصطناعي لتعظيم تأثيرك البيئي.' },
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: TreePine,
    title: { en: 'Carbon Footprint', ar: 'البصمة الكربونية' },
    description: { en: 'Track and reduce your carbon footprint with personalized recommendations.', ar: 'تتبع وقلل بصمتك الكربونية بتوصيات مخصصة لك.' },
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Sun,
    title: { en: 'Renewable Energy', ar: 'الطاقة المتجددة' },
    description: { en: 'Connect with renewable energy providers and optimize your energy consumption.', ar: 'تواصل مع موردي الطاقة المتجددة وحسّن استهلاكك للطاقة.' },
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Droplets,
    title: { en: 'Water Conservation', ar: 'حفظ المياه' },
    description: { en: 'Monitor water usage and discover innovative conservation techniques.', ar: 'راقب استخدام المياه واكتشف تقنيات الحفظ المبتكرة.' },
    color: 'from-indigo-500 to-purple-600'
  },
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isRTL, setIsRTL] = useState(false);

  const t = translations[language];

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    setIsRTL(newLang === 'ar');
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // Custom hook for intersection observer - Optimized
  const useIntersectionObserver = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Don't unobserve to allow re-triggering if needed
        }
      }, {
        threshold: 0.15,
        rootMargin: '100px 0px -50px 0px',
        ...options
      });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return [ref, isInView] as const;
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-gradient-shift bg-[length:400%_400%] ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="bg-white/80 backdrop-blur-sm border-green-200 hover:bg-green-50"
        >
          <Languages className="h-4 w-4 mr-2" />
          {language === 'en' ? 'عربي' : 'English'}
        </Button>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/15 to-teal-600/20 animate-gradient-shift bg-[length:400%_400%]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 ${isRTL ? 'right-10' : 'left-10'} animate-float`}>
            <div className="p-4 bg-green-100/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className={`absolute top-32 ${isRTL ? 'left-16' : 'right-16'} animate-float-delayed`}>
            <div className="p-4 bg-blue-100/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className={`absolute bottom-32 ${isRTL ? 'right-20' : 'left-20'} animate-float-slow`}>
            <div className="p-4 bg-yellow-100/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Sun className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <div className={`absolute top-1/2 ${isRTL ? 'left-8' : 'right-8'} animate-float`}>
            <div className="p-3 bg-purple-100/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <TreePine className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className={`absolute bottom-20 ${isRTL ? 'left-32' : 'right-32'} animate-float-delayed`}>
            <div className="p-3 bg-indigo-100/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Wind className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-glow">
                  <Leaf className="h-16 w-16 text-white animate-spin-slow" />
                </div>
              </div>
            </div>
            
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent transition-all duration-1200 delay-300 ${isRTL ? 'leading-relaxed py-4' : ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ 
              lineHeight: isRTL ? '1.5' : undefined, 
              paddingTop: isRTL ? '0.4em' : undefined, 
              paddingBottom: isRTL ? '0.4em' : undefined,
              overflow: 'visible',
              display: 'block'
            }}>
              {t.title}
            </h1>
            
            <p className={`text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              {t.subtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-800 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              >
                {t.startJourney}
                <ArrowRight className={`${isRTL ? 'mr-3' : 'ml-3'} h-6 w-6 transform group-hover:translate-x-1 transition-transform`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-3 border-green-600 text-green-600 hover:bg-green-50 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl backdrop-blur-sm bg-white/80"
              >
                <Play className={`${isRTL ? 'ml-3' : 'mr-3'} h-6 w-6`} />
                {t.watchDemo}
              </Button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-green-600 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/60 backdrop-blur-md border-y border-white/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <div 
                  ref={ref}
                  key={index}
                  className={`text-center transform transition-all duration-700 ease-out ${
                    isInView 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                      <div className="relative p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transform group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl animate-pulse-glow">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-mono">
                    {stat.value}{stat.unit}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label[language]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              {t.ourSolutions}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {t.sustainableSolutions}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.discoverTools}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <Card 
                  ref={ref}
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-md hover:bg-white/95 ${
                    isInView 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-full group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl animate-pulse-glow`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {feature.title[language]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {feature.description[language]}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              {t.upcomingEvents}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {t.joinActivities}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.participateEvents}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_EVENTS.slice(0, 3).map((event, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <Card 
                  ref={ref}
                  key={event.id}
                  className={`group hover:shadow-2xl transition-all duration-600 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm overflow-hidden ${
                    isInView 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-12 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 120}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                <div className="relative overflow-hidden">
                  <div 
                    className="h-56 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Points Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white font-bold shadow-lg backdrop-blur-sm">
                        +{event.points} {t.points}
                      </Badge>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-800 border-white/50 font-semibold backdrop-blur-sm shadow-lg">
                        {typeof event.category === 'string' ? event.category : event.category[language]}
                      </Badge>
                    </div>
                    
                    {/* Event Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                        {typeof event.title === 'string' ? event.title : event.title[language]}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} {t.attendees}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {typeof event.title === 'string' ? event.title : event.title[language]}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-2">
                    {typeof event.description === 'string' ? event.description : event.description[language]}
                  </CardDescription>
                  
                  <div className="grid grid-cols-1 gap-3 py-2 border-t border-gray-100">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span className="line-clamp-1">{typeof event.location === 'string' ? event.location : event.location[language]}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t.joinEvent}
                    <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </Button>
                </CardContent>
              </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.viewAllEvents}
              <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Eco Actions Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              {t.ecoActions}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {t.dailyActions}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.smallActions}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_ACTIONS.slice(0, 4).map((action, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <Card 
                  ref={ref}
                  key={action.id}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm ${
                    isInView 
                      ? 'opacity-100 -translate-x-0 scale-100' 
                      : 'opacity-0 -translate-x-8 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {action.icon === 'recycle' && <Recycle className="h-8 w-8 text-white" />}
                      {action.icon === 'bike' && <Wind className="h-8 w-8 text-white" />}
                      {action.icon === 'tree' && <TreePine className="h-8 w-8 text-white" />}
                      {action.icon === 'water' && <Droplets className="h-8 w-8 text-white" />}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary"
                      className={`text-xs ${
                        action.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        action.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      {action.difficulty === 'easy' ? t.easy : 
                       action.difficulty === 'medium' ? t.medium : 
                       t.hard}
                    </Badge>
                    <Badge className="bg-green-500 text-white">
                      +{action.points} {t.points}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {typeof action.title === 'string' ? action.title : action.title[language]}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                    {typeof action.description === 'string' ? action.description : action.description[language]}
                  </CardDescription>
                  
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105"
                  >
                    {t.startAction}
                  </Button>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              {t.ourPartners}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {t.workingTogether}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.collaborating}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PARTNERS.slice(0, 6).map((partner, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <div 
                  ref={ref}
                  key={partner.id}
                  className={`group cursor-pointer transform transition-all duration-700 ease-out ${
                    isInView 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-6 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 bg-white">
                    <div className="h-48 relative bg-gray-100 overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={typeof partner.name === 'string' ? partner.name : partner.name[language]}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      
                      {/* Very subtle overlay only for better image quality */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                      
                      {/* Small category badge in top-right corner - more transparent */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm border border-gray-200 shadow-sm">
                          {partner.category[language]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Partner name below image - clean and elegant */}
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-lg text-gray-800 text-center mb-2">
                        {typeof partner.name === 'string' ? partner.name : partner.name[language]}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-2">
                        {partner.description[language]}
                      </p>
                      
                      {/* Supported activities as small tags */}
                      <div className="flex justify-center mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          {partner.supportedActivities[language]?.join(', ') || partner.category[language]}
                        </span>
                      </div>
                      
                      {/* Learn More Button - smaller and more elegant */}
                      <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg text-sm">
                        <span className="flex items-center justify-center">
                          {t.learnMore}
                          <ExternalLink className={`${isRTL ? 'mr-2' : 'ml-2'} h-3 w-3`} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.viewAllPartners}
              <Handshake className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              {t.ecoRewards}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {t.earnPoints}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.turnActions}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alexBankRewards.slice(0, 6).map((reward, index) => {
              const [ref, isInView] = useIntersectionObserver();
              return (
                <div 
                  ref={ref}
                  key={reward.id}
                  className={`group cursor-pointer transform transition-all duration-700 ease-out ${
                    isInView 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-6 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 90}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 bg-white">
                    <div 
                      className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 relative"
                      style={{ backgroundImage: `url(${reward.image})` }}
                    >
                      {/* Very subtle overlay for better image quality */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                      
                      {/* Small points badge in top-right corner */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-orange-500/90 text-white backdrop-blur-sm shadow-sm">
                          {reward.points} {t.points}
                        </span>
                      </div>
                      
                      {/* Small availability badge in top-left corner */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm ${
                          reward.availability[language] === t.inStock || reward.availability[language] === 'متوفر' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-orange-500/90 text-white'
                        }`}>
                          {reward.availability[language]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Reward details below image - clean and organized */}
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-lg text-gray-800 text-center mb-2 line-clamp-2">
                        {reward.title[language]}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-2 mb-3">
                        {reward.description[language]}
                      </p>
                      
                      {/* Category and Partner info */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="outline"
                          className="bg-orange-50 text-orange-700 border-orange-200 text-xs font-medium"
                        >
                          {reward.category[language]}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {t.byPartner} <span className="font-medium">{reward.partner[language]}</span>
                        </span>
                      </div>
                      
                      {/* Redeem Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium rounded-xl transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg text-sm py-2"
                      >
                        {t.redeemNow}
                        <Gift className={`${isRTL ? 'mr-2' : 'ml-2'} h-3 w-3`} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.browseAllRewards}
              <Star className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.joinRevolution}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.togetherCreate}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t.getStarted}
                <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/95"
              >
                {t.learnMore}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{t.title}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400">
                <Shield className="h-4 w-4 mr-2" />
                <span>{t.secureBank}</span>
              </div>
              <div className="text-gray-400">
                © 2024 {t.title}. {t.buildingSustainable}.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
