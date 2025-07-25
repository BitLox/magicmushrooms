import "./globals.css";

export const metadata = {
  title: "Magic Mushrooms | Solana",
  description: "Take a trip on Solana",
};

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overscroll-x-none overflow-x-hidden">  {/* Added these classes */}
        {children}
      </body>
    </html>
  );
}