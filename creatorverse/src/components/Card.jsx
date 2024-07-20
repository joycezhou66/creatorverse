import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  const navigate = useNavigate();

  return (
    <article className="card">
      {imageURL ? (
        <img src={imageURL} alt={`${name}'s avatar`} />
      ) : (
        <div className="no-image-placeholder">No Image Available</div>
      )}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="button-group">
          <button onClick={() => navigate(`/edit/${id}`)} className="btn btn-secondary">Edit</button>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Channel</a>
          <button onClick={() => navigate(`/creator/${id}`)} className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </article>
  );
};

export default Card;






