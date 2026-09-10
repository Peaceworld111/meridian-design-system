/**
 * Locked exchange quote with a 30s ring countdown. It replaces the input card in place
 * — it is not a modal. Expiry is not an error: the button simply becomes 刷新报价.
 * @startingPoint section="Finance" subtitle="锁价报价卡与倒计时环" viewport="700x320"
 */
export interface QuoteCardProps {
  sell: React.ReactNode;
  buy: React.ReactNode;
  rate: React.ReactNode;
  fee?: React.ReactNode;
  /** Remaining seconds; drive it from a 1s interval in the parent. */
  seconds?: number;
  /** Lock duration the ring is scaled against. */
  total?: number;
  onConfirm?: () => void;
  onRefresh?: () => void;
  style?: React.CSSProperties;
}
export declare function QuoteCard(props: QuoteCardProps): JSX.Element;
