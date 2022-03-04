import Link from "next/link"
import { DarkLayout } from "../../components/layouts/DarkLayout"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function PricingPage () {
    return (
        <>
            <h1>Pricing Page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>
        </>
    )
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
    
}