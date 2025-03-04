import * as React from 'react'
import {
	Box,
	Container,
	Link as ThemeLink,
} from 'theme-ui'
import { BoxProps, LinkProps } from '@theme-ui/components'
import Link from '../components/Link'

interface FooterLinkProps extends LinkProps {
	external?: boolean
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, external, ...props }) =>
	external ? (
		<ThemeLink variant="ui" href={href} {...props} />
	) : (
		<Link variant="ui" href={href} {...props} />
	)

const Footer: React.FC<BoxProps> = (props) => (
	<Box as="footer" bg="muted" py={5} {...props}>
		<Container>
		</Container>
	</Box>
)

export default Footer
