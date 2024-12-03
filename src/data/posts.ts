export interface Post {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
}

export const posts: Post[] = [
    {
        title: "Psalm 149",
        date: "2024-11-20",
        slug: "psalm-149-reflection",
        excerpt: "The Lord's people praise his name. Like children, the Lord's people dance and sing, making music to praise the Lord. Why?"
    },
    {
        title: "Psalm 148",
        date: "2024-11-16",
        slug: "psalm-148-reflection",
        excerpt: "All of creation sings praise to the Lord. 'For he commanded and they were created' (v5). It was by his own will, apart from any compulsion, that he created all things."
    },
    {
        title: "Psalm 147",
        date: "2024-11-14",
        slug: "psalm-147-reflection",
        excerpt: "Praise the Lord! Who builds up his people, gathers the outcasts from around the world, heals the brokenhearted by binding up their wounds. He is 'abundant in power' that is he is all powerful."
    },
    {
        title: "Col 1:1-14",
        date: "2024-03-25",
        slug: "col-1-1-14-reflection",
        excerpt: "Paul introduces his letter to the Colossian church first by signing his own name, then by introducing his title as an apostle of Christ Jesus. That is not an apostle in general, but of Christ specifically..."
    }
];