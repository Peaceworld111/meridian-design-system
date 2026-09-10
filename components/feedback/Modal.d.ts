/**
 * Confirmation only — never a container for a form. Cancel sits LEFT, the destructive
 * action RIGHT, and the body spells out the consequence in plain words.
 */
export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  body?: React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: React.ReactNode;
  onConfirm?: () => void;
  /** Red confirm button, for irreversible actions. */
  danger?: boolean;
}
export declare function Modal(props: ModalProps): JSX.Element;
