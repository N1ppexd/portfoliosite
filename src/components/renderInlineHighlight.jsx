export function renderInlineHighlight(text) {
  // Braced text in project descriptions is rendered as an accent highlight.
  return text.split(/(\{[^}]+\})/g).map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      return <mark className="project-emphasis" key={`${part}-${index}`}>{part.slice(1, -1)}</mark>
    }

    return part
  })
}
