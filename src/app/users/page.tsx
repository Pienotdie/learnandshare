import Link from "next/link";

export const revalidate = 60;

type User = { id: number; name: string; email: string; address?: { city?: string } };

export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Fehler beim Laden der Nutzer");
    const users: User[] = await res.json();

    return (
        <section>
            <h2 className="h2">User List</h2>
            <div className="grid">
                {users.map((u) => (
                    <Link key={u.id} href={`/users/${u.id}`} className="card" prefetch>
                        <strong>{u.name}</strong>
                    </Link>
                ))}
            </div>
        </section>
    );
}
