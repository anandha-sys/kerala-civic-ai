export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right,#052e16,#000)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{
        fontSize: "60px",
        color: "#4ade80"
      }}>
        Kerala Civic AI
      </h1>

      <p style={{
        marginTop: "20px",
        textAlign: "center",
        maxWidth: "600px"
      }}>
        AI-powered public issue reporting platform for Kerala citizens.
      </p>

      <button style={{
        marginTop: "30px",
        background: "#22c55e",
        border: "none",
        padding: "15px 30px",
        borderRadius: "12px",
        color: "white",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Report Issue
      </button>

    </main>
  );
}
