import React, { useEffect, useRef } from "react";
import './index.css';

const SomethingSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<{dom: HTMLElement | null; x: number | null; y: number | null}>({
    dom: null,
    x: null,
    y: null
  });
  const cursorRef = useRef<{x: number | null; y: number | null}>({
    x: null,
    y: null
  });

  useEffect(() => {
    const handleCreateNote = () => {
      if (!listRef.current || !colorRef.current) return;
      
      const newNote = document.createElement('div');
      newNote.classList.add('note');
      newNote.innerHTML = `
        <span class="close">x</span>
        <textarea placeholder="Write Content..." rows="10" cols="30"></textarea>`;
      newNote.style.borderColor = colorRef.current.value;
      listRef.current.appendChild(newNote);
    };

    const handleNoteClose = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('close')) {
          // Fix: Add type assertion to HTMLElement
          (target.parentNode as HTMLElement)?.remove();
        }
      };

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('note')) {
        cursorRef.current = {
          x: event.clientX,
          y: event.clientY
        };
        noteRef.current = {
          dom: target,
          x: target.getBoundingClientRect().left,
          y: target.getBoundingClientRect().top
        };
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!noteRef.current.dom || cursorRef.current.x === null || cursorRef.current.y === null || noteRef.current.x === null || noteRef.current.y === null) return;

      const distance = {
        x: event.clientX - cursorRef.current.x,
        y: event.clientY - cursorRef.current.y
      };

      noteRef.current.dom.style.left = (noteRef.current.x + distance.x) + 'px';
      noteRef.current.dom.style.top = (noteRef.current.y + distance.y) + 'px';
      noteRef.current.dom.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      if (!noteRef.current.dom) return;
      noteRef.current.dom.style.cursor = 'auto';
      noteRef.current.dom = null;
    };

    // Canvas setup and animation
    const setupCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ['#E37B40', '#46B29D', '#DE5B49', '#324D5C', '#F0CA4D', '#545454', '#596d91', '#bb5a68', '#696541'];
      const pen = canvas.getContext('2d');
      if (!pen) return;

      let mouseIn = true;
      let mouse = { x: window.innerWidth / 1, y: window.innerHeight / 1 };
      const circleArray: any[] = [];

      class Circle {
        constructor(x: number, y: number, r: number, dx: number, dy: number) {
          this.x = x;
          this.y = y;
          this.r = r;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.dx = dx;
          this.dy = dy;
        }

        x: number;
        y: number;
        r: number;
        color: string;
        dx: number;
        dy: number;

        draw() {
          if (!pen) return;
          pen.beginPath();
          pen.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          pen.fillStyle = this.color;
          pen.fill();
        }

        update() {
          this.x += this.dx;
          this.y += this.dy;
          if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && 
              mouse.y - this.y < 100 && mouse.y - this.y > -100) {
            if (this.r < 30) this.r += 1;
          } else {
            if (this.r > 0) this.r -= 1;
          }
          this.draw();
        }
      }

      const animate = () => {
        if (!pen) return;
        requestAnimationFrame(animate);
        pen.clearRect(0, 0, canvas.width, canvas.height);

        if (mouseIn) {
          circleArray.push(new Circle(
            mouse.x,
            mouse.y,
            5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
          ));
        }

        for (let i = 0; i < circleArray.length; i++) {
          if (circleArray[i].r <= 0) {
            circleArray.splice(i, 1);
            i--;
            continue;
          }
          circleArray[i].update();
        }
      };

      window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        mouseIn = true;
      });

      window.addEventListener('mouseout', () => {
        mouseIn = false;
      });

      animate();
    };

    // Add event listeners
    document.addEventListener('click', handleNoteClose);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    const createButton = document.getElementById('createBtn');
    createButton?.addEventListener('click', handleCreateNote);

    // Setup canvas
    setupCanvas();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleNoteClose);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      createButton?.removeEventListener('click', handleCreateNote);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <form action="">
        <input type="color" id="color" ref={colorRef} defaultValue="#e6b905" />
        <button type="button" id="createBtn">
          +
        </button>
      </form>
      <div id="list" ref={listRef}></div>
    </div>
  );
};

export default SomethingSection;