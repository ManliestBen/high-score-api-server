async function generateIndexResponse(currPage, modelName, modelPlural) {
  try {
    const responseObject = {}
    const resources = await modelName.find({})
    const pageCount = Math.ceil(resources.length / 10)
    
    if (currPage > pageCount || currPage <= 0) {
      throw new Error('Invalid page parameter')
    }
    
    if (currPage < pageCount) {
      responseObject.next = `/api/${modelPlural}?page=${currPage + 1}`
    } else {
      responseObject.next = null
    }
    
    if (currPage <= pageCount && currPage !== 1) {
      responseObject.prev = `/api/${modelPlural}?page=${currPage - 1}`
    } else {
      responseObject.prev = null
    }
    
    responseObject.count = resources.length
    responseObject.results = resources.slice((currPage - 1) * 10, ((currPage - 1) * 10) + 10)
    return responseObject
    
  } catch (error) {
    return error
  }
}

export {
  generateIndexResponse
}