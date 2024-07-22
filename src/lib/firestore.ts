// lib/firestore.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getVictims = async () => {
    const victimsCol = collection(db, 'Victims');
    const victimsSnapshot = await getDocs(victimsCol);
    return victimsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getStories = async () => {
    const storiesCol = collection(db, 'Stories');
    const storiesSnapshot = await getDocs(storiesCol);
    return storiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getNews = async () => {
    const newsCol = collection(db, 'News');
    const newsSnapshot = await getDocs(newsCol);
    return newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getEvents = async () => {
    const eventsCol = collection(db, 'Events');
    const eventsSnapshot = await getDocs(eventsCol);
    return eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
