document.addEventListener("DOMContentLoaded", function() {
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
                    
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(link);
                    container.appendChild(card);
                });
            } else {
                container.innerHTML = "<p>Geen repositories gevonden.</p>";
            }
        });
