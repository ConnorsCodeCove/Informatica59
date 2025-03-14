import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/dermlaser.svg';
import logo2 from '../assets/images/logos/drcourtney1.png';
import logo3 from '../assets/images/logos/ACPS.webp';
import logo4 from '../assets/images/logos/mederna.svg';
import logo5 from '../assets/images/logos/vecinohomes.webp';
import logo6 from '../assets/images/logos/layton.svg';
import logo7 from '../assets/images/logos/linville.webp';
import logo8 from '../assets/images/logos/aste.webp';


export interface Logo {
    src: ImageMetadata;
    alt: string;
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Logo 1',
            },
            {
                src: logo2,
                alt: 'Logo 2',
            },
            {
                src: logo3,
                alt: 'Logo 3',
            },
            {
                src: logo4,
                alt: 'Logo 4',
            },
            {
                src: logo5,
                alt: 'Logo 5',
            },
            {
                src: logo6,
                alt: 'Logo 5',
            },
            {
                src: logo7,
                alt: 'Logo 5',
            },
            {
                src: logo8,
                alt: 'Logo 5',
            }
        ]
    }
};
