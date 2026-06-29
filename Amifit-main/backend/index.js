const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🚀 1. Map of exercise script names
const scriptMap = {
  "Push ups": "Pushup.py",
  "Bicep Curles": "Bicepcurl.py",
  "Lunges": "Lunges.py",
  "Situps": "Situps.py",
  "Squart": "Squat.py",
};

// 🧠 2. ML Recommendation Proxy
app.post("/api/recommend", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8080/predict/", req.body);
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error forwarding recommendation request:", error.message);
    res.status(500).json({ error: "Failed to get recommendation" });
  }
});

// 💪 3. Start Exercise Counter
app.post("/start-exercise", (req, res) => {
  const { exercise } = req.body;

  if (!exercise) {
    return res.status(400).send("❌ Missing exercise name");
  }

  const scriptName = scriptMap[exercise];

  if (!scriptName) {
    return res.status(400).send("❌ Invalid exercise name");
  }

  const scriptPath = path.join(__dirname, "counter", scriptName);
  const command = `python "${scriptPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error executing script: ${error.message}`);
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(`Failed to start exercise counter: ${stderr || error.message}`);
    }
    console.log(`✅ Started ${scriptName}`);
    console.log(`stdout: ${stdout}`);
    res.send(`Exercise "${exercise}" counter started`);
  });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`✅ Express server is running on http://localhost:${PORT}`);
});
