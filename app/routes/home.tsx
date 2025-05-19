import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Dashboard</h1>

    </div>);
}
