// components/ResourceList.js
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function ResourceList({ resources, showMoreLink = true }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">The Best AI Photo Editors</h2>
        {showMoreLink && (
          <Link href="/ai-photo-editors" className="text-blue-600 hover:text-blue-800 transition-colors">
            More AI Photo Editors →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-video w-full group"
            >
              <Image
                src={resource.image || '/placeholder-image.png'}
                alt={resource.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </a>
            <CardHeader className="flex-1">
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 w-full"
              >
                <CardTitle className="line-clamp-1 flex-1 text-sm font-bold lg:text-base overflow-hidden whitespace-nowrap" title={resource.name}>{resource.name}</CardTitle>
                <ExternalLink size={16} className="flex-shrink-0" />
              </a>
              <CardDescription className="line-clamp-3" title={resource.description}>{resource.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}