import { generateSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Types
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Generate slug if not provided
  const slug = generateSlug(post.title);

  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-80 h-80">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <div className="relative w-full h-44">
            <Image
              src={post.image}
              alt={`${post.title} thumbnail`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl object-center"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <p className="font-thin text-xs">
              by {post.author} | {post.date}
            </p>
            <h2 className="font-bold text-sm line-clamp-1">{post.title}</h2>
            <p className="text-xs font-thin line-clamp-2">{post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
