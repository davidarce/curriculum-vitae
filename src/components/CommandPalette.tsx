import { useState, useEffect } from 'react';
import { Terminal, Search, Code, Cpu, BookOpen, Command, Monitor, Sun, Waves, Palette } from 'lucide-react';
import clsx from 'clsx';

const commands = [
    { id: 'home', label: 'System Boot', icon: Terminal, href: '#', type: 'navigation' },
    { id: 'experience', label: 'Git Log History', icon: Code, href: '#experience', type: 'navigation' },
    { id: 'skills', label: 'System Status', icon: Cpu, href: '#skills', type: 'navigation' },
    { id: 'education', label: 'Cert Store', icon: BookOpen, href: '#education', type: 'navigation' },
];

const themes = [
    { id: 'system', label: 'System Theme', icon: Monitor, type: 'theme' },
    { id: 'light', label: 'Light Theme', icon: Sun, type: 'theme' },
    { id: 'matrix', label: 'Matrix Theme', icon: Terminal, type: 'theme' },
    { id: 'ocean', label: 'Ocean Theme', icon: Waves, type: 'theme' },
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentTheme, setCurrentTheme] = useState('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setCurrentTheme(savedTheme);
    }, []);

    const allCommands = [...commands, ...themes];
    const filteredCommands = allCommands.filter((cmd) =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setSelectedIndex(0);
            }

            if (!isOpen) return;

            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
                setSelectedIndex(0);
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev < filteredCommands.length - 1 ? prev + 1 : prev
                );
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
            }

            if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
                e.preventDefault();
                handleSelect(filteredCommands[selectedIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredCommands]);

    // Reset selected index when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleSelect = (item: typeof allCommands[0]) => {
        if (item.type === 'navigation' && 'href' in item) {
            window.location.href = item.href;
            setIsOpen(false);
            setQuery('');
        } else if (item.type === 'theme') {
            setCurrentTheme(item.id);
            localStorage.setItem('theme', item.id);
            document.documentElement.setAttribute('data-theme', item.id);
            setIsOpen(false);
            setQuery('');
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[20vh] backdrop-blur-sm"
                    onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                        setSelectedIndex(0);
                    }}
                >
                    <div
                        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-primary/20 mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center border-b border-white/10 px-4 py-3">
                            <Search className="mr-3 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                className="flex-1 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none font-mono"
                                placeholder="Type a command or theme..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                            <div className="flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-gray-400">
                                <span className="text-xs">ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredCommands.length === 0 ? (
                                <div className="py-12 text-center text-gray-500">No commands found.</div>
                            ) : (
                                <>
                                    {/* Navigation Section */}
                                    {filteredCommands.some(cmd => cmd.type === 'navigation') && (
                                        <div className="mb-4">
                                            <div className="mb-2 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Navigation
                                            </div>
                                            <div className="space-y-1">
                                                {filteredCommands.filter(cmd => cmd.type === 'navigation').map((cmd) => {
                                                    const cmdIndex = filteredCommands.indexOf(cmd);
                                                    return (
                                                        <button
                                                            key={cmd.id}
                                                            onClick={() => handleSelect(cmd)}
                                                            onMouseEnter={() => setSelectedIndex(cmdIndex)}
                                                            className={clsx(
                                                                'flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors',
                                                                cmdIndex === selectedIndex
                                                                    ? 'bg-primary/10 text-primary'
                                                                    : 'text-gray-300 hover:bg-white/5'
                                                            )}
                                                        >
                                                            <cmd.icon className={clsx("mr-3 h-5 w-5", cmdIndex === selectedIndex ? "text-primary" : "text-gray-500")} />
                                                            <span className="flex-1 font-mono text-sm">{cmd.label}</span>
                                                            {cmdIndex === selectedIndex && (
                                                                <span className="text-xs text-primary/50">Enter</span>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Themes Section */}
                                    {filteredCommands.some(cmd => cmd.type === 'theme') && (
                                        <div>
                                            <div className="mb-2 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                                <Palette className="h-3 w-3" />
                                                Themes
                                            </div>
                                            <div className="space-y-1">
                                                {filteredCommands.filter(cmd => cmd.type === 'theme').map((cmd) => {
                                                    const cmdIndex = filteredCommands.indexOf(cmd);
                                                    const isActive = currentTheme === cmd.id;
                                                    return (
                                                        <button
                                                            key={cmd.id}
                                                            onClick={() => handleSelect(cmd)}
                                                            onMouseEnter={() => setSelectedIndex(cmdIndex)}
                                                            className={clsx(
                                                                'flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors',
                                                                cmdIndex === selectedIndex
                                                                    ? 'bg-primary/10 text-primary'
                                                                    : 'text-gray-300 hover:bg-white/5'
                                                            )}
                                                        >
                                                            <cmd.icon className={clsx("mr-3 h-5 w-5", cmdIndex === selectedIndex ? "text-primary" : "text-gray-500")} />
                                                            <span className="flex-1 font-mono text-sm">{cmd.label}</span>
                                                            {isActive && (
                                                                <span className="text-xs text-success">Active</span>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Footer - ProTip only on desktop */}
                        <div className="border-t border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-500 flex justify-between">
                            <span className="hidden md:block">ProTip: Use arrows to navigate</span>
                            <span className="md:hidden">Tap to select</span>
                            <span className="font-mono text-primary">System Core v2.0</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button - Only on Mobile */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-md transition-transform hover:scale-110 active:scale-95 md:hidden"
                >
                    <Command className="h-6 w-6" />
                </button>
            )}
        </>
    );
}
