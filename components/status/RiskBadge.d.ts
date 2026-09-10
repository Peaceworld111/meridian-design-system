/** Risk level pill for KYB queues, customer lists and payout review. Filled, like
 * StatusBadge — plain coloured text scans too slowly in dense tables. */
export interface RiskBadgeProps {
  level?: '高' | '中' | '低';
  style?: React.CSSProperties;
}
export declare function RiskBadge(props: RiskBadgeProps): JSX.Element;
