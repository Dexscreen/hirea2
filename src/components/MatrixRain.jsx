import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // AI/Tech characters - more robotic/digital
    const chars = '01010110100101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]()+-*/=|\\~`!@#$%^&*';
    const charArray = chars.split('');
    
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }
    
    // AI-themed colors - more electric/digital
    const colors = ['#00d4ff', '#0066ff', '#00ff88', '#8a2be2', '#ff0080'];
    
    const draw = () => {
      // Darker background for more contrast
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${fontSize}px Orbitron, JetBrains Mono, monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Random color with higher probability for cyan/blue
        const colorIndex = Math.random() < 0.6 ? 0 : Math.random() < 0.8 ? 1 : Math.floor(Math.random() * colors.length);
        ctx.fillStyle = colors[colorIndex];
        
        // Enhanced glow effect for AI look
        ctx.shadowColor = colors[colorIndex];
        ctx.shadowBlur = 15;
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i]);
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Move drop down
        drops[i] += fontSize;
        
        // Reset drop to top with some randomness
        if (drops[i] > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
      }
    };
    
    // Faster animation for more dynamic feel
    const interval = setInterval(draw, 40);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.4,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixRain;