// This is a React conversion skeleton of the given Streamlit-based diet recommendation system.
// The logic and states are preserved but must be filled in with actual components, APIs, and UI logic.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'echarts-for-react';

const nutritionsValues = ['Calories','FatContent','SaturatedFatContent','CholesterolContent','SodiumContent','CarbohydrateContent','FiberContent','SugarContent','ProteinContent'];

function calculateBMI(weight, height) {
  return +(weight / ((height / 100) ** 2)).toFixed(2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return { category: 'Underweight', color: 'Red' };
  if (bmi < 25) return { category: 'Normal', color: 'Green' };
  if (bmi < 30) return { category: 'Overweight', color: 'Yellow' };
  return { category: 'Obesity', color: 'Red' };
}

function calculateBMR({ gender, weight, height, age }) {
  return gender === 'Male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateCalories(bmr, activity) {
  const levels = {
    'Little/no exercise': 1.2,
    'Light exercise': 1.375,
    'Moderate exercise (3-5 days/wk)': 1.55,
    'Very active (6-7 days/wk)': 1.725,
    'Extra active (very active & physical job)': 1.9,
  };
  return bmr * (levels[activity] || 1.2);
}

function DietRecommendationApp() {
  const [person, setPerson] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const handleGenerate = async () => {
    if (!person) return;
    const bmr = calculateBMR(person);
    const maintenanceCalories = calculateCalories(bmr, person.activity);
    const totalCalories = person.weight_loss * maintenanceCalories;

    const mealRecommendations = await Promise.all(
      Object.entries(person.meals_calories_perc).map(async ([meal, perc]) => {
        const mealCalories = perc * totalCalories;
        // Simulating nutritional values. Replace with backend logic or API call.
        const recommendedNutrition = [mealCalories, 10, 2, 10, 300, 60, 5, 5, 80];
        const response = await axios.post('/api/generate', { recommendedNutrition });
        return response.data.output.map(recipe => ({
          ...recipe,
          image_link: `/api/image?name=${encodeURIComponent(recipe.Name)}`,
        }));
      })
    );
    setRecommendations(mealRecommendations);
  };

  const handleMealSelection = (mealIndex, recipeName) => {
    const updatedSelections = [...selectedMeals];
    updatedSelections[mealIndex] = recipeName;
    setSelectedMeals(updatedSelections);
  };

  const calculateTotalNutrition = () => {
    if (!recommendations) return {};
    const total = nutritionsValues.reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
    selectedMeals.forEach((name, idx) => {
      const recipe = recommendations[idx]?.find(r => r.Name === name);
      if (recipe) {
        nutritionsValues.forEach(key => {
          total[key] += recipe[key];
        });
      }
    });
    return total;
  };

  const bmi = person ? calculateBMI(person.weight, person.height) : null;
  const bmiCategory = bmi ? getBMICategory(bmi) : null;

  return (
    <div className="container">
      <h1>Automatic Diet Recommendation 💪</h1>

      {/* Form inputs to setPerson() should be here */}

      {bmi && (
        <div>
          <h2>BMI: {bmi} kg/m²</h2>
          <h3 style={{ color: bmiCategory.color }}>{bmiCategory.category}</h3>
        </div>
      )}

      <button onClick={handleGenerate}>Generate Recommendations</button>

      {recommendations && (
        <div>
          {recommendations.map((meal, i) => (
            <div key={i}>
              <h3>Meal {i + 1}</h3>
              <select onChange={e => handleMealSelection(i, e.target.value)}>
                {meal.map((recipe, idx) => (
                  <option key={idx} value={recipe.Name}>{recipe.Name}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {selectedMeals.length > 0 && (
        <div>
          <h3>Total Nutritional Summary</h3>
          <ul>
            {Object.entries(calculateTotalNutrition()).map(([key, val]) => (
              <li key={key}>{key}: {val.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Add visualizations (like pie/bar charts) with echarts-for-react */}
    </div>
  );
}

export default DietRecommendationApp;
