import { graphql, useStaticQuery } from 'gatsby'


const useImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(
                width: 800
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
              )
          }
        }
      }
    }
  `)

  const allImages = data.allImageSharp.edges

  return allImages.map(img => {
    const IMAGE = img.node
    return IMAGE
  })
}

export default useImages