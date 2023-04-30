import Layout from '@/components/Layout';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();
    return (
        <Layout>
            <section className='text-blue-900 flex justify-between'>
                <h2>
                    <b>{session?.user?.name}</b>
                </h2>
                <div className="flex gap-1 bg-gray-300  text-black rounded-lg overflow-hidden">
                    <Image src={session?.user?.image!} alt={session?.user?.name!} width={24} height={24} />
                    <span className='px-2 text-md'>{session?.user?.name}</span>
                </div>
            </section>
        </Layout>
    );

}
