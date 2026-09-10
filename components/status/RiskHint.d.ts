/** Grey bulleted facts shown before a confirm step ("first payment to this payee").
 * Deliberately NOT a yellow warning box — these are reminders, not alarms. */
export interface RiskHintProps { items?: React.ReactNode[]; style?: React.CSSProperties }
export declare function RiskHint(props: RiskHintProps): JSX.Element;
