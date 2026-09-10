/** Fixed block at the bottom of every back-office object detail: who, when, what, and
 * the value change (前值 → 后值). System-generated entries use actor "系统". */
export interface AuditEntry {
  time: React.ReactNode;
  actor: React.ReactNode;
  what: React.ReactNode;
}
export interface AuditTrailProps { entries?: AuditEntry[]; note?: React.ReactNode; style?: React.CSSProperties }
export declare function AuditTrail(props: AuditTrailProps): JSX.Element;
