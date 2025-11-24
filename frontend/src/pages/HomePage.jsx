import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

const HomePage = () => {
    return (
        <>
            <h1 className='text-red-600'>Welcome to the app</h1>

            <button className='btn btn-secondary' onClick={() => toast.success("Success")}>click me</button>

            <SignedOut>
                <SignInButton mode='modal' >
                    <button className='btn btn-primary'>Login</button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton />
            </SignedIn>

            <UserButton />
        </>
    )
}

export default HomePage