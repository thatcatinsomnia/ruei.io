import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

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
    
    console.log(posts);
    return posts;
}

export default async function Home() {
    const posts = await getPosts();

    return (
        <div>
            {posts.map(post => (
                <article>
                    <div>{post.slug}</div>
                    <div>{post.title}</div>
                    <div>{new Date(post.publishAt).toLocaleDateString("zh-tw")}</div>
                </article>
            ))}
        </div>
    );
}
