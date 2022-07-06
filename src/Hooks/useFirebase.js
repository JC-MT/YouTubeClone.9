import db from '../Firebase.js';
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';

import { useState, useEffect } from 'react';
const useFirebase = (videoId) => {
  const [comments, setComments] = useState([]);
  const commentsCollection = collection(db, 'comments');
  const q = query(collection(db, 'comments'), where('videoId', '==', videoId));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allComments = [];
      snapshot.forEach((doc) => {
        allComments.push(doc.data());
      });
      setComments(allComments);
    });
    return unsubscribe;
  }, [q]);

  const postComment = (author, comment) => {
    return addDoc(commentsCollection, { author, comment, videoId });
  };

  console.log(comments);
  return [comments, postComment];
};

export default useFirebase;
