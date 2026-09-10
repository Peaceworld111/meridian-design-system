/** Footer bar for any list that claims a total larger than what is on screen — a table
 * showing "共 128 家" with six rows and no pager reads as fake. */
export interface PaginationProps {
  page?: number;
  pages?: number;
  pageSize?: number;
  total?: number;
  /** Counting word: 条 / 家 / 笔. */
  unit?: string;
  onPrev?: () => void;
  onNext?: () => void;
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
