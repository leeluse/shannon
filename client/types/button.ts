export interface IButton {
    type?: "button" | "reset" | "submit";
    label: string;
    onClick?: () => void;
}