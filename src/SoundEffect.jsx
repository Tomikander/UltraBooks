import React, { useRef, useState } from 'react';
import soundFile from './sound.mp3'; // Убедитесь, что путь правильный

const SoundEffect = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.volume = 0.3; // Установите громкость (0.0 до 1.0)
    audioRef.current.loop = true; // Включите зацикливание
    audioRef.current.play().catch((error) => {
      console.error("Ошибка воспроизведения:", error);
    });
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause(); // Остановите воспроизведение
    audioRef.current.currentTime = 0; // Верните к началу
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

