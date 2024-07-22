import {Card, CardFooter, CardHeader} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function CardVictims(props: {
    title: string,
    name: string,
    image: string,
    id: string,
    actionEmitted?: any,
    className?: string
}) {
    return (
        <Card isFooterBlurred className={`w-full h-[300px] md:h-[400px] rounded-none ${props?.className}`}>
            <CardHeader className="absolute z-10 flex-col items-start">

            </CardHeader>
            <Image
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://nextui.org/images/card-example-6.jpeg"
                width={500}
                height={500}
            />
            <CardFooter
                className="absolute bg-white/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between flex gap-2 rounded-none">
                <div>
                    <p className="text-tiny text-primary uppercase">{props?.title}</p>
                    <h4 className="text-black font-medium text-2xl">{props?.name}</h4>
                </div>
                <Link href={`/profile/${props?.id}`}></Link>
                <Button className="text-tiny" color="primary" size="sm"
                        onClick={() => props.actionEmitted(`/profile/${props?.id}`)}>
                    View
                </Button>
            </CardFooter>
        </Card>
    );
}
