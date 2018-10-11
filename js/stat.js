'use strict';

var getMaxElement = function(array) {
  var maxElement = {
    value: array[0],
    index: 0
  };
    for(var i = 1; i <= array.length - 1; i++) {
      if (array[i] > maxElement.value) {
        maxElement.value = array[i];
        maxElement.index = i;
      }
    }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);

  var maxElement = getMaxElement(times);
  var histogramHeight = 150;
  var step = histogramHeight / (maxElement.value - 0);

  var initialX = 125;
  var initialY = 90;
  var barWidth = 40;
  var indent = 50;

  for (var i = 0; i <= times.length - 1; i++) {
    if (names[i] === 'Вы') {
      ctx.fillstyle = 'rgba(255, 0, 0, 1.0)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
    }
    ctx.fillRect(initialX + barWidth * i + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + barWidth * (i + 1) + indent * i, initialY + 10);
  }

  ctx.fillStyle = '#000000';
  ctx.fillText('Лучший результат: ' + maxElement.value.toFixed(2) + ' у игрока ' + names[maxElement.index], 125, 270);
};
