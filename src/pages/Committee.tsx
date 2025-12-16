import React from 'react';
import Footer from '@/components/Footer';

const Committee = () => {
  const Patrons = [
    { name: "Mr. Niranjan Jayakumar", affiliation: "CEO - MAHE Dubai, UAE" },
    { name: "S. Sudhindra, Pro Vice Chancellor", affiliation: "MAHE Dubai, UAE" },
  ];
  const generalChairs = [
    { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
    { name: "Subburaj Alagarsamy", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
    { name: "Bhuvan Unhelkar", affiliation: "University of South Florida, USA" },
  ];

  const honoraryChairs = [
    { name: "Manu Malek", affiliation: "EiC Computer and Electrical Engineering, Stevens Institute of Technology, USA" },
  ];

  const conferenceChairs = [
    { name: "Balamurugan Balusamy", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
    { name: "Rajiv Selvam", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
  ];

  const technicalProgramChairs = [
    { name: "Rajkumar Singh Rathore", affiliation: "Cardiff Metropolitan University, UK" },
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
    { name: "Jawid Nazir", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
    { name: "Ravishankar Dudhe", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
  ];

  const conveners = [
    { name: "Harpreet Singh Arora", affiliation: "Tel-Aviv University, Israel" },
  ];

  const organisingChairs = [
    { name: "Sophia Rahman", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
    { name: "Abdulla", affiliation: "Manipal Academy of Higher Education, Dubai Campus" },
  ];

  const publicationChairs = [
    { name: "Professor George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
    { name: "Dr. Prasanalakshmi B", affiliation: "King Khalid University, Saudi Arabia" },
    { name: "Bhuvan Unhelkar", affiliation: "University of South Florida, USA" },
  ];

  const advisoryCommittee = [
    { name: "João Manuel R. S. Tavares", affiliation: "Universidade do Porto (FEUP), Portugal" },
    { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
    { name: "Giorgos Karagiannidis", affiliation: "Aristotle University of Thessaloniki, Greece" },
    { name: "Dijana Oreski", affiliation: "University of Zagreb, Varazdin, Croatia" },
    { name: "Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Salt - Jordan" },
    { name: "Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
    { name: "Oana Geman", affiliation: "Chalmers University of Technology, University of Gothenburg, Romania" },
    { name: "Varun G. Menon", affiliation: "SCMS School of Engineering and Technology, Kochi, India" },
    { name: "GaganGeet Singh Aujla", affiliation: "Durham University, UK" },
    { name: "Sachin Kumar", affiliation: "South Ural State University, Chelyabinsk, Russia" },
    { name: "Amit Kumar Jaiswal", affiliation: "University of Leeds, United Kingdom" },
    { name: "Qianqian Xie", affiliation: "University of Manchester, United Kingdom" },
    { name: "Francesco Piccialli", affiliation: "University of Naples Federico II, Italy" },
    { name: "Ashiq Anjum", affiliation: "University of Leicester, UK" },
    { name: "Nuno M.Garcia", affiliation: "University of Beira Interior, Covilhã, Portugal" },
    { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, Lexington, VA" },
    { name: "Juhriyansyah Dalle", affiliation: "Universitas Lambung Mangkurat, Indonesia" },
    { name: "Ahmed Elngar", affiliation: "Beni - Suef University, Egypt" },
    { name: "Prajoy Podder", affiliation: "Institute of ICT, BUET, Dhaka" },
    { name: "M.Rubaiyat Hossain Mondal", affiliation: "Institute of ICT, BUET, Dhaka" },
    { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
    { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
    { name: "Khan Muhammad", affiliation: "Sejong University, South Korea" },
    { name: "Yenumula B Reddy", affiliation: "Grambling State University, Louisiana, USA" },
    { name: "Chandran Venkatesan", affiliation: "KPR Institute of Engineering and Technology, India" },
    { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
    { name: "Vassilis C.Gerogiannis", affiliation: "University of Thessaly, Greece" },
    { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
    { name: "Muhibul Haque Bhuyan", affiliation: "Southeast University, Bangladesh" },
    { name: "Med Salim BOUHLEL", affiliation: "Lab SETIT; Sfax University, Tunisia" },
    { name: "Mamoun Alazab", affiliation: "Charles Darwin University, Australia" },
    { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
    { name: "Arij Naser Abougreen", affiliation: "University of Tripoli, Libya" },
    { name: "Sherif Mohamed Ismail", affiliation: "Egyptian German Academy" },
    { name: "Aslanbek Naziev", affiliation: "Ryazan State University, Russia" },
    { name: "Mwaffaq Otoom", affiliation: "Yarmouk University, Jordan" },
    { name: "Ahmed A.Ewees", affiliation: "Damietta University, Egypt" },
    { name: "Iwan Adhicandra", affiliation: "University of Sydney, Australia" },
    { name: "Meng Li", affiliation: "Hefei University of Technology, China" },
    { name: "RR Venkatesha Prasad", affiliation: "TU Delft, The Netherlands" },
    { name: "Alfredo Grieco", affiliation: "Politecnico di Bari, Italy" },
    { name: "Quoc-Viet Pham", affiliation: "Pusan National University, South Korea" },
    { name: "Enkeleda Lula", affiliation: "University Haxhi Zeka, Kosovo" },
    { name: "Fides del Castillo", affiliation: "De La Salle University, Philippines" },
    { name: "Houda CHIHI", affiliation: "Innov'COM Lab of Sup'COM, Tunisia" },
    { name: "Christos Douligeris", affiliation: "University of Piraeus, Greece" },
    { name: "Feras M. Awaysheh", affiliation: "Tartu University, Delta Research Center, Estonia" },
    { name: "Assunta Di Vaio", affiliation: "University of Naples \"Parthenope\", Italy" },
    { name: "Rajesh Kumar Dhanaraj", affiliation: "Symbiosis International (Deemed University), India" },
    { name: "Lakshmanan Sethu Sankaranarayanan", affiliation: "Google, USA" },
    { name: "Shashi Kant Gupta", affiliation: "Eudoxia Research University, Delaware, USA" },
    { name: "S.K. Lakshmanaprabu", affiliation: "Renault Nissan Technology & Business Centre India (RNTBCI), India" },
    { name: "Mohammad Atikur Rahman", affiliation: "San Francisco Bay University, USA" },
    { name: "Md Shihab Uddin", affiliation: "San Francisco Bay University, USA" },
    { name: "Daniel Lucky Michael", affiliation: "San Francisco Bay University, USA" },
    { name: "Priya Podder", affiliation: "Dhaka National Medical College, Bangladesh" },
    { name: "Md Sazol Ahmmed", affiliation: "Missouri University of Science and Technology, USA" },
    { name: "Rajani Kumari Vaddepalli", affiliation: "Callaway Golf, USA" },
  ];

  const CommitteeSection = ({ title, members }: { title: string; members: { name: string; affiliation: string }[] }) => (
    <div className="mb-8">
      <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="bg-goldsmiths-beige p-3 rounded">
            <p className="font-graphik font-bold text-goldsmiths-text">{member.name}</p>
            <p className="font-publico text-sm text-goldsmiths-text">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
            Committee
          </h1>

          <div className="space-y-8">
            <CommitteeSection title="Patrons" members={Patrons} />
            <CommitteeSection title="General Chair(s)" members={generalChairs} />
            <CommitteeSection title="Honorary Chair(s)" members={honoraryChairs} />
            <CommitteeSection title="Conference Chair(s)" members={conferenceChairs} />
            <CommitteeSection title="Technical Program Chair(s)" members={technicalProgramChairs} />
            <CommitteeSection title="Convener(s)" members={conveners} />
            <CommitteeSection title="Organising Chair(s)" members={organisingChairs} />
            <CommitteeSection title="Publication Chair(s)" members={publicationChairs} />

            <div className="mt-8">
              <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
                Advisory Committee and Technical Program Committee
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advisoryCommittee.map((member, index) => (
                  <div key={index} className="bg-goldsmiths-beige p-3 rounded">
                    <p className="font-graphik font-bold text-goldsmiths-text text-sm">{member.name}</p>
                    <p className="font-publico text-xs text-goldsmiths-text">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Committee;
