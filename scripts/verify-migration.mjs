import {readdir, readFile} from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const outputDirectoryURL = new URL('../dist/', import.meta.url)
const outputDirectory = fileURLToPath(outputDirectoryURL)
const canonicalOrigin = 'https://bardosfoundation.org'
const retiredDomainPattern = /(?:https?:\/\/)?(?:www\.)?bardos\.foundation/gi

async function findFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true})
  const files = await Promise.all(entries.map(entry => {
    const entryPath = path.join(directory, entry.name)
    return entry.isDirectory() ? findFiles(entryPath) : entryPath
  }))

  return files.flat()
}

const files = await findFiles(outputDirectory)
const textFiles = files.filter(file => /\.(?:html|txt|xml)$/.test(file))
const failures = []

for (const file of textFiles) {
  const contents = await readFile(file, 'utf8')
  const relativePath = path.relative(outputDirectory, file)

  if (retiredDomainPattern.test(contents)) {
    failures.push(`${relativePath} contains bardos.foundation`)
  }
  retiredDomainPattern.lastIndex = 0

  if (file.endsWith('.html')) {
    const canonical = contents.match(/<link rel="canonical" href="([^"]+)"/i)?.[1]
    if (!canonical?.startsWith(`${canonicalOrigin}/`)) {
      failures.push(`${relativePath} is missing a canonical URL on ${canonicalOrigin}`)
    }
  }
}

const robots = await readFile(new URL('robots.txt', outputDirectoryURL), 'utf8')
if (!robots.includes(`${canonicalOrigin}/sitemap-index.xml`)) {
  failures.push('robots.txt does not reference the canonical sitemap')
}

const sitemapIndex = await readFile(new URL('sitemap-index.xml', outputDirectoryURL), 'utf8')
if (!sitemapIndex.includes(canonicalOrigin)) {
  failures.push('sitemap-index.xml does not use the canonical origin')
}

if (failures.length > 0) {
  console.error(`Migration verification failed:\n- ${failures.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log(`Migration verification passed for ${textFiles.length} generated files.`)
}
