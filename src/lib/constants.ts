// GreeAlex color palette
export const COLORS = {
  primary: '#2C9B5C', // Main green
  secondary: '#1A6B3F', // Darker green
  accent: '#4ED485', // Light green
  warning: '#FFB74D', // Orange for warnings
  error: '#F44336', // Red for errors
  info: '#2196F3', // Blue for info
  success: '#4CAF50', // Green for success
  background: '#FFFFFF', // White background
  cardBackground: '#F9FCFA', // Light green-tinted background
  text: {
    primary: '#263238', // Dark text
    secondary: '#546E7A', // Medium dark text
    light: '#FFFFFF', // White text
    muted: '#90A4AE', // Muted text
  },
  border: '#E0F2E9', // Light green border
  divider: '#ECEFF1', // Light gray divider
};

// Mock data for the app
export const MOCK_USER = {
  id: '1',
  name: 'Sarah Johnson',
  username: '@saraheco',
  avatar: '/images/Avatar.jpg',
  points: 3450,
  rank: 3,
  ecoTitle: 'Eco-Hero',
  email: 'sarah.johnson@example.com',
  location: 'New York, NY',
  joinedDate: 'January 2023',
};

export const MOCK_ACTIONS = [
  {
    id: '1',
    title: {
      en: 'Recycle 5 Plastic Bottles',
      ar: 'أعد تدوير 5 زجاجات بلاستيكية'
    },
    description: {
      en: 'Collect and properly recycle 5 plastic bottles to earn points.',
      ar: 'اجمع وأعد تدوير 5 زجاجات بلاستيكية بشكل صحيح لتحصل على نقاط.'
    },
    points: 50,
    category: {
      en: 'Recycling',
      ar: 'إعادة تدوير'
    },
    icon: 'recycle',
    completed: false,
    difficulty: 'easy',
  },
  {
    id: '2',
    title: {
      en: 'Bike to Work for a Week',
      ar: 'اذهب للعمل بالدراجة لمدة أسبوع'
    },
    description: {
      en: 'Use your bicycle as your primary mode of transportation to work for one full week.',
      ar: 'استخدم دراجتك كوسيلة النقل الأساسية للعمل لمدة أسبوع كامل.'
    },
    points: 200,
    category: {
      en: 'Transportation',
      ar: 'نقل'
    },
    icon: 'bike',
    completed: false,
    difficulty: 'medium',
  },
  {
    id: '3',
    title: {
      en: 'Plant a Tree',
      ar: 'ازرع شجرة'
    },
    description: {
      en: 'Plant a tree in your community or participate in a local tree planting event.',
      ar: 'ازرع شجرة في مجتمعك أو شارك في فعالية زراعة أشجار محلية.'
    },
    points: 300,
    category: {
      en: 'Conservation',
      ar: 'حفظ'
    },
    icon: 'tree',
    completed: false,
    difficulty: 'medium',
  },
  {
    id: '4',
    title: {
      en: 'Reduce Water Usage',
      ar: 'قلل من استخدام المياه'
    },
    description: {
      en: 'Reduce your water consumption by 20% for a month.',
      ar: 'قلل من استهلاك المياه بنسبة 20% لمدة شهر.'
    },
    points: 150,
    category: {
      en: 'Conservation',
      ar: 'حفظ'
    },
    icon: 'water',
    completed: false,
    difficulty: 'hard',
  },
  {
    id: '5',
    title: {
      en: 'Zero Waste Day',
      ar: 'يوم بلا نفايات'
    },
    description: {
      en: 'Go one full day without producing any waste.',
      ar: 'اقض يوماً كاملاً بدون إنتاج أي نفايات.'
    },
    points: 100,
    category: {
      en: 'Waste Reduction',
      ar: 'تقليل النفايات'
    },
    icon: 'trash',
    completed: false,
    difficulty: 'medium',
  },
];

