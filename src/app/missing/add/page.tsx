import {addDoc} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {serverTimestamp} from "@firebase/database";

export default function Page() {



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
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <h1 className="text-3xl font-bold">Add User</h1>

        </main>
    );
}
