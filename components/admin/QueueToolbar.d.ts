/** Header row for every back-office work queue: title + live count, view tabs, and the
 * keyboard shortcuts advertised on the right. Reviewers work these lists all day. */
export interface QueueToolbarProps {
  title?: React.ReactNode;
  count?: number;
  tabs?: string[];
  value?: string;
  onChange?: (tab: string) => void;
  shortcuts?: Array<{ key: string; label: string }>;
  style?: React.CSSProperties;
}
export declare function QueueToolbar(props: QueueToolbarProps): JSX.Element;
