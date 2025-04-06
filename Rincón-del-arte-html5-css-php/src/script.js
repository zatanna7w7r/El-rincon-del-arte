document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.createElement('button');
    sidebarToggle.innerHTML = '☰';
    sidebarToggle.classList.add('sidebar-toggle');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('minimized');
    });

    sidebar.insertBefore(sidebarToggle, sidebar.firstChild);
});

<style>
.sidebar-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 100;
}

.sidebar.minimized {
    width: 60px;
}

.sidebar.minimized nav ul li a span {
    display: none;
}

.sidebar.minimized nav ul li a {
    justify-content: center;
}
</style>

// DONE