import React, { useState } from "react";
import "./App.css";

const TestSearchApp = () => {
  // Test savollari va javoblari
  const testData = [
    { question: "React", answer: "React is a JavaScript library for building user interfaces." },
    { question: "JSX", answer: "JSX is a syntax extension for JavaScript used in React." },
    { question: "hook", answer: "Hooks are functions that let you use React state and lifecycle features in function components." },
    { question: "What is useState?", answer: "useState is a Hook that lets you add React state to functional components." },
    { question: "What is useEffect?", answer: "useEffect is a Hook that lets you perform side effects in function components." },
  ];

  // State for search input and result
  const [searchQuery, setSearchQuery] = useState("");
  const [answer, setAnswer] = useState("");

  // Qidiruv funksiyasi
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Savolni qidirish
    const result = testData.find(
      (item) => item.question.toLowerCase() === query
    );

    // Javobni o'rnatish
    if (result) {
      setAnswer(result.answer);
    } else if (query.trim() !== "") {
      setAnswer("Savolni to‘g‘ri kiriting.");
    } else {
      setAnswer(""); // Agar foydalanuvchi hech narsa kiritmasa, bo'sh qoldiramiz
    }
  };

  return (
    <div className="container">
      <h1>Javoblarni qidirish</h1>
      <input
        type="text"
        placeholder="SAVILINGIZNI YOZING..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="answer-box">
        <p className="answer-title">JAVOBI:</p>
        <p className="answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default TestSearchApp;