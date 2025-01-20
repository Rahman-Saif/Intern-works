// JavaScript to handle button clicks, slider toggling, and smooth scrolling
 const sliders = Array.from(document.querySelectorAll('.slider'));
  const sliderNav = document.querySelector('.slider-nav');
  const loanSelect = document.getElementById('loanSelect');
  let currentSliderIndex = 0;

  function showSlider(sliderId) {
    // Hide all sliders
    sliders.forEach(slider => {
      slider.classList.remove('show');
      slider.style.display = 'none';
    });

    // Show the selected slider
    const slider = document.getElementById(sliderId);
    slider.style.display = 'block';
    setTimeout(() => slider.classList.add('show'), 10);

    // Update current slider index
    currentSliderIndex = sliders.indexOf(slider);
    sliderNav.classList.add('active');

    // Smooth scroll to the slider
    slider.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Handle dropdown change
  loanSelect.addEventListener('change', (e) => {
    if (e.target.value) {
      showSlider(e.target.value);
      
      // Update button styles
      document.querySelectorAll('.loan-btn span.title').forEach(span => 
        span.style.backgroundColor = 'rgba(2, 48, 32, 0.9)');
      
      const relatedButton = document.querySelector(`[data-slider="${e.target.value}"]`);
      if (relatedButton) {
        relatedButton.querySelector('span.title').style.backgroundColor = 'rgba(2, 48, 32, 1)';
      }
    }
  });

  // Handle button clicks
  document.querySelectorAll('.loan-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Reset all buttons to original style
      document.querySelectorAll('.loan-btn span.title').forEach(span => 
        span.style.backgroundColor = 'rgba(2, 48, 32, 0.9)');

      // Change clicked button style
      button.querySelector('span.title').style.backgroundColor = 'rgba(2, 48, 32, 1)';

      // Show slider and scroll
      const sliderId = button.getAttribute('data-slider');
      showSlider(sliderId);
      
      // Update dropdown to match selection
      loanSelect.value = sliderId;
    });
  });

  // Handle navigation buttons
  document.getElementById('prev-slider').addEventListener('click', () => {
    const prevIndex = (currentSliderIndex - 1 + sliders.length) % sliders.length;
    const prevSliderId = sliders[prevIndex].id;
    showSlider(prevSliderId);
    loanSelect.value = prevSliderId;
  });

  document.getElementById('next-slider').addEventListener('click', () => {
    const nextIndex = (currentSliderIndex + 1) % sliders.length;
    const nextSliderId = sliders[nextIndex].id;
    showSlider(nextSliderId);
    loanSelect.value = nextSliderId;
  });

  const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".calculate-btn");
const pdfBtn = document.querySelector(".pdf-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;
let global_emi = NaN;
let global_totalAmount = NaN;
let global_interestPayable = NaN;

let myChart;
var props;

var selectionInputField = document.getElementById("loan_type")

selectionInputField.addEventListener("change", function(){
    if(selectionInputField.value == "Car Loan"){
        console.log("1");
        interestRateInput.value = 1;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Custom"){
        console.log("C");
        interestRateInput.removeAttribute('readonly')
    }
    else if(selectionInputField.value == "Personal Loan"){
        console.log("2");
        interestRateInput.value = 2;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Doctor's Loan"){
        console.log("3");
        interestRateInput.value = 3;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Car Loan for Defence Personel"){
        console.log("4");
        interestRateInput.value = 4;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Any Purpose"){
        console.log("5");
        interestRateInput.value = 5;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Marriage Loan"){
        console.log("6");
        interestRateInput.value = 6;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "House Building Loan For Govt. Employee"){
        console.log("7");
        interestRateInput.value = 7;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Apon Nibash Loan"){
        console.log("8");
        interestRateInput.value = 8;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Loan Against Salary"){
        console.log("9");
        interestRateInput.value = 9;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Army Officer Housing Loan"){
        console.log("10");
        interestRateInput.value = 10;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Car Loan for Defence Personel"){
        console.log("11");
        interestRateInput.value = 11;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Defence Personel Special Loan - 1"){
        console.log("12");
        interestRateInput.value = 12;
        interestRateInput.setAttribute('readonly', true);
    }
    else if(selectionInputField.value == "Defence Personel Special Loan - 2"){
        console.log("13");
        interestRateInput.value = 13;
        interestRateInput.setAttribute('readonly', true);
    }
});

const checkValues = () => {
   let loanAmountValue = loanAmountInput.value;
   let interestRateValue = interestRateInput.value;
   let loanTenureValue = loanTenureInput.value;

   let regexNumber = /^[0-9]+$/;

   if(!loanAmountValue.match(regexNumber)){
    loanAmountInput.value = "10000";
   }

   if(!loanTenureValue.match(regexNumber)){
    loanTenureInput.value = "12";
   }

   let regexDecimalNumber = /^(\d*\.)?\d+$/;

   if(!interestRateValue.match(regexDecimalNumber)){
    interestRateInput.value = "7.5";
   }
}

const displayChart = (totalInterestPayableValue, loanAmountValue) =>{
    const ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Total Interest', 'Principal Loan Amount'],
      datasets: [{
        data: [totalInterestPayableValue, loanAmountValue],
        backgroundColor: ["#006132", "#e63946"],
        borderWidth: 0,
      }]
    },
  });
};

