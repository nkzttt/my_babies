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
    $('#startWeight').text(startWeight.toLocaleString());
  })();

  // チャート・テーブル描画スコープ
  (function weightChartAndTable() {
    // 0ヶ月は出生体重のみなので除外
    var months = Object.keys(eldestDaughterWeights).filter(function (month) {
      return month !== '0';
    });

    // チャートスコープ
    (function weightChart() {

    })();

    // テーブルスコープ
    (function weightTable() {
      var html = '';
      months.forEach(function (month) {
        var weeks = Object.keys(eldestDaughterWeights[month]);
        weeks.forEach(function (week, i) {
          html += '<tr>';
          html += i === 0 ? '<td rowspan="4">' + month + '</td>' : '';
          html += '<td>' + week + '</td>';
          html += '<td>' + eldestDaughterWeights[month][week].toLocaleString() + '</td>';
          html += '</tr>';
        });
      });
      $('#weightTable').html(html);
    })();
  })();
})();
