import React, { useState, useEffect } from 'react';
import supabase from '../client'; 
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';


const ShowCreators = () => {
    const [creators, setCreators] = useState([]);
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
        }
        setLoading(false);
      };
  
      fetchCreators();
    }, []);
  
    return (
      <div className="show-creators">
        <h1>All Content Creators</h1>
        <button onClick={() => navigate('/add')} className ="btn btn-primary">
            Add Content Creator 
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : creators.length === 0 ? (
          <p>No content creators found.</p>
        ) : (
          <div className="creators-container">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ShowCreators;

