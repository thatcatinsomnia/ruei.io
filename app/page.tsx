import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import NextLink from 'next/link';

type PostMeta = {
    slug: string;
    title: string;
    publishAt: Date;
};

async function getPosts() {
    const entries = await readdir("./public", { withFileTypes: true });

    const dirs = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
        
    const contents = await Promise.all(
        dirs.map(dir => readFile("./public/" + dir + "/index.md", "utf-8"))
    );

    const posts = dirs.map((slug, i) => {
        const fileContent = contents[i];
        const { data } = matter(fileContent);
        return { slug, ...data } as PostMeta;
    });
    
    return posts;
}

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className="flex flex-col gap-8">
            {posts.map(post => (
                <NextLink 
                    key={post.slug}
                    className="block py-4" 
                    href={"/" + post.slug + "/"}
                >
                    <article>
                        <h2 className="text-[26px] font-black">{post.title}</h2>
                        <span className="block text-[13px] text-gray-700 dark:text-gray-300">
                            {new Date(post.publishAt).toLocaleDateString("en-CA")}
                        </span>
                    </article>
                </NextLink>
            ))}
        </div>
    );
}
