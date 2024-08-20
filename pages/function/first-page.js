import Link from "next/link"

export default function FirstPost(){
    return (
        <>
            <h1>First Page!</h1>
            <h2>
                <Link href="/">
                    Back to Home
                </Link>
            </h2>
        </>
    )
}