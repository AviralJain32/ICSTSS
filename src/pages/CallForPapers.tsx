import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers — CV-S3 2026</h1>

          <div className="mb-8">
            <p className="font-publico text-lg mb-4">
              The International Conference on Computer Vision for Smart Sustainable Systems (CV-S3 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in computer vision and sustainable AI technologies and their role in building sustainable systems for the future.
            </p>
            <p className="font-publico text-lg mb-4">
              In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
            </p>
            <p className="font-publico text-lg">
              CV-S3 2026 will feature keynote lectures, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry. We invite original and unpublished research contributions in (but not limited to) the thematic areas below.
            </p>
          </div>

          <div className="mb-6">
  <div className="flex flex-col gap-6">

    {/* Track 1 */}
    <div>
      <h4 className="font-druk text-xl">Track 1: Computer Vision Foundations</h4>
      <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
        <li>Image processing, feature extraction, and pattern recognition</li>
        <li>Deep learning architectures for vision</li>
        <li>3D vision, reconstruction, and modelling</li>
        <li>Video analytics and motion tracking</li>
        <li>Explainable and trustworthy vision models</li>
      </ul>
    </div>

    {/* Track 2 */}
    <div>
      <h4 className="font-druk text-xl">Track 2: Smart & Sustainable Systems</h4>
      <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
        <li>Vision-based smart city solutions</li>
        <li>Intelligent transportation systems & autonomous vehicles</li>
        <li>Vision for environmental monitoring & climate analysis</li>
        <li>Remote sensing & geospatial vision applications</li>
        <li>Smart healthcare and medical imaging systems</li>
      </ul>
    </div>

    {/* Track 3 */}
    <div>
      <h4 className="font-druk text-xl">Track 3: AI for Sustainability</h4>
      <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
        <li>Vision-enabled sustainable industrial automation</li>
        <li>Energy-efficient AI and green computing</li>
        <li>Vision-based waste management and recycling</li>
        <li>Agriculture, water resource management, and biodiversity monitoring</li>
      </ul>
    </div>

    {/* Track 4 */}
    <div>
      <h4 className="font-druk text-xl">Track 4: Human–Computer Interaction & Robotics</h4>
      <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
        <li>Vision-guided robots and drones</li>
        <li>Gesture, face, and emotion recognition</li>
        <li>AR/VR/XR for education, training, and sustainability</li>
        <li>Human-centred computing</li>
      </ul>
    </div>

    {/* Track 5 */}
    <div>
      <h4 className="font-druk text-xl">Track 5: Applications & Emerging Trends</h4>
      <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
        <li>Vision for disaster prediction and management</li>
        <li>Security, surveillance, and biometrics</li>
        <li>Vision in fintech, retail, and smart manufacturing</li>
        <li>Generative AI, diffusion models, and multimodal systems</li>
        <li>Ethical, legal, and societal impacts of computer vision</li>
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
