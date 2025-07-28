import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { PartnerCard } from "@/components/partners/partner-card";
import { MOCK_PARTNERS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users2, Languages } from "lucide-react";
import { COLORS } from "@/lib/constants";

// Get unique categories from partners  
const getCategories = (language: string) => [
  "All", 
  ...new Set(MOCK_PARTNERS.map(partner => 
    typeof partner.category === 'string' ? partner.category : partner.category[language]
  ))
];

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const isRTL = language === 'ar';
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const categories = getCategories(language);

  // Filter partners based on search and category
  const filteredPartners = MOCK_PARTNERS.filter(partner => {
    const partnerName = typeof partner.name === 'string' ? partner.name : partner.name[language];
    const partnerDescription = typeof partner.description === 'string' ? partner.description : partner.description[language];
    const partnerCategory = typeof partner.category === 'string' ? partner.category : partner.category[language];
    
    const matchesSearch = partnerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          partnerDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || partnerCategory === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
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

      <MainLayout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Users2 className="mr-3 h-7 w-7" style={{ color: COLORS.primary }} />
            {language === 'en' ? 'Partner Organizations' : 'المنظمات الشريكة'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Discover organizations making a positive impact on our planet'
              : 'اكتشف المنظمات التي تصنع تأثيراً إيجابياً على كوكبنا'
            }
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm mb-8">
          {/* Category Tabs */}
          <div className="p-6 border-b border-gray-100">
            <TabsList className="w-full overflow-x-auto flex-nowrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "font-semibold" : ""}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Search Input */}
          <div className="p-6 border-b border-gray-100">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={language === 'en' ? "Search partners..." : "البحث في الشركاء..."} 
                className="pl-9 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Partners Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.length > 0 ? (
                filteredPartners.map(partner => (
                  <PartnerCard
                    key={partner.id}
                    name={typeof partner.name === 'string' ? partner.name : partner.name[language]}
                    logo={partner.logo}
                    description={typeof partner.description === 'string' ? partner.description : partner.description[language]}
                    category={typeof partner.category === 'string' ? partner.category : partner.category[language]}
                    supportedActivities={Array.isArray(partner.supportedActivities) 
                      ? partner.supportedActivities 
                      : partner.supportedActivities[language] || []
                    }
                    website={partner.website}
                  />
                ))
              ) : (
                <div className="col-span-3 py-12 text-center text-muted-foreground">
                  {language === 'en' 
                    ? 'No partners found matching your search criteria.'
                    : 'لم يتم العثور على شركاء مطابقين لمعايير البحث الخاصة بك.'
                  }
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Partner with Us Section */}
        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">
            {language === 'en' ? 'Want to become a partner?' : 'تريد أن تصبح شريكاً؟'}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'en' 
              ? 'Join our growing network of organizations committed to environmental sustainability. Together we can create a bigger impact.'
              : 'انضم إلى شبكتنا المتنامية من المنظمات الملتزمة بالاستدامة البيئية. معاً يمكننا إحداث تأثير أكبر.'
            }
          </p>
          <Button style={{ backgroundColor: COLORS.primary }}>
            {language === 'en' ? 'Apply for Partnership' : 'تقدم للشراكة'}
          </Button>
        </div>
      </MainLayout>
    </div>
  );
}