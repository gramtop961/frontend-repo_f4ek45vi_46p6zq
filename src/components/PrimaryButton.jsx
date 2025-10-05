import { Plus } from 'lucide-react'

export default function PrimaryButton({ label = 'Add', onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[0.99] transition"
    >
      <Plus className="h-5 w-5" />
      <span>{label}</span>
    </button>
  )
}
