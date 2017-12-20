import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

const Image = ({ imageLink }) => (
  
 <div>
     <label htmlFor={imageLink.name}>{imageLink.name}</label>
     <img src={imageLink.url} id={imageLink.name} />
  </div>
);
Image.propTypes = {
  imageLink: PropTypes.object.isRequired
};

const ImageSelect = ({ imageLinks }) => (
  <div className="container">test
    {imageLinks.map(i => <Image key={i.url} imageLink={i} />)}
  </div>
);

ImageSelect.propTypes = {
  imageLinks: PropTypes.array.isRequired
};

export default ImageSelect;
