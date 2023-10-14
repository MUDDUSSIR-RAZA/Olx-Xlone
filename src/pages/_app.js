import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-customFont">
      <Component {...pageProps} />
    </main>
  );
}
