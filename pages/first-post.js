import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../components/layout"

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<Image
				src="/images/profile.jpg"
				height={144}
				width={144}
				alt="Your Profile"
			/>
			<h1>First Post</h1>
			<h2>
				<Link href="/">Return to Home</Link>
			</h2>
		</Layout>
	)
}
