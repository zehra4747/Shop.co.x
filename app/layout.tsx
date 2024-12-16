const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Make sure this matches the file in 'public/fonts'
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // Same for this one
  variable: "--font-geist-mono",
  weight: "100 900",
});
function localFont(arg0: {
  src: string; // Same for this one
  variable: string; weight: string;
}) {
  throw new Error("Function not implemented.");
}

