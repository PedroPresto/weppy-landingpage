// src/components/LandingPage/ChatMockup/ChatHeader.tsx
'use client';

import React from 'react';
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
    contactName: string;
    contactSubtitle?: string;
    avatarLetter?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    contactName,
    contactSubtitle = 'online',
    avatarLetter,
}) => {
    const initial = avatarLetter || contactName.trim().charAt(0).toUpperCase();

    return (
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[var(--wa-green-deep)] text-white">
            <ArrowLeft className="w-5 h-5 opacity-90" strokeWidth={2} />
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--purple-deep)] flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                {initial}
            </div>
            <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[0.9375rem] font-semibold truncate">{contactName}</p>
                <p className="text-[0.6875rem] opacity-85 truncate">{contactSubtitle}</p>
            </div>
            <Video className="w-5 h-5 opacity-90" strokeWidth={2} />
            <Phone className="w-5 h-5 opacity-90" strokeWidth={2} />
            <MoreVertical className="w-5 h-5 opacity-90" strokeWidth={2} />
        </div>
    );
};
