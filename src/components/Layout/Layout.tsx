import * as React from 'react'
import Head from 'next/head'
import { Box, Flex } from 'theme-ui'
import { useTheme } from '../../constants/theme'
import metadata from '../../constants/metadata.json'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyles from './GlobalStyles'
import HeroPatterns from 'hero-patterns' // Import hero-patterns

const Layout: React.FC = ({ children }) => {
	const { theme: { rawColors } = {} } = useTheme()
	const { title, description } = metadata

	// Generate the 'topography' pattern SVG using hero-patterns
	const topographySvg = HeroPatterns.topography({ 
		color: '#fc7700',  // Set the color to #fc7700
		width: 1000,  // Adjust width for scaling
		height: 1000  // Adjust height for scaling
	})

	return (
		<React.Fragment>
			<Head>
				{/*
				 * Shouldn't be set in `_document`:
				 * https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
				 */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title key="title">{title}</title>

				<meta name="description" content={description} />

				<meta name="theme-color" content={rawColors.muted as string} />
			</Head>

			<Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
				<GlobalStyles />

				<Nav mb={5} />

				<Box id="main-content" sx={{ flex: 1, paddingY: [null, 3, 4] }}>
					{children}
				</Box>

				{/* Use the generated topography pattern as background image */}
				<Box
					sx={{
						width: '100%',
						height: '200px',
						backgroundColor: '#fc7700', // Set the background color
						backgroundImage: `url(${topographySvg})`, // Use the generated topography pattern
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					{/* Alternatively, you can place inline SVG directly inside Box */}
				</Box>

				<Footer mt={5} />
			</Flex>
		</React.Fragment>
	)
}

export default Layout
