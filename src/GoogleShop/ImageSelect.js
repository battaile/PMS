import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

const Image = ({ imageLink }) => (
  <span>
    <label htmlFor={imageLink.name}>{imageLink.name}</label>
    <LazyLoad height={100}>
      <img
        src={imageLink.url}
        id={imageLink.name}
        style={{ height: 100, width: "auto" }}
        className="form-control"
      />
    </LazyLoad>
  </span>
);
Image.propTypes = {
  imageLink: PropTypes.object.isRequired
};

const ImageSelect = ({ imageLinks }) => {
  let col1 = [], col2 = [], col3 = [], col4 = [];

  for (let i = 0; i < imageLinks.length; i++) {
    col1.push(imageLinks[i]);
    i++;
    if (i >= imageLinks.length) {break;}

    col2.push(imageLinks[i]);
    i++;
    if (i >= imageLinks.length) {break;}

    col3.push(imageLinks[i]);
    i++;
    if (i >= imageLinks.length) {break;}
    
    col4.push(imageLinks[i]);
  }

  return (
      <div className="row">
        <div className="col-sm-3">
          {col1.map(i => <Image key={i.url} imageLink={i} />)}
        </div>

        <div className="col-sm-3">
          {col2.map(i => <Image key={i.url} imageLink={i} />)}
        </div>

        <div className="col-sm-3">
          {col3.map(i => <Image key={i.url} imageLink={i} />)}
        </div>

        <div className="col-sm-3">
          {col4.map(i => <Image key={i.url} imageLink={i} />)}
        </div>        
      </div>
  );
};

ImageSelect.propTypes = {
  imageLinks: PropTypes.array.isRequired
};

export default ImageSelect;
