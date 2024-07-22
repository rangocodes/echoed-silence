'use client';
// Return a list of `params` to populate the [slug] dynamic segment

import {getVictims} from "@/lib/firestore";
import {Tab, Tabs} from "@nextui-org/tabs";
import {HiMusicalNote, HiPhoto, HiVideoCamera} from "react-icons/hi2";
import {GiCandleLight} from "react-icons/gi";

// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())
//     const victimsData: any[] = await getVictims();
//
//     // return victimsData.map((item) => ({
//     //     id: item.id,
//     // }))
//
//     return [1, 2]
// }


export default function page({params}) {
    const { id } = params;
    // const router = useRouter();
    // const {id} = router.query;


    console.log(id)

    return (
        <main className="flex min-h-screen flex-col items-center bg-white">

            <div className="flex justify-center items-center w-full min-h-[400px] bg-primary/70 p-8">
                <div className="flex gap-4 gap-x-20 items-center w-full max-w-5xl flex-wrap">
                    <img src="/images/cover.png" className="w-[250px] h-[300px] border-3 border-white rounded-sm"/>
                    <h1 className="text-3xl font-bold text-center">Profile Details</h1>
                </div>
            </div>

            <div className="p-8 border border-red-600 w-full flex flex-col items-center justify-center">
                <Tabs aria-label="Options" color="primary" variant="bordered" fullWidth className="max-w-5xl" size="lg">
                    <Tab
                        key="about"
                        title={
                            <div className="flex items-center space-x-2">
                                <GiCandleLight/>
                                <span>About</span>
                            </div>
                        }
                    />
                    <Tab
                        key="photos"
                        title={
                            <div className="flex items-center space-x-2">
                                <HiPhoto/>
                                <span>Photos</span>
                            </div>
                        }
                    />

                </Tabs>
            </div>
        </main>
    );
}
