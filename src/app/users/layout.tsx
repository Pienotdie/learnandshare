export default function UserLayouts({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="h2" style={{marginBottom: 12 }}>This is a User Route</h1>
            {children}
        </div>
    );
}
