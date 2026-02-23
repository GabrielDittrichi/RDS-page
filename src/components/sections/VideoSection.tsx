import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElegantButton from '../ui/ElegantButton';
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';

// Import the video directly
import videoSrc from './video.mov';

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [videoError, setVideoError] = useState<string>('');

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Add event listeners
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
        setHasError(false);
        console.log('Video loaded successfully');
      });

      video.addEventListener('error', (e) => {
        setHasError(true);
        setIsLoading(false);
        handleVideoError(e);
      });

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('error', () => {});
      };
    }
  }, []);

  const handleVideoError = (e: Event) => {
    const video = e.target as HTMLVideoElement;
    const error = video.error;
    
    let errorMessage = 'Erro desconhecido ao carregar o vídeo.';
    
    if (error) {
      switch (error.code) {
        case 1:
          errorMessage = 'O carregamento do vídeo foi abortado.';
          break;
        case 2:
          errorMessage = 'Erro de rede ao carregar o vídeo.';
          break;
        case 3:
          errorMessage = 'Erro ao decodificar o vídeo.';
          break;
        case 4:
          errorMessage = 'Formato de vídeo não suportado.';
          break;
      }
    }
    
    setVideoError(errorMessage);
    console.error('Video error details:', {
      errorCode: error?.code,
      errorMessage,
      videoPath: videoSrc,
      networkState: video.networkState,
      readyState: video.readyState
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.offsetWidth;
      const newTime = (clickPosition / progressBarWidth) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="section-padding bg-cinza relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gray-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className='text-white'>Conheça Nossa </span> 
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Abordagem
            </span>
          </h2>
          <p className="section-subtitle text-white">
            Assista ao vídeo para entender como trabalhamos e como podemos ajudar seu negócio a crescer no ambiente digital.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="relative w-full h-full gradient-dark rounded-xl overflow-hidden">
<video
  ref={videoRef}
  className="absolute inset-0 w-full h-full object-cover cursor-pointer z-10"
  onTimeUpdate={handleTimeUpdate}
  onClick={() => togglePlay()}
  playsInline
  preload="auto"
  controlsList="nodownload"
  src={videoSrc}
/>

{!isPlaying && (
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <button
      onClick={togglePlay}
      className="p-8 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
    >
      <FaPlay size={48} className="text-white ml-2" />
    </button>
  </div>
)}

{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
)}

{hasError && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
    <div className="text-white text-center p-4">
      <p className="mb-2">{videoError}</p>
      <p className="text-sm opacity-75">
        Por favor, verifique se o arquivo de vídeo existe em /sections/video.mov
      </p>
    </div>
  </div>
)}

<div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 pointer-events-none">
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-auto">
    <div 
      className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
      onClick={handleProgressClick}
    >
      <div 
        className="h-full bg-white rounded-full transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
        </button>
        
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
        </button>
      </div>

      <button
        onClick={toggleFullscreen}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
      >
        <FaExpand size={16} />
      </button>
    </div>
  </div>
  </div>
</div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-white">
              Descubra como nossa abordagem estratégica e orientada por dados tem ajudado empresas 
              de todos os tamanhos a alcançar seus objetivos de marketing digital.
            </p>
            <div className="mt-6">
              <ElegantButton 
                variant="primary"
                size="md"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agende uma Demonstração
              </ElegantButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;