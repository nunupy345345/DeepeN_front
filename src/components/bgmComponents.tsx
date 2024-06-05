import React, { useState, useEffect, useRef } from 'react';
import playIcon from '/images/play.png';
import stopIcon from '/images/stop.png';
import audioFile from '/bgm.mp3';
import './bgm.css';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContext = useRef<AudioContext | null>(null);
  const audioSource = useRef<AudioBufferSourceNode | null>(null);
  const audioBuffer = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioContext.current = ctx;

    return () => {
      ctx.close();
    };
  }, []);

  const loadSound = async () => {
    if (audioContext.current) {
      const response = await fetch(audioFile);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = await audioContext.current.decodeAudioData(arrayBuffer);
      audioBuffer.current = buffer;
    }
  };

  useEffect(() => {
    loadSound();
  }, []);

  const handlePlayPause = () => {
    if (audioContext.current && audioBuffer.current) {
      if (isPlaying) {
        audioSource.current?.stop();
        audioSource.current = null;
      } else {
        const source = audioContext.current.createBufferSource();
        source.buffer = audioBuffer.current;
        source.connect(audioContext.current.destination);
        source.start();
        audioSource.current = source;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
      <img src={isPlaying ? stopIcon : playIcon} alt={isPlaying ? 'Stop' : 'Play'} onClick={handlePlayPause}/>
  );
};

export default AudioPlayer;

