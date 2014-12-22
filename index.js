angular.module("transApp",[])
.controller("transCtrl", myCtrl);



function myCtrl($scope){
  angular.extend($scope, {
    
    
    blocks: [
      { img: 'http://1.bp.blogspot.com/-R4Ng3Z6g3-4/UYJIVp_2ppI/AAAAAAAACao/MaH-MRBZ9Nw/s1600/%E6%9C%AA%E5%91%BD%E5%90%8D.png',
        title: '性別光譜',
        text:'xxx'},
      {img : 'http://upload.wikimedia.org/wikipedia/commons/a/a9/A_sunflower.jpg'},
      {},
      {}]
    
  });
}
