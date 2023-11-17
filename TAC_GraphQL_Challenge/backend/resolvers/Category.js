const CategoryResolver = {
    pages: (parents, args, context) => {
        return context.db.pages.filter(i => i.categories.includes(parents.id))
    }
}

export default CategoryResolver