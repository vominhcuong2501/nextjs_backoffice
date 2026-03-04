/**
 * Display content (mock). Later replace with API: getContent() → fetch('/api/content') or similar.
 */
import content from './content.json'

export type Content = typeof content

export function getContent(): Content {
    return content
}

export default content
