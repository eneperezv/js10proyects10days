document.getElementById("bmiForm").addEventListener('submit',function(e){
    let gender       = document.getElementById('gender').value;
    let age          = parseInt(document.getElementById('age').value);
    let heightFeet   = parseInt(document.getElementById('height-feet').value);
    let heightInches = parseInt(document.getElementById('height-inches').value);
    let weight       = parseFloat(document.getElementById('weight').value);
});