export const MOCK_EVENTS = [
  {
    id: '1',
    title: {
      en: 'Community Clean-up Drive',
      ar: 'حملة تنظيف مجتمعية'
    },
    description: {
      en: 'Join us for a day of cleaning up the local park.',
      ar: 'انضم إلينا في يوم لتنظيف الحديقة المحلية.'
    },
    location: {
      en: 'Central Park, New York',
      ar: 'سنترال بارك، نيويورك'
    },
    date: '2023-08-15',
    time: '09:00 - 12:00',
    points: 350,
    image: '/images/Cleanup.jpg',
    organizer: {
      en: 'GreenEarth Foundation',
      ar: 'مؤسسة الأرض الخضراء'
    },
    attendees: 42,
    category: {
      en: 'Clean-up',
      ar: 'تنظيف'
    },
  },
  {
    id: '2',
    title: {
      en: 'Tree Planting Marathon',
      ar: 'ماراثون زراعة الأشجار'
    },
    description: {
      en: 'Help us plant 100 trees in the city!',
      ar: 'ساعدنا في زراعة 100 شجرة في المدينة!'
    },
    location: {
      en: 'Riverside Park, New York',
      ar: 'حديقة ريفرسايد، نيويورك'
    },
    date: '2023-08-22',
    time: '10:00 - 14:00',
    points: 400,
    image: '/images/TreePlanting.jpg',
    organizer: {
      en: 'Forest Friends',
      ar: 'أصدقاء الغابات'
    },
    attendees: 56,
    category: {
      en: 'Planting',
      ar: 'زراعة'
    },
  },
  {
    id: '3',
    title: {
      en: 'Recycling Workshop',
      ar: 'ورشة إعادة التدوير'
    },
    description: {
      en: 'Learn how to recycle properly and make art from waste.',
      ar: 'تعلم كيفية إعادة التدوير بشكل صحيح وصنع فن من النفايات.'
    },
    location: {
      en: 'Community Center, Brooklyn',
      ar: 'مركز المجتمع، بروكلين'
    },
    date: '2023-08-29',
    time: '14:00 - 16:00',
    points: 200,
    image: '/images/RecyclingArt.jpg',
    organizer: {
      en: 'Recycle Revolution',
      ar: 'ثورة إعادة التدوير'
    },
    attendees: 25,
    category: {
      en: 'Education',
      ar: 'تعليم'
    },
  },
];

export const MOCK_LEADERBOARD = [
  { id: '1', name: 'David Chen', username: '@ecodavid', avatar: '/images/DavidChen.jpg', points: 5240, rank: 1 },
  { id: '2', name: 'Maria Garcia', username: '@mariaearth', avatar: '/images/MariaGarcia.jpg', points: 4980, rank: 2 },
  { id: '3', name: 'Sarah Johnson', username: '@saraheco', avatar: '/images/Avatar.jpg', points: 3450, rank: 3 },
  { id: '4', name: 'James Wilson', username: '@jwilson', avatar: '/images/JamesWilson.jpg', points: 3100, rank: 4 },
  { id: '5', name: 'Emma Smith', username: '@greenemma', avatar: '/images/EmmaSmith.jpg', points: 2870, rank: 5 },
  { id: '6', name: 'Carlos Rodriguez', username: '@ecocarlos', avatar: '/images/CarlosRodriguez.jpg', points: 2640, rank: 6 },
  { id: '7', name: 'Lisa Wang', username: '@lisaeco', avatar: '/images/LisaWang.jpg', points: 2590, rank: 7 },
  { id: '8', name: 'Ahmed Hassan', username: '@greenahmed', avatar: '/images/AhmedHassan.jpg', points: 2310, rank: 8 },
  { id: '9', name: 'Nina Patel', username: '@ninaearth', avatar: '/images/NinaPatel.jpg', points: 2150, rank: 9 },
  { id: '10', name: 'Thomas Brown', username: '@ecotom', avatar: '/images/ThomasBrown.jpg', points: 1980, rank: 10 },
];

