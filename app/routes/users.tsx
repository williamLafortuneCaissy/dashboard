import { DataTable } from "~/components/dataTable/dataTable";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Users" },
    { name: "description", content: "Users table" },
  ];
}

const users = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    phone: "+1 555 123 4567",
    createdAt: "2024-12-01",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@example.com",
    phone: "+1 555 987 6543",
    createdAt: "2025-01-15",
  },
];

export default function Users() {
  const headerDisplay = { firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone", createdAt: "Created at" };

  const linkStyles = "hover:dark:text-sky-400 transition-colors";

  const entries = users.map((user) => ({
    ...user,
    phone: <a href={`tel:${user.phone}`} className={linkStyles}>{user.phone}</a>,
    email: <a href={`mailto:${user.email}`} className={linkStyles}>{user.email}</a>
  }));

  return (
    <div>
      <h1 className="font-bold text-2xl">Users</h1>
      <DataTable entries={entries} headerDisplay={headerDisplay} />
    </div>);
}
