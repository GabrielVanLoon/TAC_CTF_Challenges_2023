const PageSummaryResolver = {
    author: (parents, args, context) => {
        return context.db.users.find(i => i.id == parents.authorId)
    }
}

export default PageSummaryResolver