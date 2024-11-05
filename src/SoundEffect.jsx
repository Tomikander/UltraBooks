import React, { useRef, useState } from 'react';
import soundFile from './sound.mp3'; // Make sure the path is correct

const SoundEffect = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.volume = 0.3; // Set volume (0.0 to 1.0)
    audioRef.current.loop = true; // Turn on looping
    audioRef.current.play().catch((error) => {
      console.error("Ошибка воспроизведения:", error);
    });
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause(); // Stop playback
    audioRef.current.currentTime = 0; // Return to the beginning
    setIsPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={soundFile} type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <div className='styleButton'>
        {isPlaying ? ( 
          <button onClick={handleStop}>M</button>
        ) : (
          <button onClick={handlePlay}>M</button>  
        )}
      </div>
    </div>
  );
};

export default SoundEffect;

