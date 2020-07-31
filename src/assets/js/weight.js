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
      4: 6400,
    },
    6: {
      1: 6400,
      2: 6500,
      3: 6500,
      4: 6600,
    },
    7: {
      1: 6600,
      2: 6600,
      3: 6600,
      4: 6600,
    },
    8: {
      1: 6600,
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
      var labels = months.map(function (month) {
        var labels = Object.keys(eldestDaughterWeights[month]).fill('');
        labels[0] = month + 'ヶ月';
        return labels;
      }).reduce(function (prev, current) {
        return prev.concat(current);
      }, []);
      var eldestDaughterWeightValues = months.map(function (month) {
        var weeks = Object.keys(eldestDaughterWeights[month]);
        return weeks.map(function (week) {
          return eldestDaughterWeights[month][week];
        });
      }).reduce(function (prev, current) {
        return prev.concat(current);
      }, []);
      // source: https://www.mhlw.go.jp/stf/shingi/2r9852000001tmct-att/2r9852000001tmea.pdf
      var averageWeightValues = [4460, 4780, 5100, 5420, 5605, 5790, 5975, 6160, 6302, 6445, 6587, 6730, 6840, 6950, 7060, 7170, 7257, 7345, 7432, 7520, 7587, 7655, 7722, 7790, 7845/* , 7900, 7955, 8010*/];
      var data = {
        labels: labels,
        series: [ averageWeightValues, eldestDaughterWeightValues ],
      };
      new Chartist.Line('.ct-chart', data, {
        chartPadding: { left: 15 },
        axisY: {
          labelInterpolationFnc: function (v) {
            return v.toLocaleString();
          }
        }
      });
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
