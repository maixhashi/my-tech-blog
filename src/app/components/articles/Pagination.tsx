export function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 mb-12">
      <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">1</button>
      <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">2</button>
      <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">3</button>
      <span className="px-3 py-2 text-gray-500">...</span>
      <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">9</button>
      <button className="px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
} 