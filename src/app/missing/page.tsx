import {GiCandleLight, GiFeather, GiGraveFlowers} from "react-icons/gi";

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-8">
            <h1 className="text-3xl font-bold">Profiles</h1>

            <GiCandleLight/>
            <GiGraveFlowers/>
            <GiFeather/>
        </main>
    );
}
