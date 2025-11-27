import { Nav } from '@/components/nav';
import './globals.css'; // Import global CSS
import Footer from '@/components/footer';
import { Providers } from '@/lib/provider';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: 'Reda Haddan | Portfolio',
	description: 'Reda Haddan Portfolio Website',
	icons: {
		icon: '/favicon-96x96.png',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{/* <Providers> */}
				{/* <Nav /> */}
				<main>
					<div>{children}</div>
				</main>
				{/* </Providers> */}
				<Analytics />
				<SpeedInsights />
			</body>
			{/* <Footer /> */}
		</html>
	);
}
