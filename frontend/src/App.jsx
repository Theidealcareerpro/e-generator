import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to ePortfolio Generator</h1>
        <p className="mb-8">Build your portfolio, CV, and cover letter in minutes. Free. No sign-in.</p>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <a href="#" className="bg-blue-600 text-white py-2 rounded">Create Portfolio</a>
          <a href="#" className="bg-green-600 text-white py-2 rounded">Create CV</a>
          <a href="#" className="bg-purple-600 text-white py-2 rounded">Create Cover Letter</a>
        </div>
      </main>
    </div>
  );
}

export default App;

