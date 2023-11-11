import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import TextLink from '../../atoms/TextLink'
import styles from './Posts.module.css'
import formatBlogDate from '@utilities/formatBlogDate'

// TODO Refactor this component with more strict props.
// TODO Create snapshot test.

export default function Posts({posts}) {
  return (
    <section className={styles.posts}>
      <div className={styles.inner}>
        {!! posts?.length > 0 && posts.map((post, index) => {
          const {
            date,
            description,
            title,
            url,
          } = post

          return (
            <article className={styles.post} key={index}>
              { url && title &&
                <Heading className={styles.title} tag="h2">
                  <TextLink to={`${url}`}>
                    {title}
                  </TextLink>
                </Heading>
              }
              {date && <small className={styles.date}>{formatBlogDate(date)}</small>}
              {description && <p className={styles.content}>{description}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}
