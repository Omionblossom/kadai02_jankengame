// 一番最初に必ずやってほしいこと🤗
// alert();　読み方　あらーと
// alert(1111);

// console.log("にかいめのじゃばすくりぷと");

// console.log(23 + 5);

// console.log(2000 - 1800);

// console.log("18 + 5");

// var name = "ゆかわ";
// console.log(name);

// var hako = 1;
// if (hako === 1) {
//   console.log("1がはいっています");
// } else if (hako === 2) {
//   console.log("2がはいっています");
// } else if (hako === 3) {
//   console.log("3がはいっています");
// }

// var point = 90;
// if (point >= 80) {
//   console.log("おめでとう！");
// } else {
//   console.log("もっとがんばりましょう");
// }

//　0から5までの乱数を表示する // 0からカウントスタート。 ５迄いきたい時は＋１//
// math.floor でくりあげる。 Math.random
// var random = Math.floor(Math.random() * 5);
// console.log(random, "らんだむな数字");

// if (random === 0) {
//     console.log("だいきち");
// } else if (random === 1) {
//     console.log("ちゅうきち");
// } else if (random === 2) {
//     console.log("しょうきち");
// } else if (random === 3) {
//     console.log("きち");
// } else if (random === 4) {
//     console.log("すえきち");
// }

// $(".a").on("click", function () {
//   //
// 　//   alert("h1がおされました")
//   // //
//   // $(".a").css("color", "red");
//   // $(".a").fadeOut(2000);  // 2000 は2秒
//   // $(".a").fadeIn(2000);  // 2000 は2秒
//   // //

//   var random = Math.floor(Math.random() * 5);
//   console.log(random, "ランダムな数字");

//   if (random === 0) {
//     console.log("大吉");
//     $(".a").text("大吉");
//   } else if (random === 1) {
//     console.log("中吉");
//     $(".a").text("中吉");
//   } else if (random === 2) {
//     console.log("小吉");
//     $(".a").text("小吉");
//   } else if (random === 3) {
//     console.log("吉");
//     $(".a").text("吉");
//   } else if (random === 4) {
//     console.log("末");
//     $(".a").text("末");
//   }

//   //↓のかっこ削除しないでください
// });

// $(".a").on("click", function () {
//     //
//     // alert("h1が押されました！");
//     // 追加したもの↓
//     // $(".a").css("color", "red");
//     //できる人は記述して動かしてみましょう🤗
//     // $(".a").fadeOut(2000);
//     // $(".a").fadeIn(2000);
//     //できる人は記述して動かしてみましょう🤗
  
//     var random = Math.floor(Math.random() * 5);
//     console.log(random, "ランダムな数字");
  
//     if (random === 0) {
//       console.log("大吉");
//       $(".a").text("大吉");
//     } else if (random === 1) {
//       console.log("中吉");
//       $(".a").text("中吉");
//     } else if (random === 2) {
//       console.log("小吉");
//       $(".a").text("小吉");
//     } else if (random === 3) {
//       console.log("吉");
//       $(".a").text("吉");
//     } else if (random === 4) {
//       console.log("末");
//       $(".a").text("末");
//     }
  
    //↓のかっこ削除しないでください
//   });


// <!--ここから課題のじゃんけん-->

// $(".dinosaur").on("click", function () {
//   console.log ("OK")
//   alert ("こわっ"); 
// }


// 恐竜じゃんけんを作る
// えらべる恐竜はTrex、トリケラトプス、アンキロサウルスの3種類
// T>Tri＞Anky＞Tの順番のさんすくみ（じゃんけんと同じ）
// ラウンド数のカウントと、あいこのカウントを入れたい
    var count_value = 0;
    var count_tie = 0;
    var game_count = 0;

