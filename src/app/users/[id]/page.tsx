import { notFound } from "next/navigation";
import Link from "next/link";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address?: { street?: string; suite?: string; city?: string; zipcode?: string; geo?: { lat?: string; lng?: string } };
    company?: { name?: string; catchPhrase?: string; bs?: string };
};

async function fetchUser(id: string): Promise<User | null> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store" });
    if (!response.ok) return null;
    return response.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
    const user = await fetchUser(params.id);
    if (!user) notFound();

    return (
        <article>
            <Link href="/users" className="back">← Zurück zur Liste</Link>
            <h1 className="h1">{user.name} <span className="subtle">@{user.username}</span></h1>
            <p><b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p><b>Phone:</b> <a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <p><b>Website:</b> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>

            <h3 className="h2" style={{ marginTop: 20 }}>Adresse</h3>
            <p>
                {user.address?.street}, {user.address?.suite}<br/>
                {user.address?.zipcode} {user.address?.city}<br/>
                <span className="subtle">Geo: {user.address?.geo?.lat} / {user.address?.geo?.lng}</span>
            </p>

            <h3 className="h2" style={{ marginTop: 20 }}>Firma</h3>
            <p>
                <b>{user.company?.name}</b><br/>
                <i className="subtle">{user.company?.catchPhrase}</i><br/>
                {user.company?.bs}
            </p>
        </article>
    );
}
