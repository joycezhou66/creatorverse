import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching creator: ", error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!creator) {
    return <p>Creator not found</p>;
  }

  return (
    <div className="view-creator">
      <h1>{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}'s avatar`} />}
      <p><strong>Description:</strong> {creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Channel</a>
      <button onClick={() => navigate('/')} className="btn btn-secondary">Back to Creators</button>
    </div>
  );
};

export default ViewCreator;


