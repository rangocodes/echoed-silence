'use client';
import {useEffect} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Input, Textarea} from "@nextui-org/input";
import {Button, DateInput} from "@nextui-org/react";

interface IVictim {
    name: string,
    photoURL: string,
    bio: string,
    incidentDate: string,
    incidentDesc: string,
    incidentLocation: string,
    familyTributes: string,
    location: string,
}

//
// const UserSchema = z.object({
//     name: z.string().min(1, { message: "Name is required" }),
//     email: z.string().email(),
//     photoURL: z.string().email(),
//     bio: z.string().email(),
//     incidentDetails: z.string().email(),
//     familyTributes: z.string().email(),
//     location: z.string().email(),
// });

export default function Page() {

    // const {control, register, handleSubmit, formState: {errors}} = useForm();


    const {
        control,
        register,
        setValue,
        getValues,
        watch,
        formState: {errors, defaultValues},
        handleSubmit
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            photoURL: "",
            bio: "",
            incidentDate: "",
            incidentDesc: "",
            incidentLocation: "",
            familyTributes: "",
            location: ""
        },
    })

    // Watch all fields
    const watchAllFields = watch();

    useEffect(() => {
        console.log(getValues())
        console.log(watchAllFields)
    }, [watchAllFields]);


    const onSubmit: SubmitHandler<IVictim> = data => {
        console.log(data)
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     try {
    //         await addDoc(collection(db, 'Victims'), {
    //             name,
    //             photoURL,
    //             bio,
    //             incidentDetails,
    //             location: {
    //                 latitude: parseFloat(location.latitude),
    //                 longitude: parseFloat(location.longitude),
    //             },
    //             createdAt: serverTimestamp(),
    //             updatedAt: serverTimestamp(),
    //         });
    //         alert('Victim added successfully!');
    //         // Clear form
    //         setName('');
    //         setPhotoURL('');
    //         setBio('');
    //         setIncidentDetails('');
    //         setLocation({ latitude: '', longitude: '' });
    //     } catch (error) {
    //         console.error('Error adding victim: ', error);
    //         alert('Error adding victim');
    //     }
    // };

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">Add Victim</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-lg">

                <Controller
                    name="name"
                    control={control}
                    render={({field: {onChange, onBlur, value}}: any) => (
                        <Input
                            required={true}
                            variant="bordered"
                            label="Enter victim's full name"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name="bio"
                    control={control}
                    render={({field: {onChange, onBlur, value}}: any) => (
                        <Textarea
                            variant="bordered"
                            label="Enter bio"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            className=""
                        />
                    )}
                />

                <Controller
                    name="incidentDate"
                    control={control}
                    render={({field: {onChange, onBlur, value}}: any) => (
                        <DateInput
                            label="Incident date"
                            variant="bordered"
                            // value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            className=""
                        />
                    )}
                />

                <Controller
                    name="incidentLocation"
                    control={control}
                    render={({field: {onChange, onBlur, value}}: any) => (
                        <Input
                            required={true}
                            variant="bordered"
                            label="Incident location"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            className=""
                        />
                    )}
                />

                <Controller
                    name="incidentDesc"
                    control={control}
                    render={({field: {onChange, onBlur, value}}: any) => (
                        <Textarea
                            required={true}
                            variant="bordered"
                            label="Incident description"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            className=""
                        />
                    )}
                />


                <Button className="md:col-span-2" type="submit" color="primary" isDisabled={false}>
                    Submit
                </Button>
            </form>

        </main>
    );
}