// あいこのカウントが３になったら、イグアノドーんを登場させる
// ａからティラノ
  $(".a").on("click", function () {
    
    // alert("ティラノが檻から逃げました！");
    // // 追加したもの↓
    // $(".a").css("color", "red");
    // // できる人は記述して動かしてみましょう🤗
    // $(".a").fadeOut(2000);
    // $(".a").fadeIn(2000);
    // // できる人は記述して動かしてみましょう🤗
    
    var mine = 0
    var enemy = Math.floor(Math.random() * 3);
    console.log(enemy, "敵のえらんだカード");
    if (enemy === 0) {
        console.log("ティラノサウルス");
        $(".enemy").text("ティラノサウルス_>>>>")
        $(".enemy").css("color", "red")
    } else if (enemy === 1) {
        console.log("トリケラトプス")
        $(".enemy").text("トリケラトプス_^^^_")
        $(".enemy").css("color", "green")
    } else if (enemy === 2) {
        console.log("アンキロサウルス___◆")
        $(".enemy").text("アンキロサウルス___◆")
        $(".enemy").css("color", "purple")    
    }

    var battle = enemy - mine;

    if (battle === 0) {
      console.log("ひきわけぇぇ！");
      $(".result").text("ひきわけぇぇ！");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(500);
      $(".result").css("color", "black");
      $(".result").fadeIn(500);  
      count_tie += 1 
    } else if (battle === 1) {
      console.log("あなたの勝ち！");
      $(".result").text("あなたの勝ち！");
      $(".result").css("color", "black");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(1000);
      $(".result").css("color", "red");
      $(".result").fadeIn(1000);
      $(".result").img("js/images/Trexroar.gif");
      count_tie = 0   //連続あいこをリセットする 
      // がぞうを表示する
      $(".result").img.src="js/images/Trexroar.gif"

    } else if (battle === 2) {
      console.log("ざんねん！あなたの負け！");
      $(".result").text("ざんねん！あなたの負け！");
      $(".result").css("color", "grey");
      $(".result").fadeOut(3000);
      count_tie = 0   //連続あいこをリセットする
    } else if (battle === -1) {
       console.log("ざんねん！あなたの負け！");
        $(".result").text("ざんねん！あなたの負け！");
        $(".result").css("color", "grey");
        $(".result").fadeOut(3000);
        count_tie = 0   //連続あいこをリセットする
    } else if (battle === -2) {
        console.log("あなたの勝ち！");
        $(".result").text("あなたの勝ち！");
        $(".result").css("color", "black");
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(1000);
        $(".result").css("color", "red");
        $(".result").fadeIn(1000);
        count_tie = 0   //連続あいこをリセットする
    }
  
    if (count_tie === 3){
        console.log("いぐあのどー－－－ん！")
        $(".hidden").css("color", "lime");
        $(".hidden").text("いぐ、あの、どー－－－ん！");
    } else {
        console.log("______")
        $(".hidden").css("color", "black");
        $(".hidden").text("________");
    }

    console.log(".disp_count")
    game_count += 1
    $(".disp_count").text(game_count);
    
    // 確認が必要。10ゲーム目で半分以上勝っていたら大勝利と称える。
    if (game_count >= 10){
      console.log("終了")
      if (count_value >= 6){
        $(".hidden").css("color", "gold");
        $(".hidden").css("font-size", "38px");
        $(".hidden").text("大勝利!!! VICTORY!!!");
      }else if (count_value = 5) {
        $(".hidden").css("color", "silver");
        $(".hidden").text("次はもっといける！");
      }else if (count_value <= 4) {
        $(".hidden").css("color", "black");
        $(".hidden").text("次に期待....");
        count_value = 0;   // 0にカウントリセット
        $(".hidden").text("＿＿＿＿＿");
      }
    }else {}


    //↓のかっこ削除しないでください
  });

//   トリケラえらぶ
  $(".b").on("click", function () {
        
    var mine = 1
    var enemy = Math.floor(Math.random() * 3);
    console.log(enemy, "敵のえらんだカード");
    if (enemy === 0) {
        console.log("ティラノサウルス");
        $(".enemy").text("ティラノサウルス_>>>>")
        $(".enemy").css("color", "red")
    } else if (enemy === 1) {
        console.log("トリケラトプス")
        $(".enemy").text("トリケラトプス_^^^_")
        $(".enemy").css("color", "green")
    } else if (enemy === 2) {
        console.log("アンキロサウルス___◆")
        $(".enemy").text("アンキロサウルス___◆")
        $(".enemy").css("color", "purple")    
    }

    var battle = enemy - mine;

    if (battle === 0) {
      console.log("ひきわけぇぇ！");
      $(".result").text("ひきわけぇぇ！");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(500);
      $(".result").css("color", "black");
      $(".result").fadeIn(500);  
      count_tie += 1 
    } else if (battle === 1) {
      console.log("あなたの勝ち！");
      $(".result").text("あなたの勝ち！");
      $(".result").css("color", "black");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(1000);
      $(".result").css("color", "red");
      $(".result").fadeIn(1000);
      count_tie = 0   //連続あいこをリセットする 
    } else if (battle === 2) {
      console.log("ざんねん！あなたの負け！");
      $(".result").text("ざんねん！あなたの負け！");
      $(".result").css("color", "grey");
      $(".result").fadeOut(3000);
      count_tie = 0   //連続あいこをリセットする
    } else if (battle === -1) {
       console.log("ざんねん！あなたの負け！");
        $(".result").text("ざんねん！あなたの負け！");
        $(".result").css("color", "grey");
        $(".result").fadeOut(3000);
        count_tie = 0   //連続あいこをリセットする
    } else if (battle === -2) {
        console.log("あなたの勝ち！");
        $(".result").text("あなたの勝ち！");
        $(".result").css("color", "black");
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(1000);
        $(".result").css("color", "red");
        $(".result").fadeIn(1000);
        count_tie = 0   //連続あいこをリセットする
    }
  
    if (count_tie === 3){
        console.log("いぐあのどー－－－ん！")
        $(".hidden").css("color", "lime");
        $(".hidden").text("いぐ、あの、どー－－－ん！");
    } else {
        console.log("______")
        $(".hidden").css("color", "black");
        $(".hidden").text("________");
    }

    console.log(".disp_count")
    game_count += 1
    $(".disp_count").text(game_count);
    
    // 確認が必要。10ゲーム目で半分以上勝っていたら大勝利と称える。
    if (game_count >= 10){
      console.log("終了")
      if (count_value >= 6){
        $(".hidden").css("color", "gold");
        $(".hidden").css("font-size", "38px");
        $(".hidden").text("大勝利!!! VICTORY!!!");
      }else if (count_value = 5) {
        $(".hidden").css("color", "silver");
        $(".hidden").text("次はもっといける！");
      }else if (count_value <= 4) {
        $(".hidden").css("color", "black");
        $(".hidden").text("次に期待....");
        count_value = 0;   // 0にカウントリセット
        $(".hidden").text("＿＿＿＿＿");
      }
    }else {}

    //↓のかっこ削除しないでください
  });

