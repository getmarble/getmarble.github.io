import React from "react";

/**
 * Glossy marbles drawn in SVG, plus a marble run that carries one marble
 * through the three stages on the home page. Motion is dropped under
 * `prefers-reduced-motion`.
 */

export type MarbleTone = "ink" | "lilac" | "glass";

const TONES: Record<MarbleTone, { stops: [string, string, string]; swirl: string; rim: string }> = {
  ink: { stops: ["#9b5fd6", "#560591", "#2a0148"], swirl: "#ffffff", rim: "#2a0148" },
  lilac: { stops: ["#f3e9fc", "#b98ae6", "#7a35b8"], swirl: "#560591", rim: "#560591" },
  glass: { stops: ["#ffffff", "#ece1f8", "#bda6dc"], swirl: "#560591", rim: "#560591" },
};

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setReduced(m.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

type GlyphProps = {
  r: number;
  tone?: MarbleTone;
  cx?: number;
  cy?: number;
  /** Rendered inside the swirl group, e.g. an <animateTransform> to roll it. */
  children?: React.ReactNode;
};

/** A marble as an SVG <g>, for use inside another <svg>. */
export function MarbleGlyph({ r, tone = "ink", cx = 0, cy = 0, children }: GlyphProps) {
  const id = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const t = TONES[tone];

  return (
    <g transform={`translate(${cx} ${cy})`}>
      <defs>
        <radialGradient id={`${id}-body`} cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor={t.stops[0]} />
          <stop offset="0.55" stopColor={t.stops[1]} />
          <stop offset="1" stopColor={t.stops[2]} />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <circle r={r} />
        </clipPath>
      </defs>
      <circle r={r} fill={`url(#${id}-body)`} />
      <g clipPath={`url(#${id}-clip)`}>
        <g>
          {children}
          <path
            transform={`scale(${r})`}
            d="M-1.1 0.25 C-0.55 -0.45 0.1 0.55 1.1 -0.25 L1.1 0.2 C0.2 0.95 -0.45 0.05 -1.1 0.7 Z"
            fill={t.swirl}
            fillOpacity="0.28"
          />
        </g>
      </g>
      <ellipse
        cx={-r * 0.36}
        cy={-r * 0.4}
        rx={r * 0.3}
        ry={r * 0.17}
        transform={`rotate(-32 ${-r * 0.36} ${-r * 0.4})`}
        fill="#fff"
        fillOpacity="0.75"
      />
      <circle r={r - 0.5} fill="none" stroke={t.rim} strokeOpacity="0.25" strokeWidth="1" />
    </g>
  );
}

/** A standalone marble icon. */
export function Marble({ tone = "ink", className = "" }: { tone?: MarbleTone; className?: string }) {
  return (
    <svg viewBox="-20 -20 40 40" className={className} aria-hidden="true">
      <MarbleGlyph r={18} tone={tone} />
    </svg>
  );
}

// Three troughs at x = 200, 600, 1000, one under each column of the grid below it.
const TRACK =
  "M0 50 C100 50 120 110 200 110 C280 110 320 50 400 50 C480 50 520 110 600 110 " +
  "C680 110 720 50 800 50 C880 50 920 110 1000 110 C1080 110 1100 50 1200 50";
const STATIONS = [200, 600, 1000];
const STATION_TONES: MarbleTone[] = ["glass", "lilac", "ink"];
const R = 14;

/** A track with a stop under each stage; one marble rolls through and rests at each. */
export function MarbleRun({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const pathId = React.useId().replace(/[^a-zA-Z0-9_-]/g, "") + "-track";

  // The marble waits at each stop. Rotation follows distance: about 14.6 turns end to end.
  const keyTimes = "0;0.15;0.25;0.45;0.55;0.75;0.85;1";
  const keyPoints = "0;0.1667;0.1667;0.5;0.5;0.8333;0.8333;1";
  const turns = "0;876;876;2628;2628;4380;4380;5256";

  return (
    <svg viewBox="0 0 1200 125" className={className} aria-hidden="true">
      <path id={pathId} d={TRACK} fill="none" stroke="#560591" strokeOpacity="0.1" strokeWidth="12" strokeLinecap="round" />
      <path d={TRACK} fill="none" stroke="#560591" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />

      {STATIONS.map((x) => (
        <circle key={x} cx={x} cy={110 - R - 6} r={R + 12} fill="#560591" fillOpacity="0.06" />
      ))}

      {reduced ? (
        STATIONS.map((x, i) => <MarbleGlyph key={x} cx={x} cy={110 - R - 6} r={R} tone={STATION_TONES[i]} />)
      ) : (
        <g transform={`translate(0 ${-R - 6})`}>
          <g>
            <animateMotion dur="12s" repeatCount="indefinite" calcMode="linear" keyTimes={keyTimes} keyPoints={keyPoints}>
              <mpath href={`#${pathId}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.04;0.96;1" dur="12s" repeatCount="indefinite" />
            <MarbleGlyph r={R} tone="ink">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={turns}
                keyTimes={keyTimes}
                dur="12s"
                repeatCount="indefinite"
              />
            </MarbleGlyph>
          </g>
        </g>
      )}
    </svg>
  );
}
