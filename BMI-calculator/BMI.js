document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultSection = document.getElementById('result');
    const bmiValueEl = document.getElementById('bmiValue');
    const categoryEl = document.getElementById('category');
    const tipsEl = document.getElementById('tips');

    calculateBtn.addEventListener('click', calculateBMI);
    clearBtn.addEventListener('click', clearForm);

    function calculateBMI() {
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const feet = parseFloat(document.getElementById('feet').value) || 0;
        const inches = parseFloat(document.getElementById('inches').value) || 0;
        const weight = parseFloat(document.getElementById('weight').value);

        
        if (!age || !gender || (feet === 0 && inches === 0) || !weight) {
            alert('Please fill in all required fields.');
            return;
        }

        
        const totalInches = (feet * 12) + inches;
        const heightMeters = totalInches * 0.0254;

        const bmi = weight / (heightMeters * heightMeters);
        const bmiRounded = bmi.toFixed(1);

        let category, tips, categoryClass;

        if (bmi < 18.5) {
            category = 'Underweight';
            categoryClass = 'underweight';
            tips = 'Consider consulting a nutritionist. Focus on nutrient-rich foods and strength training to build healthy weight.';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal';
            categoryClass = 'normal';
            tips = 'Great job! Maintain your healthy weight with balanced nutrition and regular physical activity.';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            categoryClass = 'overweight';
            tips = 'Consider increasing physical activity and reviewing your diet. Small changes can make a big difference.';
        } else {
            category = 'Obese';
            categoryClass = 'obese';
            tips = 'Please consult a healthcare professional for personalized guidance on achieving a healthier weight.';
        }

        
        bmiValueEl.textContent = bmiRounded;
        categoryEl.textContent = category;
        categoryEl.className = 'category ' + categoryClass;
        tipsEl.textContent = tips;
        resultSection.classList.remove('hidden');

        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function clearForm() {
        document.getElementById('age').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('feet').value = '';
        document.getElementById('inches').value = '';
        document.getElementById('weight').value = '';
        resultSection.classList.add('hidden');
        bmiValueEl.textContent = '--';
        categoryEl.textContent = '';
        categoryEl.className = 'category';
        tipsEl.textContent = '';
    }
});
