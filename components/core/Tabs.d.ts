/** Underlined tab row for switching views within a page (待我审批 / 我发起, 入金 / 兑换 / 批次). */
export interface TabsProps {
  items?: Array<string | { value: string; label: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
