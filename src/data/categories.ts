interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Tech',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Exploring design and user experience'
  },
  {
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Exploring accessibility and user experience'
  },
  {
    name: 'Theme Usage',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  },
  {
    name: 'Astro JS',
    slug: 'astro-js',
    description: 'Everything about Astro JS framework and development'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization strategies and best practices'
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Tips, trends, and best practices in securing your systems and data'
  },
  {
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Exploring cloud solutions, strategies, and technologies'
  },
  {
    name: 'Networking',
    slug: 'networking',
    description: 'Everything about building, managing, and optimizing networks'
  },
  {
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'Real-world examples and success stories from IT projects'
  },
  {
    name: 'IT Strategy',
    slug: 'it-strategy',
    description: 'Developing long-term IT plans and business-aligned solutions'
  }
  
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}