export async function load({ url }) {
    const title = url.pathname.split("/").pop(); // Get the last part of the path
    if (title === 'admin') return { showLayout: false }

    // Define a map of titles to return values
    const pages = {
        'deal-contracts': {
            title: "Active Deal Contracts",
            gotoButton: "View deal contracts"
        },
        'approve-users': {
            title: "Approve Users",
            gotoButton: "Go to approve users"
        },
        'approve-brands': {
            title: "Approve Brands",
            gotoButton: "Go to approve brands"
        },
        'email': {
            title: "View Emails",
            gotoButton: "View sent emails"
        }
    };


    const allPages = Object.keys(pages); // Convert pages object to an array of keys

    //all of the links that are not that link itself, with their url and titles
    const links = allPages.filter(page => page !== title).map(page => { return { link: `/admin/${page}`, title: pages[page].gotoButton } });

    pages[title].links = links;

    // Return the value corresponding to the title, or a default value if title not found
    return pages[title]
}
