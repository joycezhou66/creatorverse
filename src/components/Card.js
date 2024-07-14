import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={`${name}'s avatar`} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Channel</a>
        <button onClick={() => navigate(`/edit/${id}`)} className="btn btn-secondary">Edit</button>
      </div>
    </div>
  );
};

export default Card;