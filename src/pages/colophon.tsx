import * as React from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

const PolicySection = (props) => (
	<VStack
		as="section"
		gap={3}
		sx={{
			marginTop: 4,
			padding: 0,
		}}
		{...props}
	/>
)

interface PolicyItemProps {
	title: string
}

const PolicyItem: React.FC<PolicyItemProps> = ({ title, children }) => (
	<Box sx={{ marginBottom: 4 }}>
		<Heading as="h3" sx={{ fontSize: [2, 3], marginBottom: 2 }}>
			{title}
		</Heading>
		<Text sx={{ fontSize: [1, 2] }}>{children}</Text>
	</Box>
)

const LegalPage: React.FC = () => {
	return (
		<React.Fragment>
			<Head>
				<title key="title">Terms & Privacy Policy {metadata.titleSuffix}</title>
			</Head>

			<Header>
				<HeaderName>Legal</HeaderName>
				<HeaderTitle>Terms & Privacy Policy</HeaderTitle>
			</Header>

			<Container mt={5}>
				<Grid columns={[1, 1]} gap={4}>
					<Box>
						<Heading color="muted-text">Terms of Service</Heading>

						<PolicySection>
							<PolicyItem title="Acceptance of Terms">
								By accessing and using JusticeRest, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
							</PolicyItem>

							<PolicyItem title="Use License">
								Permission is granted to temporarily access the materials on JusticeRest's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
							</PolicyItem>

							<PolicyItem title="Disclaimer">
								The materials on JusticeRest's website are provided on an 'as is' basis. JusticeRest makes no warranties, expressed or implied, and hereby disclaims all warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
							</PolicyItem>

							<PolicyItem title="Limitations">
								In no event shall JusticeRest be liable for any damages arising out of the use or inability to use the materials on JusticeRest's website, even if JusticeRest has been notified of the possibility of such damage.
							</PolicyItem>

							<PolicyItem title="Revisions">
								JusticeRest may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.
							</PolicyItem>
						</PolicySection>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 5]}>
							Privacy Policy
						</Heading>

						<PolicySection>
							<PolicyItem title="Information Collection">
								JusticeRest collects personal information that you voluntarily provide when using our service, including but not limited to name, email address, and usage data to improve our service.
							</PolicyItem>

							<PolicyItem title="Information Usage">
								JusticeRest uses the collected information to provide and improve our services, communicate with users about their accounts, and comply with legal obligations.
							</PolicyItem>

							<PolicyItem title="Data Protection">
								We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
							</PolicyItem>

							<PolicyItem title="Cookies">
								JusticeRest uses cookies to enhance user experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
							</PolicyItem>

							<PolicyItem title="Third-Party Disclosure">
								We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law.
							</PolicyItem>

							<PolicyItem title="User Rights">
								You have the right to access, correct, or delete your personal information. For any privacy concerns, please contact us at privacy@justicerest.com.
							</PolicyItem>
						</PolicySection>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 5]}>
							Contact Us
						</Heading>

						<Text sx={{ marginTop: 2, fontSize: [1, 2] }}>
							If you have any questions about these Terms or Privacy Policy, please contact us at:
						</Text>
						<Text sx={{ marginTop: 2, fontSize: [1, 2], fontWeight: 'bold' }}>
							JusticeRest, Inc.
							<br />
							Email: legal@justicerest.com
							<br />
							Phone: (555) 123-4567
						</Text>
						<Text sx={{ marginTop: 3, fontSize: 0, color: 'muted-text' }}>
							Last Updated: March 8, 2025
						</Text>
					</Box>
				</Grid>
			</Container>
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {}
	}
}

export default LegalPage