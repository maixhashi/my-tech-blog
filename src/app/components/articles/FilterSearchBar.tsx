export function FilterSearchBar() {
  return (
    <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium">
          All
        </button>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
          Category
        </button>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
          Tag
        </button>
      </div>
      
      {/* 検索ボックス */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
} 