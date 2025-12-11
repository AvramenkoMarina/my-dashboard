import { User } from "../../types";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <ul className="bg-white rounded-lg shadow-md divide-y">
      {users.map((u) => (
        <li key={u.id} className="p-4">
          <p className="font-semibold">{u.name}</p>
          <p className="text-sm text-gray-600">{u.email}</p>
        </li>
      ))}
    </ul>
  );
}
