"use client";

import { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import { db, storage } from "../lib/firebase";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    issue: "",
    location: "",
    description: ""
  });

  const [image, setImage] = useState(null);

  const [complaints, setComplaints] = useState([]);

  // Live Complaint Feed
  useEffect(() => {

    const q = query(
      collection(db, "complaints"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setComplaints(data);

    });

    return () => unsubscribe();

  }, []);

  // Handle Input Changes
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  // Submit Complaint
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let imageUrl = "";

      // Upload image
      if (image) {

        const storageRef = ref(
          storage,
          `complaints/${Date.now()}-${image.name}`
        );

        await uploadBytes(storageRef, image);

        imageUrl = await getDownloadURL(storageRef);

      }

      // Save complaint
      await addDoc(collection(db, "complaints"), {

        name: form.name,
        issue: form.issue,
        location: form.location,
        description: form.description,
        image: imageUrl,
        createdAt: Date.now()

      });

      alert("Complaint Submitted Successfully!");

      setForm({
        name: "",
        issue: "",
        location: "",
        description: ""
      });

      setImage(null);

    } catch (error) {

      console.log(error);

      alert("Error submitting complaint");

    }

  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right,#052e16,#000000)",
        color: "white",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          color: "#4ade80"
        }}
      >
        Kerala Civic AI
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#d1d5db",
          marginBottom: "40px"
        }}
      >
        AI-powered public issue reporting platform
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >

        {/* Complaint Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >

          <h2 style={{ color: "#4ade80" }}>
            Submit Complaint
          </h2>

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
            placeholder="Location / സ്ഥലം"
            value={form.location}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="description"
            placeholder="Describe the issue... / പ്രശ്നം വിശദീകരിക്കുക"
            value={form.description}
            onChange={handleChange}
            rows="5"
            required
            style={inputStyle}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{
              color: "white",
              background: "rgba(255,255,255,0.1)",
              padding: "12px",
              borderRadius: "12px"
            }}
          />

          <button
            type="submit"
            style={{
              background: "linear-gradient(to right,#22c55e,#16a34a)",
              border: "none",
              padding: "15px",
              borderRadius: "12px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 0 20px rgba(34,197,94,0.4)"
            }}
          >
            Submit Complaint
          </button>

        </form>

        {/* Live Complaint Feed */}
        <section>

          <h2
            style={{
              marginBottom: "20px",
              color: "#4ade80"
            }}
          >
            Live Complaint Feed
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            {complaints.map((item) => (

              <div
                key={item.id}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "20px",
                  borderRadius: "18px",
                  backdropFilter: "blur(10px)"
                }}
              >

                <h3 style={{ color: "#4ade80" }}>
                  {item.issue}
                </h3>

                <p>
                  <strong>Name:</strong> {item.name}
                </p>

                <p>
                  <strong>Location:</strong> {item.location}
                </p>

                <p style={{ marginTop: "10px" }}>
                  {item.description}
                </p>

                {
                  item.image && (
                    <img
                      src={item.image}
                      alt="Complaint"
                      style={{
                        width: "100%",
                        marginTop: "15px",
                        borderRadius: "12px"
                      }}
                    />
                  )
                }

              </div>

            ))}

          </div>

        </section>

      </div>

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
