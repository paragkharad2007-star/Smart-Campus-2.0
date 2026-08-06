import { Sparkles } from "lucide-react";

export default function HeroBanner() {
    return (
        <div className="mb-8 rounded-3xl overflow-hidden relative">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-pulse opacity-20" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 p-10 rounded-3xl">

                <div className="flex items-center gap-4">

                    <Sparkles className="text-cyan-400" size={40} />

                    <div>

                        <h1 className="text-4xl font-bold text-white">
                            Smart Campus 2.0
                        </h1>

                        <p className="text-slate-300 mt-2">
                            AI Powered Digital Twin for Intelligent Campus Management
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}