import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [filteredCreators, setFilteredCreators] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error("Error fetching creators: ", error);
      } else {
        setCreators(data);
        setFilteredCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);

  useEffect(() => {
    const results = creators.filter(creator =>
      creator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCreators(results);
  }, [searchTerm, creators]);

  return (
    <div className="show-creators">
      <h1>Creatorverse</h1>
      <input
        type="text"
        placeholder="Search content creators"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={() => navigate('/add')} className="btn btn-primary">
        Add Content Creator
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : filteredCreators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        <div className="creators-container">
          {filteredCreators.map((creator) => (
            <Card
              key={creator.id}
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
              onClick={() => navigate(`/creator/${creator.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;






