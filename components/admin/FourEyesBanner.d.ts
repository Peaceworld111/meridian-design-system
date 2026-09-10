/** Maker-checker notice: an action is staged and waiting for a second approver. Always
 * names the initiator and their stated reason. */
export interface FourEyesBannerProps {
  title?: React.ReactNode;
  detail?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FourEyesBanner(props: FourEyesBannerProps): JSX.Element;
