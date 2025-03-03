import type { GetStaticProps } from 'next'
import * as React from 'react'
import { Container, Heading, Link, Text } from 'theme-ui'
import getStats, { Book, Stats } from '../lib/getStats'
import pluralize from '../lib/pluralize'

interface ValueCountProps {
	value: number
	singular: string
	plural: string
}

const ValueCount: React.FC<ValueCountProps> = ({ value, singular, plural }) => (
	<React.Fragment>
		{value.toLocaleString()} {pluralize(value, singular, plural)}
	</React.Fragment>
)

interface FormattedBookProps {
	book: Book
}

const FormattedBook: React.FC<FormattedBookProps> = ({ book }) => (
	<React.Fragment>
		&ldquo;{book.name}&rdquo; by {book.author}
	</React.Fragment>
)

interface BooksToSentenceProps {
	books: Array<Book>
}

const BooksToSentence: React.FC<BooksToSentenceProps> = ({ books }) => {
	if (books.length === 1) return <FormattedBook book={books[0]} />

	if (books.length === 2)
		return (
			<React.Fragment>
				<FormattedBook book={books[0]} /> and <FormattedBook book={books[1]} />
			</React.Fragment>
		)

	return (
		<React.Fragment>
			{books.map((book, index) => {
				if (index === 0) return <FormattedBook book={book} />

				if (index + 1 === books.length) {
					return (
						<React.Fragment>
							, and <FormattedBook book={book} />
						</React.Fragment>
					)
				}

				return (
					<React.Fragment key={book.name}>
						, <FormattedBook book={book} />
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

interface IndexProps {
	stats: Stats
}

const IndexPage: React.FC<IndexProps> = ({ stats }) => {
	const {
		commits = 0,
		tweets = 0,
		steps = 0,
		places = 0,
		songs = 0,
		album = null,
		books = [],
	} = stats

	return (
		<Container>
			<Text as="p" variant="section-heading" mb={3}>
				Introduction
			</Text>

			<Text as="div" variant="site-intro" sx={{ display: 'contents' }}>
			<Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
				We&rsquo;re JusticeRest, and we craft tools that promote equality, morality and justice 
				<Link href="/trade" sx={{ textDecoration: 'none' }}>
					<span role="img" aria-label="palm tree emoji">🌴</span>
				</Link> 
			</Heading>
				<br></br>
				<br></br>
				{' '}
				<Heading as="h2" variant="site-intro">
					Check out our cool (really cool) tool:{' '}
					<Link href="https://chat.justice.rest">JR Chat</Link>, an ultra-minimal platform for lawmakers (WIP)!
				</Heading>{' '}
				<br></br>
				<br></br>
				<b>Don&apos;t be shy <span role="img" aria-label="face with hand over mouth emoji expressing shyness or surprise">🤭</span></b>
				<br></br>
				<br></br>
				<Text as="p" variant="site-intro">
					If your interested in knowing more about us or have a cool idea to dicuss,{' '}
					contact us [at] <Link href="mailto:solomon@bublr.life">solomon@bublr.life</Link>
				</Text>
			</Text>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const stats = await getStats()

	return {
		props: {
			stats,
		},
		revalidate: 60 * 60, // revalidate at most once per hour
	}
}

export default IndexPage
