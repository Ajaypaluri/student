import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/create', {
        name,
        email,
        password
      });

      setMessage(response.data.message);  // Show success message
      setError('');  // Clear any previous error

      // Call fetchUsers to refresh the user list
      fetchUsers();
      
      // Optionally clear the form fields after successful creation
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setMessage('');  // Clear any previous success message
      setError('Error creating user');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Create User</button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default UserForm;
