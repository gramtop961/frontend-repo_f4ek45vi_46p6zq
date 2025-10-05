export default function InfoCard({ title, message }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 shadow-sm">
      {title ? (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      ) : null}
      {message ? (
        <p className="mt-1 text-gray-600">{message}</p>
      ) : null}
    </div>
  )
}
