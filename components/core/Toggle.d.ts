/** Switch for a setting that applies immediately (channel on/off, notification). Never
 * use it for a choice that needs a Save step — that is a Checkbox. */
export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Toggle(props: ToggleProps): JSX.Element;
