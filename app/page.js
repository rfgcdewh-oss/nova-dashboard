export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#08090d",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        NOVA
      </h1>

      <p style={{ color: "#888", marginBottom: "40px" }}>
        Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>Members</h2>
          <p>0</p>
        </div>

        <div style={cardStyle}>
          <h2>Servers</h2>
          <p>0</p>
        </div>

        <div style={cardStyle}>
          <h2>Commands</h2>
          <p>0</p>
        </div>

        <div style={cardStyle}>
          <h2>Status</h2>
          <p style={{ color: "#4ade80" }}>Online</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "#11131a",
  border: "1px solid #242733",
  borderRadius: "16px",
  padding: "25px",
};
