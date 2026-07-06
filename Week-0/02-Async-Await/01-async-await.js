// async/await Promise ke upar bana hua syntax hai.
// Ye Promise ko replace nahi karta, bas use likhne ka easy tareeka deta hai.

// getUser()
//     .then(function (user) {
//         return getProfile(user);
//     })
//     .then(function (profile) {
//         return getOrders(profile);
//     })
//     .then(function (orders) {
//         console.log(orders);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


//  SAME AS 
async function main() {
    try {
        let user = await getUser();
        let profile = await getProfile(user);
        let orders = await getOrders(profile);

        console.log(orders);
    } catch (err) {
        console.log(err);
    }
}