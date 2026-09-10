/** Horizontal maker → approver → platform chain, shown on payment confirmation and in
 * the approval drawer so the initiator can see exactly who is holding the payment. */
export interface ApprovalStep {
  name: React.ReactNode;
  sub?: React.ReactNode;
  state: 'done' | 'current' | 'future';
}
export interface ApprovalChainProps { steps?: ApprovalStep[]; style?: React.CSSProperties }
export declare function ApprovalChain(props: ApprovalChainProps): JSX.Element;
