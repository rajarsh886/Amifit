import { useState } from "react";
import axios from "axios";

export default function ExerciseSelector() {
  const [exercise, setExercise] = useState("Push ups");

  const startExercise = async () => {
    try {
      const res = await axios.post("http://localhost:5000/start-exercise", { exercise });
      alert(res.data);
    } catch (err) {
      alert("Failed to start exercise");
    }
  };

  return (
    <div>
      <h2>Start Exercise</h2>
      <select onChange={(e) => setExercise(e.target.value)} value={exercise}>
        <option>Push ups</option>
        <option>Bicep Curles</option>
        <option>Lunges</option>
        <option>Situps</option>
        <option>Squart</option>
      </select>
      <button onClick={startExercise}>Start</button>
    </div>
  );
}
