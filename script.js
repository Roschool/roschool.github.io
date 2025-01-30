        document.addEventListener("DOMContentLoaded", function() {
            const params = new URLSearchParams(window.location.search);
            const splashScreen = document.getElementById("splash-screen");
            if (params.get("splash") === "true") {
                splashScreen.style.display = "flex";
                setTimeout(() => {
                    splashScreen.style.opacity = "0";
                    setTimeout(() => {
                        splashScreen.style.display = "none";
                        window.history.replaceState({}, document.title, window.location.pathname);
                    }, 500);
                }, 2000);
            } else {
                splashScreen.style.display = "none";
            }

            const container = document.getElementById("repo-container");
            if (typeof repos !== "undefined" && Array.isArray(repos)) {
                repos.forEach(repo => {
                    const card = document.createElement("div");
                    card.className = "repo-card";
                    
                    const title = document.createElement("div");
                    title.className = "repo-title";
                    title.textContent = repo.name;
                    
                    const description = document.createElement("div");
                    description.className = "repo-description";
                    description.textContent = repo.description || "Geen beschrijving beschikbaar.";
                    
                    const link = document.createElement("a");
                    link.className = "repo-link";
                    link.href = repo.url;
                    link.textContent = "Lees meer →";
                    link.target = "_blank";
                    link.onclick = function(event) {
                        event.preventDefault();
                        document.getElementById("loading-screen").style.display = "flex";
                        setTimeout(() => {
                            window.open(repo.url, "_blank");
                            document.getElementById("loading-screen").style.display = "none";
                        }, 1000);
                    };
                    
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(link);
                    container.appendChild(card);
                });
            } else {
                container.innerHTML = "<p>Geen repositories gevonden.</p>";
            }
        });
