'use client';
import {Button} from "@nextui-org/react";
import {GiOpenBook} from "react-icons/gi";
import {getVictims} from "@/lib/firestore";
import {useEffect, useState} from "react";
import CardVictims from "@/components/ui/CardVictims";
import {Skeleton} from "@nextui-org/skeleton";
import {FaArrowRightLong} from "react-icons/fa6";
import Image from "next/image";

// export async function getStaticProps() {
//
//     return {
//         props: {
//             victims,
//         },
//         revalidate: 36000, // Revalidate the data every 10 seconds
//     };
// }

export function HomePage() {
    const [victims, setVictims] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const victimsData: any[] = await getVictims();
            setVictims([...victimsData, ...victimsData, ...victimsData, ...victimsData, ...victimsData, ...victimsData, ...victimsData]);
        }

        fetchData();
    }, []);

    useEffect(() => {
        console.log(victims)
    }, [victims]);
    return (
        <main className="flex min-h-screen flex-col items-center">

            <header className="bg-primary w-full flex justify-center items-center py-20 pb-40 relative min-h-[700px]">
                <Image src={'/images/cover.png'} alt={'cover'} width={2000} height={2000}
                       className="w-full h-full object-cover absolute top-0 left-0 bg-bottom"/>
                <div className="w-full h-full absolute top-0 left-0 bg-primary/20"></div>
                <div className="text-center py-10 px-4 z-10 text-white flex items-center flex-col">
                    <h1 className="text-7xl font-bold md:bg-black/50 backdrop-blur-md w-fit">Echoed Silence</h1>
                    <p className="text-3xl mt-4 md:bg-black/50 backdrop-blur-md">Accounting for the Victims of Police
                        Brutality in Kenya</p>
                    <Button variant="solid" color="primary" className="mt-8 hidden md:flex"
                            endContent={<GiOpenBook/>}>Explore Their Stories</Button>
                </div>
            </header>

            <section className="p-8 py-10 bg-white w-full max-w-6xl -mt-20 text-center z-10">
                <h2 className="text-4xl">Featured Stories</h2>
                <div className="grid gap-4 md:grid-cols-4 justify-items-center my-10">
                    {
                        !!victims?.length ?
                            victims?.map((victim, i) => (
                                <CardVictims
                                    key={i}
                                    className="first:md:col-span-2"
                                    title={'Remembering'}
                                    name={victim.name}
                                    image={victim.photoURL}
                                    id={victim.id}
                                    actionEmitted={(e: any) => alert(e)}
                                />
                            ))
                            :
                            [1, 2, 3, 4].map((item, i) => (
                                <Skeleton key={i} className="w-full h-[300px] md:h-[400px]"/>
                            ))

                    }
                </div>
                <Button endContent={<FaArrowRightLong/>}>View All</Button>
            </section>

            <section className="w-full max-w-6xl mt-20 text-center px-8 md:px-0">
                <h2 className="text-4xl">Missing Persons</h2>
                <div className="grid gap-4 md:grid-cols-4 justify-items-center my-10">
                    {
                        !!victims?.length ?
                            victims?.slice(3)?.map((victim) => (
                                <CardVictims
                                    key={victim.id}
                                    title={'Remembering'}
                                    name={victim.name}
                                    image={victim.photoURL}
                                    id={victim.id}
                                    actionEmitted={(e: any) => alert(e)}
                                />
                            ))
                            :
                            [1, 2, 3, 4].map((item, i) => (
                                <Skeleton key={i} className="w-full h-[300px] md:h-[400px]"/>
                            ))

                    }
                </div>
                <Button endContent={<FaArrowRightLong/>}>View All</Button>
            </section>


            {/*<section className="p-8 py-10 bg-white w-full max-w-6xl mt-20 text-center z-10">*/}
            {/*    <h2 className="text-4xl">Featured Stories</h2>*/}
            {/*    <div className="grid gap-4 md:grid-cols-4 justify-items-center my-10">*/}
            {/*        {*/}
            {/*            !!victims?.length ?*/}
            {/*                victims?.slice(3)?.map((victim) => (*/}
            {/*                    <CardVictims*/}
            {/*                        key={victim.id}*/}
            {/*                        title={'Remembering'}*/}
            {/*                        name={victim.name}*/}
            {/*                        image={victim.photoURL}*/}
            {/*                        id={victim.id}*/}
            {/*                    />*/}
            {/*                ))*/}
            {/*                :*/}
            {/*                [1, 2, 3, 4].map((item, i) => (*/}
            {/*                    <Skeleton key={i} className="w-full h-[300px] md:h-[400px]"/>*/}
            {/*                ))*/}

            {/*        }*/}
            {/*    </div>*/}
            {/*    <Button endContent={<FaArrowRightLong/>}>View All</Button>*/}
            {/*</section>*/}


        </main>
    );
}
