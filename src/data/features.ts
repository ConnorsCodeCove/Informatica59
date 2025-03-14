import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';
import { ShieldCheck, Server, Activity, Headphones, Database, TrendingUp } from 'lucide-astro';


// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: TrendingUp,
                title: 'Scalable IT Solutions',
                description: 'Flexible IT infrastructure that grows with your business needs.'
            },
            {
                icon: ShieldCheck,
                title: 'Security Monitoring',
                description: 'Continuous monitoring and threat detection to keep your systems secure.'
            },
            {
                icon: Server,
                title: 'Cloud & On-Prem Support',
                description: 'Seamless management of cloud, hybrid, and on-premise IT environments.'
            },
            {
                icon: Activity,
                title: 'Proactive Maintenance',
                description: 'Regular updates, patches, and performance optimizations to prevent downtime.'
            },
            {
                icon: Headphones,
                title: 'Help Desk & Support',
                description: 'Reliable IT support with quick response times for any technical issues.'
            },
            {
                icon: Database,
                title: 'Data Backup & Recovery',
                description: 'Automated backups and disaster recovery solutions to protect your data.'
            }
        ]
        
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
