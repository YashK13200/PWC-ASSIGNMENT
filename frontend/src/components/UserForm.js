// // frontend/src/components/UserForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = () => {
//     const [name, setName] = useState('');
//     const [socialMediaHandle, setSocialMediaHandle] = useState('');
//     const [images, setImages] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('socialMediaHandle', socialMediaHandle);
//         images.forEach(image => formData.append('images', image));

//         try {
//             await axios.post('http://localhost:5000/api/users', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' }
//             });
//             alert('Submission successful!');
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleFileChange = (e) => {
//         setImages(Array.from(e.target.files));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Social Media Handle:</label>
//                 <input
//                     type="text"
//                     value={socialMediaHandle}
//                     onChange={(e) => setSocialMediaHandle(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Upload Images:</label>
//                 <input
//                     type="file"
//                     multiple
//                     onChange={handleFileChange}
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default UserForm;


// new code

// frontend/src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onSubmission }) => {  // Accept the new 'onSubmission' prop
    const [name, setName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialMediaHandle', socialMediaHandle);
        images.forEach(image => formData.append('images', image));

        try {
            await axios.post('http://localhost:5000/api/users', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Submission successful!');
            onSubmission(); // Call the onSubmission function to trigger the dashboard update
        } catch (err) {
            console.error(err);
        }
    };

    const handleFileChange = (e) => {
        setImages(Array.from(e.target.files));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Social Media Handle:</label>
                <input
                    type="text"
                    value={socialMediaHandle}
                    onChange={(e) => setSocialMediaHandle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Upload Images:</label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
