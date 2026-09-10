/**
 * The default container: white, 1px border, 8px radius, NO shadow. Sections are
 * separated by borders, never by elevation.
 * @startingPoint section="Core" subtitle="卡片、标题栏与无边距变体" viewport="700x220"
 */
export interface CardProps {
  title?: React.ReactNode;
  /** Right-aligned slot in the header row (a link or small button). */
  action?: React.ReactNode;
  /** false = flush content, for tables that reach the card edge. */
  pad?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
