document.getElementById("bmiForm").addEventListener("submit",function(e){
    e.preventDefault();
    var gender       = document.getElementById('gender').value;
    var age          = parseInt(document.getElementById('age').value);
    var heightFeet   = parseInt(document.getElementById('height-feet').value);
    var heightInches = parseInt(document.getElementById('height-inches').value);
    var weight       = parseFloat(document.getElementById('weight').value);
    if(gender && age && heightFeet && heightInches && weight){
        var heightInMetters = ((heightFeet * 12) + heightInches) * 0.0254;
        var bmi = weight / (heightInMetters * heightInMetters);
        var resultElement = document.getElementById('result');

        var category = '';

        if(bmi < 18.5){
            category = 'Under Weight';
        }else if(bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight';
        }else if(bmi > 25 && bmi <= 29.9){
            category = 'Over Weight';
        }else{
            category = 'Obese';
        }

        let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category:' + category;

        resultElement.innerHTML = resultMessage;
    }
});