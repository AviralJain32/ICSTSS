import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, FileText, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface Paper {
  id: string;
  title: string;
  authors: string;
}

const BestPaperAwards: React.FC = () => {
  const papers: Paper[] = [
    { id: '272', title: 'Smart Mobility in Smart Cities: A Policy and Governance Analysis of Dubai', authors: 'Asitha Gayatri Rudraraju, Shreya Prasad, Dr. Mrutyunjaya Sahu' },
    { id: '466', title: 'Cheque Dishonor and Criminal Jurisprudence in India: AI-Assisted Legal Intelligence for Criminal Case Analysis', authors: 'Ms. Rajbir Kaur, Dr. Arpana Bansal, Dr. Raman Chadha, Sushil Kumar Singh' },
    { id: '622', title: 'Agentic AI Framework for Autonomous Financial Planning and Investment Decision Support', authors: 'Rohini Maskar' },
    { id: '623', title: 'Agentic AI Framework for Autonomous Financial Planning and Investment Decision Support', authors: 'Jimmy Joseph' },
    { id: '624', title: 'AI-Based Stock Replenishment and Lead Time Optimization for Efficient Supply Chain Operations', authors: 'Saurabh Goel, Saurabh Brajesh' },
    { id: '658', title: 'An Interpretable EfficientNetV2-S-KAN Framework for Automated Diabetic Retinopathy Severity Grading', authors: 'Indresh Kumar Gupta, Tadiwela Elisha Nyamasvisva, Rajesh Kumar Tiwari, Nitin Pahariya, Aditi Sharma' },
    { id: '676', title: 'Explainable AI Framework for Intelligent Software Engineering, Automated Code Analysis', authors: 'Shivam Gupta, Nandakishore Leburu' },
    { id: '695', title: 'Agentic AI Framework for Autonomous Big Data Intelligence and Enterprise Decision Optimization', authors: 'TARUN VALLABHANENI' },
    { id: '702', title: 'Blockchain-Enabled Federated Learning Framework for Privacy-Preserving Healthcare Data Security, Authentication and Trust Management', authors: 'Md Musa Ali' },
    { id: '704', title: 'Federated Foundation Models for Privacy-Preserving Healthcare Intelligence, Clinical Decision Analytics and Secure Medical Data Collaboration', authors: 'Shaharia Ferdousi' },
    { id: '705', title: 'Self-Supervised Multimodal Analytics for Social Media Intelligence and Digital Reputation Management', authors: 'Ahmed Alhasan' },
    { id: '719', title: 'Agentic AI for Autonomous Data Integration, Cleansing & Knowledge Management', authors: 'Guru Prasad Selvarajan' },
    { id: '721', title: 'Reinforcement Learning Based Adaptive Financial Intelligence for Real-Time Fraud Mitigation Risk Optimization and FinTech Security', authors: 'Azhar Ushmani' },
    { id: '727', title: 'Federated AI-Driven Financial Intelligence for Privacy-Preserving Risk Assessment Collaborative Fraud Detection and Decision Support', authors: 'Prasanna Kumar Kandregula' },
    { id: '731', title: 'A Genetic AI-Driven Enterprise Knowledge Automation Through Intelligent Information Management and Adaptive Data Governance', authors: 'Saket Mishra' },
    { id: '743', title: 'Energy Risk Limits for Adaptive Inference: When Is Condence the Right Exit Rule?', authors: 'Sarvagya Jha' }
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
              Celebrating outstanding research contributions at CVS3. These papers represent the pinnacle of innovation and excellence in their respective fields.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">
                      Paper ID: {paper.id}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{paper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{paper.authors}</p>
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
                data science, and related fields. Congratulations to all the authors for their outstanding contributions to CVS3.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestPaperAwards;
