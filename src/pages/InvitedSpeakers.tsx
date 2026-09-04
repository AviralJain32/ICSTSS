import Footer from '@/components/Footer';
import InvitedSpeakerCard from '@/components/InvitedSpeakerCard';

const InvitedSpeakers = () => {
    const speakers = [
{
  name: "Pratham Pravin Patkar",
  designation: "Director of Business Systems",
  company: "Society for Science & the Public",
  experience: "12 Years",
  email: "prathamppatkar@gmail.com",
  conferenceLink: "https://www.ici3t.com/",
  areaOfResearch:
    "Data Governance, Enterprise Data Architecture, AI Readiness, Microsoft Fabric, Dynamics 365, Data Privacy & Compliance",
  profilePic: "invited-speakers/pratham-pravin-patkar.jpeg",
  country: "",
  city: "",
},
{
  name: "Darsana Usha Devi",
  designation: "Senior Manager, Product",
  company: "Walmart",
  experience: "20+ Years",
  email: "darsanaudevi@gmail.com",
  conferenceLink: "",
  areaOfResearch:
    "GenAI Platforms, MCP, Agentic AI, RAG Architectures, LLM Orchestration, Data Platforms, AI/ML, Retail AI, Data Monetization",
  profilePic: "invited-speakers/darsana-usha-devi.jpeg",
  country: "USA",
  city: "Bentonville",
},
{
  name: "Srinivas Prasad Bheemasamudra Laxminarayan",
  designation: "Senior Solutions Architect",
  company: "Amazon Web Services (AWS)",
  experience: "23 Years",
  email: "srini4code@gmail.com",
  conferenceLink: "https://www.cvs3-conference.com/",
  areaOfResearch:
    "Cloud Computing, AI, Enterprise Transformation, IoT, Thermal Device Intelligence, Anomaly Detection, Predictive Maintenance, Agentic AI, Life Sciences Technology, Intelligent Operations",
  profilePic: "invited-speakers/srinivas-prasad-bheemasamudra-laxminarayan.jpeg",
  country: "",
  city: "",
},
{
  name: "Sai Arundeep Aetukuri",
  designation: "Data Engineer",
  company: "MHK Tech",
  experience: "8 Years",
  email: "asaiarun996@gmail.com",
  conferenceLink: "https://www.cvs3-conference.com/",
  areaOfResearch:
    "Agentic AI, Large Language Models, Data Engineering, Big Data Engineering, RAG Frameworks, Model Context Protocol (MCP), LLM-Driven Data Architectures, Autonomous Pipeline Orchestration, Vector Embeddings, Cloud Data Environments, Smart Sustainable Enterprises",
  profilePic: "invited-speakers/sai-arundeep-aetukuri.jpeg",
  country: "",
  city: "Dubai",
},

];

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-12">
          Invited Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <InvitedSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default InvitedSpeakers
