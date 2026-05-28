export const metadata = {
  title: "Kerala Civic AI",
  description: "Kerala public issue reporting platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
