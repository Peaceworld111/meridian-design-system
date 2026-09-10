/**
 * Currency dropdown embedded in the right edge of an amount input. Options are grouped
 * 稳定币 / 法币, each row showing icon, code, name and available balance.
 * NOTE: the parent input wrapper must not set `overflow: hidden` or the menu clips.
 */
export interface CurrencyOption {
  code: string;
  name: string;
  kind?: 'token' | 'fiat';
  /** Formatted available balance shown on the right of the row. */
  avail?: string;
}
export interface CurrencyPickerProps {
  options?: CurrencyOption[];
  value?: string;
  onChange?: (code: string) => void;
  /** Relative path to assets/icons. */
  iconBase?: string;
  style?: React.CSSProperties;
}
export declare function CurrencyPicker(props: CurrencyPickerProps): JSX.Element;
