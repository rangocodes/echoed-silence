'use client';
// Return a list of `params` to populate the [slug] dynamic segment

import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardBody} from "@nextui-org/card";

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


export default function page({params}: any) {
    const {id} = params;
    // const router = useRouter();
    // const {id} = router.query;


    console.log(id)

    let tabs = [
        {
            id: "about",
            label: "About",
            content: (
                <div>
                    <p>Content</p>
                </div>
            )
        },
        {
            id: "photos",
            label: "Photos",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        // {
        //     id: "videos",
        //     label: "Videos",
        //     content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center bg-white">

            <div className="flex justify-center items-center w-full min-h-[400px] bg-primary/70 p-8">
                <div className="flex gap-4 gap-x-20 items-center w-full max-w-5xl flex-wrap">
                    <img src="/images/cover.png"
                         className="w-[250px] h-[300px] border-3 border-white rounded-sm object-cover" alt="image"/>
                    <h1 className="text-3xl font-bold text-center">Profile Details</h1>
                </div>
            </div>

            <div className="p-8 w-full flex flex-col items-center justify-center">
                <Tabs aria-label="Dynamic tabs" items={tabs} variant="bordered" fullWidth className="max-w-5xl"
                      size="lg">
                    {(item) => (
                        <Tab key={item.id} title={item.label}  className="w-full max-w-5xl">
                            <Card shadow="none" fullWidth className="border rounded-lg w-full min-h-60">
                                <CardBody>
                                    {item.content}
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
                {/*<Tabs aria-label="Options" color="primary" variant="bordered" fullWidth className="max-w-5xl" size="lg">*/}
                {/*    <Tab*/}
                {/*        key="about"*/}
                {/*        title={*/}
                {/*            <div className="flex items-center space-x-2">*/}
                {/*                <GiCandleLight/>*/}
                {/*                <span>About</span>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        content={*/}
                {/*            <div>*/}

                {/*            </div>*/}
                {/*        }*/}
                {/*    />*/}
                {/*    <Tab*/}
                {/*        key="photos"*/}
                {/*        title={*/}
                {/*            <div className="flex items-center space-x-2">*/}
                {/*                <HiPhoto/>*/}
                {/*                <span>Photos</span>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*    />*/}

                {/*</Tabs>*/}
            </div>
        </main>
    );
}