export const MOCK_PARTNERS = [
  {
    id: '1',
    name: {
      en: 'Banlastic Egypt',
      ar: 'بانلاستيك مصر'
    },
    logo: '/images/partners/Banlastic%20Egypt.png',
    description: {
      en: 'Specialized in eliminating single-use plastics through beach cleanups and environmental awareness workshops. Partners with GreeAlex to reward volunteers with points via QR code scanning.',
      ar: 'متخصصة في القضاء على البلاستيك أحادي الاستخدام، وتنظم فعاليات زي تنظيف الشواطئ وورش توعية بيئية. اتفقنا معاهم إن أي متطوع يشارك في فعالية لهم، يقدر يمسح QR Code وياخد نقاط على التطبيق.'
    },
    category: {
      en: 'Plastic Reduction',
      ar: 'تقليل البلاستيك'
    },
    supportedActivities: {
      en: ['Beach cleanups', 'Environmental workshops', 'Plastic-free campaigns'],
      ar: ['تنظيف الشواطئ', 'ورش توعية بيئية', 'حملات خالية من البلاستيك']
    },
    website: 'https://banlastic.org',
  },
  {
    id: '2',
    name: {
      en: 'Greenish',
      ar: 'جرينيش'
    },
    logo: '/images/partners/Greenish.png',
    description: {
      en: 'Youth initiative focused on environmental education, working with university students across Egypt. Partners with GreeAlex to promote youth events and reward participation with points.',
      ar: 'مبادرة شبابية بتركّز على التعليم البيئي وبتشتغل مع طلاب جامعات في كل مصر. اتفقنا معاهم يرشّحوا فعاليات شبابية نربطها بالتطبيق، ويدّوا المتطوعين نقاط على مشاركتهم.'
    },
    category: {
      en: 'Environmental Education',
      ar: 'التعليم البيئي'
    },
    supportedActivities: {
      en: ['University workshops', 'Youth events', 'Environmental education'],
      ar: ['ورش جامعية', 'فعاليات شبابية', 'التعليم البيئي']
    },
    website: 'https://greenish.com',
  },
  {
    id: '3',
    name: {
      en: 'VeryNile',
      ar: 'فيري نايل'
    },
    logo: '/images/partners/VeryNile.jpeg',
    description: {
      en: 'Initiative dedicated to cleaning the Nile River from plastic waste, organizing volunteer cleanup days. Partnership with GreeAlex allows participants to earn points by entering codes during cleanup events.',
      ar: 'مبادرة لتنظيف نهر النيل من البلاستيك، بتنظم أيام تطوع بجد، وفيها شباب كتير. عملنا شراكة معاهم علشان أي حد يشارك في أيام تنظيف النيل، يقدر يدخل الكود على GreeAlex وياخد نقاط.'
    },
    category: {
      en: 'River Conservation',
      ar: 'حفظ الأنهار'
    },
    supportedActivities: {
      en: ['Nile cleanup days', 'River conservation', 'Volunteer coordination'],
      ar: ['أيام تنظيف النيل', 'حفظ الأنهار', 'تنسيق المتطوعين']
    },
    website: 'https://verynile.org',
  },
  {
    id: '4',
    name: {
      en: 'Bekia',
      ar: 'بكية'
    },
    logo: '/images/partners/Bekia.png',
    description: {
      en: 'Waste recycling company that exchanges trash for points or money. Collaboration with GreeAlex allows users to connect their Bekia account and earn points for recycling activities.',
      ar: 'شركة تدوير نفايات بتاخد زبالة مقابل نقاط أو فلوس، نفس فكرة الـPoints بالضبط. تعاوننا معاهم علشان نخلي المستخدمين يربطوا حسابهم في Bekia بـ GreeAlex وياخدوا نقاط مقابل إعادة التدوير.'
    },
    category: {
      en: 'Waste Recycling',
      ar: 'تدوير النفايات'
    },
    supportedActivities: {
      en: ['Waste collection', 'Recycling rewards', 'Account integration'],
      ar: ['جمع النفايات', 'مكافآت التدوير', 'ربط الحسابات']
    },
    website: 'https://bekia.eg',
  },
  {
    id: '5',
    name: {
      en: 'Youth Loves Egypt',
      ar: 'الشباب يحب مصر'
    },
    logo: '/images/partners/Youth%20Loves%20Egypt.jpeg',
    description: {
      en: 'Association working on sustainable development goals in Egypt, organizing volunteer events across provinces. Partnership with GreeAlex enables event promotion and QR-based point rewards for participants.',
      ar: 'جمعية بتشتغل على أهداف التنمية المستدامة في مصر، ومعروفة وبتنظم فعاليات تطوعية في المحافظات. اتفقنا معاهم إنهم يعلنوا عن فعاليات على التطبيق، وأي حد يشارك يقدر يضيف QR من المكان وياخد نقاط.'
    },
    category: {
      en: 'Sustainable Development',
      ar: 'التنمية المستدامة'
    },
    supportedActivities: {
      en: ['Volunteer events', 'Provincial programs', 'SDG initiatives'],
      ar: ['فعاليات تطوعية', 'برامج محافظات', 'مبادرات أهداف التنمية']
    },
    website: 'https://facebook.com/youthlovesegypt',
  },
  {
    id: '6',
    name: {
      en: 'Bank of Alexandria Green Initiative',
      ar: 'مبادرة بنك الإسكندرية الخضراء'
    },
    logo: '/images/partners/BankAlex.png',
    description: {
      en: 'Strategic partner supporting GreeAlex platform development and providing green financing solutions for environmental projects. Offers exclusive banking rewards for eco-conscious customers.',
      ar: 'الشريك الاستراتيجي الداعم لتطوير منصة جري أليكس ويقدم حلول التمويل الأخضر للمشاريع البيئية. يوفر مكافآت مصرفية حصرية للعملاء الواعين بيئياً.'
    },
    category: {
      en: 'Green Finance',
      ar: 'التمويل الأخضر'
    },
    supportedActivities: {
      en: ['Platform sponsorship', 'Green loans', 'Banking rewards', 'Environmental financing'],
      ar: ['رعاية المنصة', 'القروض الخضراء', 'المكافآت المصرفية', 'التمويل البيئي']
    },
    website: 'https://alexbank.com/green',
  },
];

