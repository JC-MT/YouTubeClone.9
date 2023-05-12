import { db } from '../Firebase';
import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  CollectionReference,
  QuerySnapshot,
  Query,
  DocumentData,
} from 'firebase/firestore';

export default function useFirebase(videoId: string | undefined){
  const [comments, setComments]: [Object[], Function] = useState([]);
  const commentsCollection: CollectionReference = collection(db, 'comments');
  const q: Query<DocumentData> = query(commentsCollection, where('videoId', '==', videoId));

  useEffect(() => {

    const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const allComments: Object[] = [];
      snapshot.forEach((doc: any) => {
        const data: Object = doc.data()
        allComments.push(data);
      });
      setComments(allComments);
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  const postComment: Function = (author: string, comment: string) => {
    return addDoc(commentsCollection, { author, comment, videoId });
  };

  return [comments, postComment];
};
