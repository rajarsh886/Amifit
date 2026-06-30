import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      alert('Please enter valid height and weight');
      return;
    }

    const heightInMeters = h / 100;
    const result = w / (heightInMeters * heightInMeters);
    const bmiValue = result.toFixed(2);
    setBmi(bmiValue);

    if (result < 18.5) setStatus('Underweight');
    else if (result < 24.9) setStatus('Normal');
    else if (result < 29.9) setStatus('Overweight');
    else setStatus('Obese');
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Underweight': return '#00bcd4';
      case 'Normal': return '#4caf50';
      case 'Overweight': return '#ff9800';
      case 'Obese': return '#f44336';
      default: return '#333';
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>BMI Calculator 💪</h1>

        <input
          style={styles.input}
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, backgroundColor: '#4caf50' }} onClick={calculateBMI}>Calculate</button>
          <button style={{ ...styles.button, backgroundColor: '#e0e0e0', color: '#333' }} onClick={reset}>Reset</button>
        </div>

        {bmi && (
          <div style={{ ...styles.result, borderLeft: `6px solid ${getStatusColor(status)}` }}>
            <h2>Your BMI is <span style={{ color: getStatusColor(status) }}>{bmi}</span></h2>
            <p>Status: <strong style={{ color: getStatusColor(status) }}>{status}</strong></p>
          </div>
        )}

        <div style={styles.info}>
          <h3>BMI Categories</h3>
          <ul>
            <li><strong>Underweight:</strong> Less than 18.5</li>
            <li><strong>Normal:</strong> 18.5 – 24.9</li>
            <li><strong>Overweight:</strong> 25 – 29.9</li>
            <li><strong>Obese:</strong> 30 or more</li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 500px) {
          .bmi-card {
            padding: 25px 20px !important;
          }
          .bmi-heading {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f8',
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    borderRadius: '16px',
    padding: '40px 30px',
    width: '100%',
    maxWidth: '400px',
    color: '#333',
    animation: 'fadeIn 0.6s ease-in-out',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '25px',
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: '#f9f9f9',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    gap: '10px',
  },
  button: {
    flex: 1,
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  result: {
    marginTop: '30px',
    padding: '20px',
    borderRadius: '10px',
    background: '#f8f8f8',
    borderLeft: '6px solid',
  },
  info: {
    marginTop: '30px',
    fontSize: '14px',
    background: '#f4f4f4',
    padding: '16px',
    borderRadius: '10px',
    color: '#555',
  }
};

export default BMICalculator;
