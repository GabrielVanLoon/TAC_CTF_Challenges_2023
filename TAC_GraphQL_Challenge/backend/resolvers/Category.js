import { GraphQLError } from 'graphql';

const CategoryResolver = {
    pages: (parents, args, context) => {
        // Get Pages from category
        let pages = context.db.pages.filter(i => i.categories.includes(parents.id))

        // Modify pages to have the query depth
        let queryDepth = parents.queryDepth || 0
        pages = pages.map((i) => { 
            return { ...i, queryDepth: queryDepth + 1 }
        })

        // Query depth limit to avoid DoS
        // console.log(queryDepth)
        if(queryDepth > 5){
            // console.log("ESTOUROU")
            // throw new GraphQLError('Sorry, you reached the query depth limit! ;(', {
            //     extensions: {
            //         code: 'FORBIDDEN',
            //     },
            // });
            return undefined
        }
        
        return pages
    }
}

export default CategoryResolver