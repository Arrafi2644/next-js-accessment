import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";



const page = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    
    console.log(user);
    return (
        <div className='my-8 text-center text-xl font-bold'>
            Welcome to your profile - {user.given_name} {user.family_name}
        </div>
    );
};

export default page;