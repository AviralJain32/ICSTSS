import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers — ICSTSS 2026</h1>

          <div className="mb-8">
            <p className="font-publico text-lg mb-4">
              The International Conference on Smart Technologies & Sustainable Systems (ICSTSS 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in smart technologies and their role in building sustainable systems for the future.
            </p>
            <p className="font-publico text-lg mb-4">
              In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
            </p>
            <p className="font-publico text-lg">
              ICSTSS 2026 will feature keynote lectures, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry. We invite original and unpublished research contributions in (but not limited to) the thematic areas below.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Conference Themes & Tracks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-graphik font-bold">Smart Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Artificial Intelligence & Machine Learning</li>
                  <li>Internet of Things (IoT) & Edge Computing</li>
                  <li>Blockchain & Secure Distributed Systems</li>
                  <li>Cloud & High-Performance Computing</li>
                  <li>Robotics & Automation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-graphik font-bold">Sustainable Systems</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Renewable Energy Systems & Smart Grids</li>
                  <li>Green and Sustainable Manufacturing</li>
                  <li>Environmental Monitoring & Climate Technologies</li>
                  <li>Sustainable Infrastructure & Smart Cities</li>
                  <li>Circular Economy & Waste Management</li>
                </ul>
              </div>

              <div>
                <h4 className="font-graphik font-bold">Integration & Applications</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>ICT for Sustainable Development</li>
                  <li>Healthcare Technologies & Biomedical Systems</li>
                  <li>Intelligent Transportation & Mobility Solutions</li>
                  <li>Data-Driven Policy & E-Governance</li>
                  <li>Cybersecurity for Sustainable Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="mt-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Important Dates</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Paper Submission Deadline: <strong>30th December 2025</strong></li>
              <li>Acceptance Notification Due: <strong>10th February 2026</strong></li>
              <li>Registration Due: <strong>25th February 2026</strong></li>
              <li>Camera Ready Submission: <strong>20th March 2026</strong></li>
              <li>Conference Dates: <strong>5th – 6th June 2026</strong></li>
            </ul>
          </div> */}

          <div className="mt-10">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Submission Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Submissions must be original and unpublished.
              Authors should follow the conference formatting instructions (details on the website).</li>
              <li>All submissions will undergo peer review by the Technical Program Committee.</li>
              <li>Accepted papers will be included in the conference proceedings; selected high-quality papers may be invited for journal special issues.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
