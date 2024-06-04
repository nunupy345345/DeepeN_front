// import React, { useState, useEffect, useRef } from 'react';
// import playIcon from './play-icon.svg';
// import stopIcon from './stop-icon.svg';
// import audioFile from 'public/bgm.mp3';

// const AudioPlayer: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const audioContext = useRef<AudioContext | null>(null);
//   const audioSource = useRef<AudioBufferSourceNode | null>(null);

//   useEffect(() => {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();
//     audioContext.current = ctx;

//     return () => {
//       ctx.close();
//     };
//   }, []);

//   const loadSound = async () => {
//     if (audioContext.current) {
//       const response = await fetch(audioFile);
//       const arrayBuffer = await response.arrayBuffer();
//       const audioBuffer = await audioContext.current.decodeAudioData(arrayBuffer);
//       const source = audioContext.current.createBufferSource();
//       source.buffer = audioBuffer;
//       source.connect(audioContext.current.destination);
//       audioSource.current = source;
//     }
//   };

//   useEffect(() => {
//     loadSound();
//   }, []);

//   const handlePlayPause = () => {
//     if (audioSource.current) {
//       if (isPlaying) {
//         audioSource.current.stop();
//       } else {
//         audioSource.current.start();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <button onClick={handlePlayPause}>
//       <img src={isPlaying ? stopIcon : playIcon} alt={isPlaying ? 'Stop' : 'Play'} />
//     </button>
//   );
// };

// export default AudioPlayer;