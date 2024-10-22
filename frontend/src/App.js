// // frontend/src/App.js
// import React from 'react';
// import UserForm from './components/UserForm';
// import AdminDashboard from './components/AdminDashboard';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <h1>Social Media Submission</h1>
//       <UserForm />
//       <AdminDashboard />
//     </div>
//   );
// }

// export default App;


// new code here

// frontend/src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [submissionCount, setSubmissionCount] = useState(0);

  // Function to trigger re-fetching of user data
  const handleNewSubmission = () => {
    setSubmissionCount(submissionCount + 1); // Update the state to trigger a re-fetch in AdminDashboard
  };

  return (
    <div className="container">
      <h1>Social Media Submission</h1>
      <UserForm onSubmission={handleNewSubmission} />
      <AdminDashboard submissionCount={submissionCount} />  {/* Pass submissionCount to AdminDashboard */}
    </div>
  );
}

export default App;
