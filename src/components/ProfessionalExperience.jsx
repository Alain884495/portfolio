import { useState } from "react";
import { experiences } from "../datas/Datas";

const ORBIT_RADIUS = 250;
const NODE_SIZE = 130;
const CENTER_SIZE = 180;

export default function ProfessionalExperience() {
  const [active, setActive] = useState(null);
  const count = experiences.length;

  const getPosition = (index) => {
    const angle = (2 * Math.PI * index) / count - Math.PI / 2;
    return {
      x: Math.cos(angle) * ORBIT_RADIUS,
      y: Math.sin(angle) * ORBIT_RADIUS,
    };
  };

  const selected = experiences.find((e) => e.id === active);

  return (
    <div style={styles.wrapper}>
      <h2 className="text-center text-5xl font-bold m-8">
        Expériences professionnelles
      </h2>
      <p style={styles.subheading}>Cliquez sur un cercle pour en savoir plus</p>

      {/* Orbit SVG layer + nodes */}
      <div style={styles.orbitContainer}>
        {/* Dashed orbit ring */}
        <svg
          style={styles.svg}
          viewBox={`0 0 ${ORBIT_RADIUS * 2 + NODE_SIZE} ${ORBIT_RADIUS * 2 + NODE_SIZE}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={(ORBIT_RADIUS * 2 + NODE_SIZE) / 2}
            cy={(ORBIT_RADIUS * 2 + NODE_SIZE) / 2}
            r={ORBIT_RADIUS}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="6 5"
          />
          <circle
            cx={(ORBIT_RADIUS * 2 + NODE_SIZE) / 2}
            cy={(ORBIT_RADIUS * 2 + NODE_SIZE) / 2}
            r={5}
            fill="#e2e8f0"
          />
        </svg>

        {/* Center detail circle */}
        <div style={styles.centerCircle}>
          {selected ? (
            <div style={styles.centerContent}>
              <span style={styles.centerIcon}>{selected.icon}</span>
              <p style={styles.centerTitle}>{selected.title}</p>
              <p style={styles.centerCompany}>{selected.company}</p>
              <p style={styles.centerYears}>{selected.years}</p>
              <p style={styles.centerDesc}>{selected.description}</p>
            </div>
          ) : (
            <p style={styles.centerPlaceholder}>Sélectionnez une expérience</p>
          )}
        </div>

        {/* Experience nodes */}
        {experiences.map((exp, i) => {
          const { x, y } = getPosition(i);
          const isActive = active === exp.id;
          return (
            <button
              key={exp.id}
              onClick={() => setActive(isActive ? null : exp.id)}
              style={{
                ...styles.node,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                borderColor: isActive ? "#3b82f6" : "#cbd5e1",
                backgroundColor: isActive ? "#eff6ff" : "#ffffff",
                boxShadow: isActive
                  ? "0 0 0 4px rgba(59,130,246,0.12)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
                border: "5px solid #cbd5e1",
              }}
              aria-pressed={isActive}
              aria-label={exp.title}
            >
              <span style={styles.nodeIcon}>{exp.icon}</span>
              <span
                style={{
                  ...styles.nodeTitle,
                  color: isActive ? "#1d4ed8" : "#0f172a",
                }}
              >
                {exp.title}
              </span>
              <span style={styles.nodeYears}>{exp.years}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const SIZE = ORBIT_RADIUS * 2 + NODE_SIZE;

const styles = {
  wrapper: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1.5rem",
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
  },
  heading: {
    fontSize: "1.75rem",
    fontWeight: "400",
    color: "#0f172a",
    letterSpacing: "-0.02em",
    margin: "0 0 0.35rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "0.85rem",
    color: "#94a3b8",
    margin: "0 0 2rem",
    letterSpacing: "0.03em",
    textAlign: "center",
  },
  orbitContainer: {
    position: "relative",
    width: SIZE,
    height: SIZE,
    flexShrink: 0,
  },
  svg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },
  node: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: "50%",
    border: "1.5px solid",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    boxSizing: "border-box",
    transition:
      "border-color 0.22s ease, background-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease",
    outline: "none",
    gap: 3,
  },
  nodeIcon: {
    fontSize: "1.5rem",
    lineHeight: 1,
    marginBottom: 2,
  },
  nodeTitle: {
    fontSize: "0.7rem",
    fontWeight: "600",
    fontFamily: "'Georgia', serif",
    textAlign: "center",
    lineHeight: 1.3,
    letterSpacing: "0.01em",
  },
  nodeYears: {
    fontSize: "0.62rem",
    color: "black",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.02em",
  },
  centerCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: "50%",
    border: "1.5px solid #e2e8f0",
    backgroundColor: "#ffffff",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    overflow: "hidden",
    zIndex: 10,
    transition: "border-color 0.3s ease",
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px",
    textAlign: "center",
    gap: 2,
  },
  centerIcon: {
    fontSize: "1.6rem",
    lineHeight: 1,
    marginBottom: 4,
  },
  centerTitle: {
    margin: 0,
    fontSize: "0.72rem",
    fontWeight: "600",
    color: "#0f172a",
    fontFamily: "'Georgia', serif",
    lineHeight: 1.3,
  },
  centerCompany: {
    margin: 0,
    fontSize: "0.65rem",
    color: "#3b82f6",
    marginTop: 2,
  },
  centerYears: {
    margin: 0,
    fontSize: "0.6rem",
    color: "black",
    marginTop: 1,
  },
  centerDesc: {
    margin: "6px 0 0",
    fontSize: "0.6rem",
    color: "black",
    lineHeight: 1.5,
    borderTop: "1px solid #f1f5f9",
    paddingTop: 6,
  },
  centerPlaceholder: {
    margin: 0,
    fontSize: "0.65rem",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "0 16px",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  },
};
