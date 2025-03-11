import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollWithButtons() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button onClick={() => scroll(-100)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
        <ChevronLeft size={24} />
      </button>

      <div ref={scrollRef} className="overflow-x-auto flex space-x-4 p-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-40 h-40 bg-yellow-500 flex items-center justify-center rounded-lg">
            Item {i + 1}
          </div>
        ))}
      </div>

      <button onClick={() => scroll(100)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
