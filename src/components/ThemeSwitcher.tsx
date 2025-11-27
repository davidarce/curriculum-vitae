import { useState, useEffect } from 'react';
import { Monitor, Sun, Terminal, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const themes = [
    { id: 'system', label: 'System', icon: Monitor },
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'matrix', label: 'Matrix', icon: Terminal },
    { id: 'ocean', label: 'Ocean', icon: Waves },
];

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState('system');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setCurrentTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const handleThemeChange = (themeId: string) => {
        setCurrentTheme(themeId);
        localStorage.setItem('theme', themeId);
        document.documentElement.setAttribute('data-theme', themeId);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-white/10 hover:text-text"
                aria-label="Change Theme"
            >
                <Monitor className="h-5 w-5" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-2 w-32 overflow-hidden rounded-lg border border-white/10 bg-surface shadow-xl"
                    >
                        {themes.map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => handleThemeChange(theme.id)}
                                className={clsx(
                                    'flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors',
                                    currentTheme === theme.id
                                        ? 'bg-white/10 text-text'
                                        : 'text-text-muted hover:bg-white/5 hover:text-text'
                                )}
                            >
                                <theme.icon className="h-4 w-4" />
                                <span>{theme.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
