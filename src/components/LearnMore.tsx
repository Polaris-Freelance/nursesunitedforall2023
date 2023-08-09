import Link from "next/link";

type LearnMoreProps = {
    link: string
}
const LearnMore = ({ link }: LearnMoreProps) => {
    return (
        <Link href={link} className="justify-end items-end font-semibold underline underline-offset-4 text-secondary transition ease-in-out duration-300">
            Learn More
        </Link>
    )
}

export default LearnMore;