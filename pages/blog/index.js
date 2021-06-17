import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <div className="post-container">
        {/* {posts.map((post) => (
          <Link href={`/blog/${post.realSlug}`} key={post.data.title}>
            <div className="post">
              <h1>{post.data.title}</h1>
              <h3>{post.data.description}</h3>
            </div>
          </Link>
        ))} */}
        {posts.map((post) => {
          const { title, path } = post;
          return (
            <Link href={path} key={title}>
              <div className="post">
                <h1>{title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const posts = files.map((file) => {
    return {
      path: `../posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
