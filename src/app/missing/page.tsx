'use client';
import CardVictims from "@/components/ui/CardVictims";
import {Button} from "@nextui-org/react";
import {FaArrowRightLong} from "react-icons/fa6";
import {getVictims} from "@/lib/firestore";
import {useRouter} from "next/navigation";
import {Skeleton} from "@nextui-org/skeleton";
import {useEffect, useState} from "react";
import {Input} from "@nextui-org/input";
import {FaSearch} from "react-icons/fa";

export default function page() {
    const router = useRouter();
    const [victims, setVictims] = useState<any[]>([]);
    const [canLoadMore, setCanLoadMore] = useState(false);

    useEffect(() => {
        async function fetchData() {
            let victimsData: any[] = await getVictims();
            for (let i = 0; i < 5; i++) {
                victimsData[i] = {...victimsData[i], photoURL: "https://xsgames.co/randomusers/avatar.php?g=male"}
            }
            console.log(victimsData)
            setVictims([...victimsData]);
        }

        fetchData().then();
    }, []);

    return (
        <section className="flex min-h-screen flex-col items-center gap-4 p-8">
            <section className="w-full max-w-6xl text-center px-8 md:px-0">
                <h2 className="text-4xl mb-4">Missing Persons</h2>
                <Input variant="bordered" placeholder="Search ..." className="w-full max-w-xl mx-auto" size="lg"
                       endContent={<FaSearch/>}/>
                <div className="grid gap-4 md:grid-cols-4 justify-items-center my-10">
                    {
                        !!victims?.length ?
                            victims.map(victim => (
                                <CardVictims
                                    key={victim.id}
                                    title={'Remembering'}
                                    name={victim.name}
                                    image={victim.photoURL}
                                    id={victim.id}
                                    actionEmitted={(e: any) => router.push(`/profiles/${victim.id}`)}
                                />))
                            :
                            [1, 2, 3, 4].map((item, i) => (
                                <Skeleton key={i} className="w-full h-[300px] md:h-[400px]"/>
                            ))
                    }
                </div>
                {canLoadMore && <Button endContent={<FaArrowRightLong/>}>Load More</Button>}
            </section>
        </section>
    );
}
