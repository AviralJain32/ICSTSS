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
}
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
