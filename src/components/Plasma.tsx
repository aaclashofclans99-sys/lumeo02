import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface PlasmaProps {
  speed?: number;
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uOpacity;
out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy * uScale;
  float t = iTime * uSpeed;

  // Stronger plasma layers
  float a = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
  float b = sin(uv.y * 4.0 - t * 0.8) * 0.5 + 0.5;
  float c = sin((uv.x + uv.y) * 2.5 + t * 1.2) * 0.5 + 0.5;

  float mixVal = (a + b + c) / 3.0;

  // Deep blue + electric neon tones
  vec3 color1 = vec3(0.06, 0.12, 0.28);  // deep navy base
  vec3 color2 = vec3(0.15, 0.45, 1.00);  // main electric blue
  vec3 color3 = vec3(0.00, 0.88, 1.00);  // cyan glow highlight

  vec3 color = mix(color1, color2, mixVal);
  color = mix(color, color3, mixVal * 0.7);

  fragColor = vec4(color, mixVal * uOpacity);
}
`;

export const Plasma: React.FC<PlasmaProps> = ({
  speed = 1.8,
  scale = 0.6,
  opacity = 1.8,
  mouseInteractive = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderer = new Renderer({ dpr: 1.5, alpha: true });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    ref.current.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: new Float32Array([1, 1]) },
        iTime: { value: 0 },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uOpacity: { value: opacity }
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const rect = ref.current!.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      program.uniforms.iResolution.value.set([gl.drawingBufferWidth, gl.drawingBufferHeight]);
    };
    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(ref.current);

    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      program.uniforms.iTime.value = (t - start) * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      canvas.remove();
    };
  }, [speed, scale, opacity, mouseInteractive]);

  return <div ref={ref} className="absolute inset-0 pointer-events-none"></div>;
};

export default Plasma;
