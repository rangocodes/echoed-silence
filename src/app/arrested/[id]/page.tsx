// Return a list of `params` to populate the [slug] dynamic segment
import {getVictims} from "@/lib/firestore";

export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())
    const victimsData: any[] = await getVictims();

    return victimsData.map((item) => ({
        id: item.id,
    }))
}

export default function page({params}: any) {
    const { id } = params

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <h1 className="text-3xl font-bold">Profile Details</h1>
        </main>
    );
}
