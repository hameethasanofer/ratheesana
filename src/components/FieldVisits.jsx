import React from 'react';

const FieldVisits = () => {
   const photos = [
  { id: 9,  url: '/fieldvisit/IMG-20251213-WA0009.jpg', caption: 'Field Visit Activity' },
  { id: 10, url: '/fieldvisit/IMG-20251213-WA0010.jpg', caption: 'On-site Discussion' },
  { id: 11, url: '/fieldvisit/IMG-20251213-WA0011.jpg', caption: 'Client Interaction' },
  { id: 12, url: '/fieldvisit/IMG-20251213-WA0012.jpg', caption: 'Requirement Analysis' },
  { id: 13, url: '/fieldvisit/IMG-20251213-WA0013.jpg', caption: 'Field Observation' },
  { id: 14, url: '/fieldvisit/IMG-20251213-WA0014.jpg', caption: 'Team Coordination' },
  { id: 15, url: '/fieldvisit/IMG-20251213-WA0015.jpg', caption: 'Work Progress Review' },
  { id: 16, url: '/fieldvisit/IMG-20251213-WA0016.jpg', caption: 'Client Site Visit' },
  { id: 17, url: '/fieldvisit/IMG-20251213-WA0017.jpg', caption: 'Data Collection' },
  { id: 18, url: '/fieldvisit/IMG-20251213-WA0018.jpg', caption: 'Field Documentation' },
  { id: 20, url: '/fieldvisit/IMG-20251213-WA0020.jpg', caption: 'Site Inspection' },
  { id: 21, url: '/fieldvisit/IMG-20251213-WA0021.jpg', caption: 'Team Collaboration' },
  { id: 22, url: '/fieldvisit/IMG-20251213-WA0022.jpg', caption: 'Client Briefing' },
  { id: 23, url: '/fieldvisit/IMG-20251213-WA0023.jpg', caption: 'Field Work Execution' },
  { id: 25, url: '/fieldvisit/IMG-20251213-WA0025.jpg', caption: 'On-site Planning' },
  { id: 27, url: '/fieldvisit/IMG-20251213-WA0027.jpg', caption: 'Live Work Scenario' },
  { id: 28, url: '/fieldvisit/IMG-20251213-WA0028.jpg', caption: 'Problem Analysis' },
  { id: 31, url: '/fieldvisit/IMG-20251213-WA0031.jpg', caption: 'Field Visit Completion' }
];


    return (
        <section id="gallery" className="py-20 bg-slate-800/20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12">Field Visits & Memories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-slate-700">
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-semibold text-lg">{photo.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FieldVisits;
