import React, { useEffect } from "react";
import { Award, Handshake, Rocket, MapPin } from "lucide-react";
import "./Journey.css";

/**
 * Our Journey Over the Decades — timeline component
 *
 * Usage:
 *   import JourneyTimeline from "./JourneyTimeline";
 *   <JourneyTimeline />
 *
 * Dependencies:
 *   npm install lucide-react
 *
 * Fonts (add once, e.g. in your index.html <head>):
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

const MountainFlagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.5 20h17" />
    <path d="M5.5 20 11 8.5l3.2 6 1.9-3.1L20 20" />
    <path d="M11 8.5V3.2h4.6l-1.7 1.6 1.7 1.6H11" />
  </svg>
);

const ElevatorIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="7.5" width="14" height="13" rx="1.6" />
    <path d="M12 7.5v13" />
    <path d="M8 5.2 9.6 3.4 11.2 5.2" />
    <path d="M12.8 3.4 14.4 5.2 16 3.4" />
  </svg>
);

const MILESTONES = [
  {
    year: "1998",
    title: "Founded",
    text: "Started as a regional service firm with a small engineering workshop.",
    side: "left",
    card: { x: "1.5%", y: "59%", w: "20.5cqw", d: ".30s" },
    marker: { x: "28.9%", y: "84.5%", h: "10.75cqw", d: ".35s" },
    link: { left: "22%", top: "69.3%", width: "6.9%", d: ".35s" },
    icon: <MountainFlagIcon />,
  },
  {
    year: "2005",
    title: "ISO Certified",
    text: "First in Pune to gain comprehensive ISO 9001 quality certification.",
    side: "right",
    card: { x: "64.5%", y: "55%", w: "19cqw", d: ".50s" },
    marker: { x: "58.1%", y: "73%", h: "10.75cqw", d: ".55s" },
    link: { left: "58.1%", top: "57.8%", width: "6.4%", d: ".55s" },
    icon: <Award />,
  },
  {
    year: "2010",
    title: "1000th Lift",
    text: "Milestone deployment at premium IT park structures in western India.",
    side: "left",
    card: { x: "10%", y: "36.5%", w: "21cqw", d: ".70s" },
    marker: { x: "36.8%", y: "59.1%", h: "10.75cqw", d: ".75s" },
    link: { left: "31.2%", top: "43.9%", width: "5.6%", d: ".75s" },
    icon: <ElevatorIcon />,
  },
  {
    year: "2015",
    title: "Nidec Alliance",
    text: "Strategic co-engineering partnership with Nidec Kyoto, Japan.",
    side: "right",
    card: { x: "68.5%", y: "30%", w: "19cqw", d: ".90s" },
    marker: { x: "61.6%", y: "46.3%", h: "10.75cqw", d: ".95s" },
    link: { left: "61.6%", top: "31.1%", width: "6.9%", d: ".95s" },
    icon: <Handshake />,
  },
  {
    year: "2020",
    title: "5000+ Installs",
    text: "Pan-industry dominance with multi-story, hospital, and freight systems.",
    side: "left",
    card: { x: "17.5%", y: "11.5%", w: "20.5cqw", d: "1.10s" },
    marker: { x: "43.75%", y: "33.6%", h: "10.75cqw", d: "1.15s" },
    link: { left: "38%", top: "18.4%", width: "5.75%", d: "1.15s" },
    icon: <Rocket />,
  },
  {
    year: "2024",
    title: "Pan-India Presence",
    text: "Expanded service network to 12 major metro hubs across India.",
    side: "right",
    card: { x: "77.5%", y: "3.5%", w: "19.5cqw", d: "1.30s" },
    marker: { x: "67%", y: "19.3%", h: "7cqw", d: "1.35s" },
    link: { left: "67%", top: "9.4%", width: "12.5%", d: "1.35s" },
    icon: <MapPin />,
  },
];

const ROUTE_D = `M 18 1136
  C 170 1080, 322 1012, 462 955
  C 602 900, 762 862, 930 825
  C 1098 788, 668 730, 588 668
  C 528 622, 780 574, 985 523
  C 1120 489, 858 428, 700 380
  C 600 350, 902 282, 1072 218
  C 1178 178, 1186 118, 1128 74`;

export default function JourneyTimeline() {
  // Only needed if you use the <script>-based Lucide UMD build instead of
  // the lucide-react package. With lucide-react (recommended, used above)
  // this effect is not required — kept here as a no-op safeguard.
  useEffect(() => {}, []);

  return (
    <main className="journeyWrap">
      <h1 className="journeyTitle">Our Journey Over the Decades</h1>

      <div className="journeyScroll">
        <section
          className="journeyStage"
          aria-label="Company timeline from 1998 to 2024"
        >
          {/* ============ Winding road ============ */}
          <svg
            className="journeyRoad"
            viewBox="0 0 1600 1130"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="journeySoft"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="7" />
              </filter>
              <path id="journeyRoute" d={ROUTE_D} />
            </defs>

            <use
              href="#journeyRoute"
              stroke="#a6adba"
              strokeWidth="92"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2,16)"
              opacity="0.38"
              filter="url(#journeySoft)"
            />
            <use
              href="#journeyRoute"
              stroke="var(--road-edge)"
              strokeWidth="94"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <use
              href="#journeyRoute"
              stroke="var(--road-top)"
              strokeWidth="84"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0,-6)"
            />
            <use
              href="#journeyRoute"
              className="journeyDash"
              stroke="#ffffff"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="26 30"
              transform="translate(0,-6)"
              opacity="0.95"
            />
          </svg>

          {/* ============ Connector lines ============ */}
          {MILESTONES.map((m) => (
            <span
              key={`link-${m.year}`}
              className="journeyLink"
              style={{
                left: m.link.left,
                top: m.link.top,
                width: m.link.width,
                animationDelay: m.link.d,
              }}
            />
          ))}

          {/* ============ Cards ============ */}
          {MILESTONES.map((m) => (
            <article
              key={`card-${m.year}`}
              className={`journeyCard journeyCard--${m.side}`}
              style={{
                "--x": m.card.x,
                "--y": m.card.y,
                "--w": m.card.w,
                "--d": m.card.d,
              }}
            >
              <h3>{m.year}</h3>
              <h4>{m.title}</h4>
              <p>{m.text}</p>
            </article>
          ))}

          {/* ============ Markers ============ */}
          {/* {MILESTONES.map((m) => (
            <div
              key={`marker-${m.year}`}
              className="journeyMarker"
              style={{
                "--x": m.marker.x,
                "--y": m.marker.y,
                "--h": m.marker.h,
                "--d": m.marker.d,
              }}
            >
              <span className="journeyStem" />
              <span className="journeyPin" />
              <span className="journeyBadge">
                <span className="journeyCore">{m.icon}</span>
              </span>
            </div>
          ))} */}

          {MILESTONES.map((m, index) => (
  <div
    key={`marker-${m.year}`}
    className={`journeyMarker journeyMarker--${index + 1}`}
    style={{
      "--x": m.marker.x,
      "--y": m.marker.y,
      "--h": m.marker.h,
      "--d": m.marker.d,
    }}
  >
    <span className="journeyStem" />
    <span className="journeyPin" />

    <span className="journeyBadge">
      <span className="journeyCore">
        {m.icon}
      </span>
    </span>
  </div>
))}
        </section>
      </div>
    </main>
  );
}