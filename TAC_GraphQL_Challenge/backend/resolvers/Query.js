import { GraphQLError } from 'graphql';

const checkAuthToken = (context) => { 
    if(!context.userId) {
        throw new GraphQLError('You are not authorized to see this page.', {
            extensions: {
                code: 'FORBIDDEN',
            },
        });
    }
}

const QueryResolver = {
    ping: () => "OK",

    roles: (parents, args, context) => {
        checkAuthToken(context)
        return context.db.roles
    },

    users: (parents, args, context) => {
        checkAuthToken(context)
        return context.db.users
    },

    categories: (parents, args, context) => {
        checkAuthToken(context)
        return context.db.categories
    },

    pages: (parents, args, context) => {
        checkAuthToken(context)
        return context.db.pages
    },

    assets: (parents, args, context) => {
        checkAuthToken(context)
        return context.db.assets
    },

    page: (parents, args, context) => {
        checkAuthToken(context)

        const page = context.db.pages.find(i => i.id == args.id)
        if (page.authorId !== context.userId) {
            throw new GraphQLError('You are not authorized to see this page. Please contact the author to request access to it!', {
              extensions: {
                code: 'FORBIDDEN',
              },
            });
        }

        return page
    }, 

    development: (parents, args, context) => {
        checkAuthToken(context)

        return JSON.stringify({
            status: "ok",
            version: "develop-0.9.2",
            flag: "TAC{69763c166cc0fcff891ceb609ccc0d550539272910c247a2ade9aeb1fec4737d}",
            filenameHmacKey: '4d7be1d49d435b689c1e9f909cdcd4d0266674dbc56191d0178d6264ff87a937' // Uses md5_hmac on filename
        })
    }
}

export default QueryResolver