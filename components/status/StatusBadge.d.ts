/**
 * The state pill. Four tones carry four meanings and nothing else:
 * neutral = the system is working on it · warning = YOU need to act ·
 * positive = final, good · negative = final, bad (always say where the money went).
 * One word inside; progress ("7 / 12") goes outside in grey.
 * @startingPoint section="Status" subtitle="四种状态语气与进度写法" viewport="700x150"
 */
export interface StatusBadgeProps {
  tone?: 'neutral' | 'warning' | 'positive' | 'negative';
  dot?: boolean;
  /** Muted counter rendered after the pill, e.g. "7 / 12". */
  progress?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function StatusBadge(props: StatusBadgeProps): JSX.Element;
