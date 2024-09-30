const artworks = [
    { id: 1, title: 'Artwork 1', img: 'path_to_artwork1.jpg' },
    { id: 2, title: 'Artwork 2', img: 'path_to_artwork2.jpg' },
    { id: 3, title: 'Artwork 3', img: 'path_to_artwork3.jpg' },
    { id: 4, title: 'Artwork 4', img: 'path_to_artwork4.jpg' },
  ];
  
  const Gallery = () => {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group relative">
              <img
                src={artwork.img}
                alt={artwork.title}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {artwork.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  