//   アンキロえらぶ
$(".c").on("click", function () {
        
    var mine = 2
    var enemy = Math.floor(Math.random() * 3);
    console.log(enemy, "敵のえらんだカード");
    if (enemy === 0) {
        console.log("ティラノサウルス");
        $(".enemy").text("ティラノサウルス_>>>>")
        $(".enemy").css("color", "red")
    } else if (enemy === 1) {
        console.log("トリケラトプス")
        $(".enemy").text("トリケラトプス_^^^_")
        $(".enemy").css("color", "green")
    } else if (enemy === 2) {
        console.log("アンキロサウルス___◆")
        $(".enemy").text("アンキロサウルス___◆")
        $(".enemy").css("color", "purple")    
    }

    var battle = enemy - mine;

    if (battle === 0) {
      console.log("ひきわけぇぇ！");
      $(".result").text("ひきわけぇぇ！");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(500);
      $(".result").css("color", "black");
      $(".result").fadeIn(500);  
      count_tie += 1 
    } else if (battle === 1) {
      console.log("あなたの勝ち！");
      $(".result").text("あなたの勝ち！");
      $(".result").css("color", "black");
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(100);
      $(".result").fadeIn(100);
      $(".result").fadeOut(1000);
      $(".result").css("color", "red");
      $(".result").fadeIn(1000);
      count_tie = 0   //連続あいこをリセットする 
    } else if (battle === 2) {
      console.log("ざんねん！あなたの負け！");
      $(".result").text("ざんねん！あなたの負け！");
      $(".result").css("color", "grey");
      $(".result").fadeOut(3000);
      count_tie = 0   //連続あいこをリセットする
    } else if (battle === -1) {
       console.log("ざんねん！あなたの負け！");
        $(".result").text("ざんねん！あなたの負け！");
        $(".result").css("color", "grey");
        $(".result").fadeOut(3000);
        count_tie = 0   //連続あいこをリセットする
    } else if (battle === -2) {
        console.log("あなたの勝ち！");
        $(".result").text("あなたの勝ち！");
        $(".result").css("color", "black");
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(100);
        $(".result").fadeIn(100);
        $(".result").fadeOut(1000);
        $(".result").css("color", "red");
        $(".result").fadeIn(1000);
        count_tie = 0   //連続あいこをリセットする
    }
  
    if (count_tie === 3){
        console.log("いぐあのどー－－－ん！")
        $(".hidden").css("color", "lime");
        $(".hidden").text("いぐ、あの、どー－－－ん！");
    } else {
        console.log("______")
        $(".hidden").css("color", "black");
        $(".hidden").text("________");
    }

    console.log(".disp_count")
    game_count += 1
    $(".disp_count").text(game_count);
    
    // 確認が必要。10ゲーム目で半分以上勝っていたら大勝利と称える。
    if (game_count >= 10){
      console.log("終了")
      if (count_value >= 6){
        $(".hidden").css("color", "gold");
        $(".hidden").css("font-size", "38px");
        $(".hidden").text("大勝利!!! VICTORY!!!");
      }else if (count_value = 5) {
        $(".hidden").css("color", "silver");
        $(".hidden").text("次はもっといける！");
      }else if (count_value <= 4) {
        $(".hidden").css("color", "black");
        $(".hidden").text("次に期待....");
        count_value = 0;   // 0にカウントリセット
        $(".hidden").text("＿＿＿＿＿");
      }
    }else {}

    //↓のかっこ削除しないでください
  });

  
//   ひみつえらぶ
$(".d").on("click", function () {

    if (count_tie >= 0){
      $(".result").text("よく見つけたな！");
      $(".result").css("color", "black");
      console.log("いぐあのどー－－－ん！")
      $(".hidden").css("color", "lime");
      $(".hidden").text("いぐ、あの、どー－－－ん！");
    } else {
      console.log("______")
      $(".hidden").css("color", "black");
      $(".hidden").text("________");
    }

  //↓のかっこ削除しないでください
});







