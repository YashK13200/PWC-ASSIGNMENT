// // frontend/src/components/AdminDashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const res = await axios.get('http://localhost:5000/api/users');
//             setUsers(res.data);
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div className="admin-dashboard">
//             <h2>Admin Dashboard</h2>
//             {users.map(user => (
//                 <div key={user._id} className="user-card">
//                     <h3>{user.name}</h3>
//                     <p>{user.socialMediaHandle}</p>
//                     {user.images.map(image => (
//                         <img key={image} src={`http://localhost:5000/${image}`} alt="uploaded" />
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AdminDashboard;

// new code here

// frontend/src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = ({ submissionCount }) => {  // Accept 'submissionCount' prop
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/users');
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, [submissionCount]);  // Fetch users whenever submissionCount changes

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            {users.map(user => (
                <div key={user._id} className="user-card">
                    <h3>{user.name}</h3>
                    <p>{user.socialMediaHandle}</p>
                    {user.images.map(image => (
                        <img key={image} src={`http://localhost:5000/${image}`} alt="uploaded" />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
