/**
 * Format date.
 *
 * @param  {date} date to format.
 * @return Formatted date.
 */
export default function formatBlogDate(date) {
  const dateObject = typeof date === Date ? date : new Date(date)

  return dateObject.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
