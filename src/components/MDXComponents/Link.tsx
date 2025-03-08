import * as React from 'react'
import { Link as ThemeUILink } from 'theme-ui'

const Link: React.FC = (props) => (
	<ThemeUILink
		sx={{
			'@media print': {
				"&[href^='http']::after": {
					content: `' (' attr(href) ')'`,
					fontSize: 1,
				},

				"&[href^='/']::after": {
					content: `' (https://justice.rest' attr(href) ')'`,
					fontSize: 1,
				},

				"&[href^='#']": {
					textDecoration: 'none',
				},
			},
		}}
		{...props}
	/>
)

export default Link
