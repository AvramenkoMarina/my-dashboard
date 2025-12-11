interface PaginationProps {
  page: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  labels: { prev: string; next: string };
}

export default function Pagination({
  page,
  total,
  onPrev,
  onNext,
  labels,
}: PaginationProps) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
      >
        {labels.prev}
      </button>

      <button
        onClick={onNext}
        disabled={page >= total}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
      >
        {labels.next}
      </button>
    </div>
  );
}
