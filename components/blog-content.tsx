import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of API Documentation: Why Automation Matters",
    excerpt:
      "Discover how automated API documentation is revolutionizing developer workflows and improving customer experience.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Product",
    featured: true,
  },
  {
    id: 2,
    title: "Building Developer-First Documentation That Actually Gets Used",
    excerpt: "Learn the key principles behind creating API docs that developers love to use and reference.",
    author: "Marcus Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Best Practices",
    featured: false,
  },
  {
    id: 3,
    title: "How AI Agents Are Changing the Way We Interact with APIs",
    excerpt: "Explore the emerging trend of AI agents consuming API documentation and what it means for the future.",
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Technology",
    featured: false,
  },
  {
    id: 4,
    title: "From Manual to Automated: Our Journey Building Devscribe",
    excerpt: "The story behind Devscribe and why we decided to solve the API documentation problem.",
    author: "Founders",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Company",
    featured: false,
  },
  {
    id: 5,
    title: "Best Practices for API Playground Implementation",
    excerpt:
      "A comprehensive guide to building interactive API testing environments that enhance developer experience.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: 6,
    title: "The ROI of Great API Documentation",
    excerpt:
      "How investing in quality API documentation pays dividends in developer adoption and customer satisfaction.",
    author: "Jennifer Walsh",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "Business",
    featured: false,
  },
]

function BlogContent() {
  const featuredPost = blogPosts.find((post) => post.featured)
  // const _regularPosts = blogPosts.filter((post) => !post.featured) // Future use

  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-12 flex-col max-w-4xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Blog</Badge>
            <div className="flex gap-4 flex-col">
              <h2 className="text-4xl font-semibold lg:text-5xl text-white">Latest insights and updates</h2>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Stay up to date with the latest trends in API documentation, developer experience, and product updates.
              </p>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="w-full">
              <div className="min-h-[24rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <div className="relative flex h-full flex-col justify-center items-center gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
                    <div className="text-center space-y-4">
                      <Badge className="bg-[#333333] text-white hover:bg-[#444444]">Coming Soon</Badge>
                      <h3 className="text-2xl leading-tight font-semibold font-sans tracking-[-0.04em] md:text-3xl md:leading-tight text-balance text-white">
                        Blog posts are coming soon
                      </h3>
                      <p className="font-sans text-base leading-relaxed md:text-lg md:leading-relaxed text-gray-400 max-w-md">
                        We&apos;re working on creating valuable content about API documentation, developer experience, and
                        industry insights. Stay tuned for our first posts!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { BlogContent }
