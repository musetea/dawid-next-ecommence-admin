import { useSession, signIn, signOut } from "next-auth/react"
import { ReactNode, FC } from 'react';
import Nav from './Nav';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const { data: session } = useSession();
    if (!session) {
        return (
            <main className='bg-blue-900 h-screen w-screen flex items-center justify-center'>
                <div className='text-center w-full'>
                    <button className='bg-white p-2 px-4 rounded-lg' onClick={() => {
                        signIn('google');
                    }}>Login with Google</button>
                </div>
            </main>
        )
    }
    return (

        <div className='bg-blue-900 min-h-screen flex'>
            <Nav />

            <main className='bg-white flex-grow mt-2 mr-2 mb-2 p-4 rounded-lg'>
                {children}
            </main>

        </div>

    )
}

export default Layout;