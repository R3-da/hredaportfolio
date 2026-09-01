const withImages = require('next-images');

/** @type {import('next').NextConfig} */
module.exports = withImages({
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/i',
				destination:
					'https://raw.githubusercontent.com/R3-da/nix-bootstrap/main/bootstrap.sh',
				permanent: false,
			},
		];
	},
});
