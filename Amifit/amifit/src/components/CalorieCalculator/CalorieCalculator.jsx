import React, { useState } from "react";

const MET_VALUES = {
  Running: 11.5,
  Cycling: 8,
  Swimming: 7,
  Walking: 4.5,
  "Home Activities": 2.5,
  "Jumping Rope": 12.3,
  Yoga: 3,
};

const CalorieCalculator = () => {
  const [activity, setActivity] = useState("Running");
  const [duration, setDuration] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [calories, setCalories] = useState(null);

  const convertToKg = (val) => (weightUnit === "lbs" ? val * 0.453592 : val);

  const calculateCalories = () => {
    if (!weight || !duration || !age) {
      alert("Please fill all fields!");
      return;
    }

    const weightInKg = convertToKg(weight);
    const met = MET_VALUES[activity];

    // Standard formula
    const burned = ((met * 3.5 * weightInKg) / 200) * duration;

    // Optional adjustment (basic factor for gender/age)
    const adjustment =
      gender === "male" ? 1 : 0.95 - (parseInt(age) > 40 ? 0.05 : 0);

    setCalories(burned * adjustment);
  };

  const resetAll = () => {
    setDuration("");
    setWeight("");
    setAge("");
    setCalories(null);
    setGender("male");
    setActivity("Running");
    setWeightUnit("kg");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🔥 Enhanced Calorie Burn Calculator</h1>

        {/* Gender */}
        <div style={styles.field}>
          <label style={styles.label}>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={styles.select}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Age */}
        <div style={styles.field}>
          <label style={styles.label}>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={styles.input}
          />
        </div>

        {/* Activity */}
        <div style={styles.field}>
          <label style={styles.label}>Activity</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={styles.select}
          >
            {Object.keys(MET_VALUES).map((act) => (
              <option key={act} value={act}>
                {act}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div style={styles.field}>
          <label style={styles.label}>Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={styles.input}
          />
        </div>

        {/* Weight + Units */}
        <div style={styles.field}>
          <label style={styles.label}>Weight</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              style={styles.input}
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              style={styles.select}
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button onClick={calculateCalories} style={styles.button}>
            Calculate
          </button>
          <button onClick={resetAll} style={styles.resetButton}>
            Reset
          </button>
        </div>

        {/* Result */}
        {calories !== null && (
          <div style={styles.resultBox}>
            <h3>Calories Burned</h3>
            <p style={styles.calories}>{Math.ceil(calories)} kcal</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "600",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "500",
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  select: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    flex: 1,
    padding: "12px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    marginRight: "10px",
  },
  resetButton: {
    flex: 1,
    padding: "12px",
    background: "#e0e0e0",
    color: "#333",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "12px",
    background: "#e3f2fd",
    textAlign: "center",
  },
  calories: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1565c0",
    marginTop: "10px",
  },
};

export default CalorieCalculator;
