import React from 'react';

const FieldVisits = () => {
    const photos = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Client Meeting at HQ'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Strategic Planning Session'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Partnership Agreement'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Quarterly Review'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Team Brainstorming'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Annual Conference'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Office Tour'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Team Lunch'
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Building Team Spirit'
        },
        {
            id: 10,
            url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            caption: 'Modern Workspace'
        }
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
