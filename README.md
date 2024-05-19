# Personalized University Orientation Platform
<p align="center">
  <img src="https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/60fc3392-9aa1-44c4-9c4f-06f9eaa92c4f" alt="drawing" style="width:150px;text-align:center"/>
</p>

## Introduction

The Personalized University Orientation Platform, utilizing the Myers-Briggs Type Indicator (MBTI), is an innovative solution designed to guide preparatory class students towards engineering fields that best match their personality. This service addresses a critical need in the Moroccan educational landscape, where career and academic orientation choices can be complex and lack personalization. The platform aims to fill this gap by providing a method based on the MBTI, a globally recognized psychological model that assesses personal preferences across various dimensions, such as social interaction, information processing, decision-making, and daily organization.

## Table of Contents
1. [Overview](#overview)
2. [Software Architecture](#software-architecture)
3. [Frontend](#frontend)
4. [Backend](#backend)
5. [Getting Started](#getting-started)

## Overview

The Personalized University Orientation Platform starts by evaluating students using an MBTI questionnaire. This process helps identify each student's personality type, which is crucial for understanding their natural inclinations. For instance, a student identified as INTJ (Introversion, Intuition, Thinking, Judging) might be better suited for fields that require deep analysis and strategic planning, such as computer engineering or software engineering.

After analyzing the responses, the platform generates detailed personality profiles and provides personalized recommendations for engineering fields. These recommendations are developed by considering both the students' personality traits and the specific characteristics of each field, ensuring an optimal match between students' preferences and academic requirements.

### Benefits and Impact

- **Personalized Academic Orientation:** By providing recommendations based on personality traits, students can make more informed choices that align with their aptitudes and aspirations, increasing motivation and academic engagement.
- **Reduced Risk of Reorientation or Dropout:** Tailored recommendations help minimize the risk of students switching fields or dropping out, common issues in engineering pathways.
- **Improved Academic Performance:** Implementing this platform at the Moroccan School of Engineering Sciences (EMSI) could significantly enhance academic outcomes. Students in fields matching their personality are likely to perform better, leading to higher success rates and overall teaching quality improvement.
- **Encouragement of Innovation and Entrepreneurship:** By guiding students towards fields that nurture their natural talents, the platform fosters innovation and entrepreneurial spirit, leading to more students initiating innovative projects or pursuing entrepreneurial careers.

## Software Architecture

The software architecture of the Personalized University Orientation Platform is designed to be robust and scalable, ensuring efficient processing of MBTI questionnaires and generation of personalized recommendations.

![archi drawio](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/0d3aab99-f3fb-4f55-b861-8ac7d3d2d5ad)
<p align="center">
  Figure 1: Software Architecture
</p>

### Components

1. **Frontend for Students:**
   - **Personality Test:** Interface for students to complete the MBTI questionnaire.
   - **Recommendations:** Displays personalized engineering field recommendations based on the MBTI results.

2. **Frontend for Teachers:**
   - **Student Performance:** Interface for teachers to assign grades to students based on their performance.
   - **Grade Processing:** The grades are stored and processed to refine recommendations for new students.

3. **Frontend for Admin:**
   - **Management Dashboard:** Interface for admins to manage users (students, teachers, other admins), tests, questions and their options, and engineering fields.
   - **System Configuration:** Allows admins to oversee and configure the overall system.

4. **Backend:**
   - **HTTP Request Processing:** Handles requests from all frontends, processes data, and communicates with the database.
   - **Data Processing:** Processes MBTI results, grades, and generates recommendations.
   - **Database Management:** Manages storage and retrieval of user data, test results, grades, and recommendations.

### Data Flow

1. **Student Interaction:**
   - Students complete the MBTI questionnaire on the student frontend.
   - The backend processes the responses and generates personality profiles and recommendations.
   - Recommendations are displayed on the student frontend.

2. **Teacher Interaction:**
   - Teachers assign grades to students via the teacher frontend.
   - Grades are sent to the backend, where they are stored and processed.
   - Processed grades influence future recommendations for new students.

3. **Admin Interaction:**
   - Admins manage users, tests, questions, and fields via the admin frontend.
   - The backend processes these management tasks and updates the database accordingly.

## Frontend

### Student Frontend

The student frontend is designed to provide an intuitive interface for completing the MBTI questionnaire and viewing personalized recommendations.

- **Features:**
  - MBTI Questionnaire Interface: Guides students through the MBTI questionnaire.
  - Personalized Recommendations: Displays recommended engineering fields based on MBTI results.

### Teacher Frontend

The teacher frontend allows teachers to assign grades to students and influences the recommendation process for future students.

- **Features:**
  - Student Performance Grading: Interface for assigning grades to students.
  - Grade Storage and Processing: Stores grades and processes them to refine future recommendations.

### Admin Frontend

The admin frontend provides a comprehensive dashboard for managing the platform's various components.

- **Features:**
  - User Management: Manage students, teachers, and other admins.
  - Test Management: Create and manage tests, questions, and options.
  - Field Management: Manage engineering fields and their characteristics.
  - System Configuration: Oversee and configure the system.

## Backend

The backend handles all server-side logic, including data processing, storage, and HTTP request handling.

- **Features:**
  - HTTP Request Processing: Handles requests from all frontends.
  - Data Processing: Processes MBTI results, grades, and generates recommendations.
  - Database Management: Manages data storage and retrieval.

## Getting Started

### Using Docker :

1. **Installation:**
   - Clone the repository: `https://github.com/AdilBendaoud/MBTI-personality-project.git`
   - Navigate to the project directory: `cd MBTI-personality-project`

2. **Set up:**
    - Issue commande: `docker-compose up`

3. **Access the Platform:**
   - Open your web browser and navigate to `http://localhost:3000` to access the admin page.
   ```
   # 🚧 use this email and password to access Dashboard
   email : admin@demo.com
   password : 123456 
   ```
   - Navigate to `http://localhost:3001` to access the teacher page.
   - Navigate to `http://localhost:3002` to access the student page.

### Manual Setup :
To get started with the Personalized University Orientation Platform, follow these steps:

1. **Installation:**
   - Clone the repository: `https://github.com/AdilBendaoud/MBTI-personality-project.git`
   - Navigate to the project directory: `cd MBTI-personality-project`

2. **Backend Setup:**
   - Ensure NVM is using Node.js version 14.11.0: nvm use 14.11.0
   - Install backend dependencies: `npm install`
   - Configure the database connection settings in `.variables.env`
   - Start the backend server: `npm start`

4. **Frontend Admin Setup:**
   - Navigate to the frontend directory: `cd frontend`
   - Install frontend dependencies: `npm install`
   - Start the frontend development server: `npm start`

3. **Frontend Teacher Setup:**
   - Navigate to the frontend directory: `cd profFront`
   - Install frontend dependencies: `npm install`
   - Start the frontend development server: `npm start`

3. **Frontend Student Setup:**
   - Navigate to the frontend directory: `cd front-etudinat`
   - Install frontend dependencies: `npm install`
   - Start the frontend development server: `npm start`

4. **Access the Platform:**
   - Open your web browser and navigate to `http://localhost:3000` to access the platform.
   ```
    # 🚧 use this email and password to access Dashboard
    email : admin@demo.com
    password : 123456 
   ```
   - Navigate to `http://localhost:3001` to access the teacher page.
   - Navigate to `http://localhost:3002` to access the student page.

5. **Usage:**
   - Students: Complete the MBTI questionnaire and view recommendations.
   - Teachers: Assign grades to students.
   - Admins: Manage users, tests, questions, and fields.

## Illustrative example
![gestion admin](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/417aaf1a-0490-4605-8176-b5c32e970503)
<p align="center">
  Figure 2: Interface Admin for different managements
</p>

![prof](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/d560fc54-3c19-4170-88e1-a37433373bd2)
<p align="center">
  Figure 3: Interface Teacher to assign grades to students
</p>

![landing](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/a75ea706-6887-46fe-9442-a847c9bf4589)
<p align="center">
  Figure 4: Landing page for students
</p>

![resultat](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/46bf2e6f-42bb-43be-971b-661d6e89ee47)
<p align="center">
  Figure 5: MBTI test results page
</p>

![resultat2](https://github.com/AdilBendaoud/MBTI-personality-project/assets/116393842/c298340c-1104-4b25-a8bb-e32cc7d1dd0a)
<p align="center">
  Figure 6: Field recommendations page for students
</p>

## Collaborators
- [Ahmed Fatrah](https://github.com/AhmedFatrah2001)
- [Amine Azilal](https://github.com/Danbix)
- [Hamza Elbouzidi](https://github.com/Hamza-Elbouzidi)
- [Bilal Motassim](https://github.com/Rolerdxx)
