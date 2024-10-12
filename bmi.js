// คำนวณ BMI และส่งค่าเพื่อแสดงผล

function evaBMI() {
  const wt = document.getElementById("weight").value
  const ht = document.getElementById("height").value
  const result = document.getElementById("result")
  const eva = document.getElementById("eva")
  let bmi = 0.0
  let bmiresult = ''
  let bmieva = ''


  // BMI calculation
  bmi = Number(wt)/(Number(ht/100)*Number(ht/100))
  console.log ("bmi =", bmi)
  bmiresult = `<p> ค่าBMI= ${bmi} </p>`
  result.innerHTML = bmiresult


  // BMI evaluation
  if (bmi <= 18.5) {
    bmieva = `<p>สรุปผล "น้ำหนักน้อยไปหน่อย</p>"`     
  } else if (bmi >= 18.5 && bmi <= 24.9 ) {
    bmieva = `<p>สรุปผล "น้ำหนักเป็นปกติ</p>"`
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bmieva = `<p>สรุปผล "น้ำหนักมากไปหน่อย</p>"`
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    bmieva = `<p>สรุปผล "น้ำหนักเกินมากควรระวัง</p>"`
  } else {
    bmieva = `<p>สรุปผล "น้ำหนักเกินมาก-มากควรระวังอย่างสูง!</p>"`
  }
  eva.innerHTML = bmieva

}