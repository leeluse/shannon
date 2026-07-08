import { ReactNode } from "react";
import type { Provider } from "@supabase/supabase-js";

export interface IButton {
    type?: "button" | "reset" | "submit";
    label: string;
    onClick?: () => void;
}


export type SocialLoginVariant = 'google' | 'kakao';

export type SocialLoginContent = {
    provider: Provider;
    title: string;
    description: string;
    buttonClassName: string;
    titleClassName: string;
    descriptionClassName: string;
    arrowClassName: string;
    renderMark: () => ReactNode;
};

