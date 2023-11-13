/**
 * Format date.
 *
 * @param  {date} date to format.
 * @return Formatted date.
 */
export default function formatBlogDate(date) {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
