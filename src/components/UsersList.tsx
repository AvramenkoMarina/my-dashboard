"use client";

import Search from "./Search";
import Pagination from "./Pagination";
import UserTable from "./UserTable";
import { useState } from "react";
import { useUsers } from "@/lib/useUsers";
import { Texts } from "../../types";

interface UsersListProps {
  text: Texts;
}

export default function UsersList({ text }: UsersListProps) {
  const { users, loading, error, fetchUsers } = useUsers();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(query.toLowerCase())
  );

  const perPage = 5;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <Search value={query} onChange={setQuery} placeholder={text.search} />
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>{error}</p>
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            {text.retry}
          </button>
        </div>
      )}
      {!loading && !error && <UserTable users={paginated} />}
      {!loading && !error && filtered.length > 0 && (
        <Pagination
          page={page}
          total={totalPages}
          onPrev={() => setPage((p) => Math.max(p - 1, 1))}
          onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
          labels={{ prev: text.prev, next: text.next }}
        />
      )}
    </div>
  );
}
