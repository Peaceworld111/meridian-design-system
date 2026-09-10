/**
 * Module list for long onboarding forms — any order, multiple people, autosaved.
 * This replaces a wizard whenever a flow has more than three steps.
 * @startingPoint section="Flow" subtitle="开户模块列表与进度" viewport="700x320"
 */
export interface ChecklistItem {
  label: React.ReactNode;
  sub?: React.ReactNode;
  state: 'done' | 'active' | 'pending';
  /** Right-hand slot: a status word or a small Button ("发送提醒"). */
  trailing?: React.ReactNode;
}
export interface SectionChecklistProps {
  items?: ChecklistItem[];
  done?: number;
  total?: number;
  /** Autosave note, e.g. "已保存 · 2 分钟前". */
  saved?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionChecklist(props: SectionChecklistProps): JSX.Element;
