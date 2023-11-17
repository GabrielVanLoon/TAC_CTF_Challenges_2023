const PageResolver = {
    author: (parents, args, context) => {
        return context.db.users.find(i => i.id == parents.authorId)
    },

    categories: (parents, args, context) => {
        return context.db.categories.filter(i => parents.categories.includes(i.id))
    }, 
}

export default PageResolver