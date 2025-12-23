export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      className="border px-3 py-1 rounded"
      onClick={() => setDark(!dark)}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
