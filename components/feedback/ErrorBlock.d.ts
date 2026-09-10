/** Three-part error: what happened, why, what you can do. No apologies, no exclamation
 * marks, and for money errors always say where the funds are now. */
export interface ErrorBlockProps {
  what: React.ReactNode;
  why: React.ReactNode;
  /** A Button or link that resolves it. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ErrorBlock(props: ErrorBlockProps): JSX.Element;
