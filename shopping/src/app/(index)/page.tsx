import { Suspense } from "react";
import { Home } from "@/components/pages/Home";

function LoadingFallback() {
  return (
    <div className="flex gap-16 px-4">
      <div className="w-64 h-96 bg-gray-200 rounded-lg animate-pulse" />
      <div className="flex-1">
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Home />
    </Suspense>
  );
}
