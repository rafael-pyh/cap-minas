interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    cls: "primary" | "secondary";
}

export default function Button({ children, className, cls, ...props }: ButtonProps) {
    return (
        <button 
            type="button"
            className={`rounded cursor-pointer border text-sm md:text-lg shadow-lg ${className} ${cls === "primary" ? "bg-[#6478c8] text-white border-transparent" : "bg-transparent text-[#6478c8] border-[#6478c8]"}`}
            {...props}
            >
            {children}
        </button>
    );
}
