import { MDXRemote } from "next-mdx-remote/rsc";

export default function PostPage({ params }: {
    params: { slug: string }
}) {
    const filename = "./public/" + params.slug + "/index.md";

    return (
        <article>

        </article>
    );
}
