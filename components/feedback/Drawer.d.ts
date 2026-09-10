/**
 * Right-hand detail panel — the standard way to open a row. It starts CLOSED; a list
 * that auto-opens its first row hides the list from the user. Esc and scrim both close.
 */
export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /** Slot next to the title, usually a StatusBadge. */
  badge?: React.ReactNode;
  /** Sticky action row at the bottom. */
  footer?: React.ReactNode;
  /** 480px portal · 640px back office · 720px wide review. */
  width?: string;
  children?: React.ReactNode;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
