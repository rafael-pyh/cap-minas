interface LightCardProps {
    icon: React.ReactNode;
    description: string;
    className?: string;
}

export default function LightCard({icon, description, className}: LightCardProps) {
    return (
        <div className={`flex gap-2 bg-white rounded border border-slate-300 shadow p-3 ${className}`} role="group" aria-label={description}>
            <div className="text-blue" aria-hidden="true">{icon}</div>
            <p className="text-[0.8em] font-bold">{description}</p>
        </div>
    );
}