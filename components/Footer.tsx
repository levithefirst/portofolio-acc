export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-4 sm:px-8">
      <div className="glass rounded-3xl px-6 py-5 text-center text-xs text-hi md:text-sm">
        © {new Date().getFullYear()} levi (@levithefirst) · jack of all creative trades, master of content
      </div>
    </footer>
  );
}
