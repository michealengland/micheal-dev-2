/**
 * Handle content that contains HTML.
 *
 * @param  {Array} props Array of JSX Objects.
 * @return String of HTML.
 */
export default function createMarkup(props) {
  return {__html: props}
}
