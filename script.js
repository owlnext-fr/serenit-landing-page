// =========================================================
// Sérén'IT — JavaScript principal
// =========================================================
// Vanilla JS, pas de framework, pas de build.
// Pour l'instant : juste un petit test pour vérifier que le JS
// est bien chargé et que le déploiement GitHub Pages fonctionne.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Sérén'IT — JS chargé. CI/déploiement OK.");

  const status = document.getElementById("ci-status");
  if (status) {
    status.textContent = "✅ JavaScript chargé — le déploiement fonctionne.";
  }
});
