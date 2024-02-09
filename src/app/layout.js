import localFont from 'next/font/local'
const myFont = localFont({ src: 'assets/fonts/bison.ttf' })

import "../styles/global.scss";


export const metadata = {
  title: "MDS birthday",
  description: "Birth day app by Alexis Hadjian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
