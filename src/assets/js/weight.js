(function weight() {
  /*
   * Type
   * {
   *   [month: number]: {
   *     [week: number]: number
   *   }
   * }
   */
  var eldestDaughterWeights = {
    0: {
      0: 2180
    },
    2: {
      1: 4400,
      2: 4600,
      3: 4800,
      4: 5000,
    },
    3: {
      1: 5200,
      2: 5200,
      3: 5500,
      4: 5700,
    },
    4: {
      1: 5800,
      2: 5800,
      3: 6000,
      4: 6100,
    },
    5: {
      1: 6100,
      2: 6100,
      3: 6300,
    },
  };

  // 出生体重描画スコープ
  (function startWeight() {
    var startWeight = eldestDaughterWeights["0"]["0"];
    $('#start').text(startWeight + 'グラム');
  })();

  // チャート・テーブル描画スコープ
  (function weightChart() {
    // 0ヶ月は出生体重のみなので除外
    var months = Object.keys(eldestDaughterWeights).filter(function (month) {
      return month !== '0';
    });
    months.forEach(function (month) {
      console.log({month});
      console.log(eldestDaughterWeights[month]);
    });
  })();
})();
