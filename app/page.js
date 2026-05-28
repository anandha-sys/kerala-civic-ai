export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right,#052e16,#000000)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#4ade80",
          marginBottom: "20px"
        }}
      >
        Kerala Civic AI
      </h1>

      <p
        style={{
          maxWidth: "700px",
          fontSize: "20px",
          color: "#d1d5db"
        }}
      >
        AI-powered public issue reporting platform for Kerala citizens.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          borderRadius: "14px",
          border: "none",
          background: "#22c55e",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Report Issue
      </button>
    </main>
  );
}
