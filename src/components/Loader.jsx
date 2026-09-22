export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4" role="status" aria-live="polite">
      <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-brand-pink animate-spin" />
      <p className="text-sm text-gray-500">Loading technologies…</p>
    </div>
  )
}
