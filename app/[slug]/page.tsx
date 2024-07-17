import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { MDXRemote } from "next-mdx-remote/rsc";
import './markdown.css';

export default async function PostPage({ params }: {
    params: { slug: string }
}) {
    const filename = "./public/" + params.slug + "/index.md";
    const file = await readFile(filename, "utf8");
    const { content, data } = matter(file);
    const { title, publishAt } = data;

    return (
        <article>
            <h1 className="text-[30px] font-black">{title}</h1>
            <p className="text-sm">{new Date(publishAt).toLocaleDateString("zh-tw")}</p>

            <div className="markdown">
                <MDXRemote source={content} />
            </div>
        </article>
    );
}


export async function generateStaticParams() {
    const entries = await readdir("./public/", { withFileTypes: true });
    const dirs = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);

    return dirs.map(dir => { slug: dir });
}

