const Gallery = ({ imagePaths }) => {
    // if(!Array.isArray(imagePaths)){imagePaths=[imagePaths]}
    return (
      <div className="gallery">
        {Array.isArray(imagePaths) ? imagePaths.map(path => (
          // <img key={path} src={`http://51.75.207.131:5050/imagesArticle/${path}`} alt={path} />
          <img key={path} src={path} alt={path} />
        )):<img key={imagePaths} src={imagePaths} alt={imagePaths} /> }
      </div>
    );
  };
export default Gallery
