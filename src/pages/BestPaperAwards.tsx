import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FileText, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface Paper {
  title: string;
  authors: string;
}

const BestPaperAwards: React.FC = () => {
  const papers: Paper[] = [
    { title: 'Smart Mobility in Smart Cities: A Policy and Governance Analysis of Dubai', authors: 'Asitha Gayatri Rudraraju, Shreya Prasad, Dr. Mrutyunjaya Sahu' },
    { title: 'Cheque Dishonor and Criminal Jurisprudence in India: AI-Assisted Legal Intelligence for Criminal Case Analysis', authors: 'Ms. Rajbir Kaur, Dr. Arpana Bansal, Dr. Raman Chadha, Sushil Kumar Singh' },
    { title: 'Agentic AI Framework for Autonomous Financial Planning and Investment Decision Support', authors: 'Rohini Maskar' },
    { title: 'Agentic AI Framework for Autonomous Financial Planning and Investment Decision Support', authors: 'Jimmy Joseph' },
    { title: 'AI-Based Stock Replenishment and Lead Time Optimization for Efficient Supply Chain Operations', authors: 'Saurabh Goel, Saurabh Brajesh' },
    { title: 'An Interpretable EfficientNetV2-S-KAN Framework for Automated Diabetic Retinopathy Severity Grading', authors: 'Indresh Kumar Gupta, Tadiwela Elisha Nyamasvisva, Rajesh Kumar Tiwari, Nitin Pahariya, Aditi Sharma' },
    { title: 'Explainable AI Framework for Intelligent Software Engineering, Automated Code Analysis', authors: 'Shivam Gupta, Nandakishore Leburu' },
    { title: 'Agentic AI Framework for Autonomous Big Data Intelligence and Enterprise Decision Optimization', authors: 'TARUN VALLABHANENI' },
    { title: 'Blockchain-Enabled Federated Learning Framework for Privacy-Preserving Healthcare Data Security, Authentication and Trust Management', authors: 'Md Musa Ali' },
    { title: 'Federated Foundation Models for Privacy-Preserving Healthcare Intelligence, Clinical Decision Analytics and Secure Medical Data Collaboration', authors: 'Shaharia Ferdousi' },
    { title: 'Self-Supervised Multimodal Analytics for Social Media Intelligence and Digital Reputation Management', authors: 'Ahmed Alhasan' },
    { title: 'Agentic AI for Autonomous Data Integration, Cleansing & Knowledge Management', authors: 'Guru Prasad Selvarajan' },
    { title: 'Reinforcement Learning Based Adaptive Financial Intelligence for Real-Time Fraud Mitigation Risk Optimization and FinTech Security', authors: 'Azhar Ushmani' },
    { title: 'Federated AI-Driven Financial Intelligence for Privacy-Preserving Risk Assessment Collaborative Fraud Detection and Decision Support', authors: 'Prasanna Kumar Kandregula' },
    { title: 'A Genetic AI-Driven Enterprise Knowledge Automation Through Intelligent Information Management and Adaptive Data Governance', authors: 'Saket Mishra' },
    { title: 'Energy Risk Limits for Adaptive Inference: When Is Condence the Right Exit Rule?', authors: 'Sarvagya Jha' }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Best Paper Awards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating outstanding research contributions at CV-S3 2026. These papers represent the pinnacle of innovation and excellence in their respective fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Card key={`${paper.title}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center text-yellow-500">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-base font-bold text-yellow-700 leading-relaxed">
                    {paper.authors}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recognition of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These distinguished papers were selected through rigorous peer review and evaluation by our expert committee.
              Each submission represents cutting-edge research that advances knowledge and innovation in artificial intelligence,
              data science, and related fields. Congratulations to all the authors for their outstanding contributions to CV-S3 2026.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default BestPaperAwards;
