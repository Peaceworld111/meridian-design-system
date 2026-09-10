/**
 * The main B2B canvas. Money columns are right-aligned INCLUDING their header; rows are
 * clickable and open a drawer (never a new page); density is user-switchable.
 * Always wrapped in horizontal scroll with a min-width so narrow panes don't crush columns.
 * @startingPoint section="Data" subtitle="表格 · 两种密度 · 行选中" viewport="700x260"
 */
export interface DataColumn {
  key: string;
  label: React.ReactNode;
  /** Any grid track value: "84px", "minmax(120px,1fr)". */
  width?: string;
  align?: 'left' | 'right';
  wrap?: boolean;
}
export interface DataTableProps {
  columns?: DataColumn[];
  /** Each row is a flat object of cell nodes plus a unique `key`. */
  rows?: Array<Record<string, any> & { key: string }>;
  density?: 'comfortable' | 'compact';
  selectedKey?: string;
  onRowClick?: (key: string) => void;
  minWidth?: number;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
