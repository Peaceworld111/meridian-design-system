/** Native dropdown for short, non-visual option lists (country, purpose code). For
 * currencies use CurrencyPicker instead — those options need icons and balances. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
}
export declare function Select(props: SelectProps): JSX.Element;
