import moment from 'moment'

/**
 * Format date using moment.
 *
 * @see https://momentjs.com/
 * @param  {date} date to format.
 * @return Formatted date.
 */
export default function formatBlogDate(date) {
  return moment(date).format('MMMM DD, YYYY') ?? null
}
