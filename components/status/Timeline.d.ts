/**
 * Vertical progress of one money movement. Past steps carry a timestamp, the current
 * step carries an explanation, future steps carry an estimate — never a bare label.
 */
export interface TimelineStep {
  label: React.ReactNode;
  sub?: React.ReactNode;
  state: 'done' | 'current' | 'future' | 'failed';
}
export interface TimelineProps {
  steps?: TimelineStep[];
  style?: React.CSSProperties;
}
export declare function Timeline(props: TimelineProps): JSX.Element;
