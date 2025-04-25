import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
    ssgName: 'astro',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src/content'],  // Scans src/content and its subdirectories
            models: [
                {
                    name: 'Post',
                    type: 'page',
                    filePath: 'src/content/blog/{slug}.md',  // Matches files like first-post.md
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'date', type: 'date', required: true },
                        { name: 'body', type: 'markdown', required: true },
                    ],
                    urlPath: '/blog/{slug}'  // Matches your blog post URLs
                }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',  // Astro’s default static assets directory
                uploadDir: 'images',  // Where uploaded images will go
                publicPath: '/'
            }
        })
    ],
    postInstallCommand: 'npm i --no-save @stackbit/types'
});
