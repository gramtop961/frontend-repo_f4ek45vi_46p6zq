import { Rocket } from 'lucide-react'

export default function Header({ title, subtitle }) {
  return (
    <header className="w-full text-center mb-8">
      <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-white shadow">
        <Rocket className="h-5 w-5" />
        <span className="font-semibold tracking-wide">{title}</span>
      </div>
      {subtitle ? (
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}
