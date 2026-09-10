/** Radio for 2–4 mutually exclusive choices shown at once (payout rail, amount mode). */
export interface RadioProps {
  label?: React.ReactNode;
  sub?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
