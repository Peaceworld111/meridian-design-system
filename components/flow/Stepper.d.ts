/** Linear stepper — ONLY for flows of three steps or fewer (batch import, KYC upload).
 * Longer flows use SectionChecklist so people can work in any order. */
export interface StepperProps { steps?: React.ReactNode[]; current?: number; style?: React.CSSProperties }
export declare function Stepper(props: StepperProps): JSX.Element;
