const API = "http://localhost:3000/api";

async function login() {
  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: user.value,
      password: pass.value
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  window.location = "dashboard.html";
}

async function loadDashboard() {
  const students = await fetch(API + "/students").then(r=>r.json());

  const ctx = document.getElementById("chart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: students.map(s=>s.name),
      datasets: [{
        label: "Marks",
        data: students.map(s=>s.marks)
      }]
    }
  });

  const ann = await fetch(API + "/announcements").then(r=>r.json());
  document.getElementById("ann").innerHTML =
    ann.map(a=>`<li>${a.text}</li>`).join("");
}

if(window.location.pathname.includes("dashboard"))
  loadDashboard();
