document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a');
    const btnTopo = document.getElementById('btnTopo');

    // Scroll suave para navegação
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Exibir botão Voltar ao Topo quando rolar a página para baixo
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });

    // Voltar ao topo ao clicar no botão
    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
