document.querySelector('#app').innerHTML = `
<div style="
background:#0f172a;
color:white;
min-height:100vh;
padding:30px;
font-family:Arial,sans-serif;
">

<h1>ESP Security Operations Center v4</h1>

<h2>Panel Administrativo</h2>

<hr>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
margin-top:20px;
">

<div style="background:#1e293b;padding:20px;border-radius:10px;">
<h3>Guardias Activos</h3>
<p>0</p>
</div>

<div style="background:#1e293b;padding:20px;border-radius:10px;">
<h3>Servicios</h3>
<p>0</p>
</div>

<div style="background:#1e293b;padding:20px;border-radius:10px;">
<h3>Incidencias</h3>
<p>0</p>
</div>

</div>

</div>
`;