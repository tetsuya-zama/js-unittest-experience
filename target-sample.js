// function add(n,m){
//     console.log(n + m);
// }

//↑のテスタビリティを強化↓

function add(logger){
    return function(n,m){
        logger.log(n + m);
    };
}

exports.add = add;