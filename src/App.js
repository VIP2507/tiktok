import React from 'react';
import './App.css';
import Video from './Component/Video/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video url ="video3.mp4"
      name="Vaishu" description="" song="unknown"
      likes={3000} messages={20000} Share={3000}
      />
      <Video url ="video4.mp4"
      name="Vaishu" description="favorite song" song="like every one"
      likes={5000} messages={50000} Share={30000}
      />
      <Video url ="video5.mp4"
      name="Vaishu" description="favorite song" song="Bijli ke taar"
      likes={5000} messages={50000} Share={30000}
      />
      <Video url ="video6.mp4"
      name="Vaishu" description="favorite song" song="Ramva aavo"
      likes={5000} messages={50000} Share={30000}
      />
      <Video url ="video7.mp4"
      name="Vaishu" description="favorite song" song="inni soni Q"
      likes={5000} messages={50000} Share={30000}
      />
      <Video url ="video8.mp4"
      name="preksha" description="favorite song" song="dil da galla"
      likes={5000} messages={50000} Share={30000}
      />
      <Video url ="video9.mp4"
      name="preksha" description="favorite song" song="main teri rani"
      likes={5000} messages={50000} Share={30000}
      />
      </div>
    </div>
  );
}

export default App;
