import React from 'react';

const DocumentsSection: React.FC = () => {
  return (
    <div className="bg-[#0c0f2e] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Documents</h2>
        <p className="text-center mb-12">Download the whitepaper and other documents to learn about V-FTC</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#00a9c7] to-[#9d50bb] rounded-lg p-6 flex flex-col items-center"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="bg-[#2f3372] p-4 rounded-full mb-4">
                  <img src={doc.icon} alt={`${doc.title} icon`} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{doc.title}</h3>
              </div>
              <div className="mt-6">
                <button
                  className="bg-[#2f3372] text-white py-2 px-4 rounded-full flex items-center"
                  onClick={() => downloadDocument(doc.url)}
                >
                  <span className="mr-2">PDF</span>
                  <img src="/icons/download.svg" alt="Download" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const downloadDocument = (url: string) => {
  // Implement the download logic here, e.g., window.open(url, '_blank');
};

const documents = [
  { title: 'Whitepaper', icon: '/icons/whitepaper.svg', url: '/documents/whitepaper.pdf' },
  { title: 'OnePager', icon: '/icons/onepager.svg', url: '/documents/onepager.pdf' },
  { title: 'Privacy Policy', icon: '/icons/privacypolicy.svg', url: '/documents/privacypolicy.pdf' },
  { title: 'Terms of Sale', icon: '/icons/termsofsale.svg', url: '/documents/termsofsale.pdf' },
];

export default DocumentsSection;
