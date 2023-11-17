import assetsData from "./data/assets.js";
import categoryData from "./data/categories.js";
import pages from "./data/pages.js";
import rolesData from "./data/roles.js";
import usersData from "./data/users.js";

const db = {
    users: usersData,
    roles: rolesData,
    categories: categoryData,
    pages: pages,
    assets: assetsData
}

export default db