/**
 * Nội dung hiển thị (mock). Sau này thay bằng API: getContent() → fetch('/api/content') hoặc tương tự.
 */
import content from './content.json'

export type Content = typeof content

export function getContent(): Content {
    return content
}

export default content
