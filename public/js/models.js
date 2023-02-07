const modelSBtn = document.getElementById('model-s-btn');
  const model3Btn = document.getElementById('model-3-btn');
  const modelXBtn = document.getElementById('model-x-btn');
  const modelYBtn = document.getElementById('model-y-btn');

  const modelS = document.getElementById('model-s');
  const model3 = document.getElementById('model-3');
  const modelX = document.getElementById('model-x');
  const modelY = document.getElementById('model-y');

  modelSBtn.addEventListener('click', function() {
    if (modelS.style.display === 'none') {
        modelS.style.display = 'block';
      } else {
        modelS.style.display = 'none';
      }
    });

  model3Btn.addEventListener('click', function() {
    if (model3.style.display === 'none') {
        model3.style.display = 'block';
      } else {
        model3.style.display = 'none';
      }
    });

  modelXBtn.addEventListener('click', function() {
    if (modelX.style.display === 'none') {
        modelX.style.display = 'block';
      } else {
        modelX.style.display = 'none';
      }
    });

  modelYBtn.addEventListener('click', function() {
    if (modelY.style.display === 'none') {
        modelY.style.display = 'block';
      } else {
        modelY.style.display = 'none';
      }
    });
  
