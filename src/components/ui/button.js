
export default function Button(label, onClick) {
  return (
    <button
    type="button"
    className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-sky-950 shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
    >
      {label}
    </button>
  )
}