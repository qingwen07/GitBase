// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Photo Editor Tools - Find the Best AI Photo Editing Software',
  description: 'Explore our curated collection of AI-powered photo editing tools. Compare features, read reviews, and find the perfect AI photo editor for your needs.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Top Of AI Photo Editors
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">
          Your Ultimate Guide to AI-Powered Image Editing
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Discover and compare the best AI photo editing tools in one place. From professional image enhancement to creative AI-powered effects, 
          find the perfect tool for your needs with our comprehensive reviews and comparisons.
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}