const updateChart = (totalInterestPayableValue, loanAmountValue) =>{
    myChart.data.datasets[0].data[0] = totalInterestPayableValue;
    myChart.data.datasets[0].data[1] = loanAmountValue;
    myChart.update();
};

const calculateEMI = () => {

    checkValues();
    refreshtInputValues();
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure)/ (Math.pow(1 + interest, loanTenure) - 1));

    return emi;
};

const updateData = (emi) => {     
    global_emi = emi;
    loanEMIValue.innerHTML = Math.round(emi); 

    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;
    global_totalAmount = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterestPayable;
    global_interestPayable = totalInterestPayable;

    props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "/imgs/trust_logo.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 100.33, //aspect ratio = width/height
            height: 50.66,
            margin: {
                top: -15, //negative or positive num, from the current position
                left: -15 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Trust Bank LTD.",
            address: "Albania, Tirane ish-Dogana, Durres 2001",
            phone: "(+355) 069 11 11 111",
            email: "email@example.com",
            email_1: "info@example.al",
            website: "www.example.al",
        },
        contact: {
            label: "Loan EMI Report for:",
            name: selectionInputField.value,
            address: " ",
            phone: " ",
            // email: "client@website.al",
            // otherInfo: "www.website.al",
        },
        invoice: {
            // label: "Invoice #: ",
            // num: 1,
            // invDate: "Payment Date: 01/01/2021 18:12",
            // invGenDate: "Invoice Date: 02/02/2021 10:17",
            margin: {
                top: -30
            },
            headerBorder: false,
            tableBodyBorder: false,
            header: [
            {
                title: "#", 
                style: { 
                width: 20
                }
            }, 
            { 
                title: "Title",
                style: {
                width: 50
                }
            }, 
            { 
                title: "Description",
                style: {
                width: 90
                } 
            }, 
            // { title: "Price"},
            // { title: "Quantity"},
            { title: "Quantity",
                style: {
                    width: 30
                }
            }
            // { title: "Total"}
            ],
            table: [
                [1, "Amount", "The total amount of loan that has been considered", loanAmount],
                [2, "Rate", "Rate of Interest", interestRate],
                [3, "Tenure", "Loan repaying time limit (in months)", loanTenureInput.value],
                [4, "Loan EMI", "The amount to be paid per installment", parseInt(global_emi)], // First row
                [5, "Total Interest Payable", "Total amount to be paid as interest", global_interestPayable], // Second row
                [6, "Total Amount", "Total amount to be paid", global_totalAmount], // Third row
                ],
            additionalRows: [{
                col1: 'Total:',
                col2: '145,250.50',
                col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            {
                col1: 'VAT:',
                col2: '20',
                col3: '%',
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'SubTotal:',
                col2: '116,199.90',
                col3: 'ALL',
                style: {
                    fontSize: 10 //optional, default 12
                }
            }],
            invDescLabel: "Invoice Note",
            invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    if(myChart){
        updateChart(totalInterestPayable, loanAmount);
    } else {
        displayChart(totalInterestPayable, loanAmount);
    }
};

const refreshtInputValues = () => {
    loanAmount = parseFloat(loanAmountInput.value);
    interestRate = parseFloat(interestRateInput.value);
    loanTenure = parseFloat(loanTenureInput.value);
    interest = interestRate / 12 / 100;
};

const init = () => {
    let emi = calculateEMI();
    updateData(emi);
};

init();

calculateBtn.addEventListener("click", () => {
    init();
});

function generatePDF(){
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log("Object Created: ", pdfObject);
}

pdfBtn.addEventListener("click", () => {
    init();
    generatePDF();
});
