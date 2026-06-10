export interface IButton {
    type: "button" | "reset" | "submit" | undefined;
    label: string;
    onClick: () => void;
}