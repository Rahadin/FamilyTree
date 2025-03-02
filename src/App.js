import React, { useState } from 'react';
import FamilyTree from './FamilyTree';
import initialFamilyData from './data/initialFamilyData';
import './App.css';

function App() {
  const [familyData, setFamilyData] = useState(initialFamilyData);
  const [newMember, setNewMember] = useState({
    name: '',
    parent: '',
    photo: '',
    isSpouse: false, // NEW: To determine if adding a spouse
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    const updatedFamilyData = { ...familyData };
    const targetMember = findMember(updatedFamilyData, newMember.parent);

    if (targetMember) {
      if (newMember.isSpouse) {
        // Add as spouse
        if (targetMember.spouse) {
          alert(`${targetMember.name} already has a spouse!`);
        } else {
          targetMember.spouse = { name: newMember.name, photo: newMember.photo };
          setFamilyData(updatedFamilyData);
          setNewMember({ name: '', parent: '', photo: '', isSpouse: false });
        }
      } else {
        // Add as child
        if (!targetMember.children) {
          targetMember.children = [];
        }
        targetMember.children.push({ name: newMember.name, photo: newMember.photo });
        setFamilyData(updatedFamilyData);
        setNewMember({ name: '', parent: '', photo: '', isSpouse: false });
      }
    } else {
      alert('Parent/Member not found!');
    }
  };

  const findMember = (member, targetName) => {
    if (member.name === targetName) {
      return member;
    }
    if (member.children) {
      for (let child of member.children) {
        const found = findMember(child, targetName);
        if (found) return found;
      }
    }
    return null;
  };

  if (!familyData) {
    return <h2>Loading Family Tree...</h2>; // Show loading text while data loads
  }

  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <FamilyTree member={familyData} />
      </div>
      
      {/* FORM TO ADD MEMBERS & SPOUSES */}
      <form onSubmit={handleAddMember}>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Parent/Spouse Name"
          value={newMember.parent}
          onChange={(e) => setNewMember({ ...newMember, parent: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newMember.photo}
          onChange={(e) => setNewMember({ ...newMember, photo: e.target.value })}
        />
        
        <label>
          <input
            type="checkbox"
            checked={newMember.isSpouse}
            onChange={(e) => setNewMember({ ...newMember, isSpouse: e.target.checked })}
          />
          Add as Spouse
        </label>

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default App;
