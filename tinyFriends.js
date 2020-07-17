function tinyFriends(name) {
    var tinyName = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName.length > tinyName.length) {
            tinyName = currentName;
        }
    }
    return currentName;
}
var smallestName = tinyFriends(['onionpio', 'le', 'borno', 'tasafi', 'leo', 'i']);
console.log(smallestName);