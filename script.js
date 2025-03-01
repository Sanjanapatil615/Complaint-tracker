document.addEventListener("DOMContentLoaded", function () {
    const complaints = [
        {
            title: "Lack of Adequate Medical Facilities in PTL Village",
            description: "Lack of adequate healthcare facilities in PTL Village, highlighting the need for regular medical support and timely care.",
            source: "https://x.com/kupwarasentinel/status/1895345061866721487",
            fullDescription: "The recent medical checkup conducted by the Indian Army in PTL Village was aimed at addressing common health concerns such as hypertension, diabetes, colds, and general body pain. The initiative provided much-needed medical assistance to the villagers, especially benefiting the elderly and children who often lack access to timely healthcare. Free medicines and blood pressure checkups were distributed, ensuring immediate relief and early detection of potential health risks. Such efforts play a crucial role in fostering trust and strengthening the relationship between the army and the local community.However, while the initiative was commendable, some concerns have been raised regarding the long-term availability of healthcare services in the region. Many villagers rely on these occasional medical camps due to the absence of permanent healthcare facilities nearby. The event highlighted the ongoing need for better medical infrastructure, regular health checkups, and increased awareness about chronic diseases. While the Indian Army's involvement is appreciated, sustainable healthcare solutions, including permanent clinics and trained medical personnel, are essential to ensure the well-being of the community in the long run."
        },
        {
            title: "Illegal Immigrants in India",
            description: "Reports suggest a rise in illegal immigrants affecting local employment.",
            source: "https://x.com/ians_india/status/1895097621745909918",
            fullDescription: " The devastating fire incident in Surat has once again highlighted the importance of fire safety measures and emergency response preparedness. According to Fire Department Director Anil Chavda, a specialized team from Gandhinagar was deployed to assist in controlling the blaze, which is a standard protocol for major fire incidents. Such incidents emphasize the critical role of fire prevention strategies, including proper pressure management in firefighting systems. The swift intervention of the authorities helped contain the damage, but the incident raises concerns about the adequacy of fire safety infrastructure in densely populated areas. Despite the efforts of the fire department, questions remain about whether enough preventive measures were in place to avoid such a large-scale disaster. Many buildings, especially commercial and industrial establishments, often overlook fire safety compliance, which can lead to catastrophic consequences. The incident underscores the urgent need for stricter regulations, regular fire safety drills, and improved awareness among residents and business owners. While the deployment of emergency teams is crucial in damage control, a proactive approach focusing on prevention, enforcement of fire safety norms, and upgrading firefighting infrastructure is essential to prevent future tragedies."
        },
        {
            title: "Pune Crime Update",
            description: "A Pune court remanded a rape accused to 12 days of police custody.",
            source: "https://timesofindia.indiatimes.com/india/pune-bus-rape-accused-dattatray-ramdas-gade-sent-to-12-day-police-custody/articleshow/118631002.cms",
            fullDescription: "The Pune Swargate rape case has sent shockwaves across the city, highlighting the urgent need for stringent security measures and swift justice for victims of sexual violence. According to reports, a Pune court on Friday remanded the accused, Dattatray, into judicial custody as investigations into the horrific crime continue. The incident, which took place in the Swargate area, has sparked outrage among citizens, prompting renewed discussions on women’s safety, law enforcement efficiency, and the role of the judicial system in ensuring swift and exemplary punishment for such heinous acts. Authorities are under pressure to conduct a thorough and impartial probe, ensuring that the victim receives justice without unnecessary delays.The case has once again exposed the vulnerabilities faced by women in urban spaces, raising questions about the effectiveness of law enforcement and the need for stricter preventive measures. Public anger is growing, with demands for better policing, improved street surveillance, and harsher penalties for perpetrators of sexual crimes. Social activists and legal experts emphasize the importance of fast-track courts to expedite cases of sexual violence and set a strong precedent. As the investigation unfolds, the focus remains on delivering justice to the victim while ensuring that such incidents are prevented through stronger policies, increased security, and widespread awareness campaigns about women's safety."
        },
        {
            title: "Urgent Water Crisis Threatens Displaced Communities",
            description: "Doctors Without Borders warns that many IDPs rely on contaminated water sources, heightening the risk of cholera and acute watery diarrhea, urging immediate humanitarian intervention.",
            source: "https://x.com/Abeba1Abeba/status/1895527904223904091",
            fullDescription: "The humanitarian crisis in Tigray continues to escalate as internally displaced persons (IDPs) struggle with dire living conditions, particularly the lack of access to clean and safe drinking water. Doctors Without Borders has raised serious concerns over the reliance of many IDPs on contaminated water sources, which has significantly increased the risk of cholera and acute watery diarrhea. These waterborne diseases pose a severe threat to an already vulnerable population, exacerbating the health crisis in displacement camps. The lack of adequate sanitation facilities, medical care, and clean water underscores the urgent need for immediate international intervention to prevent further outbreaks and fatalities. Humanitarian organizations are calling for coordinated efforts to provide safe water sources, medical aid, and long-term solutions for the displaced population in Tigray.Prominent international organizations, including UN Human Rights, Amnesty International, UNICEF, Save the Children, and the European External Action Service, have been urged to take immediate action to alleviate the suffering of Tigrayans. The hashtags #EndTigraySuffering and #ReturnTegaruIDPs reflect the growing plea for justice and rehabilitation for displaced families forced from their homes due to the ongoing conflict. Despite repeated calls for aid, the crisis remains largely unaddressed, leaving thousands of displaced people in desperate conditions. Human rights activists stress that without urgent global attention and intervention, the health and well-being of the affected population will continue to deteriorate, leading to devastating consequences. The international community must step up its efforts to provide sustainable solutions, ensuring that displaced Tigrayans can access fundamental human rights, including clean water, healthcare, and safe resettlement."
        },
        {
            title: "HYDRAA clears blocked roads and secures govt. land",
            description: "HYDRAA removes road blockages and reclaims encroached government land, ensuring improved accessibility and legal land use.",
            source: "https://www.thehindu.com/news/national/telangana/hydraa-clears-blocked-roads-and-secures-govt-land/article69184478.ece",
            fullDescription: "The Hyderabad Disaster Response and Asset Protection Agency (HYDRAA) took decisive action on Wednesday following numerous complaints regarding road blockages caused by unauthorized construction. In a coordinated drive, the agency dismantled several illegally constructed compound walls that had been obstructing public access, ensuring the free movement of residents in multiple localities. One of the most significant actions took place in the Kapra area, where a compound wall enclosing the NRI Colony was removed, thereby reopening a crucial road for residents of Senior Citizen Colony, Shanti Ville, Lakshmi Villas, Gourinatha Puram, and Vampuguda. The removal of these obstructions has greatly improved connectivity between the affected areas, allowing smoother vehicular and pedestrian movement. Similarly, in Rallaguda village of Shamshabad mandal, HYDRAA officials demolished an illegal compound wall that had been blocking an important access route to the Outer Ring Road, facilitating better connectivity for commuters.Additionally, in Sainikpuri’s Army Officers Colony, a 50-meter-long wall that had been restricting access was also dismantled, allowing residents to move freely. In another significant operation, HYDRAA secured a 1,200-square-yard government land parcel in the Defence Colony that was originally meant for public utilities. Complaints from residents had revealed that the land had been illegally divided into plots and sold off. Upon investigation, officials confirmed that five plots had been demarcated, with some already sold. HYDRAA promptly removed the encroachments and installed signboards designating the land as belonging to the Greater Hyderabad Municipal Corporation (GHMC). This move has reassured local residents and reinforced the importance of protecting public spaces from unauthorized land grabs. The swift and effective intervention by HYDRAA highlights the agency’s commitment to ensuring accessibility, preserving public property, and upholding urban development regulations across Hyderabad."
        }
    ];

    const complaintsList = document.getElementById("complaints-list");

    if (complaintsList) {
        complaints.forEach((complaint, index) => {
            const complaintCard = document.createElement("div");
            complaintCard.classList.add("complaint-card");

            const detailsPageURL = `complaint-details.html?title=${encodeURIComponent(complaint.title)}&description=${encodeURIComponent(complaint.description)}&source=${encodeURIComponent(complaint.source)}&fullDescription=${encodeURIComponent(complaint.fullDescription)}`;
            const sharePageURL = `share.html?title=${encodeURIComponent(complaint.title)}&description=${encodeURIComponent(complaint.description)}&source=${encodeURIComponent(complaint.source)}`;

            complaintCard.innerHTML = `
                <h3><a href="${detailsPageURL}" class="complaint-title">${complaint.title}</a></h3>
                <p>${complaint.description}</p>
                <p><strong>Source:</strong> <a href="${complaint.source}" target="_blank">${complaint.source}</a></p>
                <button class="share-btn" onclick="shareComplaint('${sharePageURL}')">📢 Share Complaint</button>
            `;

            complaintsList.appendChild(complaintCard);
        });
    }

    const sharedComplaintDiv = document.getElementById("shared-complaint");
    if (sharedComplaintDiv) {
        const urlParams = new URLSearchParams(window.location.search);
        const title = decodeURIComponent(urlParams.get("title") || "");
        const description = decodeURIComponent(urlParams.get("description") || "");
        const source = decodeURIComponent(urlParams.get("source") || "");

        if (title && description && source) {
            sharedComplaintDiv.innerHTML = `
                <div class="complaint-card">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p><strong>Source:</strong> <a href="${source}" target="_blank">${source}</a></p>
                    <button class="copy-btn" onclick="copyShareLink(window.location.href)">📋 Copy Link</button>
                </div>
            `;
        } else {
            sharedComplaintDiv.innerHTML = `<p>No complaint details found.</p>`;
        }
    }
});

function shareComplaint(sharePageURL) {
    if (navigator.share) {
        navigator.share({
            title: "Complaint Details",
            text: "Check out this complaint details here:",
            url: sharePageURL
        }).catch(err => console.error("Error sharing:", err));
    } else {
        copyShareLink(sharePageURL);
    }
}

function copyShareLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => console.error("Failed to copy:", err));
}
