/** Checkbox with inline label; `sub` adds a muted second line (used for review checklists). */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  sub?: React.ReactNode;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
