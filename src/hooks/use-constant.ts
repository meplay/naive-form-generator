export function useConstant() {
  const appTitle = import.meta.env.VITE_APP_NAME
    .split('-')
    .map(item => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(' ')

  const githubUrl = 'https://github.com/zb980921/naive-form-generator'

  return {
    appTitle,
    githubUrl,
  }
}
