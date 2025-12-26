import React, { useEffect, useRef } from 'react';

const FloatingOrb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frameId: number;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    let time = 0;

    // Configuration for multiple DNA Strands to create "Way More" density
    const helices = [
        // Main Foreground Strand
        { xOffset: 0.5, scale: 1.2, speed: 0.8, phase: 0, opacityBase: 0.6, color: '180, 180, 180' },
        
        // Mid-Ground Strands
        { xOffset: 0.2, scale: 0.8, speed: 0.6, phase: 2, opacityBase: 0.3, color: '120, 120, 120' },
        { xOffset: 0.8, scale: 0.8, speed: 0.7, phase: 4, opacityBase: 0.3, color: '120, 120, 120' },
        
        // Background Strands (Denser)
        { xOffset: 0.35, scale: 0.5, speed: 0.4, phase: 1, opacityBase: 0.15, color: '80, 80, 80' },
        { xOffset: 0.65, scale: 0.5, speed: 0.5, phase: 3, opacityBase: 0.15, color: '80, 80, 80' },
        { xOffset: 0.1, scale: 0.4, speed: 0.3, phase: 5, opacityBase: 0.1, color: '60, 60, 60' },
        { xOffset: 0.9, scale: 0.4, speed: 0.35, phase: 6, opacityBase: 0.1, color: '60, 60, 60' },
        
        // Crossing Strands (Angled or varied) - Simulated by offset changes
        { xOffset: 0.45, scale: 0.3, speed: 0.9, phase: 1.5, opacityBase: 0.08, color: '100, 100, 100' },
        { xOffset: 0.55, scale: 0.3, speed: 0.85, phase: 3.5, opacityBase: 0.08, color: '100, 100, 100' },
    ];

    const numParticlesPerStrand = 120; // Increased density per strand

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.003; // Slower, more majestic movement

      helices.forEach(helix => {
          const xCenter = width * helix.xOffset;
          const amplitude = Math.min(width * 0.12, 120) * helix.scale; 
          
          for (let i = 0; i < numParticlesPerStrand; i++) {
              const offset = i * 0.15; // Tighter spacing
              
              // We render two strands (A and B) for each helix
              [1, -1].forEach(side => {
                  // Y Position Logic
                  let y = (offset * 100) - (time * 100 * helix.speed) + (helix.phase * 100);
                  const cycleHeight = numParticlesPerStrand * 0.15 * 100;
                  y = ((y % cycleHeight) + cycleHeight) % cycleHeight;
                  
                  // Screen projection
                  // Map the cycle to the screen height with significant padding for infinite scrolling illusion
                  const screenY = (y / cycleHeight) * (height + 600) - 300;

                  // Helix Math
                  const angle = offset + time * 1.5 * helix.speed + helix.phase;
                  const x = xCenter + Math.cos(angle) * amplitude * side;
                  
                  // Z-depth simulation
                  const depth = Math.sin(angle) * side; // -1 to 1
                  
                  // Style based on depth
                  const radius = (1.5 + (depth + 1) * 1) * helix.scale; 
                  const opacity = (0.05 + (depth + 1) * 0.25) * helix.opacityBase;
                  
                  ctx.beginPath();
                  ctx.arc(x, screenY, radius, 0, Math.PI * 2);
                  ctx.fillStyle = `rgba(${helix.color}, ${opacity})`;
                  ctx.fill();

                  // Rungs (Connections) - Draw more frequently
                  if (side === 1 && i % 4 === 0) {
                      const pAngle = offset + time * 1.5 * helix.speed + helix.phase;
                      const px = xCenter + Math.cos(pAngle) * amplitude * -1; // Opposite side
                      
                      ctx.beginPath();
                      ctx.moveTo(x, screenY);
                      ctx.lineTo(px, screenY);
                      ctx.lineWidth = 0.5 * helix.scale;
                      ctx.strokeStyle = `rgba(${helix.color}, ${opacity * 0.3})`;
                      ctx.stroke();
                  }
                  
                  // Nucleotide particles (faint floating particles around the strand)
                  if (i % 10 === 0) {
                      const randX = x + (Math.random() - 0.5) * 40 * helix.scale;
                      const randY = screenY + (Math.random() - 0.5) * 40 * helix.scale;
                      ctx.beginPath();
                      ctx.arc(randX, randY, radius * 0.5, 0, Math.PI * 2);
                      ctx.fillStyle = `rgba(${helix.color}, ${opacity * 0.5})`;
                      ctx.fill();
                  }
              });
          }
      });

      frameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Subtle Gradient Spotlights for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(40,40,40,0.15)_0%,_rgba(0,0,0,1)_100%)]" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default FloatingOrb;