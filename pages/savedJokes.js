import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function savedJokes() {
  const { data: session, status } = useSession();
  const router = useRouter();


  async function getSavedJokes() {
    console.log('joke', joke)
    const response = await fetch('/api/user/saved-jokes', {
    
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    alert(data.message);
    console.log(data);
  }


  return (
    <div>savedJokes</div>
  )
}
