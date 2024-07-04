import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import TextLink from '../../atoms/TextLink'
import styles from './Posts.module.css'
import formatBlogDate from '../../../utilities/formatBlogDate'

// TODO Refactor this component with more strict props.
// TODO Create snapshot test.

export default function Posts({title, posts}) {
  return (
    <>
    <header className={styles.blogHeading}>
      {title && <h1>{title}</h1>}
    </header>
    <section className={styles.posts}>
      <div className={styles.inner}>
        {!! posts?.length > 0 && posts.map((post, index) => {
          const {
            collection,
            data: {
              pubDate: date,
              description,
              isDraft,
              title,
              heroImage,
              heroAlt

            }
          } = post

          const url = `/${collection}/${post.slug}/`

          return (
            <article className={styles.post} key={index}>
              { url && title &&
                <Heading className={styles.title} tag="h2">
                  <img width={720} height={360} src={heroImage} alt={heroAlt} />
                  {isDraft ? <span className={styles.draftLabel}>DRAFT:</span> : ''}
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
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}
