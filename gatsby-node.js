const axios = require('axios')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const url = "https://my-json-server.typicode.com/h0rhay/json-server-mock-api/products"
exports.onCreateNode  = (({ actions, createNodeId, node, store, cache }) => {
  const { createNode } = actions
  const processLargeProductImage = productData => {
    let fileNode
    try {
      id = productData.id
      fileNode = createRemoteFileNode({
        url: productData.largeImg, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
        id: id
      })

    } catch (error) {
      console.warn('error creating node', error);
    }
  }
  const processSmallProductImage = productData => {
    let fileNode
    try {
      id = productData.id
      fileNode = createRemoteFileNode({
        url: productData.smallImg, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
        id: id
      })

    } catch (error) {
      console.warn('error creating node', error);
    }
  }
  const processProductDetailImage = productData => {
    let fileNode
    try {
      id = productData.id
      fileNode = createRemoteFileNode({
        url: productData.produtDetailImage, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
        id: id
      })

    } catch (error) {
      console.warn('error creating node', error);
    }
  }
  return axios.get(url).then(async (res) => {
    const items = await Promise.all(res.data.map(async (dataItem) => {
      const lgProductImage = await processLargeProductImage(dataItem)
      const smProductImage = await processSmallProductImage(dataItem)
      const productDetailImage = await processProductDetailImage(dataItem)
      return {
        lgProductImage,
        smProductImage,
        productDetailImage
      }
    }))
    items.map(createNode)
  })
})
