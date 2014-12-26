angular.module("transApp",[])
.controller("transCtrl", myCtrl);



function myCtrl($scope){
  angular.extend($scope, {
    
    
    blocks: [
      {img: 'http://blogs-images.forbes.com/natalierobehmed/files/2014/11/andreja-1410x19403111111111.jpg',
       title: '認識跨性別',
       text:'對於「跨性別者」這個字的定義問題目前還有很多爭議。不過目前最廣為接受的定義是：
那些在出生的時候根據其性器官而被指定了某個性別，但是卻感覺到那個性別是對他們一種錯誤或不完整的描述的人。
另外一種說法是：那些對其出生時被指定的性別感到無法認同的人。'
      
       
      {img:'http://groundreport.com/wp-content/uploads/2013/11/h8.jpg',
       title:'跨性別社會處境',

       text:'愛爾蘭跨性別平權團體TENI（Transgender Equality Network Ireland）發表一份跨性別人士心理健康問卷調查，210人次填寫。（台灣也有零星做過，人數皆約50人之間，結果在自殺、曾受性侵和低薪或無薪方面也相當顯著。）

跨性別人士高達78%曾有自殺意圖，其中48%至少曾發生一次。自我傷害也有44%。

6%跨性別人士曾被性侵害，36%曾被性騷擾，16%遭遇過直接攻擊，64%遭遇過嘲笑。',

        },
        {img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYGDY18F8qgcXrBCNZVICz9pRw5hpLYoR-HXnUHOT2hhYa8EMl',
        	title:'國際跨性別紀念日 Transgender Day of Remembrance',
        	text:'國際跨性別紀念日(英文：Transgender Day of Remembrance)日期為11月20日。它的設立是為了紀念因反跨性別的憎恨或偏見而遭殺害的跨性別朋友。
這個行動的舉行是為了向1998年11月28日被謀殺的Rita Hester致敬所發起的，始於1998年的〝Remembering Our Dead〞（紀念我們的死者）網站計畫以及1999年在舊金山舉行的燭光守夜活動。Rita Hester的死如同大多數反跨性別的謀殺案件，至今尚未有結果。',}
         ]
    
  });
}
