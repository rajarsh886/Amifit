import React, { useState } from 'react';
import axios from 'axios';
import RecommendationCard from '../RecommendationCard/RecommendationForm';
import './DietForm.css';

const DietForm = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleGenerate = async (e) => {
    e.preventDefault();

    const requestData = {
      nutrition_input: [500, 20, 5, 30, 400, 60, 8, 10, 40],
      ingredients: [],
      params: { n_neighbors: 5, return_distance: false },
    };

    try {
      const response = await axios.post('http://localhost:5000/api/recommend', requestData);
      setRecommendations(response.data.output);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="diet-form">
      <form onSubmit={handleGenerate}>
        <button type="submit" className="generate-btn">Generate Recommendation</button>
      </form>
      <div className="recommendations">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} recipe={rec} />
        ))}
      </div>
    </div>
  );
};

export default DietForm;
