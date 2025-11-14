export function BarsLoader() {
    return (
        <div className="flex justify-center items-center space-x-1">
            <div className="w-2 h-6 bg-indigo-500 rounded animate-bounce"></div>
            <div className="w-2 h-6 bg-indigo-400 rounded animate-bounce [animation-delay:150ms]"></div>
            <div className="w-2 h-6 bg-indigo-300 rounded animate-bounce [animation-delay:300ms]"></div>
        </div>
    );
}
