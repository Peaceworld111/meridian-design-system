/** Dark confirmation strip for a completed action. It states what happened in concrete
 * terms ("已放行 PMT-0031 · 5,000.00 EUR，队列剩 3 笔"), never just "成功". */
export interface ToastProps {
  tone?: 'positive' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
