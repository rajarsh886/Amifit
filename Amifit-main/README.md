#  Amifit – Your AI-Powered Fitness & Posture Coach

![Amifit Banner](./Amifit%20Banner.png)

> *“Train smarter, not harder — with AI watching your form.”*

**Amifit** is a smart fitness assistant that tracks your posture, counts reps, and gives live feedback — all in real time, straight from your webcam. No wearables, no fuss. Just you, your screen, and smarter workouts.

---

##  Try It Out

 **Live Demo:** [amifitntcc.netlify.app](https://amifitntcc.netlify.app)
No installation needed — just open, allow your webcam, and get moving!

---

##  What Is Amifit?

Amifit was built as part of our B.Tech final year project to explore how artificial intelligence can improve fitness training at home. It’s a blend of computer vision, machine learning, and a user-friendly interface that delivers a near real-time workout assistant.

**In short, it:**

* Detects your posture via webcam
* Analyzes joint angles
* Counts reps (like pushups, squats, etc.)
* Gives instant posture correction feedback
* Tracks your progress with a fitness dashboard

---

## ⚒ Tech Stack

| Layer           | Tools / Frameworks                                 |
| --------------- | -------------------------------------------------- |
| **Frontend**    | React (Vite), Tailwind CSS                         |
| **Backend**     | Node.js, Express                                   |
| **AI Models**   | Python + BlazePose, CNN, k-NN, DTW                 |
| **Integration** | `child_process` to run Python ML scripts from Node |

---

##  Features At a Glance

✅ Real-time pose detection
✅ Rep counting (e.g., squats, pushups)
✅ Joint angle analysis
✅ Corrective feedback (e.g., "Keep your back straight")
✅ Web-based – works with any webcam
✅ No wearables or app download needed

---

##  AI Magic – Under the Hood

Amifit uses **Google's BlazePose** to extract 33 body keypoints (x, y, z) from your live webcam feed. Then, using a combo of:

*  **Angle tracking** for movement recognition
*  **k-NN** & **DTW** for motion classification
*  Real-time overlays for form feedback

…it guides you through your workout just like a trainer would.

---

## 🏋️ Use Cases Beyond Workouts

| Domain       | How Amifit Helps                     |
| ------------ | ------------------------------------ |
| 🧘 Yoga      | Assists in posture & alignment       |
| 💪 Fitness   | Perfect form & consistency at home   |
| 🏥 Rehab     | Guides patients through exercises    |
| 🕹 Smart Fit | Can power VR fitness & smart mirrors |
| 👴 Seniors   | Balance tracking & fall detection    |

---

## 📁 Backend Overview

The backend is a Node.js server that interacts with Python scripts for AI predictions and posture analysis.

```
/backend
├── counter/                # Session & rep tracking
├── index.js                # Express server entry
├── package.json            # Dependencies
└── node_modules/           # Node packages
```

It communicates with the BlazePose & classifier scripts using `child_process` to give real-time responses.

---

## 🚀 Getting Started Locally

Want to run it on your own machine? Here’s how:

### 📦 Clone the Repository

```bash
git clone https://github.com/BhanuPrakashPandey0843/Amifit.git
cd Amifit
```

---

### 🖥️ Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

> Frontend will run on: `http://localhost:5173`

---

### 🔌 Start the Backend

```bash
cd backend
npm install
node index.js
```

> Backend will run on: `http://localhost:5000`

---

## 📎 Supporting Files

* 📄 [`Amifit Documentation.pdf`](./Amifit%20Documentation.pdf) – Project report
* 📊 [`Plag Report Amifit.pdf`](./Plag%20report%20Amifit.pdf) – Turnitin originality check
* 🎥 [`Amifit.pptx`](./Amifit.pptx) – Presentation slides

---

## 👨‍💻 Made With ❤️ by

**Bhanu Prakash Pandey**
🎓 B.Tech CSE (2021–2025)
🔗 [GitHub Profile](https://github.com/BhanuPrakashPandey0843)

---

## 📬 Let's Connect

Want to collaborate, suggest improvements, or use this for your team or institution?
Open a [GitHub issue](https://github.com/BhanuPrakashPandey0843/Amifit/issues) or drop a message!

---

## 📝 License & Usage

This project is part of an academic submission. Use it for learning, research, or demonstrations. Not intended for commercial use (yet 😉).

---

