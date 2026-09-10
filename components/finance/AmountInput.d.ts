/**
 * Right-aligned money field with an embedded CurrencyPicker, an "可用 … · 全部" line,
 * and an inline over-balance error. Used on exchange, payout and payment.
 * @startingPoint section="Finance" subtitle="金额输入 · 币种内嵌 · 余额校验" viewport="700x200"
 */
export interface AmountInputProps {
  value?: string;
  onChange?: (next: string) => void;
  invalid?: boolean;
  /** Red line under the field; replaces the available-balance line. */
  error?: React.ReactNode;
  help?: React.ReactNode;
  /** Formatted available balance, e.g. "13,281.00 EUR". */
  avail?: string;
  /** Renders the "全部" shortcut when provided. */
  onMax?: () => void;
  /** A <CurrencyPicker /> element. */
  picker?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AmountInput(props: AmountInputProps): JSX.Element;
