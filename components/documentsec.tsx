import Link from 'next/link';
import React from 'react';
import { BsCloudArrowDownFill } from "react-icons/bs";

const DocumentsSection: React.FC = () => {
  return (
    <div className="bg-[#0c0f2e] text-white py-12 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Documents</h2>
        <p className="text-center mb-12">Download the whitepaper and other documents to learn about V-FTC</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="relative group">
              {/* Background Layer */}
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-b from-transparent to-[#0f1535] rounded-lg opacity-70 transition-all group-hover:translate-x-2 group-hover:translate-y-2">
                <div className="flex-1 flex flex-col items-center justify-center relative" style={{ top: '90px', left: '60px' }}>
                  <h3 className="text-xl font-semibold text-center transition-colors duration-300 group-hover:text-pink-500">{doc.title}</h3>
                  <button
                    className="bg-[#2f3372] text-white py-2 px-6 rounded-lg flex items-center mt-4 transition-colors duration-300 group-hover:bg-white group-hover:text-pink-500"
                    onClick={() => downloadDocument(doc.url)}
                  >
                    <Link href="/">
                      <BsCloudArrowDownFill size={20} className="transition-colors duration-300 group-hover:text-pink-500" />
                    </Link>
                    <span className="ml-2">PDF</span>
                  </button>
                </div>
              </div>

              {/* Foreground Card */}
              <div
                className={`relative z-5 border-2 border-white rounded-lg p-6 flex flex-col justify-between transform transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 h-60 w-40`}
                style={{
                  backgroundImage: index === 0 ? 'linear-gradient(to bottom, #001f3f, #ff7b7b)' : index === 1 ? 'url(${/images/documents/document-box (3).png})' : `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${doc.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                {index === 1 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#33367a] to-[#0fff07] opacity-100"
                    style={{ pointerEvents: 'none' }} // Make sure the overlay does not block interactions
                  />
                )}

{index === 0 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#c448b6] to-[#800080] opacity-100"
                    style={{ pointerEvents: 'none' }} // Make sure the overlay does not block interactions
                  />
                )}

{index === 2 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#993e46] to-[#800080] opacity-100"
                    style={{ pointerEvents: 'none' }} // Make sure the overlay does not block interactions
                  />
                )}

{index === 3 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#ff69b4] to-[#800080] opacity-100"
                    style={{ pointerEvents: 'none' }} // Make sure the overlay does not block interactions
                  />
                )}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                  <h3 className="text-xl font-semibold text-center">{doc.title}</h3>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const downloadDocument = (url: string) => {
  window.open(url, '_blank');
};

// Define color gradients and background images for each document
const documents = [
  { title: 'Whitepaper', icon: '/icons/whitepaper.svg', url: '/documents/whitepaper.pdf', backgroundImage: '/images/documents/document-box (1).png' },
  { title: 'OnePager', icon: '/icons/onepager.svg', url: '/documents/onepager.pdf', backgroundImage: '/images/documents/document-box.png' },
  { title: 'Privacy Policy', icon: '/icons/privacypolicy.svg', url: '/documents/privacypolicy.pdf', backgroundImage: '/images/documents/document-box (2).png' },
  { title: 'Terms of Sale', icon: '/icons/termsofsale.svg', url: '/documents/termsofsale.pdf', backgroundImage: '/images/documents/document-box (3).png' },
];

export default DocumentsSection;
