import React, { useState } from 'react';

const RecommendationForm = () => {
  const [nutritionInput, setNutritionInput] = useState(Array(9).fill(''));
  const [ingredients, setIngredients] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNutritionChange = (index, value) => {
    const updated = [...nutritionInput];
    updated[index] = value;
    setNutritionInput(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setResults([]);

    const inputNumbers = nutritionInput.map((val) => parseFloat(val));
    if (inputNumbers.some(isNaN)) {
      setError('Please enter valid numbers for all nutrients.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nutrition_input: inputNumbers,
          ingredients: ingredients.split(',').map(str => str.trim()),
          params: {
            n_neighbors: 5,
            return_distance: false
          }
        })
      });

      if (!response.ok) throw new Error('Server error');
      
      const data = await response.json();
      setResults(data.output || []);
    } catch (err) {
      setError("⚠️ Failed to fetch recommendations. Check your FastAPI server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🥗 Diet Recommendation System</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.grid}>
          {nutritionInput.map((val, index) => (
            <input
              key={index}
              type="number"
              step="any"
              placeholder={`Nutrient ${index + 1}`}
              value={val}
              onChange={(e) => handleNutritionChange(index, e.target.value)}
              required
              style={styles.input}
            />
          ))}
        </div>

        <input
          type="text"
          placeholder="🍅 Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {loading ? "⏳ Loading..." : "🔍 Get Recommendations"}
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      {results.length > 0 && (
        <div style={styles.results}>
          <h3>🍽️ Recommended Recipes</h3>
          {results.map((recipe, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.recipeTitle}>{recipe.Name}</h4>
              <p><strong>Prep:</strong> {recipe.PrepTime}, <strong>Cook:</strong> {recipe.CookTime}</p>
              <p><strong>Total Time:</strong> {recipe.TotalTime}</p>
              <p><strong>Calories:</strong> {recipe.Calories}</p>
              <p><strong>Ingredients:</strong> {recipe.RecipeIngredientParts.join(', ')}</p>
              <details>
                <summary><strong>Instructions</strong></summary>
                <ol>
                  {recipe.RecipeInstructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#f4f7f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    color: '#333'
  },
  form: {
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  input: {
    padding: '0.6rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '0.9rem'
  },
  button: {
    padding: '0.7rem 1.6rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s'
  },
  error: {
    color: 'red',
    marginTop: '1rem',
    textAlign: 'center'
  },
  results: {
    marginTop: '2rem'
  },
  card: {
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  recipeTitle: {
    marginBottom: '0.5rem',
    color: '#007bff'
  }
};

export default RecommendationForm;