export const MOCK_REWARDS = [
  {
    id: '1',
    title: 'Eco-Friendly Water Bottle',
    description: 'Stainless steel reusable water bottle with GreeAlex branding.',
    image: '/images/waterbottle.jpg',
    points: 500,
    category: 'Merchandise',
    availability: 'In Stock',
    provider: 'GreeAlex',
  },
  {
    id: '2',
    title: '10% Off at Organic Market',
    description: 'Get 10% off your next purchase at participating organic grocery stores.',
    image: '/images/Discount.jpg',
    points: 300,
    category: 'Discount',
    availability: 'Limited Time',
    provider: 'OrganicMarket',
    expirationDays: 30,
  },
  {
    id: '3',
    title: '$20 Public Transit Card',
    description: 'A $20 credit on your public transportation card.',
    image: '/images/Transit.jpg',
    points: 800,
    category: 'Voucher',
    availability: 'In Stock',
    provider: 'Metro Transit',
  },
  {
    id: '4',
    title: 'Tree Planting Certificate',
    description: 'We\'ll plant a tree in your name and send you a certificate.',
    image: '/images/TreePlanting.jpg',
    points: 450,
    category: 'Experience',
    availability: 'In Stock',
    provider: 'Green Earth Foundation',
  },
  {
    id: '5',
    title: 'Sustainable Fashion Store Voucher',
    description: '$25 voucher for eco-friendly clothing and accessories.',
    image: '/images/SustainableFashion.jpg',
    points: 1000,
    category: 'Voucher',
    availability: 'Limited Stock',
    provider: 'EcoStyle',
    expirationDays: 60,
  },
  {
    id: '6',
    title: 'Solar Phone Charger',
    description: 'Portable solar-powered phone charger for sustainable energy on the go.',
    image: '/images/SolarCharger.jpg',
    points: 1200,
    category: 'Merchandise',
    availability: 'In Stock',
    provider: 'SolarTech',
  },
];

export const MOCK_USER_HISTORY = [
  {
    id: '1',
    title: 'Community Clean-up Drive',
    date: '2023-07-15',
    points: 350,
    category: 'Volunteer',
    location: 'Central Park, New York',
  },
  {
    id: '2',
    title: 'Recycled 20 Plastic Bottles',
    date: '2023-07-10',
    points: 200,
    category: 'Recycling',
  },
  {
    id: '3',
    title: 'Bike to Work Week',
    date: '2023-06-25',
    points: 300,
    category: 'Transportation',
  },
  {
    id: '4',
    title: 'Tree Planting Event',
    date: '2023-06-10',
    points: 400,
    category: 'Volunteer',
    location: 'Riverside Park, New York',
  },
  {
    id: '5',
    title: 'Zero Waste Challenge',
    date: '2023-05-20',
    points: 500,
    category: 'Waste Reduction',
  },
];