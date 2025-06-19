export default function ShimmerCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto animate-pulse">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200" />
        <span className="absolute top-2 left-2 h-5 w-16 bg-gray-300 rounded-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
            <div className="w-12 h-4 bg-gray-300 rounded" />
          </div>
          <div className="w-4 h-4 bg-gray-300 rounded" />
        </div>
        <div className="w-3/4 h-5 bg-gray-300 rounded mb-2" />
        <div className="w-20 h-6 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
