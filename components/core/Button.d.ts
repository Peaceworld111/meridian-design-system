/**
 * Action trigger. One primary button per screen; the label states the action and its
 * consequence ("确认付款 5,000.00 EUR"), never "提交".
 * @startingPoint section="Core" subtitle="按钮的五种样式与三个尺寸" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = the single main action; danger is never the primary style. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'dangerSolid';
  /** sm 32px (in-table / drawer), md 36px (default), lg 40px (mobile). */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  full?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
