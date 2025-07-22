import "./globals.css";

export const metadata = {
  title: "Magic Mushrooms | Solana",
  description: "Take a trip on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
