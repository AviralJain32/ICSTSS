import React from 'react';
import Footer from '@/components/Footer';

const AIventurex: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-4">AI VentureX 2026</h1>
          <p className="font-druk text-xl text-[#001324] mb-6">AI VentureX for Business Leaders, Innovators & Entrepreneurs</p>
          <p className="font-graphik text-lg text-gray-700 leading-relaxed mb-6">
            Transform. Innovate. Scale with AI.
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a
              href="https://forms.gle/2mZY5XDJBfNiP7VPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#001324] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#00304f]"
            >
              Register Now
            </a>
            <span className="text-sm text-gray-600">Secure your spot for AI VentureX 2026</span>
          </div>
          <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/AI_VENTUREX.jpeg"
              alt="AI VentureX 2026"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <section className="mb-10">
            <div className="rounded-2xl border border-gray-200 bg-[#f9f5e9] p-6">
              <p className="font-druk text-2xl text-[#001324] mb-4">AI VentureX 2026</p>
              <p className="font-graphik text-base text-gray-700 leading-relaxed">
                AI VentureX 2026 is a premier international AI VentureX designed to help businesses, enterprises, startups, entrepreneurs, investors, and professionals harness the power of Artificial Intelligence for growth, innovation, productivity, and competitive advantage.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">About the VentureX</h2>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              Co-located with CV-S3 2026 – International Conference on Computer Vision for Smart Sustainable Systems, AI VentureX brings together global AI experts, business leaders, policymakers, researchers, investors, innovators, and technology providers to explore how AI is transforming industries and shaping the future of business.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 font-graphik">
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <p className="font-bold mb-2">Event Dates</p>
                <p>23–24 September 2026</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <p className="font-bold mb-2">Location</p>
                <p>Dubai, UAE</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <p className="font-bold mb-2">Format</p>
                <p>Hybrid Mode</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <p className="font-bold mb-2">Program</p>
                <p>23 September 2026 – Physical Event</p>
                <p>24 September 2026 – Digital Event</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                Website: <a href="https://www.cvs3-conference.com/ai-venturex" className="text-blue-600 hover:underline">https://www.cvs3-conference.com/ai-venturex</a>
              </p>
              <p>
                Email: <a href="mailto:cvs3.congress@gmail.com" className="text-blue-600 hover:underline">cvs3.congress@gmail.com</a> or <a href="mailto:support@cvs3-conference.com" className="text-blue-600 hover:underline">support@cvs3-conference.com</a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Why Attend AI VentureX?</h2>
            <ul className="list-disc pl-6 space-y-3 font-graphik text-gray-700">
              <li>Accelerate Business Growth</li>
              <li>Improve Customer Experience</li>
              <li>Automate Operations</li>
              <li>Make Data-Driven Decisions</li>
              <li>Drive Innovation</li>
              <li>Create New Revenue Opportunities</li>
              <li>Build Future-Ready Enterprises</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Key Highlights</h2>
            <div className="space-y-6 text-gray-700 font-graphik">
              <div>
                <p className="font-bold text-lg">🎤 Keynote Sessions</p>
                <p className="leading-relaxed">Insights from global AI leaders, entrepreneurs, innovators, and industry experts.</p>
              </div>
              <div>
                <p className="font-bold text-lg">💼 AI for Business Forum</p>
                <p className="leading-relaxed">Real-world case studies, enterprise AI adoption, and digital transformation strategies.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🤝 Panel Discussions & Roundtables</p>
                <p className="leading-relaxed">Interactive discussions on AI trends, opportunities, governance, and industry impact.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🌐 Global Networking</p>
                <p className="leading-relaxed">Connect with business leaders, startups, investors, researchers, and technology providers.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🛠 AI Workshops & Bootcamps</p>
                <p className="leading-relaxed">Hands-on sessions on Generative AI, AI Agents, Prompt Engineering, Automation, Analytics, and Enterprise AI.</p>
              </div>
              <div>
                <p className="font-bold text-lg">📚 Call for Book Launch</p>
                <p className="leading-relaxed">Launch your latest books and engage with a global audience of researchers, professionals, and business leaders.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🏢 AI & Technology Exhibition</p>
                <p className="leading-relaxed">Showcase products, services, AI solutions, startups, research innovations, and enterprise technologies.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 font-graphik">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-3">AI for Business Growth & Strategy</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing, Sales & Customer Experience</li>
                  <li>Data-Driven Decision Making</li>
                  <li>AI for Finance & Risk Management</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-3">Operations & Automation</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process Automation</li>
                  <li>Generative AI & AI Agents</li>
                  <li>Responsible AI & Governance</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-3">Smart Sustainable Systems</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Smart Sustainable Systems</li>
                  <li>Digital Transformation & Innovation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-3">Hybrid Business Impact</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enterprise AI adoption</li>
                  <li>AI-powered customer experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">AI VentureX & CV-S3 Global Awards 2026</h2>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              Celebrating Excellence in AI, Innovation, Entrepreneurship & Digital Transformation.
            </p>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              The awards recognize outstanding contributions from researchers, entrepreneurs, startups, enterprises, business leaders, innovators, and organizations creating impact through Artificial Intelligence, Computer Vision, Smart Technologies, and Digital Transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700 font-graphik">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-2">Research & Academic Excellence</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lifetime Achievement Award</li>
                  <li>AI Innovation Excellence Award</li>
                  <li>AI for Sustainability Award</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-2">Startup & Entrepreneurship Awards</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Startup of the Year</li>
                  <li>AI Startup of the Year</li>
                  <li>Innovation-Driven Startup Award</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold mb-2">Business & Leadership Awards</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enterprise AI Excellence Award</li>
                  <li>Digital Transformation Excellence Award</li>
                  <li>Visionary Business Leader Award</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">AI Venture X @ CV-S3 2026 Programme</h2>
            <div className="space-y-6 text-gray-700 font-graphik">
              <div>
                <p className="font-bold text-lg">🚀 Startup & Innovation Showcase</p>
                <p className="leading-relaxed">A dedicated platform for startups and innovators to exhibit their AI-powered products, prototypes, technologies, research innovations and sustainable solutions to an international audience.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🎤 Startup Pitch Competition</p>
                <p className="leading-relaxed">Selected startups will pitch their ventures before an expert jury comprising investors, entrepreneurs, industry leaders, academicians and technology experts. Evaluation may consider innovation, technology, market opportunity, scalability, business model, team strength and social/industrial impact.</p>
              </div>
              <div>
                <p className="font-bold text-lg">💼 Investor Connect Forum</p>
                <p className="leading-relaxed">A structured networking platform connecting startups and technology innovators with investors, venture capital firms, angel investors, incubators and industry stakeholders.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🤖 AI Solution Demonstrations</p>
                <p className="leading-relaxed">Live demonstrations of innovative AI and computer vision applications, including AI agents, intelligent automation, robotics, healthcare AI, smart-city technologies, computer vision systems and sustainable AI solutions.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🚀 Product Launches</p>
                <p className="leading-relaxed">An international platform for organisations and startups to introduce new AI products, platforms, technologies and solutions to researchers, industry representatives, investors and potential customers.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🌍 International Collaboration Forum</p>
                <p className="leading-relaxed">A dedicated forum for developing international research collaborations, university partnerships, industry collaborations, technology transfer opportunities, student mobility and joint innovation initiatives.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🎓 Student Innovation Showcase</p>
                <p className="leading-relaxed">A platform for students and young innovators to present AI projects, computer vision applications, prototypes, startups and innovative solutions before academics, industry experts and investors.</p>
              </div>
              <div>
                <p className="font-bold text-lg">🏆 Grand Awards Ceremony</p>
                <p className="leading-relaxed mb-3">The AI Venture X @ CV-S3 2026 Grand Awards Ceremony will recognise outstanding startups, innovators, researchers, student innovators, technology solutions and industry contributions emerging from the programme.</p>
                <p className="font-semibold mb-2">Possible recognitions can include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>AI Startup of the Year</li>
                  <li>Most Innovative AI Solution</li>
                  <li>Best Computer Vision Innovation</li>
                  <li>Best Sustainable AI Solution</li>
                  <li>Best Student Innovation</li>
                  <li>Best AI Product</li>
                  <li>Emerging AI Entrepreneur</li>
                  <li>AI Innovation Leadership Award</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-lg">🥂 Gala Networking Reception</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Selection Process Overview</h2>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              The AI Venture X @ CV-S3 2026 selection process will identify and recognise outstanding researchers, innovators, startups, entrepreneurs, educators, industry professionals, and emerging technology leaders contributing to Artificial Intelligence, Computer Vision, Smart Systems, and Sustainable Technologies.
            </p>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              The process will follow a transparent, merit-based, and multi-stage evaluation framework:
            </p>
            <div className="rounded-xl border border-gray-200 bg-[#f9f5e9] p-5 text-center font-graphik font-semibold text-[#001324] mb-4">
              Open Nominations → Eligibility Screening → Expert Evaluation → Shortlisting → Jury Review → Final Selection → Recognition at CV-S3 2026
            </div>
            <p className="font-graphik text-gray-700 leading-relaxed">
              The selection will consider both technical excellence and real-world impact, ensuring that recognition is not based solely on academic publications or commercial success.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Selection Criteria Framework</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-graphik text-gray-700">
                <thead>
                  <tr className="bg-[#001324] text-white">
                    <th className="p-3 border border-gray-200">Evaluation Area</th>
                    <th className="p-3 border border-gray-200">Weightage</th>
                    <th className="p-3 border border-gray-200">Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Innovation & Originality</td>
                    <td className="p-3 border border-gray-200">20%</td>
                    <td className="p-3 border border-gray-200">Novelty of idea, technology, methodology or solution</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Technical Excellence</td>
                    <td className="p-3 border border-gray-200">15%</td>
                    <td className="p-3 border border-gray-200">Technical depth, research quality and implementation</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Impact & Outcomes</td>
                    <td className="p-3 border border-gray-200">20%</td>
                    <td className="p-3 border border-gray-200">Measurable academic, industrial, societal or environmental impact</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">AI / Computer Vision Contribution</td>
                    <td className="p-3 border border-gray-200">15%</td>
                    <td className="p-3 border border-gray-200">Contribution to AI, CV, intelligent systems or related technologies</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Sustainability & Social Relevance</td>
                    <td className="p-3 border border-gray-200">10%</td>
                    <td className="p-3 border border-gray-200">Contribution to sustainable development and societal challenges</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Leadership & Entrepreneurship</td>
                    <td className="p-3 border border-gray-200">10%</td>
                    <td className="p-3 border border-gray-200">Leadership, innovation ecosystem development and entrepreneurial contribution</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-[#f9f5e9]">
                    <td className="p-3 border border-gray-200 font-bold">Scalability & Future Potential</td>
                    <td className="p-3 border border-gray-200">10%</td>
                    <td className="p-3 border border-gray-200">Potential for wider adoption, deployment or future development</td>
                  </tr>
                  <tr className="bg-[#001324] text-white font-bold">
                    <td className="p-3 border border-gray-200">Total</td>
                    <td className="p-3 border border-gray-200">100%</td>
                    <td className="p-3 border border-gray-200"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <p className="font-bold text-lg text-[#001324] mb-3">Additional Selection Considerations</p>
              <p className="font-graphik text-gray-700 leading-relaxed mb-3">Depending on the category, the jury may also consider:</p>
              <ul className="list-disc pl-6 space-y-2 font-graphik text-gray-700">
                <li>Quality and significance of research publications</li>
                <li>Patents, technologies and intellectual property</li>
                <li>Successful products or AI solutions</li>
                <li>Startup growth and technology adoption</li>
                <li>Industry collaborations</li>
                <li>Research grants and funded projects</li>
                <li>Social and community impact</li>
                <li>International collaborations</li>
                <li>Student and young researcher contributions</li>
                <li>Demonstrated leadership in responsible and ethical AI</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Open Nominations Process</h2>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              AI Venture X @ CV-S3 2026 will follow an Open Nominations model, allowing individuals and organisations from across the world to nominate deserving candidates.
            </p>
            <p className="font-bold text-lg text-[#001324] mb-3">Who Can Nominate?</p>
            <p className="font-graphik text-gray-700 mb-3">Nominations may be submitted by:</p>
            <ul className="list-disc pl-6 space-y-2 font-graphik text-gray-700 md:columns-2">
              <li>Researchers and academicians</li>
              <li>Universities and research institutions</li>
              <li>Industry professionals</li>
              <li>Startups and entrepreneurs</li>
              <li>Professional societies and organisations</li>
              <li>Innovation centres and incubators</li>
              <li>Previous awardees</li>
              <li>Colleagues and peers</li>
              <li>Self-nominations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Nomination-to-Selection Workflow</h2>
            <div className="space-y-4 font-graphik">
              {[
                { title: 'Stage 1 — Open Nominations', desc: 'Online nomination portal opens for global submissions.' },
                { title: 'Stage 2 — Eligibility Screening', desc: 'The organising team verifies completeness, eligibility and relevance of nominations.' },
                { title: 'Stage 3 — Expert Evaluation', desc: 'Eligible nominations are independently evaluated by experts using the published selection criteria.' },
                { title: 'Stage 4 — Shortlisting', desc: 'High-scoring candidates are shortlisted for the next stage.' },
                { title: 'Stage 5 — Jury Assessment', desc: 'A multidisciplinary jury reviews shortlisted nominations and evaluates their overall contribution and impact.' },
                { title: 'Stage 6 — Final Selection', desc: 'Final awardees/recognition recipients are selected based on the consolidated evaluation.' },
                { title: 'Stage 7 — Announcement', desc: 'Selected candidates are formally notified and announced through the AI Venture X @ CV-S3 2026 communication channels.' },
                { title: 'Stage 8 — Recognition Ceremony', desc: 'Selected innovators and organisations will be recognised during the CV-S3 2026 programme at MAHE Dubai Campus.' },
              ].map((stage, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#001324] font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-[#001324]">{stage.title}</p>
                    <p className="text-gray-700 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Who Should Attend?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-graphik">
              <li>Business Leaders & Entrepreneurs</li>
              <li>CEOs, CXOs & Department Heads</li>
              <li>Startup Founders & Innovators</li>
              <li>Investors & Venture Capitalists</li>
              <li>Digital Transformation Professionals</li>
              <li>AI & Data Practitioners</li>
              <li>Technology Consultants</li>
              <li>Researchers & Academicians</li>
              <li>Government Representatives</li>
              <li>Innovation & Strategy Leaders</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">Join AI VentureX 2026</h2>
            <p className="font-graphik text-gray-700 leading-relaxed mb-4">
              Whether you are looking to scale your business, launch innovative products, connect with investors, explore AI-driven opportunities, or gain insights from global experts, AI VentureX 2026 offers an unparalleled platform for learning, collaboration, innovation, and growth.
            </p>
            <div className="rounded-xl border border-gray-200 bg-[#f9f5e9] p-6">
              <p className="font-druk text-xl text-[#001324] mb-3">Where AI Meets Ambition. Where Businesses Scale Beyond Limits.</p>
              <p className="text-gray-700 font-graphik">Dubai, UAE | 23–24 September 2026</p>
              <p className="text-gray-700 font-graphik mt-2">
                Website: <a href="https://www.cvs3-conference.com/ai-venturex" className="text-blue-600 hover:underline">https://www.cvs3-conference.com/ai-venturex</a>
              </p>
              <p className="text-gray-700 font-graphik">Email: <a href="mailto:cvs3.congress@gmail.com" className="text-blue-600 hover:underline">cvs3.congress@gmail.com</a> or <a href="mailto:support@cvs3-conference.com" className="text-blue-600 hover:underline">support@cvs3-conference.com</a></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIventurex;
