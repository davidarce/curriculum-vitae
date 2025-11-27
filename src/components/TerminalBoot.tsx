import { useEffect, useState } from 'react';

interface BootLine {
    text: string;
    type: 'info' | 'success' | 'command';
    delay: number;
}

const bootSequence: BootLine[] = [
    { text: 'run diagnostics', type: 'command', delay: 0 },
    { text: '[INFO] Initializing system core...', type: 'info', delay: 500 },
    { text: '[INFO] Loading experience modules... DONE', type: 'success', delay: 800 },
    { text: '[INFO] Scanning skill database... DONE', type: 'success', delay: 700 },
    { text: '[INFO] Verifying certifications... DONE', type: 'success', delay: 600 },
    { text: '[INFO] 12+ years experience detected.', type: 'info', delay: 400 },
    { text: '[INFO] System ready.', type: 'success', delay: 300 },
];

export default function TerminalBoot() {
    const [displayedLines, setDisplayedLines] = useState<BootLine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // If complete, wait 4 seconds then restart
        if (isComplete) {
            const restartTimer = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentIndex(0);
                setIsComplete(false);
            }, 4000);
            return () => clearTimeout(restartTimer);
        }

        // If we've shown all lines, mark as complete
        if (currentIndex >= bootSequence.length) {
            setIsComplete(true);
            return;
        }

        // Show next line
        const currentLine = bootSequence[currentIndex];
        const timer = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, currentLine]);
            setCurrentIndex((prev) => prev + 1);
        }, currentLine.delay);

        return () => clearTimeout(timer);
    }, [currentIndex, isComplete]);

    const getLineClass = (type: BootLine['type']) => {
        switch (type) {
            case 'command':
                return 'text-text-muted';
            case 'info':
                return 'text-text-muted';
            case 'success':
                return 'text-text-muted';
            default:
                return 'text-text-muted';
        }
    };

    return (
        <div className="space-y-1 font-mono text-sm min-h-[140px]">
            {displayedLines.map((line, index) => (
                <div
                    key={index}
                    className={`${getLineClass(line.type)} animate-[fadeIn_0.2s_ease-in]`}
                >
                    {line.type === 'command' && (
                        <>
                            <span className="text-success">➜ </span>
                            <span className="text-primary">~ </span>
                        </>
                    )}
                    {line.text.includes('DONE') ? (
                        <>
                            {line.text.split('DONE')[0]}
                            <span className="text-success">DONE</span>
                        </>
                    ) : (
                        line.text
                    )}
                    {index === displayedLines.length - 1 && !isComplete && (
                        <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-primary"></span>
                    )}
                </div>
            ))}
        </div>
    );
}
