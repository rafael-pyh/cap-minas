interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    titleStyle?: string;
    descriptionStyle?: string;
}

export default function Card({ icon, title, description, className, titleStyle, descriptionStyle }: CardProps) {
    const titleId = `card-title-${title.replace(/\s+/g, "-").toLowerCase()}`;
    return (
        <div className={`border bg-white-1 border-slate-300 rounded-md p-6 my-1 lg:m-2 min-w-1/5 flex flex-col gap-4 ${className}`} role="group" aria-labelledby={titleId}>
            <div className="flex items-center gap-2">
                <div className="p-2 dark-blue text-slate-50 border rounded" aria-hidden="true">
                    {icon}
                </div>
                <h3 id={titleId} className={`font-semibold ${titleStyle}`}>{title}</h3>
            </div>
            <p className={descriptionStyle}>{description}</p>
        </div>
    );
}