/* eslint-disable react/prop-types */
import * as React from 'react'
import { Box, Text, Grid, Container } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'lowmess-prism'

const LineNumber: React.FC = ({ children }) => (
	<Text
		as="span"
		sx={{
			display: ['none', 'inline-block'],
			textAlign: 'right',
			color: '#a89e90', // Comment color taken from `lowmess-prism`
			userSelect: 'none',
		}}
		aria-hidden
	>
		{children}
	</Text>
)

interface CodeProps {
	className: string
	children: string
}

const Code: React.FC<CodeProps> = ({
	className: languageClass,
	children,
	...props
}) => {
	const languagePrefix = 'language-'
	const language = languageClass
		.split(' ')
		.find((c) => c.indexOf(languagePrefix) !== -1)
		.slice(languagePrefix.length)

	const code = children.trim()

	return (
		<Box
			sx={{
				backgroundColor: 'black',
			}}
		>
			<Container
				sx={{
					fontFamily: 'mono',
					maxWidth: (t) => `calc(${t.sizes['mdx-measure']} + ${t.space[5]})`,
				}}
			>
				<Highlight
					{...defaultProps}
					code={code}
					// TS doesn't like that we're passing a string to an enum, but since
					// we're rendering this from MDX we don't know the language ahead
					// of time.
					// eslint-disable-next-line
					// @ts-ignore
					language={language}
					theme={theme}
				>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<Box
							className={className}
							style={style}
							sx={{
								width: '100%',
								overflowX: 'scroll',
								paddingY: 3,
								fontFamily: 'mono',
								fontSize: 2,
								color: 'grays.1',
								whiteSpace: 'pre',

								'.token-line': {
									overflow: 'visible !important',
								},
							}}
							{...props}
						>
							{tokens.map((line, index) => (
								// eslint-disable-next-line
								<Grid
									columns={[1, '2ch 1fr']}
									sx={{ display: ['block', 'grid'], columnGap: 3, rowGap: 0 }}
									{...getLineProps({
										line,
										key: index,
									})}
								>
									<LineNumber>{index + 1}</LineNumber>

									<div>
										{line.map((token, key) => (
											// eslint-disable-next-line
											<span {...getTokenProps({ token, key })} />
										))}
									</div>
								</Grid>
							))}
						</Box>
					)}
				</Highlight>
			</Container>
		</Box>
	)
}

const InlineCode: React.FC = ({ children }) => (
	<Text
		as="code"
		sx={{
			borderRadius: 1,
			paddingX: 1,
			backgroundColor: 'muted',
			color: 'inherit',
			fontFamily: 'mono',
			whiteSpace: 'nowrap',
		}}
	>
		{children}
	</Text>
)

export { Code, InlineCode }
