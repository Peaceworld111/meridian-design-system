/** Monospace identifier (wallet address, tx hash, IBAN, reference) with middle-ellipsis
 * display, a copy button that copies the FULL value, and an optional explorer link. */
export interface IdentifierProps {
  label?: React.ReactNode;
  /** Display form, usually middle-ellipsised: "0x3f8a…9c2e". */
  value: string;
  /** Complete value placed on the clipboard. */
  full?: string;
  network?: React.ReactNode;
  explorer?: string;
  style?: React.CSSProperties;
}
export declare function Identifier(props: IdentifierProps): JSX.Element;
