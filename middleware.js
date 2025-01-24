import { NextResponse } from 'next/server';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";





export async function middleware(req) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    
    console.log(user);
  // Example logic

  const url = await req.url;

  console.log(url);
   if(!user && url.includes('/profile')){
    return NextResponse.redirect('https://rafifayez.kinde.com/oauth2/auth');
  }

  return NextResponse.next(); // Allow the request to proceed
}