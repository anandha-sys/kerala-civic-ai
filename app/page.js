"use client";

import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    issue: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Submitted Successfully!");

    console.log(form);

    setForm({
      name: "",
      issue: "",
      location: "",
      description: ""
    });
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right,#052e16,#000000)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
        padding: "30px"
      }}
    >

      <h1
        style={{
          fontSize: "50px",
          color: "#4ade80",
          marginTop: "30px"
        }}
      >
        Kerala Civic AI
      </h1>

      <p
        style={{
          color: "#d1d5db",
          marginBottom: "40px",
          textAlign: "center"
        }}
      >
        Report public issues across Kerala
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.08)",
          padding: "25px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <select
          name="issue"
          value={form.issue}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Issue Type</option>
          <option>Garbage</option>
          <option>Road Damage</option>
          <option>Flooding</option>
          <option>Street Dog</option>
          <option>Water Issue</option>
          <option>Electricity</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="description"
          placeholder="Describe the issue..."
          value={form.description}
          onChange={handleChange}
          required
          rows="5"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            background: "#22c55e",
            border: "none",
            padding: "15px",
            borderRadius: "12px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Submit Complaint
        </button>

      </form>

    </main>
  );
}

const inputStyle = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "16px",
  outline: "none"
};
