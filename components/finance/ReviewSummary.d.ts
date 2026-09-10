/** Sunken key/value block used on every confirmation screen: what the recipient gets,
 * what you pay, the fee, the ETA, and who must approve. Never hide the fee here. */
export interface ReviewRow {
  label: React.ReactNode;
  value: React.ReactNode;
  strong?: boolean;
  /** Draws a hairline above this row (fee → total break). */
  divider?: boolean;
}
export interface ReviewSummaryProps { rows?: ReviewRow[]; style?: React.CSSProperties }
export declare function ReviewSummary(props: ReviewSummaryProps): JSX.Element;
