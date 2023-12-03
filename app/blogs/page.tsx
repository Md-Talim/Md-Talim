import { SimpleLayout } from '@/components/SimpleLayout';
import { getBlogPosts } from '../db/blog';
import Link from 'next/link';

const BlogsPage = () => {
  const allBlogPosts = getBlogPosts();

  return (
    <SimpleLayout>
      {allBlogPosts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blogs/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </SimpleLayout>
  );
};

export default BlogsPage;
