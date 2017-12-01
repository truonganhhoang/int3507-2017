export const getUrl = (url) => {
  if(process.env.NODE_ENV === 'development') {
    let domain = 'http://localhost:3333/'
    return domain + url
  }
  return url
}