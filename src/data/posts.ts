export interface Post {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
}

export const posts: Post[] = [
    {
        title: "Reflecting on Psalm 23: The Lord as Our Shepherd",
        date: "2024-04-10",
        slug: "psalm-23-reflection",
        excerpt: "A meditation on the profound imagery and personal comfort found in Psalm 23, exploring how the metaphor of the Good Shepherd applies to our daily lives."
    },
    {
        title: "Understanding Grace Through Ephesians 2:8-9",
        date: "2024-04-08",
        slug: "understanding-grace",
        excerpt: "Exploring the foundational concept of grace in Christianity through Paul's powerful words to the Ephesians."
    }
];