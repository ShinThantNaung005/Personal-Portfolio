import React from 'react';
import Image from 'next/image';
import capoo from '../../public/capoo-crying.webp'

const ExperiencePage: React.FC = () => {
    return (
        <div>
            <Image src={capoo} alt="Capoo Crying" width={400} height={400} className="mx-auto mt-20" />
            <h1 className="text-4xl font-bold text-center mt-10">I still don't have experiences to showcase :(</h1>
        </div>
    )
}

export default ExperiencePage;