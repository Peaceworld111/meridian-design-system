/** Empty list state. Says what would appear here and offers the one action that fills
 * it — no illustrations. */
export interface EmptyStateProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
