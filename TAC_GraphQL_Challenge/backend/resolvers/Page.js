import { GraphQLError } from 'graphql';

const PageResolver = {
    author: (parents, args, context) => {
        return context.db.users.find(i => i.id == parents.authorId)
    },

    categories: (parents, args, context) => {
        // Filter Categories
        let categories = context.db.categories.filter(i => parents.categories.includes(i.id))
        
        // Rule to prevent queries with huge depths
        let queryDepth = parents.queryDepth || 0
        categories = categories.map((i) => { 
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

        return categories
    }, 
}

export default PageResolver