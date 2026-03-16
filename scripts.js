const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => document.body.classList.toggle('dark'));

// Mini dashboard Chart.js
const ctx = document.getElementById('chart1').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Fev','Mar','Abr','Mai','Jun'],
    datasets:[{
      label:'Receita',
      data:[1200,1500,1400,1700,1600,1800],
      backgroundColor:'#0066cc'
    }]
  },
  options:{responsive:true,plugins:{legend:{display:false}}}
});

// Parallax effect
window.addEventListener('scroll', function(){
  const scroll = window.pageYOffset;
  document.querySelector('.layer-back').style.transform = `translateY(${scroll*0.2}px)`;
  document.querySelector('.layer-mid').style.transform = `translateY(${scroll*0.4}px)`;
  document.querySelector('.layer-front').style.transform = `translateY(${scroll*0.6}px)`;
});

// EmailJS Contact Form
emailjs.init("YOUR_USER_ID");
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',this)
    .then(()=> alert('Mensagem enviada!'))
    .catch(()=> alert('Erro ao enviar, tente novamente.'));
});
