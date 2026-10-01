import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface AwardWinner {
  name: string;
  category: string;
  subAward: string;
}

const CVS3AwardsResults: React.FC = () => {
  const awardWinners: AwardWinner[] = [
    {
      name: 'Lalith Chandra Bandaru',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Mohammed Shakeer Bhandru',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Kartikkumar Pandya',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Mosheh Nagalla',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Dr. Sahil Garg',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Nilomi Shah',
      category: 'AI VentureX & CV-S3 Global Awards 2026',
      subAward: 'Global Recognition Award'
    },
    {
      name: 'Aneet Bansal',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI-Powered Automation Excellence Award'
    },
    {
      name: 'Adya Mishra',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Healthcare & Life Sciences Excellence Award'
    },
    {
      name: 'Venkateshwarlu Ghoshika',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI Research & Innovation Excellence Award'
    },
    {
      name: 'Naveen Kumar Vedurupaka',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Generative AI Innovation Award'
    },
    {
      name: 'Thivagiri Jnalanivappan',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Kishore Chandra Rajapudi',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Sandeep Gusain',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI Innovation Leadership Award'
    },
    {
      name: 'Rajitha Gentyala',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Applied Artificial Intelligence Excellence Award'
    },
    {
      name: 'Suresh Tamba',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Sachin Suryawanshi',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Enterprise Data Integration Excellence Award'
    },
    {
      name: 'Krishna Nattam',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Multi-Cloud & Hybrid Cloud Strategy Excellence Award'
    },
    {
      name: 'Balasamy Chinnappalyan',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud Security & Compliance Leadership Award'
    },
    {
      name: 'Venkata Hanumath Prasad Velavarthi',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Data Lakehouse Architecture Excellence Award'
    },
    {
      name: 'Venu Gopal Kakarla',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Big Data Engineering Achievement Award'
    },
    {
      name: 'Manish Singh',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud Migration & Modernization Champion Award'
    },
    {
      name: 'Deepanshu Kukreja',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud-Native Architecture Excellence Award'
    },
    {
      name: 'Niten Aggarwal',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Platform Engineering Excellence Award'
    },
    {
      name: 'Rahul Muralinath',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Rajiv Ranjan Singh',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'High Availability & Disaster Recovery Excellence Award'
    },
    {
      name: 'Akash Kumar Athghara',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud Migration & Modernization Champion Award'
    },
    {
      name: 'Bibhu Sundar Parida',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud-Native Architecture Excellence Award'
    },
    {
      name: 'Sanjay Kumar Kattela',
      category: 'Innovation & Entrepreneurship Awards',
      subAward: 'Startup Innovation Excellence Award'
    },
    {
      name: 'Kandasamy Selvaraj',
      category: 'Innovation & Entrepreneurship Awards',
      subAward: 'DeepTech Innovation Award'
    },
    {
      name: 'Sanjay Singh',
      category: 'Manufacturing & Industry 4.0 Awards',
      subAward: 'Smart Supply Chain & Logistics Innovation Award'
    },
    {
      name: 'Ameya Patil',
      category: 'Manufacturing & Industry 4.0 Awards',
      subAward: 'Robotics & Autonomous Manufacturing Excellence Award'
    },
    {
      name: 'Kalyani Gajapatri Raju Konduru',
      category: 'Manufacturing & Industry 4.0 Awards',
      subAward: 'Industrial Cybersecurity Excellence Award'
    },
    {
      name: 'Laxmi Yogita Attaluri',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'AI-Driven Research Excellence Award'
    },
    {
      name: 'Krishna Prasad Jayaji',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Sagar Malik',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'High-Impact Scholarly Contribution Award'
    },
    {
      name: 'Sathish Krishna Anumula',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Healthcare & Biomedical Research Excellence Award'
    },
    {
      name: 'Bharu Chander Keerthi',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Translational Research Innovation Award'
    },
    {
      name: 'Dr. Mahadev A. Gawas',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Intellectual Property Achievement Award'
    },
    {
      name: 'SANGEETHA S K B',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Rahul Azmeera',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Global Research Partnership Award'
    },
    {
      name: 'Gunjan Shegade',
      category: 'SAP Cloud & Enterprise Digital Transformation Awards',
      subAward: 'SAP Analytics Cloud Excellence Award'
    },
    {
      name: 'Dr. Shashi Kant Gupta',
      category: 'SAP Cloud & Enterprise Digital Transformation Awards',
      subAward: 'Enterprise Digital Transformation Leadership Award'
    },
    {
      name: 'Vijaya Bhaskar Reddy Saadhu',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Software Architecture Leadership Award'
    },
    {
      name: 'Manasa Uppala',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Secure Software Engineering Excellence Award'
    },
    {
      name: 'Sri Venkat Aravindbabu Malepati',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Enterprise Application Modernization Excellence Award'
    },
    {
      name: 'Nageswara Rao Gali',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Enterprise Application Modernization Excellence Award'
    },
    {
      name: 'Iswarya Srinivasan',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Enterprise API & Platform Excellence Award'
    },
    {
      name: 'Supratim Dutta',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Enterprise Cloud Transformation Excellence Award'
    },
    {
      name: 'Sonali Priya',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Enterprise Product Innovation Excellence Award'
    }
  ];

  const groupedWinners = awardWinners.reduce((acc, winner) => {
    if (!acc[winner.category]) {
      acc[winner.category] = [];
    }
    acc[winner.category].push(winner);
    return acc;
  }, {} as Record<string, AwardWinner[]>);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-12 w-12 text-yellow-500 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">CVS3 Awards Results</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating excellence and innovation across academia, industry, and research at CVS3.
              These distinguished individuals have been recognized for their outstanding contributions.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(groupedWinners).map(([category, winners]) => (
              <Card key={category} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <Award className="h-6 w-6 mr-3" />
                    {category}
                  </CardTitle>
                  <p className="text-blue-100">
                    {winners.length} award{winners.length > 1 ? 's' : ''} in this category
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {winners.map((winner, index) => (
                      <div
                        key={`${winner.name}-${index}`}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                              <Trophy className="h-5 w-5 text-yellow-600" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-gray-900 text-lg">{winner.name}</h3>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {winner.subAward}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
              <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Recognition of Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These awards recognize outstanding achievements in various domains including artificial intelligence,
                cloud computing, research innovation, and enterprise solutions. Each recipient has demonstrated
                exceptional leadership, innovation, and impact in their respective fields. Congratulations to all
                the award winners for their remarkable contributions to CVS3.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CVS3AwardsResults;
