/**
 * Single-line text input, 40px tall including its 1px border.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Red border; pair with Field's `error`. */
  invalid?: boolean;
  /** Monospace — use for IBAN, wallet address, hash, reference numbers. */
  mono?: boolean;
  /** `right` also switches on tabular numerals — use for every money field. */
  align?: 'left' | 'right';
  suffix?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
