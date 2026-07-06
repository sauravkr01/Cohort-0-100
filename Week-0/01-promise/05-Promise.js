function getUser() {
    return getUser()
        .then(function (user) {
            return getProfile(user);
        })
        .then(function (profile) {
            return getOrders(profile);
        })
        .then(function (orders) {
            console.log(orders);
        })
        .catch(function (err) {
            console.log(err);
        });
}

//meow........to resolve this muchh of headatch me use asyn/await ( given by js)