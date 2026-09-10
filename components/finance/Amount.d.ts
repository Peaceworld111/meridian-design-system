/**
 * Money. Currency code always follows the number; direction is a + / − sign (U+2212),
 * never a colour; the converted value is a second line, never inline. Four sizes only.
 * @startingPoint section="Finance" subtitle="金额四档尺寸与方向写法" viewport="700x200"
 */
export interface AmountProps {
  /** Pre-formatted, thousands-separated, fixed to the currency's decimals. */
  value: string;
  currency?: string;
  /** 'in' renders "+", 'out' renders "−". Omit for neutral balances. */
  direction?: 'in' | 'out';
  /** table 13 · detail 16 · confirm 24 · hero 32 */
  size?: 'table' | 'detail' | 'confirm' | 'hero';
  /** Converted value as a muted second line, e.g. "19,970.00 USD". */
  approx?: string;
  style?: React.CSSProperties;
}
export declare function Amount(props: AmountProps): JSX.Element;
