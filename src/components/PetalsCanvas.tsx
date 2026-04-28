import { useEffect, useRef } from 'react';

interface PetalsCanvasProps {
  active: boolean;
}

export function PetalsCanvas({ active }: PetalsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasEl = canvas;
    const ctx2d = ctx;

    const resize = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const colors = ['#D4806A', '#E8C07A', '#C9963E', '#B85940', '#EEDDD3', '#F5E4C0'];
    const petalCount = window.innerWidth < 600 ? 28 : 52;

    class Petal {
      x = 0;
      y = 0;
      r = 0;
      vx = 0;
      vy = 0;
      rot = 0;
      drot = 0;
      color = '';
      alpha = 0;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * canvasEl.width;
        this.y = initial ? Math.random() * canvasEl.height * 2 - canvasEl.height : -20;
        this.r = 4 + 5 * Math.random();
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = 0.6 + 1.2 * Math.random();
        this.rot = Math.random() * Math.PI * 2;
        this.drot = (Math.random() - 0.5) * 0.04;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 0.5 + 0.4 * Math.random();
      }

      update() {
        this.x += this.vx + 0.4 * Math.sin(0.01 * this.y);
        this.y += this.vy;
        this.rot += this.drot;
        if (this.y > canvasEl.height + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx2d.save();
        ctx2d.translate(this.x, this.y);
        ctx2d.rotate(this.rot);
        ctx2d.globalAlpha = this.alpha;
        ctx2d.fillStyle = this.color;
        ctx2d.beginPath();
        ctx2d.ellipse(0, 0, 0.55 * this.r, this.r, 0, 0, 2 * Math.PI);
        ctx2d.fill();
        ctx2d.restore();
      }
    }

    const petals: Petal[] = [];
    for (let i = 0; i < petalCount; i += 1) {
      petals.push(new Petal());
    }

    let animationId = 0;
    const animate = () => {
      ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="petals-canvas" className={active ? 'active' : ''} />;
}
