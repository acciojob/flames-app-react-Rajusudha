import React, { useState } from 'react';


const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult('Please Enter valid input');
      return;
    }

    let str1 = name1.split('');
    let str2 = name2.split('');

    str1.forEach((char) => {
      if (str2.includes(char)) {
        str2.splice(str2.indexOf(char), 1);
      } else {
        str1 = str1.filter((c) => c !== char);
      }
    });

    const remainingLength = str1.length + str2.length;
    const relation = remainingLength % 6;

    const relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    setResult(relations[relation]);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div className="flames-game">
      <h1>FLAMES Game</h1>
      <input
        type="text"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button data-testid="calculate_relationship" onClick={calculateRelationship}>
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={clearInputs}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default FlamesGame;
