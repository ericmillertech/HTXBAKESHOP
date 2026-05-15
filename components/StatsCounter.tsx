'use client';

import { useEffect, useRef, useState } from 'react';

interface StatDef {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const stats: StatDef[] = [
  { end: 0,  label: 'Artificial Flavors', duration: 600  },
  { end: 72, label: 'Hour Dough Rest',    suffix: 'hr', duration: 1400 },
  { end: 14, label: 'Cookies on Menu',    duration: 1200 },
];

function Counter({ stat }: { stat: StatDef }) {
  const [count, setCount] = useState(0);
  const [fired, setFired] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    const dur = stat.duration ?? 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * stat.end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [fired, stat.end, stat.duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-gold leading-none">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="font-mono text-xs text-cream/40 tracking-widest uppercase mt-3">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
      {stats.map(s => <Counter key={s.label} stat={s} />)}
    </div>
  );
}
