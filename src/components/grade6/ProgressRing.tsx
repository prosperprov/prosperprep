/** Simple SVG progress ring for Grade 6 classroom hub. */
export function ProgressRing({
  done,
  total,
  size = 112,
  stroke = 10,
  className = "stroke-emerald-500",
}: {
  done: number;
  total: number;
  size?: number;
  stroke?: number;
  className?: string;
}) {
  const pct = total > 0 ? Math.min(1, done / total) : 0;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${done} of ${total} lessons complete`}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className="stroke-slate-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className={className}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold text-slate-900">{Math.round(pct * 100)}%</span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
          done
        </span>
      </div>
    </div>
  );
}
