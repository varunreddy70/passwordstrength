import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      numberCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      specialCharacterCriteria,
    ].filter(Boolean).length;

    switch (criteriaMet) {
      case 0:
      case 1:
        setStrength('Very Weak');
        break;
      case 2:
        setStrength('Weak');
        break;
      case 3:
        setStrength('Medium');
        break;
      case 4:
        setStrength('Strong');
        break;
      case 5:
        setStrength('Very Strong');
        break;
      default:
        setStrength('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword Strength: ${strength}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#e2e8f0' }}>
      <div style={{ width: '100%', maxWidth: '400px', background: '#f3f4f6', padding: '20px', borderRadius: '8px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
          <div style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>
            <strong>Password Strength:</strong> {strength}
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#61dafb', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '16px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;

