# InterviewIQ — AI Powered Interview Preparation Platform 🚀

InterviewIQ is a full-stack AI-powered interview simulation platform that helps candidates practice realistic interviews through personalized AI-generated questions, resume-based analysis, intelligent answer evaluation, and performance analytics.

The platform analyzes a candidate's resume, understands their skills/projects, generates customized interview questions, evaluates answers using AI, and provides detailed performance insights.

---

## 🎥 Project Demo

<div align="center">

<a href="https://youtu.be/20nhq2W6zbk" target="_blank">
    <img src="https://img.youtube.com/vi/20nhq2W6zbk/maxresdefault.jpg" alt="InterviewIQ Demo" width="900"/>
</a>

<br>

**▶️ Click the thumbnail above to watch the complete demo on YouTube**

</div>

---

## 🌟 Features

### 🔐 Authentication
- Google authentication integration
- Secure JWT-based authorization
- Cookie-based session handling
- Protected backend routes

---

### 📄 AI Resume Analysis

Users can upload their resume and the system automatically:

- Extracts resume content from PDF files
- Identifies technical skills
- Detects projects
- Understands candidate background
- Uses extracted information for personalized interviews

Flow:

```
Resume Upload
      |
      ↓
PDF Processing
      |
      ↓
Text Extraction
      |
      ↓
AI Analysis
      |
      ↓
Structured Candidate Profile
```

---

### 🤖 AI Interview Generation

InterviewIQ dynamically generates interview questions based on:

- Target role
- Experience level
- Interview type
- Resume projects
- Technical skills

Difficulty progression:

```
Question 1 → Easy

Question 2 → Easy

Question 3 → Medium

Question 4 → Medium

Question 5 → Hard
```

---

### 🎯 AI Answer Evaluation

Each candidate answer is evaluated on multiple dimensions:

- Confidence
- Communication
- Technical correctness

The AI provides:

- Individual scores
- Final performance score
- Personalized feedback
- Improvement suggestions

---

### 📊 Performance Analytics Dashboard

After completing an interview:

- Overall score analysis
- Skill-wise breakdown
- Question-wise feedback
- Visual performance reports
- Downloadable PDF reports

---

### 💳 Credit Based Interview System

Integrated payment system:

- Credit-based interview attempts
- Secure order creation
- Payment verification
- Transaction tracking

---

# 🏗️ System Architecture

```
                         Client
                    React + Vite
                          |
                          |
                     Axios APIs
                          |
                          ↓
                  Express Backend
                          |
        ----------------------------------
        |                |               |
        ↓                ↓               ↓
    MongoDB          Gemini AI       Razorpay
   Database        AI Engine        Payments


Authentication:

Google OAuth
      |
      ↓
Firebase Auth
      |
      ↓
JWT Authorization
      |
      ↓
Protected APIs
```

---

# ⚙️ Tech Stack

## Frontend

| Technology | Purpose |
|-|-|
| React | Component based UI development |
| Vite | Fast development/build tooling |
| Redux Toolkit | Global state management |
| React Router | Client-side routing |
| Tailwind CSS | Responsive UI styling |
| Axios | API communication |
| Recharts | Analytics visualization |
| jsPDF | Report generation |
| Motion | UI animations |

---

## Backend

| Technology | Purpose |
|-|-|
| Node.js | Runtime environment |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | ODM and schema modeling |
| JWT | Authentication tokens |
| Firebase Auth | Google authentication |
| Multer | File upload handling |
| PDF.js | Resume text extraction |
| Gemini API | AI intelligence |
| Razorpay | Payments |

---

# 🧠 AI Processing Pipeline

```
User Input

(Role, Experience, Resume)

          |
          ↓

Prompt Engineering Layer

          |
          ↓

Gemini AI Model

          |
          ↓

Response Validation

          |
          ↓

Structured JSON Output

          |
          ↓

Application Processing
```

---

# 🗄️ Database Design

## User Collection

Stores user information and credit balance.

```js
User {
    name,
    email,
    credits
}
```

Relationship:

```
User
 |
 |
Many Interviews
```

---

## Interview Collection

Stores complete interview sessions.

```js
Interview {

 role,

 experience,

 mode,

 questions:[
   {
     question,
     answer,
     score,
     feedback,
     confidence,
     communication,
     correctness
   }
 ],

 finalScore
}
```

Questions are embedded because they belong only to a specific interview session and are always accessed together.

---

## Payment Collection

Stores payment history.

```js
Payment {

 userId,

 amount,

 credits,

 razorpayOrderId,

 status

}
```

---

# 🔐 Security Implementation

### Environment Protection

Sensitive credentials are stored securely:

```
.env

DATABASE_URL

JWT_SECRET

GEMINI_API_KEY

RAZORPAY_SECRET
```

No secrets are exposed to frontend builds.

---

### Authentication Flow

```
User Login

     ↓

Firebase Verification

     ↓

Backend User Validation

     ↓

JWT Generation

     ↓

HTTP Cookie Storage

     ↓

Protected API Access
```

---

### Payment Security

Payments are verified server-side using cryptographic signature verification.

```
Payment Success

       |

Razorpay Signature

       |

HMAC Verification

       |

Credit Update
```

---

# 📁 Project Structure

```
InterviewIQ


client/

 ├── components/

 ├── pages/

 ├── redux/

 ├── routes/

 └── utils/


server/

 ├── controllers/

 ├── models/

 ├── routes/

 ├── middlewares/

 ├── services/

 └── utils/
```

---

# 🔄 API Overview

## Authentication

```
POST /api/auth/login

GET /api/auth/current-user

POST /api/auth/logout
```

---

## Interview

Analyze Resume

```
POST /api/interview/resume
```

Generate Interview

```
POST /api/interview/generate-questions
```

Submit Answer

```
POST /api/interview/submit-answer
```

Finish Interview

```
POST /api/interview/finish
```

Reports

```
GET /api/interview/report/:id
```

---

# 🚀 Deployment Architecture

Frontend:

```
React Build

     ↓

Vercel CDN
```

Backend:

```
Express Server

     ↓

Render Cloud
```

Database:

```
MongoDB Atlas Cluster
```

---

# 📈 Scalability Improvements

Future production improvements:

### Queue Based AI Processing

```
Request

   ↓

Message Queue

   ↓

AI Worker

   ↓

Gemini
```

Benefits:

- Better reliability
- Retry handling
- Reduced API blocking

---

### Caching Layer

Redis can be introduced for:

- User sessions
- Reports
- Frequently accessed analytics

---

### File Storage

Current:

```
Temporary server storage
```

Production scale:

```
Cloud Object Storage (S3)
```

---

# Engineering Concepts Applied

- REST API Design
- MVC Architecture
- Middleware Pattern
- Authentication & Authorization
- Prompt Engineering
- Database Relationship Modeling
- Embedded Document Design
- Secure Payment Verification
- Environment Based Configuration
- Separation of Concerns

---

# Future Enhancements

- Real-time voice interviews
- Video interview simulation
- Company-specific interview preparation
- RAG-based resume intelligence
- Advanced analytics dashboard
- Multi-language interview support

---

# Author

Built with ❤️ by **Vikas Chandwara**

```
AI-powered systems • Full Stack Development • Scalable Web Applications
```
