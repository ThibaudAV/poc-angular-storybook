declare module '*.md' {
  const content: string
  export default content
}
declare module '*.mdx' {
  const content: string
  export default content
}
declare module '*.scss' {
  const css: { [key: string]: string }
  export default css
}
declare module '*.sass' {
  const css: { [key: string]: string }
  export default css
}
declare module '*.svg' {
  const content: any
  export default content
}
