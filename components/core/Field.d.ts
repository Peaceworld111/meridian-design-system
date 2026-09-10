/**
 * Label + help/error wrapper for any input. Labels sit above the control; required
 * fields carry no asterisk — optional ones are marked "（可选）". Help text is always
 * visible, never hidden in a tooltip.
 */
export interface FieldProps {
  label?: string;
  optional?: boolean;
  /** Shown in muted grey below the control. Replaced by `error` when present. */
  help?: React.ReactNode;
  error?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
