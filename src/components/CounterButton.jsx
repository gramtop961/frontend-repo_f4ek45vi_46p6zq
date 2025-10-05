export default function CounterButton({ count = 0, onIncrement }) {
  return (
    <button
      onClick={onIncrement}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-[0.99] transition"
      aria-label={`Increase count, current value ${count}`}
    >
      <span>Clicked {count} {count === 1 ? 'time' : 'times'}</span>
    </button>
  )
}
