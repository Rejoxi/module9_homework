const btn = document.querySelector('.j-btn');

function useRequest(height, width){
    fetch(`https://picsum.photos/${width}/${height}`)
    .then ((response) => {
        console.log(response);
        return response;
      })
    .then((data) => {
          console.log(data.url);
      })
};

 function Check(width, height){
    if(width > 300 || width <100 || height > 300 || height < 100)
      console.log('Одно из чисел вне диапазона от 100 до 300');
    else{
      useRequest(width, height);
    }
  }

btn.addEventListener('click', () => {
  const width = document.querySelector('.width').value;
  const height = document.querySelector('.height').value;
  console.log('result ->')
  Check(width, height);
});